const template = require('babel-template')

const insertedRestores = [];
const insertedUpdates = [];
const insertedWrapper = [];

function getVars(path) {
  const bindings = path.scope.parent.bindings;
  return Object.keys(bindings).filter(key => bindings[key].kind !== 'local');
}

function buildStateList(vars, t) {
  return vars.map(v => t.objectProperty(t.identifier(v), t.identifier(v), false, true));
}

function processCall(path, functionName, t) {
  const blockPath = path.findParent(path => path.parentPath.node.type === 'BlockStatement' && path.parentPath.parent.type === 'FunctionExpression');
  const a2gPath = path.findParent(path => path.node.callee && path.node.callee.name === '_asyncToGenerator');
  const functionPath = a2gPath.findParent(path => path.node.callee && path.node.callee.type === 'FunctionExpression');
  const parentFunctionName = functionPath.parent.id.name;
  const vars = getVars(blockPath).concat(getVars(blockPath.parentPath));
  if (!insertedUpdates.includes(path.node.start)) {
    path.node.arguments.push(t.callExpression(t.identifier('serverlessCheckpointer.buildState'), [
      t.identifier('serverlessCheckpointerState'),
      t.stringLiteral(parentFunctionName),
      t.objectExpression(buildStateList(vars, t))
    ]));
    insertedUpdates.push(path.node.start)
  }
  if (!insertedRestores.includes(blockPath.node.start)) {
    const contextName = getVars(blockPath)[0];
    const stateRestorer = template(`
            if (serverlessCheckpointer.continuing(serverlessCheckpointerState)) {
              (STATE = serverlessCheckpointer.restoreState(CONTEXT, '${contextName}', '${parentFunctionName}', serverlessCheckpointerState));
            }
        `,)( {
      STATE: t.objectPattern(buildStateList(vars, t)),
      CONTEXT: t.identifier(contextName)
    });
    blockPath.insertBefore(stateRestorer);
    insertedRestores.push(blockPath.node.start);
  }
  return functionPath;
}

module.exports = function ({ types: t }) {
  return {
    visitor: {
      CallExpression(path, state) {
        if (path.node.callee.name !== '$checkpoint' || path.parentPath.parent.type !== 'SwitchCase') {
          return;
        }
        path.node.callee.name = 'serverlessCheckpointer.checkpoint';
        const functionPath = processCall(path, '$checkpoint', t);
        let functionName = functionPath.parent.id.name;
        const topPath = functionPath.findParent(path => path.node.type === 'Program');
        let done = false;
        while (!done) {
          done = true;
          topPath.traverse({
            CallExpression(path, state) {
              if (path.node.callee.name !== functionName || path.parentPath.parent.type !== 'SwitchCase') {
                return;
              }
              const functionPath = processCall(path, functionName, t);
              functionName = functionPath.parent.id.name;
              done = false;
            }
          });
        }
        topPath.traverse({
          AssignmentExpression(path, state) {
            if (path.node.right && path.node.right.name === functionName) {
              if (!insertedWrapper.includes(path.node.start)) {
                path.node.right = t.callExpression(t.identifier('serverlessCheckpointer.wrapper'), [path.node.right]);
                insertedWrapper.push(path.node.start);
              }
            }
          }
        });
      },
      Program(path, state) {
        path.node.body.unshift(
          template("const SC = require('serverless-cloud-elements-runtime')")({SC: t.identifier('serverlessCheckpointer')}));
      },
      MemberExpression(path, state) {
        if (path.node.object.name !== 'regeneratorRuntime' || path.node.property.name !== 'wrap') {
          return;
        }
        path.parentPath.parentPath.parentPath.node.body.unshift(
          template("const serverlessCheckpointerState = serverlessCheckpointer.getState(ARGS)")({ARGS: t.identifier('arguments')})
        )
      }
    }
  };
};
