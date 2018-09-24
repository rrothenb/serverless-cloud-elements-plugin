"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var request = require("superagent");
var platformSDKMethodParameters = /** @class */ (function () {
    function platformSDKMethodParameters(superThis, method, path) {
        this.superThis = superThis;
        this.method = method;
        this.path = path;
        this.queryParameters = {};
        this.headers = {};
        this.form = {};
    }
    return platformSDKMethodParameters;
}());
var getAccountsParameters = /** @class */ (function (_super) {
    __extends(getAccountsParameters, _super);
    function getAccountsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getAccountsParameters.prototype.where = function (where) {
        this.queryParameters['where'] = where;
        return this;
    };
    getAccountsParameters.prototype.offset = function (offset) {
        this.queryParameters['offset'] = offset;
        return this;
    };
    getAccountsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getAccountsParameters.prototype.includeInactive = function (includeInactive) {
        this.queryParameters['includeInactive'] = includeInactive;
        return this;
    };
    getAccountsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getAccountsParameters;
}(platformSDKMethodParameters));
;
var createAccountParameters = /** @class */ (function (_super) {
    __extends(createAccountParameters, _super);
    function createAccountParameters(superThis, method, path, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this._body = body;
        return _this;
    }
    createAccountParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createAccountParameters;
}(platformSDKMethodParameters));
;
var getAccountsInstancesParameters = /** @class */ (function (_super) {
    __extends(getAccountsInstancesParameters, _super);
    function getAccountsInstancesParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getAccountsInstancesParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getAccountsInstancesParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getAccountsInstancesParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getAccountsInstancesParameters;
}(platformSDKMethodParameters));
;
var deleteAccountsObjectsDefinitionsParameters = /** @class */ (function (_super) {
    __extends(deleteAccountsObjectsDefinitionsParameters, _super);
    function deleteAccountsObjectsDefinitionsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    deleteAccountsObjectsDefinitionsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteAccountsObjectsDefinitionsParameters;
}(platformSDKMethodParameters));
;
var getAccountsObjectsDefinitionsParameters = /** @class */ (function (_super) {
    __extends(getAccountsObjectsDefinitionsParameters, _super);
    function getAccountsObjectsDefinitionsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getAccountsObjectsDefinitionsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getAccountsObjectsDefinitionsParameters;
}(platformSDKMethodParameters));
;
var createAccountObjectDefinitionParameters = /** @class */ (function (_super) {
    __extends(createAccountObjectDefinitionParameters, _super);
    function createAccountObjectDefinitionParameters(superThis, method, path, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this._body = body;
        return _this;
    }
    createAccountObjectDefinitionParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createAccountObjectDefinitionParameters;
}(platformSDKMethodParameters));
;
var deleteAccountsObjectsObjectNameDefinitionsParameters = /** @class */ (function (_super) {
    __extends(deleteAccountsObjectsObjectNameDefinitionsParameters, _super);
    function deleteAccountsObjectsObjectNameDefinitionsParameters(superThis, method, path, objectName) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        return _this;
    }
    deleteAccountsObjectsObjectNameDefinitionsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteAccountsObjectsObjectNameDefinitionsParameters;
}(platformSDKMethodParameters));
;
var getAccountsObjectsObjectNameDefinitionsParameters = /** @class */ (function (_super) {
    __extends(getAccountsObjectsObjectNameDefinitionsParameters, _super);
    function getAccountsObjectsObjectNameDefinitionsParameters(superThis, method, path, objectName) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        return _this;
    }
    getAccountsObjectsObjectNameDefinitionsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getAccountsObjectsObjectNameDefinitionsParameters;
}(platformSDKMethodParameters));
;
var createAccountObjectObjectNameDefinitionParameters = /** @class */ (function (_super) {
    __extends(createAccountObjectObjectNameDefinitionParameters, _super);
    function createAccountObjectObjectNameDefinitionParameters(superThis, method, path, objectName, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this._body = body;
        return _this;
    }
    createAccountObjectObjectNameDefinitionParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createAccountObjectObjectNameDefinitionParameters;
}(platformSDKMethodParameters));
;
var replaceAccountsObjectsObjectNameDefinitionsParameters = /** @class */ (function (_super) {
    __extends(replaceAccountsObjectsObjectNameDefinitionsParameters, _super);
    function replaceAccountsObjectsObjectNameDefinitionsParameters(superThis, method, path, objectName, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this._body = body;
        return _this;
    }
    replaceAccountsObjectsObjectNameDefinitionsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceAccountsObjectsObjectNameDefinitionsParameters;
}(platformSDKMethodParameters));
;
var getAccountsFormulasInstancesParameters = /** @class */ (function (_super) {
    __extends(getAccountsFormulasInstancesParameters, _super);
    function getAccountsFormulasInstancesParameters(superThis, method, path, accountId, formulaId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{accountId}', "" + accountId);
        _this.path = _this.path.replace('{formulaId}', "" + formulaId);
        return _this;
    }
    getAccountsFormulasInstancesParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getAccountsFormulasInstancesParameters;
}(platformSDKMethodParameters));
;
var deleteAccountByIdParameters = /** @class */ (function (_super) {
    __extends(deleteAccountByIdParameters, _super);
    function deleteAccountByIdParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    deleteAccountByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteAccountByIdParameters;
}(platformSDKMethodParameters));
;
var getAccountByIdParameters = /** @class */ (function (_super) {
    __extends(getAccountByIdParameters, _super);
    function getAccountByIdParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getAccountByIdParameters.prototype.includeInactive = function (includeInactive) {
        this.queryParameters['includeInactive'] = includeInactive;
        return this;
    };
    getAccountByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getAccountByIdParameters;
}(platformSDKMethodParameters));
;
var updateAccountByIdParameters = /** @class */ (function (_super) {
    __extends(updateAccountByIdParameters, _super);
    function updateAccountByIdParameters(superThis, method, path, id, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = body;
        return _this;
    }
    updateAccountByIdParameters.prototype.permanent = function (permanent) {
        this.queryParameters['permanent'] = permanent;
        return this;
    };
    updateAccountByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return updateAccountByIdParameters;
}(platformSDKMethodParameters));
;
var replaceAccountByIdParameters = /** @class */ (function (_super) {
    __extends(replaceAccountByIdParameters, _super);
    function replaceAccountByIdParameters(superThis, method, path, id, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = body;
        return _this;
    }
    replaceAccountByIdParameters.prototype.permanent = function (permanent) {
        this.queryParameters['permanent'] = permanent;
        return this;
    };
    replaceAccountByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceAccountByIdParameters;
}(platformSDKMethodParameters));
;
var deleteAccountsElementsTransformationsParameters = /** @class */ (function (_super) {
    __extends(deleteAccountsElementsTransformationsParameters, _super);
    function deleteAccountsElementsTransformationsParameters(superThis, method, path, id, keyOrId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        return _this;
    }
    deleteAccountsElementsTransformationsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteAccountsElementsTransformationsParameters;
}(platformSDKMethodParameters));
;
var getAccountsElementsTransformationsParameters = /** @class */ (function (_super) {
    __extends(getAccountsElementsTransformationsParameters, _super);
    function getAccountsElementsTransformationsParameters(superThis, method, path, id, keyOrId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        return _this;
    }
    getAccountsElementsTransformationsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getAccountsElementsTransformationsParameters;
}(platformSDKMethodParameters));
;
var deleteAccountsElementsTransformationByObjectNameParameters = /** @class */ (function (_super) {
    __extends(deleteAccountsElementsTransformationByObjectNameParameters, _super);
    function deleteAccountsElementsTransformationByObjectNameParameters(superThis, method, path, id, keyOrId, objectName) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        return _this;
    }
    deleteAccountsElementsTransformationByObjectNameParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteAccountsElementsTransformationByObjectNameParameters;
}(platformSDKMethodParameters));
;
var getAccountsElementsTransformationByObjectNameParameters = /** @class */ (function (_super) {
    __extends(getAccountsElementsTransformationByObjectNameParameters, _super);
    function getAccountsElementsTransformationByObjectNameParameters(superThis, method, path, id, keyOrId, objectName) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        return _this;
    }
    getAccountsElementsTransformationByObjectNameParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getAccountsElementsTransformationByObjectNameParameters;
}(platformSDKMethodParameters));
;
var createAccountElementTransformationByObjectNameParameters = /** @class */ (function (_super) {
    __extends(createAccountElementTransformationByObjectNameParameters, _super);
    function createAccountElementTransformationByObjectNameParameters(superThis, method, path, id, keyOrId, objectName, transformation) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this._body = transformation;
        return _this;
    }
    createAccountElementTransformationByObjectNameParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createAccountElementTransformationByObjectNameParameters;
}(platformSDKMethodParameters));
;
var replaceAccountsElementsTransformationByObjectNameParameters = /** @class */ (function (_super) {
    __extends(replaceAccountsElementsTransformationByObjectNameParameters, _super);
    function replaceAccountsElementsTransformationByObjectNameParameters(superThis, method, path, id, keyOrId, objectName, transformation) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this._body = transformation;
        return _this;
    }
    replaceAccountsElementsTransformationByObjectNameParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceAccountsElementsTransformationByObjectNameParameters;
}(platformSDKMethodParameters));
;
var getAccountsInstances2Parameters = /** @class */ (function (_super) {
    __extends(getAccountsInstances2Parameters, _super);
    function getAccountsInstances2Parameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getAccountsInstances2Parameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getAccountsInstances2Parameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getAccountsInstances2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getAccountsInstances2Parameters;
}(platformSDKMethodParameters));
;
var deleteAccountsObjectsDefinitions2Parameters = /** @class */ (function (_super) {
    __extends(deleteAccountsObjectsDefinitions2Parameters, _super);
    function deleteAccountsObjectsDefinitions2Parameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    deleteAccountsObjectsDefinitions2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteAccountsObjectsDefinitions2Parameters;
}(platformSDKMethodParameters));
;
var getAccountsObjectsDefinitions2Parameters = /** @class */ (function (_super) {
    __extends(getAccountsObjectsDefinitions2Parameters, _super);
    function getAccountsObjectsDefinitions2Parameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getAccountsObjectsDefinitions2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getAccountsObjectsDefinitions2Parameters;
}(platformSDKMethodParameters));
;
var createAccountObjectDefinition2Parameters = /** @class */ (function (_super) {
    __extends(createAccountObjectDefinition2Parameters, _super);
    function createAccountObjectDefinition2Parameters(superThis, method, path, id, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = body;
        return _this;
    }
    createAccountObjectDefinition2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createAccountObjectDefinition2Parameters;
}(platformSDKMethodParameters));
;
var deleteAccountsObjectsObjectNameDefinitions2Parameters = /** @class */ (function (_super) {
    __extends(deleteAccountsObjectsObjectNameDefinitions2Parameters, _super);
    function deleteAccountsObjectsObjectNameDefinitions2Parameters(superThis, method, path, id, objectName) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        return _this;
    }
    deleteAccountsObjectsObjectNameDefinitions2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteAccountsObjectsObjectNameDefinitions2Parameters;
}(platformSDKMethodParameters));
;
var getAccountsObjectsObjectNameDefinitions2Parameters = /** @class */ (function (_super) {
    __extends(getAccountsObjectsObjectNameDefinitions2Parameters, _super);
    function getAccountsObjectsObjectNameDefinitions2Parameters(superThis, method, path, id, objectName) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        return _this;
    }
    getAccountsObjectsObjectNameDefinitions2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getAccountsObjectsObjectNameDefinitions2Parameters;
}(platformSDKMethodParameters));
;
var createAccountObjectObjectNameDefinition2Parameters = /** @class */ (function (_super) {
    __extends(createAccountObjectObjectNameDefinition2Parameters, _super);
    function createAccountObjectObjectNameDefinition2Parameters(superThis, method, path, id, objectName, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this._body = body;
        return _this;
    }
    createAccountObjectObjectNameDefinition2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createAccountObjectObjectNameDefinition2Parameters;
}(platformSDKMethodParameters));
;
var replaceAccountsObjectsObjectNameDefinitions2Parameters = /** @class */ (function (_super) {
    __extends(replaceAccountsObjectsObjectNameDefinitions2Parameters, _super);
    function replaceAccountsObjectsObjectNameDefinitions2Parameters(superThis, method, path, id, objectName, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this._body = body;
        return _this;
    }
    replaceAccountsObjectsObjectNameDefinitions2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceAccountsObjectsObjectNameDefinitions2Parameters;
}(platformSDKMethodParameters));
;
var getAccountsUsersParameters = /** @class */ (function (_super) {
    __extends(getAccountsUsersParameters, _super);
    function getAccountsUsersParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getAccountsUsersParameters.prototype.where = function (where) {
        this.queryParameters['where'] = where;
        return this;
    };
    getAccountsUsersParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getAccountsUsersParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getAccountsUsersParameters.prototype.includeInactive = function (includeInactive) {
        this.queryParameters['includeInactive'] = includeInactive;
        return this;
    };
    getAccountsUsersParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getAccountsUsersParameters;
}(platformSDKMethodParameters));
;
var createAccountUserParameters = /** @class */ (function (_super) {
    __extends(createAccountUserParameters, _super);
    function createAccountUserParameters(superThis, method, path, id, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = body;
        return _this;
    }
    createAccountUserParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createAccountUserParameters;
}(platformSDKMethodParameters));
;
var getAccountsUserByEmailOrIdParameters = /** @class */ (function (_super) {
    __extends(getAccountsUserByEmailOrIdParameters, _super);
    function getAccountsUserByEmailOrIdParameters(superThis, method, path, id, emailOrId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{emailOrId}', "" + emailOrId);
        return _this;
    }
    getAccountsUserByEmailOrIdParameters.prototype.elementsUserPassword = function (elementsUserPassword) {
        this.headers['Elements-User-Password'] = elementsUserPassword;
        return this;
    };
    getAccountsUserByEmailOrIdParameters.prototype.includeInactive = function (includeInactive) {
        this.queryParameters['includeInactive'] = includeInactive;
        return this;
    };
    getAccountsUserByEmailOrIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getAccountsUserByEmailOrIdParameters;
}(platformSDKMethodParameters));
;
var updateAccountsUserByUserIdParameters = /** @class */ (function (_super) {
    __extends(updateAccountsUserByUserIdParameters, _super);
    function updateAccountsUserByUserIdParameters(superThis, method, path, id, userId, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{userId}', "" + userId);
        _this._body = body;
        return _this;
    }
    updateAccountsUserByUserIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return updateAccountsUserByUserIdParameters;
}(platformSDKMethodParameters));
;
var replaceAccountsUserByUserIdParameters = /** @class */ (function (_super) {
    __extends(replaceAccountsUserByUserIdParameters, _super);
    function replaceAccountsUserByUserIdParameters(superThis, method, path, id, userId, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{userId}', "" + userId);
        _this._body = body;
        return _this;
    }
    replaceAccountsUserByUserIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceAccountsUserByUserIdParameters;
}(platformSDKMethodParameters));
;
var deleteAccountsUserByUserIdParameters = /** @class */ (function (_super) {
    __extends(deleteAccountsUserByUserIdParameters, _super);
    function deleteAccountsUserByUserIdParameters(superThis, method, path, id, userId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{userId}', "" + userId);
        return _this;
    }
    deleteAccountsUserByUserIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteAccountsUserByUserIdParameters;
}(platformSDKMethodParameters));
;
var getAuditLogsParameters = /** @class */ (function (_super) {
    __extends(getAuditLogsParameters, _super);
    function getAuditLogsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getAuditLogsParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getAuditLogsParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getAuditLogsParameters.prototype.userId = function (userId) {
        this.queryParameters['userId'] = userId;
        return this;
    };
    getAuditLogsParameters.prototype.accountId = function (accountId) {
        this.queryParameters['accountId'] = accountId;
        return this;
    };
    getAuditLogsParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getAuditLogsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getAuditLogsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getAuditLogsParameters;
}(platformSDKMethodParameters));
;
var getAuditLogsAuthenticationParameters = /** @class */ (function (_super) {
    __extends(getAuditLogsAuthenticationParameters, _super);
    function getAuditLogsAuthenticationParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getAuditLogsAuthenticationParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getAuditLogsAuthenticationParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getAuditLogsAuthenticationParameters.prototype.userId = function (userId) {
        this.queryParameters['userId'] = userId;
        return this;
    };
    getAuditLogsAuthenticationParameters.prototype.accountId = function (accountId) {
        this.queryParameters['accountId'] = accountId;
        return this;
    };
    getAuditLogsAuthenticationParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getAuditLogsAuthenticationParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getAuditLogsAuthenticationParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getAuditLogsAuthenticationParameters;
}(platformSDKMethodParameters));
;
var getAuditLogsCommonResourcesParameters = /** @class */ (function (_super) {
    __extends(getAuditLogsCommonResourcesParameters, _super);
    function getAuditLogsCommonResourcesParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getAuditLogsCommonResourcesParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getAuditLogsCommonResourcesParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getAuditLogsCommonResourcesParameters.prototype.userId = function (userId) {
        this.queryParameters['userId'] = userId;
        return this;
    };
    getAuditLogsCommonResourcesParameters.prototype.accountId = function (accountId) {
        this.queryParameters['accountId'] = accountId;
        return this;
    };
    getAuditLogsCommonResourcesParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getAuditLogsCommonResourcesParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getAuditLogsCommonResourcesParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getAuditLogsCommonResourcesParameters;
}(platformSDKMethodParameters));
;
var getAuditLogsCommonResourceByCommonResourceNameParameters = /** @class */ (function (_super) {
    __extends(getAuditLogsCommonResourceByCommonResourceNameParameters, _super);
    function getAuditLogsCommonResourceByCommonResourceNameParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getAuditLogsCommonResourceByCommonResourceNameParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getAuditLogsCommonResourceByCommonResourceNameParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getAuditLogsCommonResourceByCommonResourceNameParameters.prototype.userId = function (userId) {
        this.queryParameters['userId'] = userId;
        return this;
    };
    getAuditLogsCommonResourceByCommonResourceNameParameters.prototype.accountId = function (accountId) {
        this.queryParameters['accountId'] = accountId;
        return this;
    };
    getAuditLogsCommonResourceByCommonResourceNameParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getAuditLogsCommonResourceByCommonResourceNameParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getAuditLogsCommonResourceByCommonResourceNameParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getAuditLogsCommonResourceByCommonResourceNameParameters;
}(platformSDKMethodParameters));
;
var getAuditLogsElementInstancesParameters = /** @class */ (function (_super) {
    __extends(getAuditLogsElementInstancesParameters, _super);
    function getAuditLogsElementInstancesParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getAuditLogsElementInstancesParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getAuditLogsElementInstancesParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getAuditLogsElementInstancesParameters.prototype.userId = function (userId) {
        this.queryParameters['userId'] = userId;
        return this;
    };
    getAuditLogsElementInstancesParameters.prototype.accountId = function (accountId) {
        this.queryParameters['accountId'] = accountId;
        return this;
    };
    getAuditLogsElementInstancesParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getAuditLogsElementInstancesParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getAuditLogsElementInstancesParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getAuditLogsElementInstancesParameters;
}(platformSDKMethodParameters));
;
var getAuditLogsElementInstanceByElementInstanceIdParameters = /** @class */ (function (_super) {
    __extends(getAuditLogsElementInstanceByElementInstanceIdParameters, _super);
    function getAuditLogsElementInstanceByElementInstanceIdParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getAuditLogsElementInstanceByElementInstanceIdParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getAuditLogsElementInstanceByElementInstanceIdParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getAuditLogsElementInstanceByElementInstanceIdParameters.prototype.userId = function (userId) {
        this.queryParameters['userId'] = userId;
        return this;
    };
    getAuditLogsElementInstanceByElementInstanceIdParameters.prototype.accountId = function (accountId) {
        this.queryParameters['accountId'] = accountId;
        return this;
    };
    getAuditLogsElementInstanceByElementInstanceIdParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getAuditLogsElementInstanceByElementInstanceIdParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getAuditLogsElementInstanceByElementInstanceIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getAuditLogsElementInstanceByElementInstanceIdParameters;
}(platformSDKMethodParameters));
;
var getAuditLogsElementsParameters = /** @class */ (function (_super) {
    __extends(getAuditLogsElementsParameters, _super);
    function getAuditLogsElementsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getAuditLogsElementsParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getAuditLogsElementsParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getAuditLogsElementsParameters.prototype.userId = function (userId) {
        this.queryParameters['userId'] = userId;
        return this;
    };
    getAuditLogsElementsParameters.prototype.accountId = function (accountId) {
        this.queryParameters['accountId'] = accountId;
        return this;
    };
    getAuditLogsElementsParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getAuditLogsElementsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getAuditLogsElementsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getAuditLogsElementsParameters;
}(platformSDKMethodParameters));
;
var getAuditLogsElementByElementIdParameters = /** @class */ (function (_super) {
    __extends(getAuditLogsElementByElementIdParameters, _super);
    function getAuditLogsElementByElementIdParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getAuditLogsElementByElementIdParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getAuditLogsElementByElementIdParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getAuditLogsElementByElementIdParameters.prototype.userId = function (userId) {
        this.queryParameters['userId'] = userId;
        return this;
    };
    getAuditLogsElementByElementIdParameters.prototype.accountId = function (accountId) {
        this.queryParameters['accountId'] = accountId;
        return this;
    };
    getAuditLogsElementByElementIdParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getAuditLogsElementByElementIdParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getAuditLogsElementByElementIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getAuditLogsElementByElementIdParameters;
}(platformSDKMethodParameters));
;
var getAuditLogsFormulaInstancesParameters = /** @class */ (function (_super) {
    __extends(getAuditLogsFormulaInstancesParameters, _super);
    function getAuditLogsFormulaInstancesParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getAuditLogsFormulaInstancesParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getAuditLogsFormulaInstancesParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getAuditLogsFormulaInstancesParameters.prototype.userId = function (userId) {
        this.queryParameters['userId'] = userId;
        return this;
    };
    getAuditLogsFormulaInstancesParameters.prototype.accountId = function (accountId) {
        this.queryParameters['accountId'] = accountId;
        return this;
    };
    getAuditLogsFormulaInstancesParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getAuditLogsFormulaInstancesParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getAuditLogsFormulaInstancesParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getAuditLogsFormulaInstancesParameters;
}(platformSDKMethodParameters));
;
var getAuditLogsFormulasParameters = /** @class */ (function (_super) {
    __extends(getAuditLogsFormulasParameters, _super);
    function getAuditLogsFormulasParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getAuditLogsFormulasParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getAuditLogsFormulasParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getAuditLogsFormulasParameters.prototype.userId = function (userId) {
        this.queryParameters['userId'] = userId;
        return this;
    };
    getAuditLogsFormulasParameters.prototype.accountId = function (accountId) {
        this.queryParameters['accountId'] = accountId;
        return this;
    };
    getAuditLogsFormulasParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getAuditLogsFormulasParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getAuditLogsFormulasParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getAuditLogsFormulasParameters;
}(platformSDKMethodParameters));
;
var getAuditLogsFormulaByEntityIdParameters = /** @class */ (function (_super) {
    __extends(getAuditLogsFormulaByEntityIdParameters, _super);
    function getAuditLogsFormulaByEntityIdParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getAuditLogsFormulaByEntityIdParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getAuditLogsFormulaByEntityIdParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getAuditLogsFormulaByEntityIdParameters.prototype.userId = function (userId) {
        this.queryParameters['userId'] = userId;
        return this;
    };
    getAuditLogsFormulaByEntityIdParameters.prototype.accountId = function (accountId) {
        this.queryParameters['accountId'] = accountId;
        return this;
    };
    getAuditLogsFormulaByEntityIdParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getAuditLogsFormulaByEntityIdParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getAuditLogsFormulaByEntityIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getAuditLogsFormulaByEntityIdParameters;
}(platformSDKMethodParameters));
;
var createAuthenticationPasswordParameters = /** @class */ (function (_super) {
    __extends(createAuthenticationPasswordParameters, _super);
    function createAuthenticationPasswordParameters(superThis, method, path, passwordReset) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this._body = passwordReset;
        return _this;
    }
    createAuthenticationPasswordParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createAuthenticationPasswordParameters;
}(platformSDKMethodParameters));
;
var createCustomerIdentityProviderParameters = /** @class */ (function (_super) {
    __extends(createCustomerIdentityProviderParameters, _super);
    function createCustomerIdentityProviderParameters(superThis, method, path, identityProvider) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this._body = identityProvider;
        return _this;
    }
    createCustomerIdentityProviderParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createCustomerIdentityProviderParameters;
}(platformSDKMethodParameters));
;
var getCustomersIdentityProvidersParameters = /** @class */ (function (_super) {
    __extends(getCustomersIdentityProvidersParameters, _super);
    function getCustomersIdentityProvidersParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getCustomersIdentityProvidersParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getCustomersIdentityProvidersParameters;
}(platformSDKMethodParameters));
;
var getCustomersIdentityProviderByIdParameters = /** @class */ (function (_super) {
    __extends(getCustomersIdentityProviderByIdParameters, _super);
    function getCustomersIdentityProviderByIdParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getCustomersIdentityProviderByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getCustomersIdentityProviderByIdParameters;
}(platformSDKMethodParameters));
;
var deleteCustomersIdentityProviderByIdParameters = /** @class */ (function (_super) {
    __extends(deleteCustomersIdentityProviderByIdParameters, _super);
    function deleteCustomersIdentityProviderByIdParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    deleteCustomersIdentityProviderByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteCustomersIdentityProviderByIdParameters;
}(platformSDKMethodParameters));
;
var getCustomersMeParameters = /** @class */ (function (_super) {
    __extends(getCustomersMeParameters, _super);
    function getCustomersMeParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getCustomersMeParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getCustomersMeParameters;
}(platformSDKMethodParameters));
;
var getCustomersOrganizationsParameters = /** @class */ (function (_super) {
    __extends(getCustomersOrganizationsParameters, _super);
    function getCustomersOrganizationsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getCustomersOrganizationsParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getCustomersOrganizationsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getCustomersOrganizationsParameters.prototype.where = function (where) {
        this.queryParameters['where'] = where;
        return this;
    };
    getCustomersOrganizationsParameters.prototype.includeInactive = function (includeInactive) {
        this.queryParameters['includeInactive'] = includeInactive;
        return this;
    };
    getCustomersOrganizationsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getCustomersOrganizationsParameters;
}(platformSDKMethodParameters));
;
var getCustomersOrganizationByIdParameters = /** @class */ (function (_super) {
    __extends(getCustomersOrganizationByIdParameters, _super);
    function getCustomersOrganizationByIdParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getCustomersOrganizationByIdParameters.prototype.includeInactive = function (includeInactive) {
        this.queryParameters['includeInactive'] = includeInactive;
        return this;
    };
    getCustomersOrganizationByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getCustomersOrganizationByIdParameters;
}(platformSDKMethodParameters));
;
var deleteCustomersOrganizationByIdParameters = /** @class */ (function (_super) {
    __extends(deleteCustomersOrganizationByIdParameters, _super);
    function deleteCustomersOrganizationByIdParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    deleteCustomersOrganizationByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteCustomersOrganizationByIdParameters;
}(platformSDKMethodParameters));
;
var createCustomerSignupParameters = /** @class */ (function (_super) {
    __extends(createCustomerSignupParameters, _super);
    function createCustomerSignupParameters(superThis, method, path, customerSignup) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this._body = customerSignup;
        return _this;
    }
    createCustomerSignupParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createCustomerSignupParameters;
}(platformSDKMethodParameters));
;
var createElementParameters = /** @class */ (function (_super) {
    __extends(createElementParameters, _super);
    function createElementParameters(superThis, method, path, element) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this._body = element;
        return _this;
    }
    createElementParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createElementParameters;
}(platformSDKMethodParameters));
;
var getElementsKeysParameters = /** @class */ (function (_super) {
    __extends(getElementsKeysParameters, _super);
    function getElementsKeysParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getElementsKeysParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getElementsKeysParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getElementsKeysParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getElementsKeysParameters;
}(platformSDKMethodParameters));
;
var getElementsDocsParameters = /** @class */ (function (_super) {
    __extends(getElementsDocsParameters, _super);
    function getElementsDocsParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getElementsDocsParameters.prototype.operationId = function (operationId) {
        this.queryParameters['operationId'] = operationId;
        return this;
    };
    getElementsDocsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getElementsDocsParameters;
}(platformSDKMethodParameters));
;
var getElementsMetadataParameters = /** @class */ (function (_super) {
    __extends(getElementsMetadataParameters, _super);
    function getElementsMetadataParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getElementsMetadataParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getElementsMetadataParameters;
}(platformSDKMethodParameters));
;
var deleteElementByKeyOrIdParameters = /** @class */ (function (_super) {
    __extends(deleteElementByKeyOrIdParameters, _super);
    function deleteElementByKeyOrIdParameters(superThis, method, path, keyOrId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        return _this;
    }
    deleteElementByKeyOrIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteElementByKeyOrIdParameters;
}(platformSDKMethodParameters));
;
var replaceElementByKeyOrIdParameters = /** @class */ (function (_super) {
    __extends(replaceElementByKeyOrIdParameters, _super);
    function replaceElementByKeyOrIdParameters(superThis, method, path, keyOrId, element) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this._body = element;
        return _this;
    }
    replaceElementByKeyOrIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceElementByKeyOrIdParameters;
}(platformSDKMethodParameters));
;
var deleteElementsActiveParameters = /** @class */ (function (_super) {
    __extends(deleteElementsActiveParameters, _super);
    function deleteElementsActiveParameters(superThis, method, path, keyOrId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        return _this;
    }
    deleteElementsActiveParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteElementsActiveParameters;
}(platformSDKMethodParameters));
;
var replaceElementsActiveParameters = /** @class */ (function (_super) {
    __extends(replaceElementsActiveParameters, _super);
    function replaceElementsActiveParameters(superThis, method, path, keyOrId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        return _this;
    }
    replaceElementsActiveParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceElementsActiveParameters;
}(platformSDKMethodParameters));
;
var createElementCloneParameters = /** @class */ (function (_super) {
    __extends(createElementCloneParameters, _super);
    function createElementCloneParameters(superThis, method, path, keyOrId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        return _this;
    }
    createElementCloneParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createElementCloneParameters;
}(platformSDKMethodParameters));
;
var getElementsConfigurationParameters = /** @class */ (function (_super) {
    __extends(getElementsConfigurationParameters, _super);
    function getElementsConfigurationParameters(superThis, method, path, keyOrId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        return _this;
    }
    getElementsConfigurationParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getElementsConfigurationParameters;
}(platformSDKMethodParameters));
;
var createElementConfigurationParameters = /** @class */ (function (_super) {
    __extends(createElementConfigurationParameters, _super);
    function createElementConfigurationParameters(superThis, method, path, keyOrId, configuration) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this._body = configuration;
        return _this;
    }
    createElementConfigurationParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createElementConfigurationParameters;
}(platformSDKMethodParameters));
;
var deleteElementsConfigurationByConfigurationKeyParameters = /** @class */ (function (_super) {
    __extends(deleteElementsConfigurationByConfigurationKeyParameters, _super);
    function deleteElementsConfigurationByConfigurationKeyParameters(superThis, method, path, keyOrId, configurationKey) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{configurationKey}', "" + configurationKey);
        return _this;
    }
    deleteElementsConfigurationByConfigurationKeyParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteElementsConfigurationByConfigurationKeyParameters;
}(platformSDKMethodParameters));
;
var replaceElementsConfigurationByConfigurationKeyParameters = /** @class */ (function (_super) {
    __extends(replaceElementsConfigurationByConfigurationKeyParameters, _super);
    function replaceElementsConfigurationByConfigurationKeyParameters(superThis, method, path, keyOrId, configurationKey, configuration) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{configurationKey}', "" + configurationKey);
        _this._body = configuration;
        return _this;
    }
    replaceElementsConfigurationByConfigurationKeyParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceElementsConfigurationByConfigurationKeyParameters;
}(platformSDKMethodParameters));
;
var getElementsExportParameters = /** @class */ (function (_super) {
    __extends(getElementsExportParameters, _super);
    function getElementsExportParameters(superThis, method, path, keyOrId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        return _this;
    }
    getElementsExportParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getElementsExportParameters;
}(platformSDKMethodParameters));
;
var getElementsHooksParameters = /** @class */ (function (_super) {
    __extends(getElementsHooksParameters, _super);
    function getElementsHooksParameters(superThis, method, path, keyOrId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        return _this;
    }
    getElementsHooksParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getElementsHooksParameters;
}(platformSDKMethodParameters));
;
var createElementHookParameters = /** @class */ (function (_super) {
    __extends(createElementHookParameters, _super);
    function createElementHookParameters(superThis, method, path, keyOrId, model) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this._body = model;
        return _this;
    }
    createElementHookParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createElementHookParameters;
}(platformSDKMethodParameters));
;
var getElementsHookByHookIdParameters = /** @class */ (function (_super) {
    __extends(getElementsHookByHookIdParameters, _super);
    function getElementsHookByHookIdParameters(superThis, method, path, keyOrId, hookId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{hookId}', "" + hookId);
        return _this;
    }
    getElementsHookByHookIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getElementsHookByHookIdParameters;
}(platformSDKMethodParameters));
;
var deleteElementsHookByHookIdParameters = /** @class */ (function (_super) {
    __extends(deleteElementsHookByHookIdParameters, _super);
    function deleteElementsHookByHookIdParameters(superThis, method, path, keyOrId, hookId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{hookId}', "" + hookId);
        return _this;
    }
    deleteElementsHookByHookIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteElementsHookByHookIdParameters;
}(platformSDKMethodParameters));
;
var replaceElementsHookByHookIdParameters = /** @class */ (function (_super) {
    __extends(replaceElementsHookByHookIdParameters, _super);
    function replaceElementsHookByHookIdParameters(superThis, method, path, keyOrId, hookId, parameter) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{hookId}', "" + hookId);
        _this._body = parameter;
        return _this;
    }
    replaceElementsHookByHookIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceElementsHookByHookIdParameters;
}(platformSDKMethodParameters));
;
var getElementsInstancesParameters = /** @class */ (function (_super) {
    __extends(getElementsInstancesParameters, _super);
    function getElementsInstancesParameters(superThis, method, path, keyOrId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        return _this;
    }
    getElementsInstancesParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getElementsInstancesParameters;
}(platformSDKMethodParameters));
;
var createElementInstanceParameters = /** @class */ (function (_super) {
    __extends(createElementInstanceParameters, _super);
    function createElementInstanceParameters(superThis, method, path, keyOrId, elementInstance) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this._body = elementInstance;
        return _this;
    }
    createElementInstanceParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createElementInstanceParameters;
}(platformSDKMethodParameters));
;
var deleteElementsInstanceByIdParameters = /** @class */ (function (_super) {
    __extends(deleteElementsInstanceByIdParameters, _super);
    function deleteElementsInstanceByIdParameters(superThis, method, path, keyOrId, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    deleteElementsInstanceByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteElementsInstanceByIdParameters;
}(platformSDKMethodParameters));
;
var getElementsInstanceByIdParameters = /** @class */ (function (_super) {
    __extends(getElementsInstanceByIdParameters, _super);
    function getElementsInstanceByIdParameters(superThis, method, path, keyOrId, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getElementsInstanceByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getElementsInstanceByIdParameters;
}(platformSDKMethodParameters));
;
var replaceElementsInstanceByIdParameters = /** @class */ (function (_super) {
    __extends(replaceElementsInstanceByIdParameters, _super);
    function replaceElementsInstanceByIdParameters(superThis, method, path, keyOrId, id, elementInstance) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = elementInstance;
        return _this;
    }
    replaceElementsInstanceByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceElementsInstanceByIdParameters;
}(platformSDKMethodParameters));
;
var getElementsOauthTokenParameters = /** @class */ (function (_super) {
    __extends(getElementsOauthTokenParameters, _super);
    function getElementsOauthTokenParameters(superThis, method, path, keyOrId, apiKey, apiSecret, callbackUrl) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.queryParameters['apiKey'] = apiKey;
        _this.queryParameters['apiSecret'] = apiSecret;
        _this.queryParameters['callbackUrl'] = callbackUrl;
        return _this;
    }
    getElementsOauthTokenParameters.prototype.scope = function (scope) {
        this.queryParameters['scope'] = scope;
        return this;
    };
    getElementsOauthTokenParameters.prototype.state = function (state) {
        this.queryParameters['state'] = state;
        return this;
    };
    getElementsOauthTokenParameters.prototype.siteAddress = function (siteAddress) {
        this.queryParameters['siteAddress'] = siteAddress;
        return this;
    };
    getElementsOauthTokenParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getElementsOauthTokenParameters;
}(platformSDKMethodParameters));
;
var getElementsOauthUrlParameters = /** @class */ (function (_super) {
    __extends(getElementsOauthUrlParameters, _super);
    function getElementsOauthUrlParameters(superThis, method, path, keyOrId, apiKey, apiSecret, callbackUrl) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.queryParameters['apiKey'] = apiKey;
        _this.queryParameters['apiSecret'] = apiSecret;
        _this.queryParameters['callbackUrl'] = callbackUrl;
        return _this;
    }
    getElementsOauthUrlParameters.prototype.scope = function (scope) {
        this.queryParameters['scope'] = scope;
        return this;
    };
    getElementsOauthUrlParameters.prototype.state = function (state) {
        this.queryParameters['state'] = state;
        return this;
    };
    getElementsOauthUrlParameters.prototype.callbackProxy = function (callbackProxy) {
        this.queryParameters['callbackProxy'] = callbackProxy;
        return this;
    };
    getElementsOauthUrlParameters.prototype.requestToken = function (requestToken) {
        this.queryParameters['requestToken'] = requestToken;
        return this;
    };
    getElementsOauthUrlParameters.prototype.siteAddress = function (siteAddress) {
        this.queryParameters['siteAddress'] = siteAddress;
        return this;
    };
    getElementsOauthUrlParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getElementsOauthUrlParameters;
}(platformSDKMethodParameters));
;
var createElementOauthUrlParameters = /** @class */ (function (_super) {
    __extends(createElementOauthUrlParameters, _super);
    function createElementOauthUrlParameters(superThis, method, path, keyOrId, oauthInfo) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this._body = oauthInfo;
        return _this;
    }
    createElementOauthUrlParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createElementOauthUrlParameters;
}(platformSDKMethodParameters));
;
var getElementsObjectsParameters = /** @class */ (function (_super) {
    __extends(getElementsObjectsParameters, _super);
    function getElementsObjectsParameters(superThis, method, path, keyOrId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        return _this;
    }
    getElementsObjectsParameters.prototype.accountOnly = function (accountOnly) {
        this.queryParameters['accountOnly'] = accountOnly;
        return this;
    };
    getElementsObjectsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getElementsObjectsParameters;
}(platformSDKMethodParameters));
;
var createElementObjectParameters = /** @class */ (function (_super) {
    __extends(createElementObjectParameters, _super);
    function createElementObjectParameters(superThis, method, path, keyOrId, object) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this._body = object;
        return _this;
    }
    createElementObjectParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createElementObjectParameters;
}(platformSDKMethodParameters));
;
var deleteElementsObjectByIdParameters = /** @class */ (function (_super) {
    __extends(deleteElementsObjectByIdParameters, _super);
    function deleteElementsObjectByIdParameters(superThis, method, path, keyOrId, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    deleteElementsObjectByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteElementsObjectByIdParameters;
}(platformSDKMethodParameters));
;
var replaceElementsObjectByIdParameters = /** @class */ (function (_super) {
    __extends(replaceElementsObjectByIdParameters, _super);
    function replaceElementsObjectByIdParameters(superThis, method, path, keyOrId, id, object) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = object;
        return _this;
    }
    replaceElementsObjectByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceElementsObjectByIdParameters;
}(platformSDKMethodParameters));
;
var getElementsObjectByIdParameters = /** @class */ (function (_super) {
    __extends(getElementsObjectByIdParameters, _super);
    function getElementsObjectByIdParameters(superThis, method, path, keyOrId, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getElementsObjectByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getElementsObjectByIdParameters;
}(platformSDKMethodParameters));
;
var createElementObjectFieldParameters = /** @class */ (function (_super) {
    __extends(createElementObjectFieldParameters, _super);
    function createElementObjectFieldParameters(superThis, method, path, keyOrId, id, field) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = field;
        return _this;
    }
    createElementObjectFieldParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createElementObjectFieldParameters;
}(platformSDKMethodParameters));
;
var getElementsObjectsFieldsParameters = /** @class */ (function (_super) {
    __extends(getElementsObjectsFieldsParameters, _super);
    function getElementsObjectsFieldsParameters(superThis, method, path, keyOrId, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getElementsObjectsFieldsParameters.prototype.accountOnly = function (accountOnly) {
        this.queryParameters['accountOnly'] = accountOnly;
        return this;
    };
    getElementsObjectsFieldsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getElementsObjectsFieldsParameters;
}(platformSDKMethodParameters));
;
var deleteElementsObjectsFieldByFieldIdParameters = /** @class */ (function (_super) {
    __extends(deleteElementsObjectsFieldByFieldIdParameters, _super);
    function deleteElementsObjectsFieldByFieldIdParameters(superThis, method, path, keyOrId, id, fieldId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{fieldId}', "" + fieldId);
        return _this;
    }
    deleteElementsObjectsFieldByFieldIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteElementsObjectsFieldByFieldIdParameters;
}(platformSDKMethodParameters));
;
var replaceElementsObjectsFieldByFieldIdParameters = /** @class */ (function (_super) {
    __extends(replaceElementsObjectsFieldByFieldIdParameters, _super);
    function replaceElementsObjectsFieldByFieldIdParameters(superThis, method, path, keyOrId, id, fieldId, object) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{fieldId}', "" + fieldId);
        _this._body = object;
        return _this;
    }
    replaceElementsObjectsFieldByFieldIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceElementsObjectsFieldByFieldIdParameters;
}(platformSDKMethodParameters));
;
var getElementsObjectsFieldByFieldIdParameters = /** @class */ (function (_super) {
    __extends(getElementsObjectsFieldByFieldIdParameters, _super);
    function getElementsObjectsFieldByFieldIdParameters(superThis, method, path, keyOrId, id, fieldId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{fieldId}', "" + fieldId);
        return _this;
    }
    getElementsObjectsFieldByFieldIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getElementsObjectsFieldByFieldIdParameters;
}(platformSDKMethodParameters));
;
var getElementsParametersParameters = /** @class */ (function (_super) {
    __extends(getElementsParametersParameters, _super);
    function getElementsParametersParameters(superThis, method, path, keyOrId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        return _this;
    }
    getElementsParametersParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getElementsParametersParameters;
}(platformSDKMethodParameters));
;
var createElementParameterParameters = /** @class */ (function (_super) {
    __extends(createElementParameterParameters, _super);
    function createElementParameterParameters(superThis, method, path, keyOrId, parameter) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this._body = parameter;
        return _this;
    }
    createElementParameterParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createElementParameterParameters;
}(platformSDKMethodParameters));
;
var deleteElementsParameterByIdParameters = /** @class */ (function (_super) {
    __extends(deleteElementsParameterByIdParameters, _super);
    function deleteElementsParameterByIdParameters(superThis, method, path, keyOrId, id, parameter) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = parameter;
        return _this;
    }
    deleteElementsParameterByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteElementsParameterByIdParameters;
}(platformSDKMethodParameters));
;
var replaceElementsParameterByIdParameters = /** @class */ (function (_super) {
    __extends(replaceElementsParameterByIdParameters, _super);
    function replaceElementsParameterByIdParameters(superThis, method, path, keyOrId, id, parameter) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = parameter;
        return _this;
    }
    replaceElementsParameterByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceElementsParameterByIdParameters;
}(platformSDKMethodParameters));
;
var getElementsResourcesParameters = /** @class */ (function (_super) {
    __extends(getElementsResourcesParameters, _super);
    function getElementsResourcesParameters(superThis, method, path, keyOrId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        return _this;
    }
    getElementsResourcesParameters.prototype.accountOnly = function (accountOnly) {
        this.queryParameters['accountOnly'] = accountOnly;
        return this;
    };
    getElementsResourcesParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getElementsResourcesParameters;
}(platformSDKMethodParameters));
;
var createElementResourceParameters = /** @class */ (function (_super) {
    __extends(createElementResourceParameters, _super);
    function createElementResourceParameters(superThis, method, path, keyOrId, resource) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this._body = resource;
        return _this;
    }
    createElementResourceParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createElementResourceParameters;
}(platformSDKMethodParameters));
;
var deleteElementsResourceByIdParameters = /** @class */ (function (_super) {
    __extends(deleteElementsResourceByIdParameters, _super);
    function deleteElementsResourceByIdParameters(superThis, method, path, keyOrId, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    deleteElementsResourceByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteElementsResourceByIdParameters;
}(platformSDKMethodParameters));
;
var replaceElementsResourceByIdParameters = /** @class */ (function (_super) {
    __extends(replaceElementsResourceByIdParameters, _super);
    function replaceElementsResourceByIdParameters(superThis, method, path, keyOrId, id, resource) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = resource;
        return _this;
    }
    replaceElementsResourceByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceElementsResourceByIdParameters;
}(platformSDKMethodParameters));
;
var getElementsResourceByIdParameters = /** @class */ (function (_super) {
    __extends(getElementsResourceByIdParameters, _super);
    function getElementsResourceByIdParameters(superThis, method, path, keyOrId, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getElementsResourceByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getElementsResourceByIdParameters;
}(platformSDKMethodParameters));
;
var getElementsResourcesHooksParameters = /** @class */ (function (_super) {
    __extends(getElementsResourcesHooksParameters, _super);
    function getElementsResourcesHooksParameters(superThis, method, path, keyOrId, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getElementsResourcesHooksParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getElementsResourcesHooksParameters;
}(platformSDKMethodParameters));
;
var createElementResourceHookParameters = /** @class */ (function (_super) {
    __extends(createElementResourceHookParameters, _super);
    function createElementResourceHookParameters(superThis, method, path, keyOrId, id, model) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = model;
        return _this;
    }
    createElementResourceHookParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createElementResourceHookParameters;
}(platformSDKMethodParameters));
;
var getElementsResourcesHookByHookIdParameters = /** @class */ (function (_super) {
    __extends(getElementsResourcesHookByHookIdParameters, _super);
    function getElementsResourcesHookByHookIdParameters(superThis, method, path, keyOrId, id, hookId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{hookId}', "" + hookId);
        return _this;
    }
    getElementsResourcesHookByHookIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getElementsResourcesHookByHookIdParameters;
}(platformSDKMethodParameters));
;
var deleteElementsResourcesHookByHookIdParameters = /** @class */ (function (_super) {
    __extends(deleteElementsResourcesHookByHookIdParameters, _super);
    function deleteElementsResourcesHookByHookIdParameters(superThis, method, path, keyOrId, id, hookId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{hookId}', "" + hookId);
        return _this;
    }
    deleteElementsResourcesHookByHookIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteElementsResourcesHookByHookIdParameters;
}(platformSDKMethodParameters));
;
var replaceElementsResourcesHookByHookIdParameters = /** @class */ (function (_super) {
    __extends(replaceElementsResourcesHookByHookIdParameters, _super);
    function replaceElementsResourcesHookByHookIdParameters(superThis, method, path, keyOrId, id, hookId, parameter) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{hookId}', "" + hookId);
        _this._body = parameter;
        return _this;
    }
    replaceElementsResourcesHookByHookIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceElementsResourcesHookByHookIdParameters;
}(platformSDKMethodParameters));
;
var deleteElementsResourcesModelsParameters = /** @class */ (function (_super) {
    __extends(deleteElementsResourcesModelsParameters, _super);
    function deleteElementsResourcesModelsParameters(superThis, method, path, keyOrId, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    deleteElementsResourcesModelsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteElementsResourcesModelsParameters;
}(platformSDKMethodParameters));
;
var getElementsResourcesModelsParameters = /** @class */ (function (_super) {
    __extends(getElementsResourcesModelsParameters, _super);
    function getElementsResourcesModelsParameters(superThis, method, path, keyOrId, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getElementsResourcesModelsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getElementsResourcesModelsParameters;
}(platformSDKMethodParameters));
;
var createElementResourceModelParameters = /** @class */ (function (_super) {
    __extends(createElementResourceModelParameters, _super);
    function createElementResourceModelParameters(superThis, method, path, keyOrId, id, model) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = model;
        return _this;
    }
    createElementResourceModelParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createElementResourceModelParameters;
}(platformSDKMethodParameters));
;
var getElementsResourcesParametersParameters = /** @class */ (function (_super) {
    __extends(getElementsResourcesParametersParameters, _super);
    function getElementsResourcesParametersParameters(superThis, method, path, keyOrId, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getElementsResourcesParametersParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getElementsResourcesParametersParameters;
}(platformSDKMethodParameters));
;
var createElementResourceParameterParameters = /** @class */ (function (_super) {
    __extends(createElementResourceParameterParameters, _super);
    function createElementResourceParameterParameters(superThis, method, path, keyOrId, id, parameter) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = parameter;
        return _this;
    }
    createElementResourceParameterParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createElementResourceParameterParameters;
}(platformSDKMethodParameters));
;
var deleteElementsResourcesParameterByParameterIdParameters = /** @class */ (function (_super) {
    __extends(deleteElementsResourcesParameterByParameterIdParameters, _super);
    function deleteElementsResourcesParameterByParameterIdParameters(superThis, method, path, keyOrId, id, parameterId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{parameterId}', "" + parameterId);
        return _this;
    }
    deleteElementsResourcesParameterByParameterIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteElementsResourcesParameterByParameterIdParameters;
}(platformSDKMethodParameters));
;
var replaceElementsResourcesParameterByParameterIdParameters = /** @class */ (function (_super) {
    __extends(replaceElementsResourcesParameterByParameterIdParameters, _super);
    function replaceElementsResourcesParameterByParameterIdParameters(superThis, method, path, keyOrId, id, parameterId, parameter) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{parameterId}', "" + parameterId);
        _this._body = parameter;
        return _this;
    }
    replaceElementsResourcesParameterByParameterIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceElementsResourcesParameterByParameterIdParameters;
}(platformSDKMethodParameters));
;
var getFormulasParameters = /** @class */ (function (_super) {
    __extends(getFormulasParameters, _super);
    function getFormulasParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getFormulasParameters.prototype.includeSystem = function (includeSystem) {
        this.queryParameters['includeSystem'] = includeSystem;
        return this;
    };
    getFormulasParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getFormulasParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getFormulasParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getFormulasParameters;
}(platformSDKMethodParameters));
;
var createFormulaParameters = /** @class */ (function (_super) {
    __extends(createFormulaParameters, _super);
    function createFormulaParameters(superThis, method, path, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this._body = body;
        return _this;
    }
    createFormulaParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createFormulaParameters;
}(platformSDKMethodParameters));
;
var getFormulasAnalyticsParameters = /** @class */ (function (_super) {
    __extends(getFormulasAnalyticsParameters, _super);
    function getFormulasAnalyticsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getFormulasAnalyticsParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getFormulasAnalyticsParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getFormulasAnalyticsParameters.prototype.interval = function (interval) {
        this.queryParameters['interval'] = interval;
        return this;
    };
    getFormulasAnalyticsParameters.prototype.accountIds = function (accountIds) {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    };
    getFormulasAnalyticsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getFormulasAnalyticsParameters;
}(platformSDKMethodParameters));
;
var getFormulasAnalyticsAccountsParameters = /** @class */ (function (_super) {
    __extends(getFormulasAnalyticsAccountsParameters, _super);
    function getFormulasAnalyticsAccountsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getFormulasAnalyticsAccountsParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getFormulasAnalyticsAccountsParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getFormulasAnalyticsAccountsParameters.prototype.interval = function (interval) {
        this.queryParameters['interval'] = interval;
        return this;
    };
    getFormulasAnalyticsAccountsParameters.prototype.accountIds = function (accountIds) {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    };
    getFormulasAnalyticsAccountsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getFormulasAnalyticsAccountsParameters;
}(platformSDKMethodParameters));
;
var getFormulasAnalyticsInstancesParameters = /** @class */ (function (_super) {
    __extends(getFormulasAnalyticsInstancesParameters, _super);
    function getFormulasAnalyticsInstancesParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getFormulasAnalyticsInstancesParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getFormulasAnalyticsInstancesParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getFormulasAnalyticsInstancesParameters.prototype.interval = function (interval) {
        this.queryParameters['interval'] = interval;
        return this;
    };
    getFormulasAnalyticsInstancesParameters.prototype.accountIds = function (accountIds) {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    };
    getFormulasAnalyticsInstancesParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getFormulasAnalyticsInstancesParameters;
}(platformSDKMethodParameters));
;
var getFormulasAnalyticsStatusesParameters = /** @class */ (function (_super) {
    __extends(getFormulasAnalyticsStatusesParameters, _super);
    function getFormulasAnalyticsStatusesParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getFormulasAnalyticsStatusesParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getFormulasAnalyticsStatusesParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getFormulasAnalyticsStatusesParameters.prototype.interval = function (interval) {
        this.queryParameters['interval'] = interval;
        return this;
    };
    getFormulasAnalyticsStatusesParameters.prototype.accountIds = function (accountIds) {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    };
    getFormulasAnalyticsStatusesParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getFormulasAnalyticsStatusesParameters;
}(platformSDKMethodParameters));
;
var getFormulasAnalyticsStatusesNowParameters = /** @class */ (function (_super) {
    __extends(getFormulasAnalyticsStatusesNowParameters, _super);
    function getFormulasAnalyticsStatusesNowParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getFormulasAnalyticsStatusesNowParameters.prototype.accountIds = function (accountIds) {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    };
    getFormulasAnalyticsStatusesNowParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getFormulasAnalyticsStatusesNowParameters;
}(platformSDKMethodParameters));
;
var getFormulasAnalyticsStepsParameters = /** @class */ (function (_super) {
    __extends(getFormulasAnalyticsStepsParameters, _super);
    function getFormulasAnalyticsStepsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getFormulasAnalyticsStepsParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getFormulasAnalyticsStepsParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getFormulasAnalyticsStepsParameters.prototype.interval = function (interval) {
        this.queryParameters['interval'] = interval;
        return this;
    };
    getFormulasAnalyticsStepsParameters.prototype.accountIds = function (accountIds) {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    };
    getFormulasAnalyticsStepsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getFormulasAnalyticsStepsParameters;
}(platformSDKMethodParameters));
;
var getFormulasInstancesParameters = /** @class */ (function (_super) {
    __extends(getFormulasInstancesParameters, _super);
    function getFormulasInstancesParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getFormulasInstancesParameters.prototype.elementInstanceId = function (elementInstanceId) {
        this.queryParameters['elementInstanceId'] = elementInstanceId;
        return this;
    };
    getFormulasInstancesParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getFormulasInstancesParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getFormulasInstancesParameters.prototype.searchText = function (searchText) {
        this.queryParameters['searchText'] = searchText;
        return this;
    };
    getFormulasInstancesParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getFormulasInstancesParameters;
}(platformSDKMethodParameters));
;
var getFormulasInstancesExecutionsStepsValuesParameters = /** @class */ (function (_super) {
    __extends(getFormulasInstancesExecutionsStepsValuesParameters, _super);
    function getFormulasInstancesExecutionsStepsValuesParameters(superThis, method, path, stepExecutionId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{stepExecutionId}', "" + stepExecutionId);
        return _this;
    }
    getFormulasInstancesExecutionsStepsValuesParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getFormulasInstancesExecutionsStepsValuesParameters;
}(platformSDKMethodParameters));
;
var getFormulasInstancesExecutionByExecutionIdParameters = /** @class */ (function (_super) {
    __extends(getFormulasInstancesExecutionByExecutionIdParameters, _super);
    function getFormulasInstancesExecutionByExecutionIdParameters(superThis, method, path, executionId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{executionId}', "" + executionId);
        return _this;
    }
    getFormulasInstancesExecutionByExecutionIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getFormulasInstancesExecutionByExecutionIdParameters;
}(platformSDKMethodParameters));
;
var updateFormulasInstancesExecutionByExecutionIdParameters = /** @class */ (function (_super) {
    __extends(updateFormulasInstancesExecutionByExecutionIdParameters, _super);
    function updateFormulasInstancesExecutionByExecutionIdParameters(superThis, method, path, executionId, status) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{executionId}', "" + executionId);
        _this._body = status;
        return _this;
    }
    updateFormulasInstancesExecutionByExecutionIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return updateFormulasInstancesExecutionByExecutionIdParameters;
}(platformSDKMethodParameters));
;
var getFormulasInstancesExecutionsErrorsParameters = /** @class */ (function (_super) {
    __extends(getFormulasInstancesExecutionsErrorsParameters, _super);
    function getFormulasInstancesExecutionsErrorsParameters(superThis, method, path, executionId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{executionId}', "" + executionId);
        return _this;
    }
    getFormulasInstancesExecutionsErrorsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getFormulasInstancesExecutionsErrorsParameters;
}(platformSDKMethodParameters));
;
var getFormulasInstancesExecutionsStepsParameters = /** @class */ (function (_super) {
    __extends(getFormulasInstancesExecutionsStepsParameters, _super);
    function getFormulasInstancesExecutionsStepsParameters(superThis, method, path, executionId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{executionId}', "" + executionId);
        return _this;
    }
    getFormulasInstancesExecutionsStepsParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getFormulasInstancesExecutionsStepsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getFormulasInstancesExecutionsStepsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getFormulasInstancesExecutionsStepsParameters;
}(platformSDKMethodParameters));
;
var getFormulasInstanceByInstanceIdParameters = /** @class */ (function (_super) {
    __extends(getFormulasInstanceByInstanceIdParameters, _super);
    function getFormulasInstanceByInstanceIdParameters(superThis, method, path, instanceId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{instanceId}', "" + instanceId);
        return _this;
    }
    getFormulasInstanceByInstanceIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getFormulasInstanceByInstanceIdParameters;
}(platformSDKMethodParameters));
;
var getFormulasInstancesExecutionsParameters = /** @class */ (function (_super) {
    __extends(getFormulasInstancesExecutionsParameters, _super);
    function getFormulasInstancesExecutionsParameters(superThis, method, path, instanceId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{instanceId}', "" + instanceId);
        return _this;
    }
    getFormulasInstancesExecutionsParameters.prototype.eventId = function (eventId) {
        this.queryParameters['eventId'] = eventId;
        return this;
    };
    getFormulasInstancesExecutionsParameters.prototype.objectId = function (objectId) {
        this.queryParameters['objectId'] = objectId;
        return this;
    };
    getFormulasInstancesExecutionsParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getFormulasInstancesExecutionsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getFormulasInstancesExecutionsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getFormulasInstancesExecutionsParameters;
}(platformSDKMethodParameters));
;
var createFormulaInstanceExecutionParameters = /** @class */ (function (_super) {
    __extends(createFormulaInstanceExecutionParameters, _super);
    function createFormulaInstanceExecutionParameters(superThis, method, path, instanceId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{instanceId}', "" + instanceId);
        return _this;
    }
    createFormulaInstanceExecutionParameters.prototype.trigger = function (trigger) {
        if (this.queryParameters['trigger'] !== undefined) {
            this._body = this.queryParameters['trigger'];
        }
        return this;
    };
    createFormulaInstanceExecutionParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createFormulaInstanceExecutionParameters;
}(platformSDKMethodParameters));
;
var getFormulasInstancesExecutionsErrors2Parameters = /** @class */ (function (_super) {
    __extends(getFormulasInstancesExecutionsErrors2Parameters, _super);
    function getFormulasInstancesExecutionsErrors2Parameters(superThis, method, path, instanceId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{instanceId}', "" + instanceId);
        return _this;
    }
    getFormulasInstancesExecutionsErrors2Parameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getFormulasInstancesExecutionsErrors2Parameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getFormulasInstancesExecutionsErrors2Parameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getFormulasInstancesExecutionsErrors2Parameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getFormulasInstancesExecutionsErrors2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getFormulasInstancesExecutionsErrors2Parameters;
}(platformSDKMethodParameters));
;
var getFormulasInstancesExecutionsErrors2_1Parameters = /** @class */ (function (_super) {
    __extends(getFormulasInstancesExecutionsErrors2_1Parameters, _super);
    function getFormulasInstancesExecutionsErrors2_1Parameters(superThis, method, path, formulaId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{formulaId}', "" + formulaId);
        return _this;
    }
    getFormulasInstancesExecutionsErrors2_1Parameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getFormulasInstancesExecutionsErrors2_1Parameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getFormulasInstancesExecutionsErrors2_1Parameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getFormulasInstancesExecutionsErrors2_1Parameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getFormulasInstancesExecutionsErrors2_1Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getFormulasInstancesExecutionsErrors2_1Parameters;
}(platformSDKMethodParameters));
;
var deleteFormulaByIdParameters = /** @class */ (function (_super) {
    __extends(deleteFormulaByIdParameters, _super);
    function deleteFormulaByIdParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    deleteFormulaByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteFormulaByIdParameters;
}(platformSDKMethodParameters));
;
var getFormulaByIdParameters = /** @class */ (function (_super) {
    __extends(getFormulaByIdParameters, _super);
    function getFormulaByIdParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getFormulaByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getFormulaByIdParameters;
}(platformSDKMethodParameters));
;
var replaceFormulaByIdParameters = /** @class */ (function (_super) {
    __extends(replaceFormulaByIdParameters, _super);
    function replaceFormulaByIdParameters(superThis, method, path, id, formula) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = formula;
        return _this;
    }
    replaceFormulaByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceFormulaByIdParameters;
}(platformSDKMethodParameters));
;
var updateFormulaByIdParameters = /** @class */ (function (_super) {
    __extends(updateFormulaByIdParameters, _super);
    function updateFormulaByIdParameters(superThis, method, path, id, formula) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = formula;
        return _this;
    }
    updateFormulaByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return updateFormulaByIdParameters;
}(platformSDKMethodParameters));
;
var createFormulaConfigurationParameters = /** @class */ (function (_super) {
    __extends(createFormulaConfigurationParameters, _super);
    function createFormulaConfigurationParameters(superThis, method, path, id, configuration) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = configuration;
        return _this;
    }
    createFormulaConfigurationParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createFormulaConfigurationParameters;
}(platformSDKMethodParameters));
;
var deleteFormulasConfigurationByConfigurationIdParameters = /** @class */ (function (_super) {
    __extends(deleteFormulasConfigurationByConfigurationIdParameters, _super);
    function deleteFormulasConfigurationByConfigurationIdParameters(superThis, method, path, id, configurationId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{configurationId}', "" + configurationId);
        return _this;
    }
    deleteFormulasConfigurationByConfigurationIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteFormulasConfigurationByConfigurationIdParameters;
}(platformSDKMethodParameters));
;
var getFormulasConfigurationByConfigurationIdParameters = /** @class */ (function (_super) {
    __extends(getFormulasConfigurationByConfigurationIdParameters, _super);
    function getFormulasConfigurationByConfigurationIdParameters(superThis, method, path, id, configurationId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{configurationId}', "" + configurationId);
        return _this;
    }
    getFormulasConfigurationByConfigurationIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getFormulasConfigurationByConfigurationIdParameters;
}(platformSDKMethodParameters));
;
var replaceFormulasConfigurationByConfigurationIdParameters = /** @class */ (function (_super) {
    __extends(replaceFormulasConfigurationByConfigurationIdParameters, _super);
    function replaceFormulasConfigurationByConfigurationIdParameters(superThis, method, path, id, configurationId, configuration) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{configurationId}', "" + configurationId);
        _this._body = configuration;
        return _this;
    }
    replaceFormulasConfigurationByConfigurationIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceFormulasConfigurationByConfigurationIdParameters;
}(platformSDKMethodParameters));
;
var getFormulasExportParameters = /** @class */ (function (_super) {
    __extends(getFormulasExportParameters, _super);
    function getFormulasExportParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getFormulasExportParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getFormulasExportParameters;
}(platformSDKMethodParameters));
;
var getFormulasInstances2Parameters = /** @class */ (function (_super) {
    __extends(getFormulasInstances2Parameters, _super);
    function getFormulasInstances2Parameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getFormulasInstances2Parameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getFormulasInstances2Parameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getFormulasInstances2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getFormulasInstances2Parameters;
}(platformSDKMethodParameters));
;
var createFormulaInstanceParameters = /** @class */ (function (_super) {
    __extends(createFormulaInstanceParameters, _super);
    function createFormulaInstanceParameters(superThis, method, path, id, formulaInstance) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = formulaInstance;
        return _this;
    }
    createFormulaInstanceParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createFormulaInstanceParameters;
}(platformSDKMethodParameters));
;
var deleteFormulasInstanceByInstanceIdParameters = /** @class */ (function (_super) {
    __extends(deleteFormulasInstanceByInstanceIdParameters, _super);
    function deleteFormulasInstanceByInstanceIdParameters(superThis, method, path, id, instanceId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{instanceId}', "" + instanceId);
        return _this;
    }
    deleteFormulasInstanceByInstanceIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteFormulasInstanceByInstanceIdParameters;
}(platformSDKMethodParameters));
;
var getFormulasInstanceByInstanceId2Parameters = /** @class */ (function (_super) {
    __extends(getFormulasInstanceByInstanceId2Parameters, _super);
    function getFormulasInstanceByInstanceId2Parameters(superThis, method, path, id, instanceId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{instanceId}', "" + instanceId);
        return _this;
    }
    getFormulasInstanceByInstanceId2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getFormulasInstanceByInstanceId2Parameters;
}(platformSDKMethodParameters));
;
var replaceFormulasInstanceByInstanceIdParameters = /** @class */ (function (_super) {
    __extends(replaceFormulasInstanceByInstanceIdParameters, _super);
    function replaceFormulasInstanceByInstanceIdParameters(superThis, method, path, id, instanceId, formulaInstance) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{instanceId}', "" + instanceId);
        _this._body = formulaInstance;
        return _this;
    }
    replaceFormulasInstanceByInstanceIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceFormulasInstanceByInstanceIdParameters;
}(platformSDKMethodParameters));
;
var replaceFormulasInstancesActiveParameters = /** @class */ (function (_super) {
    __extends(replaceFormulasInstancesActiveParameters, _super);
    function replaceFormulasInstancesActiveParameters(superThis, method, path, id, instanceId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{instanceId}', "" + instanceId);
        return _this;
    }
    replaceFormulasInstancesActiveParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceFormulasInstancesActiveParameters;
}(platformSDKMethodParameters));
;
var deleteFormulasInstancesActiveParameters = /** @class */ (function (_super) {
    __extends(deleteFormulasInstancesActiveParameters, _super);
    function deleteFormulasInstancesActiveParameters(superThis, method, path, id, instanceId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{instanceId}', "" + instanceId);
        return _this;
    }
    deleteFormulasInstancesActiveParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteFormulasInstancesActiveParameters;
}(platformSDKMethodParameters));
;
var getFormulasInstancesExecutions2Parameters = /** @class */ (function (_super) {
    __extends(getFormulasInstancesExecutions2Parameters, _super);
    function getFormulasInstancesExecutions2Parameters(superThis, method, path, id, instanceId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{instanceId}', "" + instanceId);
        return _this;
    }
    getFormulasInstancesExecutions2Parameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getFormulasInstancesExecutions2Parameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getFormulasInstancesExecutions2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getFormulasInstancesExecutions2Parameters;
}(platformSDKMethodParameters));
;
var getFormulasStepsParameters = /** @class */ (function (_super) {
    __extends(getFormulasStepsParameters, _super);
    function getFormulasStepsParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getFormulasStepsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getFormulasStepsParameters;
}(platformSDKMethodParameters));
;
var createFormulaStepParameters = /** @class */ (function (_super) {
    __extends(createFormulaStepParameters, _super);
    function createFormulaStepParameters(superThis, method, path, id, step) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = step;
        return _this;
    }
    createFormulaStepParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createFormulaStepParameters;
}(platformSDKMethodParameters));
;
var deleteFormulasStepByStepIdParameters = /** @class */ (function (_super) {
    __extends(deleteFormulasStepByStepIdParameters, _super);
    function deleteFormulasStepByStepIdParameters(superThis, method, path, id, stepId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{stepId}', "" + stepId);
        return _this;
    }
    deleteFormulasStepByStepIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteFormulasStepByStepIdParameters;
}(platformSDKMethodParameters));
;
var getFormulasStepByStepIdParameters = /** @class */ (function (_super) {
    __extends(getFormulasStepByStepIdParameters, _super);
    function getFormulasStepByStepIdParameters(superThis, method, path, id, stepId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{stepId}', "" + stepId);
        return _this;
    }
    getFormulasStepByStepIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getFormulasStepByStepIdParameters;
}(platformSDKMethodParameters));
;
var replaceFormulasStepByStepIdParameters = /** @class */ (function (_super) {
    __extends(replaceFormulasStepByStepIdParameters, _super);
    function replaceFormulasStepByStepIdParameters(superThis, method, path, id, stepId, step) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{stepId}', "" + stepId);
        _this._body = step;
        return _this;
    }
    replaceFormulasStepByStepIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceFormulasStepByStepIdParameters;
}(platformSDKMethodParameters));
;
var createFormulaTriggerParameters = /** @class */ (function (_super) {
    __extends(createFormulaTriggerParameters, _super);
    function createFormulaTriggerParameters(superThis, method, path, id, trigger) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = trigger;
        return _this;
    }
    createFormulaTriggerParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createFormulaTriggerParameters;
}(platformSDKMethodParameters));
;
var deleteFormulasTriggerByTriggerIdParameters = /** @class */ (function (_super) {
    __extends(deleteFormulasTriggerByTriggerIdParameters, _super);
    function deleteFormulasTriggerByTriggerIdParameters(superThis, method, path, id, triggerId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{triggerId}', "" + triggerId);
        return _this;
    }
    deleteFormulasTriggerByTriggerIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteFormulasTriggerByTriggerIdParameters;
}(platformSDKMethodParameters));
;
var getFormulasTriggerByTriggerIdParameters = /** @class */ (function (_super) {
    __extends(getFormulasTriggerByTriggerIdParameters, _super);
    function getFormulasTriggerByTriggerIdParameters(superThis, method, path, id, triggerId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{triggerId}', "" + triggerId);
        return _this;
    }
    getFormulasTriggerByTriggerIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getFormulasTriggerByTriggerIdParameters;
}(platformSDKMethodParameters));
;
var replaceFormulasTriggerByTriggerIdParameters = /** @class */ (function (_super) {
    __extends(replaceFormulasTriggerByTriggerIdParameters, _super);
    function replaceFormulasTriggerByTriggerIdParameters(superThis, method, path, id, triggerId, trigger) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{triggerId}', "" + triggerId);
        _this._body = trigger;
        return _this;
    }
    replaceFormulasTriggerByTriggerIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceFormulasTriggerByTriggerIdParameters;
}(platformSDKMethodParameters));
;
var getHubsParameters = /** @class */ (function (_super) {
    __extends(getHubsParameters, _super);
    function getHubsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getHubsParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getHubsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getHubsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getHubsParameters;
}(platformSDKMethodParameters));
;
var createHubParameters = /** @class */ (function (_super) {
    __extends(createHubParameters, _super);
    function createHubParameters(superThis, method, path, hub) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this._body = hub;
        return _this;
    }
    createHubParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createHubParameters;
}(platformSDKMethodParameters));
;
var getHubsKeysParameters = /** @class */ (function (_super) {
    __extends(getHubsKeysParameters, _super);
    function getHubsKeysParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getHubsKeysParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getHubsKeysParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getHubsKeysParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getHubsKeysParameters;
}(platformSDKMethodParameters));
;
var deleteHubByKeyParameters = /** @class */ (function (_super) {
    __extends(deleteHubByKeyParameters, _super);
    function deleteHubByKeyParameters(superThis, method, path, key) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{key}', "" + key);
        return _this;
    }
    deleteHubByKeyParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteHubByKeyParameters;
}(platformSDKMethodParameters));
;
var getHubByKeyParameters = /** @class */ (function (_super) {
    __extends(getHubByKeyParameters, _super);
    function getHubByKeyParameters(superThis, method, path, key) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{key}', "" + key);
        return _this;
    }
    getHubByKeyParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getHubByKeyParameters;
}(platformSDKMethodParameters));
;
var getHubsElementsParameters = /** @class */ (function (_super) {
    __extends(getHubsElementsParameters, _super);
    function getHubsElementsParameters(superThis, method, path, key) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{key}', "" + key);
        return _this;
    }
    getHubsElementsParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getHubsElementsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getHubsElementsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getHubsElementsParameters;
}(platformSDKMethodParameters));
;
var getInstancesParameters = /** @class */ (function (_super) {
    __extends(getInstancesParameters, _super);
    function getInstancesParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getInstancesParameters.prototype.tags = function (tags) {
        this.queryParameters['tags[]'] = tags;
        return this;
    };
    getInstancesParameters.prototype.searchText = function (searchText) {
        this.queryParameters['searchText'] = searchText;
        return this;
    };
    getInstancesParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getInstancesParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getInstancesParameters.prototype.hydrate = function (hydrate) {
        this.queryParameters['hydrate'] = hydrate;
        return this;
    };
    getInstancesParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getInstancesParameters;
}(platformSDKMethodParameters));
;
var createInstanceParameters = /** @class */ (function (_super) {
    __extends(createInstanceParameters, _super);
    function createInstanceParameters(superThis, method, path, elementInstance) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this._body = elementInstance;
        return _this;
    }
    createInstanceParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createInstanceParameters;
}(platformSDKMethodParameters));
;
var deleteInstancesParameters = /** @class */ (function (_super) {
    __extends(deleteInstancesParameters, _super);
    function deleteInstancesParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    deleteInstancesParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteInstancesParameters;
}(platformSDKMethodParameters));
;
var replaceInstancesParameters = /** @class */ (function (_super) {
    __extends(replaceInstancesParameters, _super);
    function replaceInstancesParameters(superThis, method, path, elementInstance) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this._body = elementInstance;
        return _this;
    }
    replaceInstancesParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceInstancesParameters;
}(platformSDKMethodParameters));
;
var updateInstancesParameters = /** @class */ (function (_super) {
    __extends(updateInstancesParameters, _super);
    function updateInstancesParameters(superThis, method, path, elementInstance) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this._body = elementInstance;
        return _this;
    }
    updateInstancesParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return updateInstancesParameters;
}(platformSDKMethodParameters));
;
var getInstancesConfigurationParameters = /** @class */ (function (_super) {
    __extends(getInstancesConfigurationParameters, _super);
    function getInstancesConfigurationParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getInstancesConfigurationParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getInstancesConfigurationParameters;
}(platformSDKMethodParameters));
;
var getInstancesConfigurationByConfigIdParameters = /** @class */ (function (_super) {
    __extends(getInstancesConfigurationByConfigIdParameters, _super);
    function getInstancesConfigurationByConfigIdParameters(superThis, method, path, configId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{configId}', "" + configId);
        return _this;
    }
    getInstancesConfigurationByConfigIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getInstancesConfigurationByConfigIdParameters;
}(platformSDKMethodParameters));
;
var updateInstancesConfigurationByConfigIdParameters = /** @class */ (function (_super) {
    __extends(updateInstancesConfigurationByConfigIdParameters, _super);
    function updateInstancesConfigurationByConfigIdParameters(superThis, method, path, configId, config) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{configId}', "" + configId);
        _this._body = config;
        return _this;
    }
    updateInstancesConfigurationByConfigIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return updateInstancesConfigurationByConfigIdParameters;
}(platformSDKMethodParameters));
;
var getInstancesDocsParameters = /** @class */ (function (_super) {
    __extends(getInstancesDocsParameters, _super);
    function getInstancesDocsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getInstancesDocsParameters.prototype.operationId = function (operationId) {
        this.queryParameters['operationId'] = operationId;
        return this;
    };
    getInstancesDocsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getInstancesDocsParameters;
}(platformSDKMethodParameters));
;
var getInstancesDocByOperationIdParameters = /** @class */ (function (_super) {
    __extends(getInstancesDocByOperationIdParameters, _super);
    function getInstancesDocByOperationIdParameters(superThis, method, path, operationId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{operationId}', "" + operationId);
        return _this;
    }
    getInstancesDocByOperationIdParameters.prototype.discovery = function (discovery) {
        this.queryParameters['discovery'] = discovery;
        return this;
    };
    getInstancesDocByOperationIdParameters.prototype.basic = function (basic) {
        this.queryParameters['basic'] = basic;
        return this;
    };
    getInstancesDocByOperationIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getInstancesDocByOperationIdParameters;
}(platformSDKMethodParameters));
;
var getInstancesDocsDefinitionsParameters = /** @class */ (function (_super) {
    __extends(getInstancesDocsDefinitionsParameters, _super);
    function getInstancesDocsDefinitionsParameters(superThis, method, path, operationId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{operationId}', "" + operationId);
        return _this;
    }
    getInstancesDocsDefinitionsParameters.prototype.discovery = function (discovery) {
        this.queryParameters['discovery'] = discovery;
        return this;
    };
    getInstancesDocsDefinitionsParameters.prototype.resolveReferences = function (resolveReferences) {
        this.queryParameters['resolveReferences'] = resolveReferences;
        return this;
    };
    getInstancesDocsDefinitionsParameters.prototype.basic = function (basic) {
        this.queryParameters['basic'] = basic;
        return this;
    };
    getInstancesDocsDefinitionsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getInstancesDocsDefinitionsParameters;
}(platformSDKMethodParameters));
;
var replaceInstancesEnabledParameters = /** @class */ (function (_super) {
    __extends(replaceInstancesEnabledParameters, _super);
    function replaceInstancesEnabledParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    replaceInstancesEnabledParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceInstancesEnabledParameters;
}(platformSDKMethodParameters));
;
var deleteInstancesEnabledParameters = /** @class */ (function (_super) {
    __extends(deleteInstancesEnabledParameters, _super);
    function deleteInstancesEnabledParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    deleteInstancesEnabledParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteInstancesEnabledParameters;
}(platformSDKMethodParameters));
;
var getInstancesEventsParameters = /** @class */ (function (_super) {
    __extends(getInstancesEventsParameters, _super);
    function getInstancesEventsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getInstancesEventsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getInstancesEventsParameters;
}(platformSDKMethodParameters));
;
var getInstancesEventsAnalyticsParameters = /** @class */ (function (_super) {
    __extends(getInstancesEventsAnalyticsParameters, _super);
    function getInstancesEventsAnalyticsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getInstancesEventsAnalyticsParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getInstancesEventsAnalyticsParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getInstancesEventsAnalyticsParameters.prototype.interval = function (interval) {
        this.queryParameters['interval'] = interval;
        return this;
    };
    getInstancesEventsAnalyticsParameters.prototype.accountIds = function (accountIds) {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    };
    getInstancesEventsAnalyticsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getInstancesEventsAnalyticsParameters;
}(platformSDKMethodParameters));
;
var getInstancesEventsAnalyticsAccountsParameters = /** @class */ (function (_super) {
    __extends(getInstancesEventsAnalyticsAccountsParameters, _super);
    function getInstancesEventsAnalyticsAccountsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getInstancesEventsAnalyticsAccountsParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getInstancesEventsAnalyticsAccountsParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getInstancesEventsAnalyticsAccountsParameters.prototype.interval = function (interval) {
        this.queryParameters['interval'] = interval;
        return this;
    };
    getInstancesEventsAnalyticsAccountsParameters.prototype.accountIds = function (accountIds) {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    };
    getInstancesEventsAnalyticsAccountsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getInstancesEventsAnalyticsAccountsParameters;
}(platformSDKMethodParameters));
;
var getInstancesEventsAnalyticsInstancesParameters = /** @class */ (function (_super) {
    __extends(getInstancesEventsAnalyticsInstancesParameters, _super);
    function getInstancesEventsAnalyticsInstancesParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getInstancesEventsAnalyticsInstancesParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getInstancesEventsAnalyticsInstancesParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getInstancesEventsAnalyticsInstancesParameters.prototype.interval = function (interval) {
        this.queryParameters['interval'] = interval;
        return this;
    };
    getInstancesEventsAnalyticsInstancesParameters.prototype.accountIds = function (accountIds) {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    };
    getInstancesEventsAnalyticsInstancesParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getInstancesEventsAnalyticsInstancesParameters;
}(platformSDKMethodParameters));
;
var getInstancesEventsDispositionsParameters = /** @class */ (function (_super) {
    __extends(getInstancesEventsDispositionsParameters, _super);
    function getInstancesEventsDispositionsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getInstancesEventsDispositionsParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getInstancesEventsDispositionsParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getInstancesEventsDispositionsParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getInstancesEventsDispositionsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getInstancesEventsDispositionsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getInstancesEventsDispositionsParameters;
}(platformSDKMethodParameters));
;
var getInstancesEventByEventIdParameters = /** @class */ (function (_super) {
    __extends(getInstancesEventByEventIdParameters, _super);
    function getInstancesEventByEventIdParameters(superThis, method, path, eventId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{eventId}', "" + eventId);
        return _this;
    }
    getInstancesEventByEventIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getInstancesEventByEventIdParameters;
}(platformSDKMethodParameters));
;
var getInstancesObjectsDefinitionsParameters = /** @class */ (function (_super) {
    __extends(getInstancesObjectsDefinitionsParameters, _super);
    function getInstancesObjectsDefinitionsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getInstancesObjectsDefinitionsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getInstancesObjectsDefinitionsParameters;
}(platformSDKMethodParameters));
;
var deleteInstancesObjectsObjectNameDefinitionsParameters = /** @class */ (function (_super) {
    __extends(deleteInstancesObjectsObjectNameDefinitionsParameters, _super);
    function deleteInstancesObjectsObjectNameDefinitionsParameters(superThis, method, path, objectName) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        return _this;
    }
    deleteInstancesObjectsObjectNameDefinitionsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteInstancesObjectsObjectNameDefinitionsParameters;
}(platformSDKMethodParameters));
;
var getInstancesObjectsObjectNameDefinitionsParameters = /** @class */ (function (_super) {
    __extends(getInstancesObjectsObjectNameDefinitionsParameters, _super);
    function getInstancesObjectsObjectNameDefinitionsParameters(superThis, method, path, objectName) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        return _this;
    }
    getInstancesObjectsObjectNameDefinitionsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getInstancesObjectsObjectNameDefinitionsParameters;
}(platformSDKMethodParameters));
;
var createInstanceObjectObjectNameDefinitionParameters = /** @class */ (function (_super) {
    __extends(createInstanceObjectObjectNameDefinitionParameters, _super);
    function createInstanceObjectObjectNameDefinitionParameters(superThis, method, path, objectName, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this._body = body;
        return _this;
    }
    createInstanceObjectObjectNameDefinitionParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createInstanceObjectObjectNameDefinitionParameters;
}(platformSDKMethodParameters));
;
var replaceInstancesObjectsObjectNameDefinitionsParameters = /** @class */ (function (_super) {
    __extends(replaceInstancesObjectsObjectNameDefinitionsParameters, _super);
    function replaceInstancesObjectsObjectNameDefinitionsParameters(superThis, method, path, objectName, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this._body = body;
        return _this;
    }
    replaceInstancesObjectsObjectNameDefinitionsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceInstancesObjectsObjectNameDefinitionsParameters;
}(platformSDKMethodParameters));
;
var replaceInstancesTraceLoggingParameters = /** @class */ (function (_super) {
    __extends(replaceInstancesTraceLoggingParameters, _super);
    function replaceInstancesTraceLoggingParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    replaceInstancesTraceLoggingParameters.prototype.config = function (config) {
        if (this.queryParameters['config'] !== undefined) {
            this._body = this.queryParameters['config'];
        }
        return this;
    };
    replaceInstancesTraceLoggingParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceInstancesTraceLoggingParameters;
}(platformSDKMethodParameters));
;
var deleteInstancesTraceLoggingParameters = /** @class */ (function (_super) {
    __extends(deleteInstancesTraceLoggingParameters, _super);
    function deleteInstancesTraceLoggingParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    deleteInstancesTraceLoggingParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteInstancesTraceLoggingParameters;
}(platformSDKMethodParameters));
;
var deleteInstancesTransformationsParameters = /** @class */ (function (_super) {
    __extends(deleteInstancesTransformationsParameters, _super);
    function deleteInstancesTransformationsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    deleteInstancesTransformationsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteInstancesTransformationsParameters;
}(platformSDKMethodParameters));
;
var getInstancesTransformationsParameters = /** @class */ (function (_super) {
    __extends(getInstancesTransformationsParameters, _super);
    function getInstancesTransformationsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getInstancesTransformationsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getInstancesTransformationsParameters;
}(platformSDKMethodParameters));
;
var deleteInstancesTransformationByObjectNameParameters = /** @class */ (function (_super) {
    __extends(deleteInstancesTransformationByObjectNameParameters, _super);
    function deleteInstancesTransformationByObjectNameParameters(superThis, method, path, objectName) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        return _this;
    }
    deleteInstancesTransformationByObjectNameParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteInstancesTransformationByObjectNameParameters;
}(platformSDKMethodParameters));
;
var getInstancesTransformationByObjectNameParameters = /** @class */ (function (_super) {
    __extends(getInstancesTransformationByObjectNameParameters, _super);
    function getInstancesTransformationByObjectNameParameters(superThis, method, path, objectName) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        return _this;
    }
    getInstancesTransformationByObjectNameParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getInstancesTransformationByObjectNameParameters;
}(platformSDKMethodParameters));
;
var createInstanceTransformationByObjectNameParameters = /** @class */ (function (_super) {
    __extends(createInstanceTransformationByObjectNameParameters, _super);
    function createInstanceTransformationByObjectNameParameters(superThis, method, path, objectName, transformation) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this._body = transformation;
        return _this;
    }
    createInstanceTransformationByObjectNameParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createInstanceTransformationByObjectNameParameters;
}(platformSDKMethodParameters));
;
var replaceInstancesTransformationByObjectNameParameters = /** @class */ (function (_super) {
    __extends(replaceInstancesTransformationByObjectNameParameters, _super);
    function replaceInstancesTransformationByObjectNameParameters(superThis, method, path, objectName, transformation) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this._body = transformation;
        return _this;
    }
    replaceInstancesTransformationByObjectNameParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceInstancesTransformationByObjectNameParameters;
}(platformSDKMethodParameters));
;
var deleteInstanceByIdParameters = /** @class */ (function (_super) {
    __extends(deleteInstanceByIdParameters, _super);
    function deleteInstanceByIdParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    deleteInstanceByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteInstanceByIdParameters;
}(platformSDKMethodParameters));
;
var getInstanceByIdParameters = /** @class */ (function (_super) {
    __extends(getInstanceByIdParameters, _super);
    function getInstanceByIdParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getInstanceByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getInstanceByIdParameters;
}(platformSDKMethodParameters));
;
var replaceInstanceByIdParameters = /** @class */ (function (_super) {
    __extends(replaceInstanceByIdParameters, _super);
    function replaceInstanceByIdParameters(superThis, method, path, id, elementInstance) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = elementInstance;
        return _this;
    }
    replaceInstanceByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceInstanceByIdParameters;
}(platformSDKMethodParameters));
;
var updateInstanceByIdParameters = /** @class */ (function (_super) {
    __extends(updateInstanceByIdParameters, _super);
    function updateInstanceByIdParameters(superThis, method, path, id, elementInstance) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = elementInstance;
        return _this;
    }
    updateInstanceByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return updateInstanceByIdParameters;
}(platformSDKMethodParameters));
;
var getInstancesConfiguration2Parameters = /** @class */ (function (_super) {
    __extends(getInstancesConfiguration2Parameters, _super);
    function getInstancesConfiguration2Parameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getInstancesConfiguration2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getInstancesConfiguration2Parameters;
}(platformSDKMethodParameters));
;
var getInstancesConfigurationByConfigId2Parameters = /** @class */ (function (_super) {
    __extends(getInstancesConfigurationByConfigId2Parameters, _super);
    function getInstancesConfigurationByConfigId2Parameters(superThis, method, path, id, configId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{configId}', "" + configId);
        return _this;
    }
    getInstancesConfigurationByConfigId2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getInstancesConfigurationByConfigId2Parameters;
}(platformSDKMethodParameters));
;
var updateInstancesConfigurationByConfigId2Parameters = /** @class */ (function (_super) {
    __extends(updateInstancesConfigurationByConfigId2Parameters, _super);
    function updateInstancesConfigurationByConfigId2Parameters(superThis, method, path, id, configId, config) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{configId}', "" + configId);
        _this._body = config;
        return _this;
    }
    updateInstancesConfigurationByConfigId2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return updateInstancesConfigurationByConfigId2Parameters;
}(platformSDKMethodParameters));
;
var getInstancesDocs2Parameters = /** @class */ (function (_super) {
    __extends(getInstancesDocs2Parameters, _super);
    function getInstancesDocs2Parameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getInstancesDocs2Parameters.prototype.operationId = function (operationId) {
        this.queryParameters['operationId'] = operationId;
        return this;
    };
    getInstancesDocs2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getInstancesDocs2Parameters;
}(platformSDKMethodParameters));
;
var getInstancesDocByOperationId2Parameters = /** @class */ (function (_super) {
    __extends(getInstancesDocByOperationId2Parameters, _super);
    function getInstancesDocByOperationId2Parameters(superThis, method, path, id, operationId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{operationId}', "" + operationId);
        return _this;
    }
    getInstancesDocByOperationId2Parameters.prototype.discovery = function (discovery) {
        this.queryParameters['discovery'] = discovery;
        return this;
    };
    getInstancesDocByOperationId2Parameters.prototype.basic = function (basic) {
        this.queryParameters['basic'] = basic;
        return this;
    };
    getInstancesDocByOperationId2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getInstancesDocByOperationId2Parameters;
}(platformSDKMethodParameters));
;
var getInstancesDocsDefinitions2Parameters = /** @class */ (function (_super) {
    __extends(getInstancesDocsDefinitions2Parameters, _super);
    function getInstancesDocsDefinitions2Parameters(superThis, method, path, id, operationId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{operationId}', "" + operationId);
        return _this;
    }
    getInstancesDocsDefinitions2Parameters.prototype.discovery = function (discovery) {
        this.queryParameters['discovery'] = discovery;
        return this;
    };
    getInstancesDocsDefinitions2Parameters.prototype.resolveReferences = function (resolveReferences) {
        this.queryParameters['resolveReferences'] = resolveReferences;
        return this;
    };
    getInstancesDocsDefinitions2Parameters.prototype.basic = function (basic) {
        this.queryParameters['basic'] = basic;
        return this;
    };
    getInstancesDocsDefinitions2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getInstancesDocsDefinitions2Parameters;
}(platformSDKMethodParameters));
;
var replaceInstancesEnabled2Parameters = /** @class */ (function (_super) {
    __extends(replaceInstancesEnabled2Parameters, _super);
    function replaceInstancesEnabled2Parameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    replaceInstancesEnabled2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceInstancesEnabled2Parameters;
}(platformSDKMethodParameters));
;
var deleteInstancesEnabled2Parameters = /** @class */ (function (_super) {
    __extends(deleteInstancesEnabled2Parameters, _super);
    function deleteInstancesEnabled2Parameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    deleteInstancesEnabled2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteInstancesEnabled2Parameters;
}(platformSDKMethodParameters));
;
var getInstancesEvents2Parameters = /** @class */ (function (_super) {
    __extends(getInstancesEvents2Parameters, _super);
    function getInstancesEvents2Parameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getInstancesEvents2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getInstancesEvents2Parameters;
}(platformSDKMethodParameters));
;
var getInstancesEventByEventId2Parameters = /** @class */ (function (_super) {
    __extends(getInstancesEventByEventId2Parameters, _super);
    function getInstancesEventByEventId2Parameters(superThis, method, path, id, eventId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{eventId}', "" + eventId);
        return _this;
    }
    getInstancesEventByEventId2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getInstancesEventByEventId2Parameters;
}(platformSDKMethodParameters));
;
var getInstancesObjectsDefinitions2Parameters = /** @class */ (function (_super) {
    __extends(getInstancesObjectsDefinitions2Parameters, _super);
    function getInstancesObjectsDefinitions2Parameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getInstancesObjectsDefinitions2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getInstancesObjectsDefinitions2Parameters;
}(platformSDKMethodParameters));
;
var deleteInstancesObjectsObjectNameDefinitions2Parameters = /** @class */ (function (_super) {
    __extends(deleteInstancesObjectsObjectNameDefinitions2Parameters, _super);
    function deleteInstancesObjectsObjectNameDefinitions2Parameters(superThis, method, path, id, objectName) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        return _this;
    }
    deleteInstancesObjectsObjectNameDefinitions2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteInstancesObjectsObjectNameDefinitions2Parameters;
}(platformSDKMethodParameters));
;
var getInstancesObjectsObjectNameDefinitions2Parameters = /** @class */ (function (_super) {
    __extends(getInstancesObjectsObjectNameDefinitions2Parameters, _super);
    function getInstancesObjectsObjectNameDefinitions2Parameters(superThis, method, path, id, objectName) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        return _this;
    }
    getInstancesObjectsObjectNameDefinitions2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getInstancesObjectsObjectNameDefinitions2Parameters;
}(platformSDKMethodParameters));
;
var createInstanceObjectObjectNameDefinition2Parameters = /** @class */ (function (_super) {
    __extends(createInstanceObjectObjectNameDefinition2Parameters, _super);
    function createInstanceObjectObjectNameDefinition2Parameters(superThis, method, path, id, objectName, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this._body = body;
        return _this;
    }
    createInstanceObjectObjectNameDefinition2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createInstanceObjectObjectNameDefinition2Parameters;
}(platformSDKMethodParameters));
;
var replaceInstancesObjectsObjectNameDefinitions2Parameters = /** @class */ (function (_super) {
    __extends(replaceInstancesObjectsObjectNameDefinitions2Parameters, _super);
    function replaceInstancesObjectsObjectNameDefinitions2Parameters(superThis, method, path, id, objectName, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this._body = body;
        return _this;
    }
    replaceInstancesObjectsObjectNameDefinitions2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceInstancesObjectsObjectNameDefinitions2Parameters;
}(platformSDKMethodParameters));
;
var replaceInstancesTraceLogging2Parameters = /** @class */ (function (_super) {
    __extends(replaceInstancesTraceLogging2Parameters, _super);
    function replaceInstancesTraceLogging2Parameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    replaceInstancesTraceLogging2Parameters.prototype.config = function (config) {
        if (this.queryParameters['config'] !== undefined) {
            this._body = this.queryParameters['config'];
        }
        return this;
    };
    replaceInstancesTraceLogging2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceInstancesTraceLogging2Parameters;
}(platformSDKMethodParameters));
;
var deleteInstancesTraceLogging2Parameters = /** @class */ (function (_super) {
    __extends(deleteInstancesTraceLogging2Parameters, _super);
    function deleteInstancesTraceLogging2Parameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    deleteInstancesTraceLogging2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteInstancesTraceLogging2Parameters;
}(platformSDKMethodParameters));
;
var deleteInstancesTransformations2Parameters = /** @class */ (function (_super) {
    __extends(deleteInstancesTransformations2Parameters, _super);
    function deleteInstancesTransformations2Parameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    deleteInstancesTransformations2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteInstancesTransformations2Parameters;
}(platformSDKMethodParameters));
;
var getInstancesTransformations2Parameters = /** @class */ (function (_super) {
    __extends(getInstancesTransformations2Parameters, _super);
    function getInstancesTransformations2Parameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getInstancesTransformations2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getInstancesTransformations2Parameters;
}(platformSDKMethodParameters));
;
var deleteInstancesTransformationByObjectName2Parameters = /** @class */ (function (_super) {
    __extends(deleteInstancesTransformationByObjectName2Parameters, _super);
    function deleteInstancesTransformationByObjectName2Parameters(superThis, method, path, id, objectName) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        return _this;
    }
    deleteInstancesTransformationByObjectName2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteInstancesTransformationByObjectName2Parameters;
}(platformSDKMethodParameters));
;
var getInstancesTransformationByObjectName2Parameters = /** @class */ (function (_super) {
    __extends(getInstancesTransformationByObjectName2Parameters, _super);
    function getInstancesTransformationByObjectName2Parameters(superThis, method, path, id, objectName) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        return _this;
    }
    getInstancesTransformationByObjectName2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getInstancesTransformationByObjectName2Parameters;
}(platformSDKMethodParameters));
;
var createInstanceTransformationByObjectName2Parameters = /** @class */ (function (_super) {
    __extends(createInstanceTransformationByObjectName2Parameters, _super);
    function createInstanceTransformationByObjectName2Parameters(superThis, method, path, id, objectName, transformation) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this._body = transformation;
        return _this;
    }
    createInstanceTransformationByObjectName2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createInstanceTransformationByObjectName2Parameters;
}(platformSDKMethodParameters));
;
var replaceInstancesTransformationByObjectName2Parameters = /** @class */ (function (_super) {
    __extends(replaceInstancesTransformationByObjectName2Parameters, _super);
    function replaceInstancesTransformationByObjectName2Parameters(superThis, method, path, id, objectName, transformation) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this._body = transformation;
        return _this;
    }
    replaceInstancesTransformationByObjectName2Parameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceInstancesTransformationByObjectName2Parameters;
}(platformSDKMethodParameters));
;
var getJobsParameters = /** @class */ (function (_super) {
    __extends(getJobsParameters, _super);
    function getJobsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getJobsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getJobsParameters;
}(platformSDKMethodParameters));
;
var createJobParameters = /** @class */ (function (_super) {
    __extends(createJobParameters, _super);
    function createJobParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    createJobParameters.prototype.body = function (body) {
        if (this.queryParameters['body'] !== undefined) {
            this._body = this.queryParameters['body'];
        }
        return this;
    };
    createJobParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createJobParameters;
}(platformSDKMethodParameters));
;
var getJobsExecutionsParameters = /** @class */ (function (_super) {
    __extends(getJobsExecutionsParameters, _super);
    function getJobsExecutionsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getJobsExecutionsParameters.prototype.page = function (page) {
        this.queryParameters['page'] = page;
        return this;
    };
    getJobsExecutionsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getJobsExecutionsParameters.prototype.elementKeys = function (elementKeys) {
        this.queryParameters['elementKeys[]'] = elementKeys;
        return this;
    };
    getJobsExecutionsParameters.prototype.startTime = function (startTime) {
        this.queryParameters['startTime'] = startTime;
        return this;
    };
    getJobsExecutionsParameters.prototype.endTime = function (endTime) {
        this.queryParameters['endTime'] = endTime;
        return this;
    };
    getJobsExecutionsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getJobsExecutionsParameters;
}(platformSDKMethodParameters));
;
var deleteJobByIdParameters = /** @class */ (function (_super) {
    __extends(deleteJobByIdParameters, _super);
    function deleteJobByIdParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    deleteJobByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteJobByIdParameters;
}(platformSDKMethodParameters));
;
var getJobByIdParameters = /** @class */ (function (_super) {
    __extends(getJobByIdParameters, _super);
    function getJobByIdParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getJobByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getJobByIdParameters;
}(platformSDKMethodParameters));
;
var replaceJobsDisableParameters = /** @class */ (function (_super) {
    __extends(replaceJobsDisableParameters, _super);
    function replaceJobsDisableParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    replaceJobsDisableParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceJobsDisableParameters;
}(platformSDKMethodParameters));
;
var replaceJobsEnableParameters = /** @class */ (function (_super) {
    __extends(replaceJobsEnableParameters, _super);
    function replaceJobsEnableParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    replaceJobsEnableParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceJobsEnableParameters;
}(platformSDKMethodParameters));
;
var getJobsHistoryParameters = /** @class */ (function (_super) {
    __extends(getJobsHistoryParameters, _super);
    function getJobsHistoryParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getJobsHistoryParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getJobsHistoryParameters;
}(platformSDKMethodParameters));
;
var getJobsHistoryByHistoryIdParameters = /** @class */ (function (_super) {
    __extends(getJobsHistoryByHistoryIdParameters, _super);
    function getJobsHistoryByHistoryIdParameters(superThis, method, path, id, historyId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{historyId}', "" + historyId);
        return _this;
    }
    getJobsHistoryByHistoryIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getJobsHistoryByHistoryIdParameters;
}(platformSDKMethodParameters));
;
var updateJobsRescheduleParameters = /** @class */ (function (_super) {
    __extends(updateJobsRescheduleParameters, _super);
    function updateJobsRescheduleParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    updateJobsRescheduleParameters.prototype.body = function (body) {
        if (this.queryParameters['body'] !== undefined) {
            this._body = this.queryParameters['body'];
        }
        return this;
    };
    updateJobsRescheduleParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return updateJobsRescheduleParameters;
}(platformSDKMethodParameters));
;
var getMetricsApiParameters = /** @class */ (function (_super) {
    __extends(getMetricsApiParameters, _super);
    function getMetricsApiParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getMetricsApiParameters.prototype.customerIds = function (customerIds) {
        this.queryParameters['customerIds[]'] = customerIds;
        return this;
    };
    getMetricsApiParameters.prototype.orgIds = function (orgIds) {
        this.queryParameters['orgIds[]'] = orgIds;
        return this;
    };
    getMetricsApiParameters.prototype.accountIds = function (accountIds) {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    };
    getMetricsApiParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getMetricsApiParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getMetricsApiParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getMetricsApiParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getMetricsApiParameters.prototype.agg = function (agg) {
        this.queryParameters['agg'] = agg;
        return this;
    };
    getMetricsApiParameters.prototype.interval = function (interval) {
        this.queryParameters['interval'] = interval;
        return this;
    };
    getMetricsApiParameters.prototype.emptyIntervals = function (emptyIntervals) {
        this.queryParameters['emptyIntervals'] = emptyIntervals;
        return this;
    };
    getMetricsApiParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getMetricsApiParameters;
}(platformSDKMethodParameters));
;
var getMetricsBulkJobsParameters = /** @class */ (function (_super) {
    __extends(getMetricsBulkJobsParameters, _super);
    function getMetricsBulkJobsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getMetricsBulkJobsParameters.prototype.customerIds = function (customerIds) {
        this.queryParameters['customerIds[]'] = customerIds;
        return this;
    };
    getMetricsBulkJobsParameters.prototype.orgIds = function (orgIds) {
        this.queryParameters['orgIds[]'] = orgIds;
        return this;
    };
    getMetricsBulkJobsParameters.prototype.accountIds = function (accountIds) {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    };
    getMetricsBulkJobsParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getMetricsBulkJobsParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getMetricsBulkJobsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getMetricsBulkJobsParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getMetricsBulkJobsParameters.prototype.agg = function (agg) {
        this.queryParameters['agg'] = agg;
        return this;
    };
    getMetricsBulkJobsParameters.prototype.interval = function (interval) {
        this.queryParameters['interval'] = interval;
        return this;
    };
    getMetricsBulkJobsParameters.prototype.emptyIntervals = function (emptyIntervals) {
        this.queryParameters['emptyIntervals'] = emptyIntervals;
        return this;
    };
    getMetricsBulkJobsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getMetricsBulkJobsParameters;
}(platformSDKMethodParameters));
;
var getMetricsElementInstancesCreatedParameters = /** @class */ (function (_super) {
    __extends(getMetricsElementInstancesCreatedParameters, _super);
    function getMetricsElementInstancesCreatedParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getMetricsElementInstancesCreatedParameters.prototype.customerIds = function (customerIds) {
        this.queryParameters['customerIds[]'] = customerIds;
        return this;
    };
    getMetricsElementInstancesCreatedParameters.prototype.orgIds = function (orgIds) {
        this.queryParameters['orgIds[]'] = orgIds;
        return this;
    };
    getMetricsElementInstancesCreatedParameters.prototype.accountIds = function (accountIds) {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    };
    getMetricsElementInstancesCreatedParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getMetricsElementInstancesCreatedParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getMetricsElementInstancesCreatedParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getMetricsElementInstancesCreatedParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getMetricsElementInstancesCreatedParameters.prototype.agg = function (agg) {
        this.queryParameters['agg'] = agg;
        return this;
    };
    getMetricsElementInstancesCreatedParameters.prototype.interval = function (interval) {
        this.queryParameters['interval'] = interval;
        return this;
    };
    getMetricsElementInstancesCreatedParameters.prototype.emptyIntervals = function (emptyIntervals) {
        this.queryParameters['emptyIntervals'] = emptyIntervals;
        return this;
    };
    getMetricsElementInstancesCreatedParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getMetricsElementInstancesCreatedParameters;
}(platformSDKMethodParameters));
;
var getMetricsElementsCreatedParameters = /** @class */ (function (_super) {
    __extends(getMetricsElementsCreatedParameters, _super);
    function getMetricsElementsCreatedParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getMetricsElementsCreatedParameters.prototype.customerIds = function (customerIds) {
        this.queryParameters['customerIds[]'] = customerIds;
        return this;
    };
    getMetricsElementsCreatedParameters.prototype.orgIds = function (orgIds) {
        this.queryParameters['orgIds[]'] = orgIds;
        return this;
    };
    getMetricsElementsCreatedParameters.prototype.accountIds = function (accountIds) {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    };
    getMetricsElementsCreatedParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getMetricsElementsCreatedParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getMetricsElementsCreatedParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getMetricsElementsCreatedParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getMetricsElementsCreatedParameters.prototype.agg = function (agg) {
        this.queryParameters['agg'] = agg;
        return this;
    };
    getMetricsElementsCreatedParameters.prototype.interval = function (interval) {
        this.queryParameters['interval'] = interval;
        return this;
    };
    getMetricsElementsCreatedParameters.prototype.emptyIntervals = function (emptyIntervals) {
        this.queryParameters['emptyIntervals'] = emptyIntervals;
        return this;
    };
    getMetricsElementsCreatedParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getMetricsElementsCreatedParameters;
}(platformSDKMethodParameters));
;
var getMetricsEventsParameters = /** @class */ (function (_super) {
    __extends(getMetricsEventsParameters, _super);
    function getMetricsEventsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getMetricsEventsParameters.prototype.customerIds = function (customerIds) {
        this.queryParameters['customerIds[]'] = customerIds;
        return this;
    };
    getMetricsEventsParameters.prototype.orgIds = function (orgIds) {
        this.queryParameters['orgIds[]'] = orgIds;
        return this;
    };
    getMetricsEventsParameters.prototype.accountIds = function (accountIds) {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    };
    getMetricsEventsParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getMetricsEventsParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getMetricsEventsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getMetricsEventsParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getMetricsEventsParameters.prototype.agg = function (agg) {
        this.queryParameters['agg'] = agg;
        return this;
    };
    getMetricsEventsParameters.prototype.interval = function (interval) {
        this.queryParameters['interval'] = interval;
        return this;
    };
    getMetricsEventsParameters.prototype.emptyIntervals = function (emptyIntervals) {
        this.queryParameters['emptyIntervals'] = emptyIntervals;
        return this;
    };
    getMetricsEventsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getMetricsEventsParameters;
}(platformSDKMethodParameters));
;
var getMetricsFormulaExecutionsParameters = /** @class */ (function (_super) {
    __extends(getMetricsFormulaExecutionsParameters, _super);
    function getMetricsFormulaExecutionsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getMetricsFormulaExecutionsParameters.prototype.customerIds = function (customerIds) {
        this.queryParameters['customerIds[]'] = customerIds;
        return this;
    };
    getMetricsFormulaExecutionsParameters.prototype.orgIds = function (orgIds) {
        this.queryParameters['orgIds[]'] = orgIds;
        return this;
    };
    getMetricsFormulaExecutionsParameters.prototype.accountIds = function (accountIds) {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    };
    getMetricsFormulaExecutionsParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getMetricsFormulaExecutionsParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getMetricsFormulaExecutionsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getMetricsFormulaExecutionsParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getMetricsFormulaExecutionsParameters.prototype.agg = function (agg) {
        this.queryParameters['agg'] = agg;
        return this;
    };
    getMetricsFormulaExecutionsParameters.prototype.interval = function (interval) {
        this.queryParameters['interval'] = interval;
        return this;
    };
    getMetricsFormulaExecutionsParameters.prototype.emptyIntervals = function (emptyIntervals) {
        this.queryParameters['emptyIntervals'] = emptyIntervals;
        return this;
    };
    getMetricsFormulaExecutionsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getMetricsFormulaExecutionsParameters;
}(platformSDKMethodParameters));
;
var getMetricsFormulasCreatedParameters = /** @class */ (function (_super) {
    __extends(getMetricsFormulasCreatedParameters, _super);
    function getMetricsFormulasCreatedParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getMetricsFormulasCreatedParameters.prototype.customerIds = function (customerIds) {
        this.queryParameters['customerIds[]'] = customerIds;
        return this;
    };
    getMetricsFormulasCreatedParameters.prototype.orgIds = function (orgIds) {
        this.queryParameters['orgIds[]'] = orgIds;
        return this;
    };
    getMetricsFormulasCreatedParameters.prototype.accountIds = function (accountIds) {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    };
    getMetricsFormulasCreatedParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getMetricsFormulasCreatedParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getMetricsFormulasCreatedParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getMetricsFormulasCreatedParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getMetricsFormulasCreatedParameters.prototype.agg = function (agg) {
        this.queryParameters['agg'] = agg;
        return this;
    };
    getMetricsFormulasCreatedParameters.prototype.interval = function (interval) {
        this.queryParameters['interval'] = interval;
        return this;
    };
    getMetricsFormulasCreatedParameters.prototype.emptyIntervals = function (emptyIntervals) {
        this.queryParameters['emptyIntervals'] = emptyIntervals;
        return this;
    };
    getMetricsFormulasCreatedParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getMetricsFormulasCreatedParameters;
}(platformSDKMethodParameters));
;
var getMetricsHubApiParameters = /** @class */ (function (_super) {
    __extends(getMetricsHubApiParameters, _super);
    function getMetricsHubApiParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getMetricsHubApiParameters.prototype.customerIds = function (customerIds) {
        this.queryParameters['customerIds[]'] = customerIds;
        return this;
    };
    getMetricsHubApiParameters.prototype.orgIds = function (orgIds) {
        this.queryParameters['orgIds[]'] = orgIds;
        return this;
    };
    getMetricsHubApiParameters.prototype.accountIds = function (accountIds) {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    };
    getMetricsHubApiParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getMetricsHubApiParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getMetricsHubApiParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getMetricsHubApiParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getMetricsHubApiParameters.prototype.agg = function (agg) {
        this.queryParameters['agg'] = agg;
        return this;
    };
    getMetricsHubApiParameters.prototype.interval = function (interval) {
        this.queryParameters['interval'] = interval;
        return this;
    };
    getMetricsHubApiParameters.prototype.emptyIntervals = function (emptyIntervals) {
        this.queryParameters['emptyIntervals'] = emptyIntervals;
        return this;
    };
    getMetricsHubApiParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getMetricsHubApiParameters;
}(platformSDKMethodParameters));
;
var getMetricsHubsCreatedParameters = /** @class */ (function (_super) {
    __extends(getMetricsHubsCreatedParameters, _super);
    function getMetricsHubsCreatedParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getMetricsHubsCreatedParameters.prototype.customerIds = function (customerIds) {
        this.queryParameters['customerIds[]'] = customerIds;
        return this;
    };
    getMetricsHubsCreatedParameters.prototype.orgIds = function (orgIds) {
        this.queryParameters['orgIds[]'] = orgIds;
        return this;
    };
    getMetricsHubsCreatedParameters.prototype.accountIds = function (accountIds) {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    };
    getMetricsHubsCreatedParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getMetricsHubsCreatedParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getMetricsHubsCreatedParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getMetricsHubsCreatedParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getMetricsHubsCreatedParameters.prototype.agg = function (agg) {
        this.queryParameters['agg'] = agg;
        return this;
    };
    getMetricsHubsCreatedParameters.prototype.interval = function (interval) {
        this.queryParameters['interval'] = interval;
        return this;
    };
    getMetricsHubsCreatedParameters.prototype.emptyIntervals = function (emptyIntervals) {
        this.queryParameters['emptyIntervals'] = emptyIntervals;
        return this;
    };
    getMetricsHubsCreatedParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getMetricsHubsCreatedParameters;
}(platformSDKMethodParameters));
;
var getMetricsVdrsCreatedParameters = /** @class */ (function (_super) {
    __extends(getMetricsVdrsCreatedParameters, _super);
    function getMetricsVdrsCreatedParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getMetricsVdrsCreatedParameters.prototype.customerIds = function (customerIds) {
        this.queryParameters['customerIds[]'] = customerIds;
        return this;
    };
    getMetricsVdrsCreatedParameters.prototype.orgIds = function (orgIds) {
        this.queryParameters['orgIds[]'] = orgIds;
        return this;
    };
    getMetricsVdrsCreatedParameters.prototype.accountIds = function (accountIds) {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    };
    getMetricsVdrsCreatedParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getMetricsVdrsCreatedParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getMetricsVdrsCreatedParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getMetricsVdrsCreatedParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getMetricsVdrsCreatedParameters.prototype.agg = function (agg) {
        this.queryParameters['agg'] = agg;
        return this;
    };
    getMetricsVdrsCreatedParameters.prototype.interval = function (interval) {
        this.queryParameters['interval'] = interval;
        return this;
    };
    getMetricsVdrsCreatedParameters.prototype.emptyIntervals = function (emptyIntervals) {
        this.queryParameters['emptyIntervals'] = emptyIntervals;
        return this;
    };
    getMetricsVdrsCreatedParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getMetricsVdrsCreatedParameters;
}(platformSDKMethodParameters));
;
var getMetricsVdrsInvokedParameters = /** @class */ (function (_super) {
    __extends(getMetricsVdrsInvokedParameters, _super);
    function getMetricsVdrsInvokedParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getMetricsVdrsInvokedParameters.prototype.customerIds = function (customerIds) {
        this.queryParameters['customerIds[]'] = customerIds;
        return this;
    };
    getMetricsVdrsInvokedParameters.prototype.orgIds = function (orgIds) {
        this.queryParameters['orgIds[]'] = orgIds;
        return this;
    };
    getMetricsVdrsInvokedParameters.prototype.accountIds = function (accountIds) {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    };
    getMetricsVdrsInvokedParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getMetricsVdrsInvokedParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getMetricsVdrsInvokedParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getMetricsVdrsInvokedParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getMetricsVdrsInvokedParameters.prototype.agg = function (agg) {
        this.queryParameters['agg'] = agg;
        return this;
    };
    getMetricsVdrsInvokedParameters.prototype.interval = function (interval) {
        this.queryParameters['interval'] = interval;
        return this;
    };
    getMetricsVdrsInvokedParameters.prototype.emptyIntervals = function (emptyIntervals) {
        this.queryParameters['emptyIntervals'] = emptyIntervals;
        return this;
    };
    getMetricsVdrsInvokedParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getMetricsVdrsInvokedParameters;
}(platformSDKMethodParameters));
;
var createOrganizationParameters = /** @class */ (function (_super) {
    __extends(createOrganizationParameters, _super);
    function createOrganizationParameters(superThis, method, path, organization) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this._body = organization;
        return _this;
    }
    createOrganizationParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createOrganizationParameters;
}(platformSDKMethodParameters));
;
var deleteOrganizationsElementsTransformationsParameters = /** @class */ (function (_super) {
    __extends(deleteOrganizationsElementsTransformationsParameters, _super);
    function deleteOrganizationsElementsTransformationsParameters(superThis, method, path, keyOrId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        return _this;
    }
    deleteOrganizationsElementsTransformationsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteOrganizationsElementsTransformationsParameters;
}(platformSDKMethodParameters));
;
var getOrganizationsElementsTransformationsParameters = /** @class */ (function (_super) {
    __extends(getOrganizationsElementsTransformationsParameters, _super);
    function getOrganizationsElementsTransformationsParameters(superThis, method, path, keyOrId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        return _this;
    }
    getOrganizationsElementsTransformationsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getOrganizationsElementsTransformationsParameters;
}(platformSDKMethodParameters));
;
var deleteOrganizationsElementsTransformationByObjectNameParameters = /** @class */ (function (_super) {
    __extends(deleteOrganizationsElementsTransformationByObjectNameParameters, _super);
    function deleteOrganizationsElementsTransformationByObjectNameParameters(superThis, method, path, keyOrId, objectName) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        return _this;
    }
    deleteOrganizationsElementsTransformationByObjectNameParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteOrganizationsElementsTransformationByObjectNameParameters;
}(platformSDKMethodParameters));
;
var getOrganizationsElementsTransformationByObjectNameParameters = /** @class */ (function (_super) {
    __extends(getOrganizationsElementsTransformationByObjectNameParameters, _super);
    function getOrganizationsElementsTransformationByObjectNameParameters(superThis, method, path, keyOrId, objectName) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        return _this;
    }
    getOrganizationsElementsTransformationByObjectNameParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getOrganizationsElementsTransformationByObjectNameParameters;
}(platformSDKMethodParameters));
;
var createOrganizationElementTransformationByObjectNameParameters = /** @class */ (function (_super) {
    __extends(createOrganizationElementTransformationByObjectNameParameters, _super);
    function createOrganizationElementTransformationByObjectNameParameters(superThis, method, path, keyOrId, objectName, transformation) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this._body = transformation;
        return _this;
    }
    createOrganizationElementTransformationByObjectNameParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createOrganizationElementTransformationByObjectNameParameters;
}(platformSDKMethodParameters));
;
var replaceOrganizationsElementsTransformationByObjectNameParameters = /** @class */ (function (_super) {
    __extends(replaceOrganizationsElementsTransformationByObjectNameParameters, _super);
    function replaceOrganizationsElementsTransformationByObjectNameParameters(superThis, method, path, keyOrId, objectName, transformation) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{keyOrId}', "" + keyOrId);
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this._body = transformation;
        return _this;
    }
    replaceOrganizationsElementsTransformationByObjectNameParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceOrganizationsElementsTransformationByObjectNameParameters;
}(platformSDKMethodParameters));
;
var getOrganizationsMeParameters = /** @class */ (function (_super) {
    __extends(getOrganizationsMeParameters, _super);
    function getOrganizationsMeParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getOrganizationsMeParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getOrganizationsMeParameters;
}(platformSDKMethodParameters));
;
var replaceOrganizationsMeParameters = /** @class */ (function (_super) {
    __extends(replaceOrganizationsMeParameters, _super);
    function replaceOrganizationsMeParameters(superThis, method, path, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this._body = body;
        return _this;
    }
    replaceOrganizationsMeParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceOrganizationsMeParameters;
}(platformSDKMethodParameters));
;
var deleteOrganizationsObjectsDefinitionsParameters = /** @class */ (function (_super) {
    __extends(deleteOrganizationsObjectsDefinitionsParameters, _super);
    function deleteOrganizationsObjectsDefinitionsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    deleteOrganizationsObjectsDefinitionsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteOrganizationsObjectsDefinitionsParameters;
}(platformSDKMethodParameters));
;
var getOrganizationsObjectsDefinitionsParameters = /** @class */ (function (_super) {
    __extends(getOrganizationsObjectsDefinitionsParameters, _super);
    function getOrganizationsObjectsDefinitionsParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getOrganizationsObjectsDefinitionsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getOrganizationsObjectsDefinitionsParameters;
}(platformSDKMethodParameters));
;
var createOrganizationObjectDefinitionParameters = /** @class */ (function (_super) {
    __extends(createOrganizationObjectDefinitionParameters, _super);
    function createOrganizationObjectDefinitionParameters(superThis, method, path, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this._body = body;
        return _this;
    }
    createOrganizationObjectDefinitionParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createOrganizationObjectDefinitionParameters;
}(platformSDKMethodParameters));
;
var deleteOrganizationsObjectsObjectNameDefinitionsParameters = /** @class */ (function (_super) {
    __extends(deleteOrganizationsObjectsObjectNameDefinitionsParameters, _super);
    function deleteOrganizationsObjectsObjectNameDefinitionsParameters(superThis, method, path, objectName) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        return _this;
    }
    deleteOrganizationsObjectsObjectNameDefinitionsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteOrganizationsObjectsObjectNameDefinitionsParameters;
}(platformSDKMethodParameters));
;
var getOrganizationsObjectsObjectNameDefinitionsParameters = /** @class */ (function (_super) {
    __extends(getOrganizationsObjectsObjectNameDefinitionsParameters, _super);
    function getOrganizationsObjectsObjectNameDefinitionsParameters(superThis, method, path, objectName) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        return _this;
    }
    getOrganizationsObjectsObjectNameDefinitionsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getOrganizationsObjectsObjectNameDefinitionsParameters;
}(platformSDKMethodParameters));
;
var createOrganizationObjectObjectNameDefinitionParameters = /** @class */ (function (_super) {
    __extends(createOrganizationObjectObjectNameDefinitionParameters, _super);
    function createOrganizationObjectObjectNameDefinitionParameters(superThis, method, path, objectName, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this._body = body;
        return _this;
    }
    createOrganizationObjectObjectNameDefinitionParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createOrganizationObjectObjectNameDefinitionParameters;
}(platformSDKMethodParameters));
;
var replaceOrganizationsObjectsObjectNameDefinitionsParameters = /** @class */ (function (_super) {
    __extends(replaceOrganizationsObjectsObjectNameDefinitionsParameters, _super);
    function replaceOrganizationsObjectsObjectNameDefinitionsParameters(superThis, method, path, objectName, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{objectName}', "" + objectName);
        _this._body = body;
        return _this;
    }
    replaceOrganizationsObjectsObjectNameDefinitionsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceOrganizationsObjectsObjectNameDefinitionsParameters;
}(platformSDKMethodParameters));
;
var getOrganizationsUsersParameters = /** @class */ (function (_super) {
    __extends(getOrganizationsUsersParameters, _super);
    function getOrganizationsUsersParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getOrganizationsUsersParameters.prototype.where = function (where) {
        this.queryParameters['where'] = where;
        return this;
    };
    getOrganizationsUsersParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getOrganizationsUsersParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getOrganizationsUsersParameters.prototype.includeInactive = function (includeInactive) {
        this.queryParameters['includeInactive'] = includeInactive;
        return this;
    };
    getOrganizationsUsersParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getOrganizationsUsersParameters;
}(platformSDKMethodParameters));
;
var createOrganizationUserParameters = /** @class */ (function (_super) {
    __extends(createOrganizationUserParameters, _super);
    function createOrganizationUserParameters(superThis, method, path, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this._body = body;
        return _this;
    }
    createOrganizationUserParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createOrganizationUserParameters;
}(platformSDKMethodParameters));
;
var getOrganizationsUserByEmailOrIdParameters = /** @class */ (function (_super) {
    __extends(getOrganizationsUserByEmailOrIdParameters, _super);
    function getOrganizationsUserByEmailOrIdParameters(superThis, method, path, emailOrId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{emailOrId}', "" + emailOrId);
        return _this;
    }
    getOrganizationsUserByEmailOrIdParameters.prototype.elementsUserPassword = function (elementsUserPassword) {
        this.headers['Elements-User-Password'] = elementsUserPassword;
        return this;
    };
    getOrganizationsUserByEmailOrIdParameters.prototype.includeInactive = function (includeInactive) {
        this.queryParameters['includeInactive'] = includeInactive;
        return this;
    };
    getOrganizationsUserByEmailOrIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getOrganizationsUserByEmailOrIdParameters;
}(platformSDKMethodParameters));
;
var deleteOrganizationsUserByIdParameters = /** @class */ (function (_super) {
    __extends(deleteOrganizationsUserByIdParameters, _super);
    function deleteOrganizationsUserByIdParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    deleteOrganizationsUserByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteOrganizationsUserByIdParameters;
}(platformSDKMethodParameters));
;
var updateOrganizationsUserByIdParameters = /** @class */ (function (_super) {
    __extends(updateOrganizationsUserByIdParameters, _super);
    function updateOrganizationsUserByIdParameters(superThis, method, path, id, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = body;
        return _this;
    }
    updateOrganizationsUserByIdParameters.prototype.permanent = function (permanent) {
        this.queryParameters['permanent'] = permanent;
        return this;
    };
    updateOrganizationsUserByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return updateOrganizationsUserByIdParameters;
}(platformSDKMethodParameters));
;
var createOrganizationAccountParameters = /** @class */ (function (_super) {
    __extends(createOrganizationAccountParameters, _super);
    function createOrganizationAccountParameters(superThis, method, path, id, account) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = account;
        return _this;
    }
    createOrganizationAccountParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return createOrganizationAccountParameters;
}(platformSDKMethodParameters));
;
var getOrganizationsAccountsParameters = /** @class */ (function (_super) {
    __extends(getOrganizationsAccountsParameters, _super);
    function getOrganizationsAccountsParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getOrganizationsAccountsParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getOrganizationsAccountsParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getOrganizationsAccountsParameters.prototype.where = function (where) {
        this.queryParameters['where'] = where;
        return this;
    };
    getOrganizationsAccountsParameters.prototype.includeInactive = function (includeInactive) {
        this.queryParameters['includeInactive'] = includeInactive;
        return this;
    };
    getOrganizationsAccountsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getOrganizationsAccountsParameters;
}(platformSDKMethodParameters));
;
var getOrganizationsAccountByAccountIdParameters = /** @class */ (function (_super) {
    __extends(getOrganizationsAccountByAccountIdParameters, _super);
    function getOrganizationsAccountByAccountIdParameters(superThis, method, path, id, accountId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this.path = _this.path.replace('{accountId}', "" + accountId);
        return _this;
    }
    getOrganizationsAccountByAccountIdParameters.prototype.includeInactive = function (includeInactive) {
        this.queryParameters['includeInactive'] = includeInactive;
        return this;
    };
    getOrganizationsAccountByAccountIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getOrganizationsAccountByAccountIdParameters;
}(platformSDKMethodParameters));
;
var getUsageParameters = /** @class */ (function (_super) {
    __extends(getUsageParameters, _super);
    function getUsageParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getUsageParameters.prototype.hub = function (hub) {
        this.queryParameters['hub'] = hub;
        return this;
    };
    getUsageParameters.prototype.keys = function (keys) {
        this.queryParameters['keys[]'] = keys;
        return this;
    };
    getUsageParameters.prototype.tags = function (tags) {
        this.queryParameters['tags[]'] = tags;
        return this;
    };
    getUsageParameters.prototype.accountIds = function (accountIds) {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    };
    getUsageParameters.prototype.status = function (status) {
        this.queryParameters['status'] = status;
        return this;
    };
    getUsageParameters.prototype.from = function (from) {
        this.queryParameters['from'] = from;
        return this;
    };
    getUsageParameters.prototype.to = function (to) {
        this.queryParameters['to'] = to;
        return this;
    };
    getUsageParameters.prototype.searchText = function (searchText) {
        this.queryParameters['searchText'] = searchText;
        return this;
    };
    getUsageParameters.prototype.pageOffset = function (pageOffset) {
        this.queryParameters['pageOffset'] = pageOffset;
        return this;
    };
    getUsageParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getUsageParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getUsageParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getUsageParameters;
}(platformSDKMethodParameters));
;
var getUsageAnalyticsActivityParameters = /** @class */ (function (_super) {
    __extends(getUsageAnalyticsActivityParameters, _super);
    function getUsageAnalyticsActivityParameters(superThis, method, path, from, to) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.queryParameters['from'] = from;
        _this.queryParameters['to'] = to;
        return _this;
    }
    getUsageAnalyticsActivityParameters.prototype.interval = function (interval) {
        this.queryParameters['interval'] = interval;
        return this;
    };
    getUsageAnalyticsActivityParameters.prototype.accountIds = function (accountIds) {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    };
    getUsageAnalyticsActivityParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getUsageAnalyticsActivityParameters;
}(platformSDKMethodParameters));
;
var getUsageAnalyticsActivityElementsParameters = /** @class */ (function (_super) {
    __extends(getUsageAnalyticsActivityElementsParameters, _super);
    function getUsageAnalyticsActivityElementsParameters(superThis, method, path, from, to) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.queryParameters['from'] = from;
        _this.queryParameters['to'] = to;
        return _this;
    }
    getUsageAnalyticsActivityElementsParameters.prototype.interval = function (interval) {
        this.queryParameters['interval'] = interval;
        return this;
    };
    getUsageAnalyticsActivityElementsParameters.prototype.accountIds = function (accountIds) {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    };
    getUsageAnalyticsActivityElementsParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getUsageAnalyticsActivityElementsParameters;
}(platformSDKMethodParameters));
;
var getUsageAnalyticsStatusesParameters = /** @class */ (function (_super) {
    __extends(getUsageAnalyticsStatusesParameters, _super);
    function getUsageAnalyticsStatusesParameters(superThis, method, path, from, to) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.queryParameters['from'] = from;
        _this.queryParameters['to'] = to;
        return _this;
    }
    getUsageAnalyticsStatusesParameters.prototype.interval = function (interval) {
        this.queryParameters['interval'] = interval;
        return this;
    };
    getUsageAnalyticsStatusesParameters.prototype.accountIds = function (accountIds) {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    };
    getUsageAnalyticsStatusesParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getUsageAnalyticsStatusesParameters;
}(platformSDKMethodParameters));
;
var getUsageAnalyticsTimesParameters = /** @class */ (function (_super) {
    __extends(getUsageAnalyticsTimesParameters, _super);
    function getUsageAnalyticsTimesParameters(superThis, method, path, from, to) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.queryParameters['from'] = from;
        _this.queryParameters['to'] = to;
        return _this;
    }
    getUsageAnalyticsTimesParameters.prototype.interval = function (interval) {
        this.queryParameters['interval'] = interval;
        return this;
    };
    getUsageAnalyticsTimesParameters.prototype.accountIds = function (accountIds) {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    };
    getUsageAnalyticsTimesParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getUsageAnalyticsTimesParameters;
}(platformSDKMethodParameters));
;
var getUsageByIdParameters = /** @class */ (function (_super) {
    __extends(getUsageByIdParameters, _super);
    function getUsageByIdParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getUsageByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getUsageByIdParameters;
}(platformSDKMethodParameters));
;
var getUsersParameters = /** @class */ (function (_super) {
    __extends(getUsersParameters, _super);
    function getUsersParameters(superThis, method, path) {
        return _super.call(this, superThis, method, path) || this;
    }
    getUsersParameters.prototype.where = function (where) {
        this.queryParameters['where'] = where;
        return this;
    };
    getUsersParameters.prototype.nextPage = function (nextPage) {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    };
    getUsersParameters.prototype.pageSize = function (pageSize) {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    };
    getUsersParameters.prototype.includeInactive = function (includeInactive) {
        this.queryParameters['includeInactive'] = includeInactive;
        return this;
    };
    getUsersParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getUsersParameters;
}(platformSDKMethodParameters));
;
var getUserByEmailOrIdParameters = /** @class */ (function (_super) {
    __extends(getUserByEmailOrIdParameters, _super);
    function getUserByEmailOrIdParameters(superThis, method, path, emailOrId) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{emailOrId}', "" + emailOrId);
        return _this;
    }
    getUserByEmailOrIdParameters.prototype.elementsUserPassword = function (elementsUserPassword) {
        this.headers['Elements-User-Password'] = elementsUserPassword;
        return this;
    };
    getUserByEmailOrIdParameters.prototype.includeInactive = function (includeInactive) {
        this.queryParameters['includeInactive'] = includeInactive;
        return this;
    };
    getUserByEmailOrIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getUserByEmailOrIdParameters;
}(platformSDKMethodParameters));
;
var deleteUserByIdParameters = /** @class */ (function (_super) {
    __extends(deleteUserByIdParameters, _super);
    function deleteUserByIdParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    deleteUserByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteUserByIdParameters;
}(platformSDKMethodParameters));
;
var updateUserByIdParameters = /** @class */ (function (_super) {
    __extends(updateUserByIdParameters, _super);
    function updateUserByIdParameters(superThis, method, path, id, body) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        _this._body = body;
        return _this;
    }
    updateUserByIdParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return updateUserByIdParameters;
}(platformSDKMethodParameters));
;
var getUsersRolesParameters = /** @class */ (function (_super) {
    __extends(getUsersRolesParameters, _super);
    function getUsersRolesParameters(superThis, method, path, id) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{id}', "" + id);
        return _this;
    }
    getUsersRolesParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return getUsersRolesParameters;
}(platformSDKMethodParameters));
;
var deleteUsersRoleByRoleKeyParameters = /** @class */ (function (_super) {
    __extends(deleteUsersRoleByRoleKeyParameters, _super);
    function deleteUsersRoleByRoleKeyParameters(superThis, method, path, userId, roleKey) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{userId}', "" + userId);
        _this.path = _this.path.replace('{roleKey}', "" + roleKey);
        return _this;
    }
    deleteUsersRoleByRoleKeyParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return deleteUsersRoleByRoleKeyParameters;
}(platformSDKMethodParameters));
;
var replaceUsersRoleByRoleKeyParameters = /** @class */ (function (_super) {
    __extends(replaceUsersRoleByRoleKeyParameters, _super);
    function replaceUsersRoleByRoleKeyParameters(superThis, method, path, userId, roleKey) {
        var _this = _super.call(this, superThis, method, path) || this;
        _this.path = _this.path.replace('{userId}', "" + userId);
        _this.path = _this.path.replace('{roleKey}', "" + roleKey);
        return _this;
    }
    replaceUsersRoleByRoleKeyParameters.prototype.run = function () {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(function (r) { return r.body; });
    };
    return replaceUsersRoleByRoleKeyParameters;
}(platformSDKMethodParameters));
;
/**
 *
 * @class platformSDK
 * @param {(string)} [domainOrOptions] - The project domain.
 */
var platformSDK = /** @class */ (function () {
    function platformSDK(baseUrl, authorizationHeader, logger) {
        this.domain = "https://console.cloud-elements.com/elements/api-v2";
        this.logger = {
            log: function (msg) { return console.log(msg); }
        };
        this.errorHandlers = [];
        this.authorizationHeader = null;
        if (baseUrl) {
            this.domain = baseUrl + "/elements/api-v2";
        }
        if (logger) {
            this.logger = logger;
        }
        if (authorizationHeader) {
            this.authorizationHeader = authorizationHeader;
        }
    }
    platformSDK.prototype.getDomain = function () {
        return this.domain;
    };
    platformSDK.prototype.addErrorHandler = function (handler) {
        this.errorHandlers.push(handler);
    };
    platformSDK.prototype.post = function (path, body, headers, queryParameters, form) {
        return this.request('POST', path, body, headers, queryParameters, form);
    };
    platformSDK.prototype.put = function (path, body, headers, queryParameters, form) {
        return this.request('PUT', path, body, headers, queryParameters, form);
    };
    platformSDK.prototype.patch = function (path, body, headers, queryParameters, form) {
        return this.request('PATCH', path, body, headers, queryParameters, form);
    };
    platformSDK.prototype["delete"] = function (path, body, headers, queryParameters, form) {
        return this.request('DELETE', path, body, headers, queryParameters, form);
    };
    platformSDK.prototype.get = function (path, body, headers, queryParameters, form) {
        return this.request('GET', path, body, headers, queryParameters, form);
    };
    platformSDK.prototype.request = function (method, path, body, headers, queryParameters, form) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!body) {
                body = {};
            }
            if (!headers) {
                headers = {};
            }
            if (!queryParameters) {
                queryParameters = {};
            }
            if (!form) {
                form = {};
            }
            if (_this.authorizationHeader && _this.authorizationHeader.length > 0) {
                headers.authorization = _this.authorizationHeader;
            }
            var url = _this.domain + path;
            if (_this.logger) {
                _this.logger.log("Call " + method + " " + url);
            }
            var req = request(method, url).query(queryParameters);
            Object.keys(headers).forEach(function (key) {
                req.set(key, headers[key]);
            });
            if (body) {
                req.send(body);
            }
            if (typeof (body) === 'object' && !(body.constructor.name === 'Buffer')) {
                req.set('Content-Type', 'application/json');
            }
            if (Object.keys(form).length > 0) {
                req.type('form');
                req.send(form);
            }
            req.end(function (error, response) {
                if (error || !response.ok) {
                    reject(error);
                    _this.errorHandlers.forEach(function (handler) { return handler(error); });
                }
                else {
                    resolve(response);
                }
            });
        });
    };
    /**
     * Retrieve accounts (identified by your organization secret). The provided user secret must be that of the default admin user for the organization.
     * @method
     * @name platformSDK#getAccounts
     */
    platformSDK.prototype.getAccounts = function () {
        return new getAccountsParameters(this, 'GET', '/accounts');
    };
    /**
     * Create a sub-account (identified by your organization secret). The provided user secret must be that of the default admin user for the organization.
     * @method
     * @name platformSDK#createAccount
     * @param {} body - The account to create<br/><br/>The required fields are:<br/><ul><li><b>externalId</b> - An external account identifier, typically an email address</li></ul><br/>Optional fields are:<br/><ul><li><b>name</b> - The name of the account</li><li><b>description</b> - A description of the account</li></ul><br/>Upon success, the created object will be returned.
     */
    platformSDK.prototype.createAccount = function (body) {
        return new createAccountParameters(this, 'POST', '/accounts', body);
    };
    /**
     * Finds all instances for the default users' account
     * @method
     * @name platformSDK#getAccountsInstances
     */
    platformSDK.prototype.getAccountsInstances = function () {
        return new getAccountsInstancesParameters(this, 'GET', '/accounts/instances');
    };
    /**
     * Delete all object definitions within the default users' account.  If no object definitions exist then this will result in an error response.
     * @method
     * @name platformSDK#deleteAccountsObjectsDefinitions
     */
    platformSDK.prototype.deleteAccountsObjectsDefinitions = function () {
        return new deleteAccountsObjectsDefinitionsParameters(this, 'DELETE', '/accounts/objects/definitions');
    };
    /**
     * Retrieve all of the object definitions within the users' default account.  Specifying an object definition that does not exist will result in an error response.
     * @method
     * @name platformSDK#getAccountsObjectsDefinitions
     */
    platformSDK.prototype.getAccountsObjectsDefinitions = function () {
        return new getAccountsObjectsDefinitionsParameters(this, 'GET', '/accounts/objects/definitions');
    };
    /**
     * Create multiple object definitions within this users' default account.  The definitions allow you to define what an object looks like within an account.
     * @method
     * @name platformSDK#createAccountObjectDefinition
     * @param {} body - The object definitions to create
     */
    platformSDK.prototype.createAccountObjectDefinition = function (body) {
        return new createAccountObjectDefinitionParameters(this, 'POST', '/accounts/objects/definitions', body);
    };
    /**
     * Delete an object definition associated with an objectName within the default users' account.  Specifying an object name that does not have an object definition will result in an error response.
     * @method
     * @name platformSDK#deleteAccountsObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     */
    platformSDK.prototype.deleteAccountsObjectsObjectNameDefinitions = function (objectName) {
        return new deleteAccountsObjectsObjectNameDefinitionsParameters(this, 'DELETE', '/accounts/objects/{objectName}/definitions', objectName);
    };
    /**
     * Retrieve a specific object definition associated with an objectName within the default users' account.  Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#getAccountsObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     */
    platformSDK.prototype.getAccountsObjectsObjectNameDefinitions = function (objectName) {
        return new getAccountsObjectsObjectNameDefinitionsParameters(this, 'GET', '/accounts/objects/{objectName}/definitions', objectName);
    };
    /**
     * Create a new object definition associated with an objectName within the users' default account.  The definitions allow you to define what an object looks like within an account.
     * @method
     * @name platformSDK#createAccountObjectObjectNameDefinition
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     */
    platformSDK.prototype.createAccountObjectObjectNameDefinition = function (objectName, body) {
        return new createAccountObjectObjectNameDefinitionParameters(this, 'POST', '/accounts/objects/{objectName}/definitions', objectName, body);
    };
    /**
     * Update a specific object's definition associated with an objectName within the default users' account. Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#replaceAccountsObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     */
    platformSDK.prototype.replaceAccountsObjectsObjectNameDefinitions = function (objectName, body) {
        return new replaceAccountsObjectsObjectNameDefinitionsParameters(this, 'PUT', '/accounts/objects/{objectName}/definitions', objectName, body);
    };
    /**
     * List formula instances for an account by formula ID
     * @method
     * @name platformSDK#getAccountsFormulasInstances
     * @param {integer} accountId - The account ID
     * @param {integer} formulaId - The formula ID
     */
    platformSDK.prototype.getAccountsFormulasInstances = function (accountId, formulaId) {
        return new getAccountsFormulasInstancesParameters(this, 'GET', '/accounts/{accountId}/formulas/{formulaId}/instances', accountId, formulaId);
    };
    /**
     * Delete an account by ID. The provided user secret must be that of the default admin user for the organization or customer. WARNING: Deleting an account will delete all users contained within that account along with all of those users' element and formula instances'.
     * @method
     * @name platformSDK#deleteAccountById
     * @param {integer} id - The ID of the account
     */
    platformSDK.prototype.deleteAccountById = function (id) {
        return new deleteAccountByIdParameters(this, 'DELETE', '/accounts/{id}', id);
    };
    /**
     * Retrieve an account by ID. The provided user secret must be that of the default admin user for the organization.
     * @method
     * @name platformSDK#getAccountById
     * @param {integer} id - The ID of the account
     */
    platformSDK.prototype.getAccountById = function (id) {
        return new getAccountByIdParameters(this, 'GET', '/accounts/{id}', id);
    };
    /**
     * Update an account (identified by your organization secret). The provided user secret must be that of the admin user for the organization. WARNING: If updating the 'active' field to false, the scheduled jobs for all of the account's users will be deleted.
     * @method
     * @name platformSDK#updateAccountById
     * @param {integer} id - The ID of the account
     * @param {} body - The updated account information<br/><br/>The fields that can be updated are:<br/><ul><li><b>externalId</b> - An external account identifier, typically an email address</li><li><b>name</b> - The name of the account</li><li><b>description</b> - A description of the account</li></ul><br/>Upon success, the updated object will be returned.
     */
    platformSDK.prototype.updateAccountById = function (id, body) {
        return new updateAccountByIdParameters(this, 'PATCH', '/accounts/{id}', id, body);
    };
    /**
     * Replace the data for an account by ID. The provided user secret must be that of the admin user for the organization or customer. WARNING: If updating the 'active' field to false, the scheduled jobs for all of the account's users will be deleted.
     * @method
     * @name platformSDK#replaceAccountById
     * @param {integer} id - The ID of the account
     * @param {} body - The updated account information.
     */
    platformSDK.prototype.replaceAccountById = function (id, body) {
        return new replaceAccountByIdParameters(this, 'PUT', '/accounts/{id}', id, body);
    };
    /**
     * Delete the default transformation for all elements of a certain type for this account.
     * @method
     * @name platformSDK#deleteAccountsElementsTransformations
     * @param {integer} id - The ID of the account
     * @param {string} keyOrId - The element key or ID
     */
    platformSDK.prototype.deleteAccountsElementsTransformations = function (id, keyOrId) {
        return new deleteAccountsElementsTransformationsParameters(this, 'DELETE', '/accounts/{id}/elements/{keyOrId}/transformations', id, keyOrId);
    };
    /**
     * Retrieve the default transformation for all elements of a certain type for this account.
     * @method
     * @name platformSDK#getAccountsElementsTransformations
     * @param {integer} id - The ID of the account
     * @param {string} keyOrId - The element key or ID
     */
    platformSDK.prototype.getAccountsElementsTransformations = function (id, keyOrId) {
        return new getAccountsElementsTransformationsParameters(this, 'GET', '/accounts/{id}/elements/{keyOrId}/transformations', id, keyOrId);
    };
    /**
     * Delete the default transformation for an object for all elements of a certain type for this account.
     * @method
     * @name platformSDK#deleteAccountsElementsTransformationByObjectName
     * @param {integer} id - The ID of the account
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The object name
     */
    platformSDK.prototype.deleteAccountsElementsTransformationByObjectName = function (id, keyOrId, objectName) {
        return new deleteAccountsElementsTransformationByObjectNameParameters(this, 'DELETE', '/accounts/{id}/elements/{keyOrId}/transformations/{objectName}', id, keyOrId, objectName);
    };
    /**
     * Retrieve the default transformation for an object for all elements of a certain type for this account.
     * @method
     * @name platformSDK#getAccountsElementsTransformationByObjectName
     * @param {integer} id - The ID of the account
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The name of the object
     */
    platformSDK.prototype.getAccountsElementsTransformationByObjectName = function (id, keyOrId, objectName) {
        return new getAccountsElementsTransformationByObjectNameParameters(this, 'GET', '/accounts/{id}/elements/{keyOrId}/transformations/{objectName}', id, keyOrId, objectName);
    };
    /**
     * Create a default transformation for an object for all elements of a certain type for this account.
     * @method
     * @name platformSDK#createAccountElementTransformationByObjectName
     * @param {integer} id - The ID of the account
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation
     */
    platformSDK.prototype.createAccountElementTransformationByObjectName = function (id, keyOrId, objectName, transformation) {
        return new createAccountElementTransformationByObjectNameParameters(this, 'POST', '/accounts/{id}/elements/{keyOrId}/transformations/{objectName}', id, keyOrId, objectName, transformation);
    };
    /**
     * Update the default transformation for an object for all elements of a certain type for this account.
     * @method
     * @name platformSDK#replaceAccountsElementsTransformationByObjectName
     * @param {integer} id - The ID of the account
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation
     */
    platformSDK.prototype.replaceAccountsElementsTransformationByObjectName = function (id, keyOrId, objectName, transformation) {
        return new replaceAccountsElementsTransformationByObjectNameParameters(this, 'PUT', '/accounts/{id}/elements/{keyOrId}/transformations/{objectName}', id, keyOrId, objectName, transformation);
    };
    /**
     * Finds all instances for the specified account
     * @method
     * @name platformSDK#getAccountsInstances2
     * @param {integer} id - The ID of the account
     */
    platformSDK.prototype.getAccountsInstances2 = function (id) {
        return new getAccountsInstances2Parameters(this, 'GET', '/accounts/{id}/instances', id);
    };
    /**
     * Delete all object definitions within a specific account.  If no object definitions exist then this will result in an error response.
     * @method
     * @name platformSDK#deleteAccountsObjectsDefinitions2
     * @param {integer} id - The ID of the account
     */
    platformSDK.prototype.deleteAccountsObjectsDefinitions2 = function (id) {
        return new deleteAccountsObjectsDefinitions2Parameters(this, 'DELETE', '/accounts/{id}/objects/definitions', id);
    };
    /**
     * Retrieve all of the object definitions within a specific account.  If no object definitions exist, then this will result in an error response.
     * @method
     * @name platformSDK#getAccountsObjectsDefinitions2
     * @param {integer} id - The ID of the account
     */
    platformSDK.prototype.getAccountsObjectsDefinitions2 = function (id) {
        return new getAccountsObjectsDefinitions2Parameters(this, 'GET', '/accounts/{id}/objects/definitions', id);
    };
    /**
     * Create multiple object definitions for a specific account.  The definitions allow you to define what an object looks like within an account.
     * @method
     * @name platformSDK#createAccountObjectDefinition2
     * @param {integer} id - The ID of the account
     * @param {} body - The object definitions to create
     */
    platformSDK.prototype.createAccountObjectDefinition2 = function (id, body) {
        return new createAccountObjectDefinition2Parameters(this, 'POST', '/accounts/{id}/objects/definitions', id, body);
    };
    /**
     * Delete an object definition associated with an objectName for a specific account.  Specifying an object name that does not have an object definition will result in an error response.
     * @method
     * @name platformSDK#deleteAccountsObjectsObjectNameDefinitions2
     * @param {integer} id - The ID of the account
     * @param {string} objectName - The name of the object
     */
    platformSDK.prototype.deleteAccountsObjectsObjectNameDefinitions2 = function (id, objectName) {
        return new deleteAccountsObjectsObjectNameDefinitions2Parameters(this, 'DELETE', '/accounts/{id}/objects/{objectName}/definitions', id, objectName);
    };
    /**
     * Retrieve a specific object definition associated with an objectName within a specific account.  Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#getAccountsObjectsObjectNameDefinitions2
     * @param {integer} id - The ID of the account
     * @param {string} objectName - The name of the object
     */
    platformSDK.prototype.getAccountsObjectsObjectNameDefinitions2 = function (id, objectName) {
        return new getAccountsObjectsObjectNameDefinitions2Parameters(this, 'GET', '/accounts/{id}/objects/{objectName}/definitions', id, objectName);
    };
    /**
     * Create a new object definition associated with an objectName within a specific account.  The definitions allow you to define what an object looks like within an account.
     * @method
     * @name platformSDK#createAccountObjectObjectNameDefinition2
     * @param {integer} id - The ID of the account
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     */
    platformSDK.prototype.createAccountObjectObjectNameDefinition2 = function (id, objectName, body) {
        return new createAccountObjectObjectNameDefinition2Parameters(this, 'POST', '/accounts/{id}/objects/{objectName}/definitions', id, objectName, body);
    };
    /**
     * Update a specific object's definition associated with an objectName within a specific account. Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#replaceAccountsObjectsObjectNameDefinitions2
     * @param {integer} id - The ID of the account
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     */
    platformSDK.prototype.replaceAccountsObjectsObjectNameDefinitions2 = function (id, objectName, body) {
        return new replaceAccountsObjectsObjectNameDefinitions2Parameters(this, 'PUT', '/accounts/{id}/objects/{objectName}/definitions', id, objectName, body);
    };
    /**
     * Find users within an account associated by an ID.  Specifying a user within an account associated with a given ID that does not exist will result in an error response.
     * @method
     * @name platformSDK#getAccountsUsers
     * @param {integer} id - The ID of the account
     */
    platformSDK.prototype.getAccountsUsers = function (id) {
        return new getAccountsUsersParameters(this, 'GET', '/accounts/{id}/users', id);
    };
    /**
     * Create a user within an account associated by an ID.
     * @method
     * @name platformSDK#createAccountUser
     * @param {integer} id - The ID of the account under which the user should be created
     * @param {} body - The user to create<br/><br/>The required fields are:<br/><ul><li><b>email</b> - The user's email address</li><li><b>firstName</b> - The user's first name</li><li><b>lastName</b> - The user's last name</li></ul><br/>Upon success, the created object will be returned.
     */
    platformSDK.prototype.createAccountUser = function (id, body) {
        return new createAccountUserParameters(this, 'POST', '/accounts/{id}/users', id, body);
    };
    /**
     * Retrieve an account user by name or ID within an account associated by an ID.  Specifying a user associated with a given emailOrID or account associated with a given ID that does not exist will result in an error response.
     * @method
     * @name platformSDK#getAccountsUserByEmailOrId
     * @param {integer} id - The ID of the account
     * @param {string} emailOrId - The email address or numeric ID of the user
     */
    platformSDK.prototype.getAccountsUserByEmailOrId = function (id, emailOrId) {
        return new getAccountsUserByEmailOrIdParameters(this, 'GET', '/accounts/{id}/users/{emailOrId}', id, emailOrId);
    };
    /**
     * Update an account user by ID within an account associated by an ID. WARNING: If updating the 'active' field to false, all of the scheduled jobs for the user will be deleted.
     * @method
     * @name platformSDK#updateAccountsUserByUserId
     * @param {integer} id - The ID of the account
     * @param {integer} userId - The ID of the user
     * @param {} body - The updated user information
     */
    platformSDK.prototype.updateAccountsUserByUserId = function (id, userId, body) {
        return new updateAccountsUserByUserIdParameters(this, 'PATCH', '/accounts/{id}/users/{userId}', id, userId, body);
    };
    /**
     * Replace the data for an account user by ID within an account associated by an ID. WARNING: If updating the 'active' field to false, all of the scheduled jobs for the user will be deleted.
     * @method
     * @name platformSDK#replaceAccountsUserByUserId
     * @param {integer} id - The ID of the account
     * @param {integer} userId - The ID of the user
     * @param {} body - The updated user information
     */
    platformSDK.prototype.replaceAccountsUserByUserId = function (id, userId, body) {
        return new replaceAccountsUserByUserIdParameters(this, 'PUT', '/accounts/{id}/users/{userId}', id, userId, body);
    };
    /**
     * Delete an account user by ID within an account associated by an ID. WARNING: this action will irreversibly delete all jobs, and formula and element instances associated with the user.
     * @method
     * @name platformSDK#deleteAccountsUserByUserId
     * @param {integer} id - The ID of the account
     * @param {integer} userId - The ID of the user
     */
    platformSDK.prototype.deleteAccountsUserByUserId = function (id, userId) {
        return new deleteAccountsUserByUserIdParameters(this, 'DELETE', '/accounts/{id}/users/{userId}', id, userId);
    };
    /**
     * Retrieve a list of logged API requests that identify the request, the user who made the request, the time that they made the request, and more.
     * @method
     * @name platformSDK#getAuditLogs
     */
    platformSDK.prototype.getAuditLogs = function () {
        return new getAuditLogsParameters(this, 'GET', '/audit-logs');
    };
    /**
     * Retrieve a list of logged authentication API requests.
     * @method
     * @name platformSDK#getAuditLogsAuthentication
     */
    platformSDK.prototype.getAuditLogsAuthentication = function () {
        return new getAuditLogsAuthenticationParameters(this, 'GET', '/audit-logs/authentication');
    };
    /**
     * Retrieve a list of logged common resource and transformations API requests.
     * @method
     * @name platformSDK#getAuditLogsCommonResources
     */
    platformSDK.prototype.getAuditLogsCommonResources = function () {
        return new getAuditLogsCommonResourcesParameters(this, 'GET', '/audit-logs/common-resources');
    };
    /**
     * Retrieve a list of logged common resource and transformations API requests by the name of the common resource.
     * @method
     * @name platformSDK#getAuditLogsCommonResourceByCommonResourceName
     */
    platformSDK.prototype.getAuditLogsCommonResourceByCommonResourceName = function () {
        return new getAuditLogsCommonResourceByCommonResourceNameParameters(this, 'GET', '/audit-logs/common-resources/{commonResourceName}');
    };
    /**
     * Retrieve a list of logged element instance API requests.
     * @method
     * @name platformSDK#getAuditLogsElementInstances
     */
    platformSDK.prototype.getAuditLogsElementInstances = function () {
        return new getAuditLogsElementInstancesParameters(this, 'GET', '/audit-logs/element-instances');
    };
    /**
     * Retrieve a list of logged element instance API requests by element instance ID.
     * @method
     * @name platformSDK#getAuditLogsElementInstanceByElementInstanceId
     */
    platformSDK.prototype.getAuditLogsElementInstanceByElementInstanceId = function () {
        return new getAuditLogsElementInstanceByElementInstanceIdParameters(this, 'GET', '/audit-logs/element-instances/{elementInstanceId}');
    };
    /**
     * Retrieve a list of logged element API requests. Requests include element creation and element extension requests.
     * @method
     * @name platformSDK#getAuditLogsElements
     */
    platformSDK.prototype.getAuditLogsElements = function () {
        return new getAuditLogsElementsParameters(this, 'GET', '/audit-logs/elements');
    };
    /**
     * Retrieve a list of logged element API requests by element ID.
     * @method
     * @name platformSDK#getAuditLogsElementByElementId
     */
    platformSDK.prototype.getAuditLogsElementByElementId = function () {
        return new getAuditLogsElementByElementIdParameters(this, 'GET', '/audit-logs/elements/{elementId}');
    };
    /**
     * Retrieve a list of logged formula instance API requests.
     * @method
     * @name platformSDK#getAuditLogsFormulaInstances
     */
    platformSDK.prototype.getAuditLogsFormulaInstances = function () {
        return new getAuditLogsFormulaInstancesParameters(this, 'GET', '/audit-logs/formula-instances');
    };
    /**
     * Retrieve a list of logged formula template API requests.
     * @method
     * @name platformSDK#getAuditLogsFormulas
     */
    platformSDK.prototype.getAuditLogsFormulas = function () {
        return new getAuditLogsFormulasParameters(this, 'GET', '/audit-logs/formulas');
    };
    /**
     * Retrieve a list of logged formula template API requests by the Entity ID associated with the object affected. Entity IDs include step ids, trigger ids, and configuration ids.
     * @method
     * @name platformSDK#getAuditLogsFormulaByEntityId
     */
    platformSDK.prototype.getAuditLogsFormulaByEntityId = function () {
        return new getAuditLogsFormulaByEntityIdParameters(this, 'GET', '/audit-logs/formulas/{entityId}');
    };
    /**
     * Reset the user's password.
     * @method
     * @name platformSDK#createAuthenticationPassword
     * @param {} passwordReset - The new password.
     */
    platformSDK.prototype.createAuthenticationPassword = function (passwordReset) {
        return new createAuthenticationPasswordParameters(this, 'POST', '/authentication/passwords', passwordReset);
    };
    /**
     * Create a new identity provider within a customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#createCustomerIdentityProvider
     * @param {} identityProvider - The identity provider data
     */
    platformSDK.prototype.createCustomerIdentityProvider = function (identityProvider) {
        return new createCustomerIdentityProviderParameters(this, 'POST', '/customers/identity-providers', identityProvider);
    };
    /**
     * Get all of the identity providers within a customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#getCustomersIdentityProviders
     */
    platformSDK.prototype.getCustomersIdentityProviders = function () {
        return new getCustomersIdentityProvidersParameters(this, 'GET', '/customers/identity-providers');
    };
    /**
     * Get a specific identity provider within a customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#getCustomersIdentityProviderById
     * @param {string} id - The ID of the identity provider record
     */
    platformSDK.prototype.getCustomersIdentityProviderById = function (id) {
        return new getCustomersIdentityProviderByIdParameters(this, 'GET', '/customers/identity-providers/{id}', id);
    };
    /**
     * Delete an identity provider within a customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#deleteCustomersIdentityProviderById
     * @param {string} id - The ID of the identity provider record
     */
    platformSDK.prototype.deleteCustomersIdentityProviderById = function (id) {
        return new deleteCustomersIdentityProviderByIdParameters(this, 'DELETE', '/customers/identity-providers/{id}', id);
    };
    /**
     * Get details of the current user's customer.
     * @method
     * @name platformSDK#getCustomersMe
     */
    platformSDK.prototype.getCustomersMe = function () {
        return new getCustomersMeParameters(this, 'GET', '/customers/me');
    };
    /**
     * Get all of the organizations for the current user's customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#getCustomersOrganizations
     */
    platformSDK.prototype.getCustomersOrganizations = function () {
        return new getCustomersOrganizationsParameters(this, 'GET', '/customers/organizations');
    };
    /**
     * Get a specific organization within the current user's customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#getCustomersOrganizationById
     * @param {integer} id - The ID of the organization
     */
    platformSDK.prototype.getCustomersOrganizationById = function (id) {
        return new getCustomersOrganizationByIdParameters(this, 'GET', '/customers/organizations/{id}', id);
    };
    /**
     * Delete a specific organization within the current user's customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#deleteCustomersOrganizationById
     * @param {integer} id - The ID of the organization
     */
    platformSDK.prototype.deleteCustomersOrganizationById = function (id) {
        return new deleteCustomersOrganizationByIdParameters(this, 'DELETE', '/customers/organizations/{id}', id);
    };
    /**
     * Create a new user within a customer. The organization and account will also be created, if existing IDs are not provided. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#createCustomerSignup
     * @param {} customerSignup - The customer sign up data
     */
    platformSDK.prototype.createCustomerSignup = function (customerSignup) {
        return new createCustomerSignupParameters(this, 'POST', '/customers/signup', customerSignup);
    };
    /**
     * Create a new element.
     * @method
     * @name platformSDK#createElement
     * @param {} element - The element
     */
    platformSDK.prototype.createElement = function (element) {
        return new createElementParameters(this, 'POST', '/elements', element);
    };
    /**
     * Retrieve all available elements keys.
     * @method
     * @name platformSDK#getElementsKeys
     */
    platformSDK.prototype.getElementsKeys = function () {
        return new getElementsKeysParameters(this, 'GET', '/elements/keys');
    };
    /**
     * Swagger 2.0 schema for the element.
     * @method
     * @name platformSDK#getElementsDocs
     * @param {string} id - The ID of the element
     */
    platformSDK.prototype.getElementsDocs = function (id) {
        return new getElementsDocsParameters(this, 'GET', '/elements/{id}/docs', id);
    };
    /**
     * Retrieve the metadata for the specified element.
     * @method
     * @name platformSDK#getElementsMetadata
     * @param {integer} id - The element ID
     */
    platformSDK.prototype.getElementsMetadata = function (id) {
        return new getElementsMetadataParameters(this, 'GET', '/elements/{id}/metadata', id);
    };
    /**
     * Delete an element.
     * @method
     * @name platformSDK#deleteElementByKeyOrId
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     */
    platformSDK.prototype.deleteElementByKeyOrId = function (keyOrId) {
        return new deleteElementByKeyOrIdParameters(this, 'DELETE', '/elements/{keyOrId}', keyOrId);
    };
    /**
     * Update an element associated with an element key.
     * @method
     * @name platformSDK#replaceElementByKeyOrId
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {} element - The element
     */
    platformSDK.prototype.replaceElementByKeyOrId = function (keyOrId, element) {
        return new replaceElementByKeyOrIdParameters(this, 'PUT', '/elements/{keyOrId}', keyOrId, element);
    };
    /**
     * De-activate an element, which will remove it from your elements catalog.
     * @method
     * @name platformSDK#deleteElementsActive
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     */
    platformSDK.prototype.deleteElementsActive = function (keyOrId) {
        return new deleteElementsActiveParameters(this, 'DELETE', '/elements/{keyOrId}/active', keyOrId);
    };
    /**
     * Activate an element to publish it in your elements catalog.
     * @method
     * @name platformSDK#replaceElementsActive
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     */
    platformSDK.prototype.replaceElementsActive = function (keyOrId) {
        return new replaceElementsActiveParameters(this, 'PUT', '/elements/{keyOrId}/active', keyOrId);
    };
    /**
     * Clone an element
     * @method
     * @name platformSDK#createElementClone
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     */
    platformSDK.prototype.createElementClone = function (keyOrId) {
        return new createElementCloneParameters(this, 'POST', '/elements/{keyOrId}/clone', keyOrId);
    };
    /**
     * Retrieve a specific element configuration associated with an element key.  Specifying an element associated with an element key that does not exist results in an error response.
     * @method
     * @name platformSDK#getElementsConfiguration
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     */
    platformSDK.prototype.getElementsConfiguration = function (keyOrId) {
        return new getElementsConfigurationParameters(this, 'GET', '/elements/{keyOrId}/configuration', keyOrId);
    };
    /**
     * Create a new configuration value for an element
     * @method
     * @name platformSDK#createElementConfiguration
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {} configuration - The configuration to create
     */
    platformSDK.prototype.createElementConfiguration = function (keyOrId, configuration) {
        return new createElementConfigurationParameters(this, 'POST', '/elements/{keyOrId}/configuration', keyOrId, configuration);
    };
    /**
     * Delete a configuration value for an element
     * @method
     * @name platformSDK#deleteElementsConfigurationByConfigurationKey
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {string} configurationKey - The configuration key
     */
    platformSDK.prototype.deleteElementsConfigurationByConfigurationKey = function (keyOrId, configurationKey) {
        return new deleteElementsConfigurationByConfigurationKeyParameters(this, 'DELETE', '/elements/{keyOrId}/configuration/{configurationKey}', keyOrId, configurationKey);
    };
    /**
     * Update an existing configuration value for an element
     * @method
     * @name platformSDK#replaceElementsConfigurationByConfigurationKey
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {string} configurationKey - The configuration key
     * @param {} configuration - The configuration object
     */
    platformSDK.prototype.replaceElementsConfigurationByConfigurationKey = function (keyOrId, configurationKey, configuration) {
        return new replaceElementsConfigurationByConfigurationKeyParameters(this, 'PUT', '/elements/{keyOrId}/configuration/{configurationKey}', keyOrId, configurationKey, configuration);
    };
    /**
     * Downloads a specific element JSON data in a file associated with an element key. Specifying an element associated with an element key that does not exist results in an error response.
     * @method
     * @name platformSDK#getElementsExport
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     */
    platformSDK.prototype.getElementsExport = function (keyOrId) {
        return new getElementsExportParameters(this, 'GET', '/elements/{keyOrId}/export', keyOrId);
    };
    /**
     * Retrieve the hooks that exists for a element
     * @method
     * @name platformSDK#getElementsHooks
     * @param {string} keyOrId - The element key
     */
    platformSDK.prototype.getElementsHooks = function (keyOrId) {
        return new getElementsHooksParameters(this, 'GET', '/elements/{keyOrId}/hooks', keyOrId);
    };
    /**
     * Create a new hook for a element
     * @method
     * @name platformSDK#createElementHook
     * @param {string} keyOrId - The element key
     * @param {} model - The element Hook
     */
    platformSDK.prototype.createElementHook = function (keyOrId, model) {
        return new createElementHookParameters(this, 'POST', '/elements/{keyOrId}/hooks', keyOrId, model);
    };
    /**
     * Get an existing hook for an custom element
     * @method
     * @name platformSDK#getElementsHookByHookId
     * @param {string} keyOrId - The element key
     * @param {string} hookId - The Hook ID
     */
    platformSDK.prototype.getElementsHookByHookId = function (keyOrId, hookId) {
        return new getElementsHookByHookIdParameters(this, 'GET', '/elements/{keyOrId}/hooks/{hookId}', keyOrId, hookId);
    };
    /**
     * Delete one of the hooks for a element
     * @method
     * @name platformSDK#deleteElementsHookByHookId
     * @param {string} keyOrId - The element key
     * @param {string} hookId - The hook ID
     */
    platformSDK.prototype.deleteElementsHookByHookId = function (keyOrId, hookId) {
        return new deleteElementsHookByHookIdParameters(this, 'DELETE', '/elements/{keyOrId}/hooks/{hookId}', keyOrId, hookId);
    };
    /**
     * Update an existing Hook for an element
     * @method
     * @name platformSDK#replaceElementsHookByHookId
     * @param {string} keyOrId - The element key
     * @param {string} hookId - The hook ID
     * @param {} parameter - The hook
     */
    platformSDK.prototype.replaceElementsHookByHookId = function (keyOrId, hookId, parameter) {
        return new replaceElementsHookByHookIdParameters(this, 'PUT', '/elements/{keyOrId}/hooks/{hookId}', keyOrId, hookId, parameter);
    };
    /**
     * Retrieve all element instances from a specified path.  The instances go through Cloud Elements to your console.  Specifying an instance that does not exist results in an error response.
     * @method
     * @name platformSDK#getElementsInstances
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     */
    platformSDK.prototype.getElementsInstances = function (keyOrId) {
        return new getElementsInstancesParameters(this, 'GET', '/elements/{keyOrId}/instances', keyOrId);
    };
    /**
     * Create a new element instance in your console.  Instance creation will flow through Cloud Elements to your console.
     * @method
     * @name platformSDK#createElementInstance
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {} elementInstance - The element instance to create
     */
    platformSDK.prototype.createElementInstance = function (keyOrId, elementInstance) {
        return new createElementInstanceParameters(this, 'POST', '/elements/{keyOrId}/instances', keyOrId, elementInstance);
    };
    /**
     * Delete an instance associated with a given ID from your console. Specifying an instance associated with a given ID that does not exist will result in an error message.
     * @method
     * @name platformSDK#deleteElementsInstanceById
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {integer} id - The ID of the element instance
     */
    platformSDK.prototype.deleteElementsInstanceById = function (keyOrId, id) {
        return new deleteElementsInstanceByIdParameters(this, 'DELETE', '/elements/{keyOrId}/instances/{id}', keyOrId, id);
    };
    /**
     * Retrieve an element instance associated with a given ID from a specified path.  The instance goes through Cloud Elements to your console.  Specifying an instance with an associated ID that does not exist results in an error response.
     * @method
     * @name platformSDK#getElementsInstanceById
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {integer} id - The ID of the element instance
     */
    platformSDK.prototype.getElementsInstanceById = function (keyOrId, id) {
        return new getElementsInstanceByIdParameters(this, 'GET', '/elements/{keyOrId}/instances/{id}', keyOrId, id);
    };
    /**
     * Update an instance associated with a given ID from your console.  Specifying an instance associated with an ID that does not exist will result in an error message.
     * @method
     * @name platformSDK#replaceElementsInstanceById
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {integer} id - The ID of the element instance
     * @param {} elementInstance - The fields of the element instance to update
     */
    platformSDK.prototype.replaceElementsInstanceById = function (keyOrId, id, elementInstance) {
        return new replaceElementsInstanceByIdParameters(this, 'PUT', '/elements/{keyOrId}/instances/{id}', keyOrId, id, elementInstance);
    };
    /**
     * Retrieve the OAuth 1 request token.  Not applicable with OAuth 2 Elements.
     * @method
     * @name platformSDK#getElementsOauthToken
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {string} apiKey - The OAuth API key
     * @param {string} apiSecret - The OAuth API secret
     * @param {string} callbackUrl - The OAuth callback URL
     */
    platformSDK.prototype.getElementsOauthToken = function (keyOrId, apiKey, apiSecret, callbackUrl) {
        return new getElementsOauthTokenParameters(this, 'GET', '/elements/{keyOrId}/oauth/token', keyOrId, apiKey, apiSecret, callbackUrl);
    };
    /**
     * Retrieve the OAuth 2 redirect URL associated with the specified element.  Specifying an element key associated with an element that does not exist results in an error response.
     * @method
     * @name platformSDK#getElementsOauthUrl
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {string} apiKey - The OAuth API key
     * @param {string} apiSecret - The OAuth API secret (note: For HubSpot, this is the Portal ID.)
     * @param {string} callbackUrl - The OAuth callback URL
     */
    platformSDK.prototype.getElementsOauthUrl = function (keyOrId, apiKey, apiSecret, callbackUrl) {
        return new getElementsOauthUrlParameters(this, 'GET', '/elements/{keyOrId}/oauth/url', keyOrId, apiKey, apiSecret, callbackUrl);
    };
    /**
     * Retrieve the OAuth 2 redirect URL associated with the specified element.  Specifying an element key associated with an element that does not exist results in an error response.
     * @method
     * @name platformSDK#createElementOauthUrl
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {} oauthInfo - The data for generating the OAuth redirect URL
     */
    platformSDK.prototype.createElementOauthUrl = function (keyOrId, oauthInfo) {
        return new createElementOauthUrlParameters(this, 'POST', '/elements/{keyOrId}/oauth/url', keyOrId, oauthInfo);
    };
    /**
     * Retrieve all of the objects that exist for a custom element
     * @method
     * @name platformSDK#getElementsObjects
     * @param {string} keyOrId - The element key
     */
    platformSDK.prototype.getElementsObjects = function (keyOrId) {
        return new getElementsObjectsParameters(this, 'GET', '/elements/{keyOrId}/objects', keyOrId);
    };
    /**
     * Create a new object for a element
     * @method
     * @name platformSDK#createElementObject
     * @param {string} keyOrId - The element key
     * @param {} object - The Object
     */
    platformSDK.prototype.createElementObject = function (keyOrId, object) {
        return new createElementObjectParameters(this, 'POST', '/elements/{keyOrId}/objects', keyOrId, object);
    };
    /**
     * Delete a object for a custom element
     * @method
     * @name platformSDK#deleteElementsObjectById
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     */
    platformSDK.prototype.deleteElementsObjectById = function (keyOrId, id) {
        return new deleteElementsObjectByIdParameters(this, 'DELETE', '/elements/{keyOrId}/objects/{id}', keyOrId, id);
    };
    /**
     * Update an existing object for an element
     * @method
     * @name platformSDK#replaceElementsObjectById
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     * @param {} object - The Object
     */
    platformSDK.prototype.replaceElementsObjectById = function (keyOrId, id, object) {
        return new replaceElementsObjectByIdParameters(this, 'PUT', '/elements/{keyOrId}/objects/{id}', keyOrId, id, object);
    };
    /**
     * Get an existing object for an element
     * @method
     * @name platformSDK#getElementsObjectById
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     */
    platformSDK.prototype.getElementsObjectById = function (keyOrId, id) {
        return new getElementsObjectByIdParameters(this, 'GET', '/elements/{keyOrId}/objects/{id}', keyOrId, id);
    };
    /**
     * Create a Field for an element Object
     * @method
     * @name platformSDK#createElementObjectField
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     * @param {} field - The Field
     */
    platformSDK.prototype.createElementObjectField = function (keyOrId, id, field) {
        return new createElementObjectFieldParameters(this, 'POST', '/elements/{keyOrId}/objects/{id}/fields', keyOrId, id, field);
    };
    /**
     * Retrieve all of the fields that exist for a element object
     * @method
     * @name platformSDK#getElementsObjectsFields
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     */
    platformSDK.prototype.getElementsObjectsFields = function (keyOrId, id) {
        return new getElementsObjectsFieldsParameters(this, 'GET', '/elements/{keyOrId}/objects/{id}/fields', keyOrId, id);
    };
    /**
     * Delete a field for an element object
     * @method
     * @name platformSDK#deleteElementsObjectsFieldByFieldId
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     * @param {string} fieldId - The Field Id
     */
    platformSDK.prototype.deleteElementsObjectsFieldByFieldId = function (keyOrId, id, fieldId) {
        return new deleteElementsObjectsFieldByFieldIdParameters(this, 'DELETE', '/elements/{keyOrId}/objects/{id}/fields/{fieldId}', keyOrId, id, fieldId);
    };
    /**
     * Update an existing field for an element object
     * @method
     * @name platformSDK#replaceElementsObjectsFieldByFieldId
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     * @param {string} fieldId - The Field Id
     * @param {} object - The Field
     */
    platformSDK.prototype.replaceElementsObjectsFieldByFieldId = function (keyOrId, id, fieldId, object) {
        return new replaceElementsObjectsFieldByFieldIdParameters(this, 'PUT', '/elements/{keyOrId}/objects/{id}/fields/{fieldId}', keyOrId, id, fieldId, object);
    };
    /**
     * Get an existing field for an element object
     * @method
     * @name platformSDK#getElementsObjectsFieldByFieldId
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     * @param {string} fieldId - The Field Id
     */
    platformSDK.prototype.getElementsObjectsFieldByFieldId = function (keyOrId, id, fieldId) {
        return new getElementsObjectsFieldByFieldIdParameters(this, 'GET', '/elements/{keyOrId}/objects/{id}/fields/{fieldId}', keyOrId, id, fieldId);
    };
    /**
     * Retrieve all of the default parameters for an element
     * @method
     * @name platformSDK#getElementsParameters
     * @param {string} keyOrId - The element key
     */
    platformSDK.prototype.getElementsParameters = function (keyOrId) {
        return new getElementsParametersParameters(this, 'GET', '/elements/{keyOrId}/parameters', keyOrId);
    };
    /**
     * Create a new default parameter for an element
     * @method
     * @name platformSDK#createElementParameter
     * @param {string} keyOrId - The element key
     * @param {} parameter - The default parameter
     */
    platformSDK.prototype.createElementParameter = function (keyOrId, parameter) {
        return new createElementParameterParameters(this, 'POST', '/elements/{keyOrId}/parameters', keyOrId, parameter);
    };
    /**
     * Delete a default parameter for an element
     * @method
     * @name platformSDK#deleteElementsParameterById
     * @param {string} keyOrId - The element key
     * @param {string} id - The ID of the parameter
     * @param {} parameter - The default parameter
     */
    platformSDK.prototype.deleteElementsParameterById = function (keyOrId, id, parameter) {
        return new deleteElementsParameterByIdParameters(this, 'DELETE', '/elements/{keyOrId}/parameters/{id}', keyOrId, id, parameter);
    };
    /**
     * Update a default parameter for an element
     * @method
     * @name platformSDK#replaceElementsParameterById
     * @param {string} keyOrId - The element key
     * @param {string} id - The ID of the parameter
     * @param {} parameter - The default parameter
     */
    platformSDK.prototype.replaceElementsParameterById = function (keyOrId, id, parameter) {
        return new replaceElementsParameterByIdParameters(this, 'PUT', '/elements/{keyOrId}/parameters/{id}', keyOrId, id, parameter);
    };
    /**
     * Retrieve all of the resources that exist for a custom element
     * @method
     * @name platformSDK#getElementsResources
     * @param {string} keyOrId - The element key
     */
    platformSDK.prototype.getElementsResources = function (keyOrId) {
        return new getElementsResourcesParameters(this, 'GET', '/elements/{keyOrId}/resources', keyOrId);
    };
    /**
     * Create a new resource for a custom element
     * @method
     * @name platformSDK#createElementResource
     * @param {string} keyOrId - The element key
     * @param {} resource - The resource
     */
    platformSDK.prototype.createElementResource = function (keyOrId, resource) {
        return new createElementResourceParameters(this, 'POST', '/elements/{keyOrId}/resources', keyOrId, resource);
    };
    /**
     * Delete a resource for a custom element
     * @method
     * @name platformSDK#deleteElementsResourceById
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     */
    platformSDK.prototype.deleteElementsResourceById = function (keyOrId, id) {
        return new deleteElementsResourceByIdParameters(this, 'DELETE', '/elements/{keyOrId}/resources/{id}', keyOrId, id);
    };
    /**
     * Update an existing resource for an element
     * @method
     * @name platformSDK#replaceElementsResourceById
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {} resource - The resource
     */
    platformSDK.prototype.replaceElementsResourceById = function (keyOrId, id, resource) {
        return new replaceElementsResourceByIdParameters(this, 'PUT', '/elements/{keyOrId}/resources/{id}', keyOrId, id, resource);
    };
    /**
     * Get an existing resource for an element
     * @method
     * @name platformSDK#getElementsResourceById
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     */
    platformSDK.prototype.getElementsResourceById = function (keyOrId, id) {
        return new getElementsResourceByIdParameters(this, 'GET', '/elements/{keyOrId}/resources/{id}', keyOrId, id);
    };
    /**
     * Retrieve the hooks that exists for a custom element's resource
     * @method
     * @name platformSDK#getElementsResourcesHooks
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     */
    platformSDK.prototype.getElementsResourcesHooks = function (keyOrId, id) {
        return new getElementsResourcesHooksParameters(this, 'GET', '/elements/{keyOrId}/resources/{id}/hooks', keyOrId, id);
    };
    /**
     * Create a new hook for a custom element's resource
     * @method
     * @name platformSDK#createElementResourceHook
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {} model - The resource Hook
     */
    platformSDK.prototype.createElementResourceHook = function (keyOrId, id, model) {
        return new createElementResourceHookParameters(this, 'POST', '/elements/{keyOrId}/resources/{id}/hooks', keyOrId, id, model);
    };
    /**
     * Get an existing hook for an custom element's resource
     * @method
     * @name platformSDK#getElementsResourcesHookByHookId
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {string} hookId - The Hook ID
     */
    platformSDK.prototype.getElementsResourcesHookByHookId = function (keyOrId, id, hookId) {
        return new getElementsResourcesHookByHookIdParameters(this, 'GET', '/elements/{keyOrId}/resources/{id}/hooks/{hookId}', keyOrId, id, hookId);
    };
    /**
     * Delete one of the hooks for a custom element's resource
     * @method
     * @name platformSDK#deleteElementsResourcesHookByHookId
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {string} hookId - The hook ID
     */
    platformSDK.prototype.deleteElementsResourcesHookByHookId = function (keyOrId, id, hookId) {
        return new deleteElementsResourcesHookByHookIdParameters(this, 'DELETE', '/elements/{keyOrId}/resources/{id}/hooks/{hookId}', keyOrId, id, hookId);
    };
    /**
     * Update an existing Hook for an element's resource
     * @method
     * @name platformSDK#replaceElementsResourcesHookByHookId
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {string} hookId - The hook ID
     * @param {} parameter - The hook
     */
    platformSDK.prototype.replaceElementsResourcesHookByHookId = function (keyOrId, id, hookId, parameter) {
        return new replaceElementsResourcesHookByHookIdParameters(this, 'PUT', '/elements/{keyOrId}/resources/{id}/hooks/{hookId}', keyOrId, id, hookId, parameter);
    };
    /**
     * Delete the model for this custom element's resource
     * @method
     * @name platformSDK#deleteElementsResourcesModels
     * @param {string} keyOrId - The element key
     * @param {integer} id - The resource ID
     */
    platformSDK.prototype.deleteElementsResourcesModels = function (keyOrId, id) {
        return new deleteElementsResourcesModelsParameters(this, 'DELETE', '/elements/{keyOrId}/resources/{id}/models', keyOrId, id);
    };
    /**
     * Retrieve the models that exists for a custom element's resource
     * @method
     * @name platformSDK#getElementsResourcesModels
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     */
    platformSDK.prototype.getElementsResourcesModels = function (keyOrId, id) {
        return new getElementsResourcesModelsParameters(this, 'GET', '/elements/{keyOrId}/resources/{id}/models', keyOrId, id);
    };
    /**
     * Create a new model for a custom element's resource
     * @method
     * @name platformSDK#createElementResourceModel
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {} model - The model
     */
    platformSDK.prototype.createElementResourceModel = function (keyOrId, id, model) {
        return new createElementResourceModelParameters(this, 'POST', '/elements/{keyOrId}/resources/{id}/models', keyOrId, id, model);
    };
    /**
     * Retrieve all of the parameters for a resource
     * @method
     * @name platformSDK#getElementsResourcesParameters
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     */
    platformSDK.prototype.getElementsResourcesParameters = function (keyOrId, id) {
        return new getElementsResourcesParametersParameters(this, 'GET', '/elements/{keyOrId}/resources/{id}/parameters', keyOrId, id);
    };
    /**
     * Create a new parameter for a custom element's resource
     * @method
     * @name platformSDK#createElementResourceParameter
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {} parameter - The parameter
     */
    platformSDK.prototype.createElementResourceParameter = function (keyOrId, id, parameter) {
        return new createElementResourceParameterParameters(this, 'POST', '/elements/{keyOrId}/resources/{id}/parameters', keyOrId, id, parameter);
    };
    /**
     * Delete one of the parameters for a custom element's resource
     * @method
     * @name platformSDK#deleteElementsResourcesParameterByParameterId
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {string} parameterId - The parameter ID
     */
    platformSDK.prototype.deleteElementsResourcesParameterByParameterId = function (keyOrId, id, parameterId) {
        return new deleteElementsResourcesParameterByParameterIdParameters(this, 'DELETE', '/elements/{keyOrId}/resources/{id}/parameters/{parameterId}', keyOrId, id, parameterId);
    };
    /**
     * Update an existing parameters for an element's resource
     * @method
     * @name platformSDK#replaceElementsResourcesParameterByParameterId
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {string} parameterId - The parameter ID
     * @param {} parameter - The parameter
     */
    platformSDK.prototype.replaceElementsResourcesParameterByParameterId = function (keyOrId, id, parameterId, parameter) {
        return new replaceElementsResourcesParameterByParameterIdParameters(this, 'PUT', '/elements/{keyOrId}/resources/{id}/parameters/{parameterId}', keyOrId, id, parameterId, parameter);
    };
    /**
     * Retrieve a list of all formula templates.
     * @method
     * @name platformSDK#getFormulas
     */
    platformSDK.prototype.getFormulas = function () {
        return new getFormulasParameters(this, 'GET', '/formulas');
    };
    /**
     * Create a new formula template.
     * @method
     * @name platformSDK#createFormula
     * @param {} body - The formula template.
     */
    platformSDK.prototype.createFormula = function (body) {
        return new createFormulaParameters(this, 'POST', '/formulas', body);
    };
    /**
     * Retrieve the number of formula executions within a given date/time range
     * @method
     * @name platformSDK#getFormulasAnalytics
     */
    platformSDK.prototype.getFormulasAnalytics = function () {
        return new getFormulasAnalyticsParameters(this, 'GET', '/formulas/analytics');
    };
    /**
     * Retrieve the status analytics of formula step executions within a given date/time range, aggregated by account ID. This API is really only useful for organization admins where more than one account exists.
     * @method
     * @name platformSDK#getFormulasAnalyticsAccounts
     */
    platformSDK.prototype.getFormulasAnalyticsAccounts = function () {
        return new getFormulasAnalyticsAccountsParameters(this, 'GET', '/formulas/analytics/accounts');
    };
    /**
     * Retrieve the status analytics of formula step executions within a given date/time range, aggregated by formula instance ID.
     * @method
     * @name platformSDK#getFormulasAnalyticsInstances
     */
    platformSDK.prototype.getFormulasAnalyticsInstances = function () {
        return new getFormulasAnalyticsInstancesParameters(this, 'GET', '/formulas/analytics/instances');
    };
    /**
     * Retrieve the status analytics of formula executions within a given date/time range
     * @method
     * @name platformSDK#getFormulasAnalyticsStatuses
     */
    platformSDK.prototype.getFormulasAnalyticsStatuses = function () {
        return new getFormulasAnalyticsStatusesParameters(this, 'GET', '/formulas/analytics/statuses');
    };
    /**
     * Retrieve the current status counts of formula executions. If any executions are in a 'retry' status, a list of those execution IDs will be returned, along with the retry attempt that will be executed next.
     * @method
     * @name platformSDK#getFormulasAnalyticsStatusesNow
     */
    platformSDK.prototype.getFormulasAnalyticsStatusesNow = function () {
        return new getFormulasAnalyticsStatusesNowParameters(this, 'GET', '/formulas/analytics/statuses/now');
    };
    /**
     * Retrieve the analytics (execution time, execution delay, etc.) of formula step executions within a given date/time range
     * @method
     * @name platformSDK#getFormulasAnalyticsSteps
     */
    platformSDK.prototype.getFormulasAnalyticsSteps = function () {
        return new getFormulasAnalyticsStepsParameters(this, 'GET', '/formulas/analytics/steps');
    };
    /**
     * Retrieve all instances of all formula templates.
     * @method
     * @name platformSDK#getFormulasInstances
     */
    platformSDK.prototype.getFormulasInstances = function () {
        return new getFormulasInstancesParameters(this, 'GET', '/formulas/instances');
    };
    /**
     * Retrieve all step execution values for a formula step execution.
     * @method
     * @name platformSDK#getFormulasInstancesExecutionsStepsValues
     * @param {integer} stepExecutionId - The ID of the step execution.
     */
    platformSDK.prototype.getFormulasInstancesExecutionsStepsValues = function (stepExecutionId) {
        return new getFormulasInstancesExecutionsStepsValuesParameters(this, 'GET', '/formulas/instances/executions/steps/{stepExecutionId}/values', stepExecutionId);
    };
    /**
     * Retrieve a formula instance executions.
     * @method
     * @name platformSDK#getFormulasInstancesExecutionByExecutionId
     * @param {integer} executionId - The ID of the formula instance execution.
     */
    platformSDK.prototype.getFormulasInstancesExecutionByExecutionId = function (executionId) {
        return new getFormulasInstancesExecutionByExecutionIdParameters(this, 'GET', '/formulas/instances/executions/{executionId}', executionId);
    };
    /**
     * Cancel a formula instance execution
     * @method
     * @name platformSDK#updateFormulasInstancesExecutionByExecutionId
     * @param {integer} executionId - The ID of the formula instance execution.
     * @param {} status - The change in status you want to effect, currently only 'cancel' is supported
     */
    platformSDK.prototype.updateFormulasInstancesExecutionByExecutionId = function (executionId, status) {
        return new updateFormulasInstancesExecutionByExecutionIdParameters(this, 'PATCH', '/formulas/instances/executions/{executionId}', executionId, status);
    };
    /**
     * Retrieve all step execution errors for a formula execution.
     * @method
     * @name platformSDK#getFormulasInstancesExecutionsErrors
     * @param {integer} executionId - The ID of the execution.
     */
    platformSDK.prototype.getFormulasInstancesExecutionsErrors = function (executionId) {
        return new getFormulasInstancesExecutionsErrorsParameters(this, 'GET', '/formulas/instances/executions/{executionId}/errors', executionId);
    };
    /**
     * Retrieve all step executions for a formula execution.
     * @method
     * @name platformSDK#getFormulasInstancesExecutionsSteps
     * @param {integer} executionId - The ID of the execution.
     */
    platformSDK.prototype.getFormulasInstancesExecutionsSteps = function (executionId) {
        return new getFormulasInstancesExecutionsStepsParameters(this, 'GET', '/formulas/instances/executions/{executionId}/steps', executionId);
    };
    /**
     * Retrieve a formula instance.
     * @method
     * @name platformSDK#getFormulasInstanceByInstanceId
     * @param {integer} instanceId - The ID of the formula instance.
     */
    platformSDK.prototype.getFormulasInstanceByInstanceId = function (instanceId) {
        return new getFormulasInstanceByInstanceIdParameters(this, 'GET', '/formulas/instances/{instanceId}', instanceId);
    };
    /**
     * Retrieve all executions for a formula instance.
     * @method
     * @name platformSDK#getFormulasInstancesExecutions
     * @param {integer} instanceId - The ID of the formula instance.
     */
    platformSDK.prototype.getFormulasInstancesExecutions = function (instanceId) {
        return new getFormulasInstancesExecutionsParameters(this, 'GET', '/formulas/instances/{instanceId}/executions', instanceId);
    };
    /**
     * Manually kickoff a formula instance from the given JSON trigger payload
     * @method
     * @name platformSDK#createFormulaInstanceExecution
     * @param {integer} instanceId - The ID of the formula instance.
     */
    platformSDK.prototype.createFormulaInstanceExecution = function (instanceId) {
        return new createFormulaInstanceExecutionParameters(this, 'POST', '/formulas/instances/{instanceId}/executions', instanceId);
    };
    /**
     * Retrieve all executions that have a step execution error, for a formula instance.
     * @method
     * @name platformSDK#getFormulasInstancesExecutionsErrors2
     * @param {integer} instanceId - The ID of the formula instance.
     */
    platformSDK.prototype.getFormulasInstancesExecutionsErrors2 = function (instanceId) {
        return new getFormulasInstancesExecutionsErrors2Parameters(this, 'GET', '/formulas/instances/{instanceId}/executions/errors', instanceId);
    };
    /**
     * Retrieve all executions with a step execution error for all formula instances of a formula.
     * @method
     * @name platformSDK#getFormulasInstancesExecutionsErrors2_1
     * @param {integer} formulaId - The ID of the formula.
     */
    platformSDK.prototype.getFormulasInstancesExecutionsErrors2_1 = function (formulaId) {
        return new getFormulasInstancesExecutionsErrors2_1Parameters(this, 'GET', '/formulas/{formulaId}/instances/executions/errors', formulaId);
    };
    /**
     * Delete a specific formula template.
     * @method
     * @name platformSDK#deleteFormulaById
     * @param {integer} id - The ID of the formula template.
     */
    platformSDK.prototype.deleteFormulaById = function (id) {
        return new deleteFormulaByIdParameters(this, 'DELETE', '/formulas/{id}', id);
    };
    /**
     * Retrieve a specific formula template.
     * @method
     * @name platformSDK#getFormulaById
     * @param {integer} id - The ID of the formula template.
     */
    platformSDK.prototype.getFormulaById = function (id) {
        return new getFormulaByIdParameters(this, 'GET', '/formulas/{id}', id);
    };
    /**
     * Replace a specific formula template with the provided template.
     * @method
     * @name platformSDK#replaceFormulaById
     * @param {integer} id - The ID of the formula template.
     * @param {} formula - The formula template.
     */
    platformSDK.prototype.replaceFormulaById = function (id, formula) {
        return new replaceFormulaByIdParameters(this, 'PUT', '/formulas/{id}', id, formula);
    };
    /**
     * Partially update a formula template's metadata.
     * @method
     * @name platformSDK#updateFormulaById
     * @param {integer} id - The ID of the formula template.
     * @param {} formula - The formula template.
     */
    platformSDK.prototype.updateFormulaById = function (id, formula) {
        return new updateFormulaByIdParameters(this, 'PATCH', '/formulas/{id}', id, formula);
    };
    /**
     * Create a new formula configuration.
     * @method
     * @name platformSDK#createFormulaConfiguration
     * @param {integer} id - The ID of the formula template.
     * @param {} configuration - The formula configuration.
     */
    platformSDK.prototype.createFormulaConfiguration = function (id, configuration) {
        return new createFormulaConfigurationParameters(this, 'POST', '/formulas/{id}/configuration', id, configuration);
    };
    /**
     * Delete a formula configuration.
     * @method
     * @name platformSDK#deleteFormulasConfigurationByConfigurationId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} configurationId - The ID of the formula configuration.
     */
    platformSDK.prototype.deleteFormulasConfigurationByConfigurationId = function (id, configurationId) {
        return new deleteFormulasConfigurationByConfigurationIdParameters(this, 'DELETE', '/formulas/{id}/configuration/{configurationId}', id, configurationId);
    };
    /**
     * Retrieve a formula configuration.
     * @method
     * @name platformSDK#getFormulasConfigurationByConfigurationId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} configurationId - The ID of the formula configuration.
     */
    platformSDK.prototype.getFormulasConfigurationByConfigurationId = function (id, configurationId) {
        return new getFormulasConfigurationByConfigurationIdParameters(this, 'GET', '/formulas/{id}/configuration/{configurationId}', id, configurationId);
    };
    /**
     * Update a formula configuration.
     * @method
     * @name platformSDK#replaceFormulasConfigurationByConfigurationId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} configurationId - The ID of the formula configuration.
     * @param {} configuration - The formula configuration.
     */
    platformSDK.prototype.replaceFormulasConfigurationByConfigurationId = function (id, configurationId, configuration) {
        return new replaceFormulasConfigurationByConfigurationIdParameters(this, 'PUT', '/formulas/{id}/configuration/{configurationId}', id, configurationId, configuration);
    };
    /**
     * Export a formula template as a JSON file.
     * @method
     * @name platformSDK#getFormulasExport
     * @param {integer} id - The ID of the formula template.
     */
    platformSDK.prototype.getFormulasExport = function (id) {
        return new getFormulasExportParameters(this, 'GET', '/formulas/{id}/export', id);
    };
    /**
     * Retrieve a list of all instances associated with a particular formula template.
     * @method
     * @name platformSDK#getFormulasInstances2
     * @param {integer} id - The ID of the formula template.
     */
    platformSDK.prototype.getFormulasInstances2 = function (id) {
        return new getFormulasInstances2Parameters(this, 'GET', '/formulas/{id}/instances', id);
    };
    /**
     * Create an instance of a formula template.
     * @method
     * @name platformSDK#createFormulaInstance
     * @param {integer} id - The ID of the formula template.
     * @param {} formulaInstance - The formula instance.
     */
    platformSDK.prototype.createFormulaInstance = function (id, formulaInstance) {
        return new createFormulaInstanceParameters(this, 'POST', '/formulas/{id}/instances', id, formulaInstance);
    };
    /**
     * Delete a specific formula instance of a specific formula template.
     * @method
     * @name platformSDK#deleteFormulasInstanceByInstanceId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} instanceId - The ID of the formula instance.
     */
    platformSDK.prototype.deleteFormulasInstanceByInstanceId = function (id, instanceId) {
        return new deleteFormulasInstanceByInstanceIdParameters(this, 'DELETE', '/formulas/{id}/instances/{instanceId}', id, instanceId);
    };
    /**
     * Retrieve a specific instance of a specific formula template.
     * @method
     * @name platformSDK#getFormulasInstanceByInstanceId2
     * @param {integer} id - The ID of the formula template.
     * @param {integer} instanceId - The ID of the formula instance.
     */
    platformSDK.prototype.getFormulasInstanceByInstanceId2 = function (id, instanceId) {
        return new getFormulasInstanceByInstanceId2Parameters(this, 'GET', '/formulas/{id}/instances/{instanceId}', id, instanceId);
    };
    /**
     * Replace a specific formula instance of a specific formula template with the provided instance.
     * @method
     * @name platformSDK#replaceFormulasInstanceByInstanceId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} instanceId - The ID of the formula instance.
     * @param {} formulaInstance - The formula instance.
     */
    platformSDK.prototype.replaceFormulasInstanceByInstanceId = function (id, instanceId, formulaInstance) {
        return new replaceFormulasInstanceByInstanceIdParameters(this, 'PUT', '/formulas/{id}/instances/{instanceId}', id, instanceId, formulaInstance);
    };
    /**
     * Activate a formula instance.
     * @method
     * @name platformSDK#replaceFormulasInstancesActive
     * @param {integer} id - The ID of the formula template.
     * @param {integer} instanceId - The ID of the formula instance.
     */
    platformSDK.prototype.replaceFormulasInstancesActive = function (id, instanceId) {
        return new replaceFormulasInstancesActiveParameters(this, 'PUT', '/formulas/{id}/instances/{instanceId}/active', id, instanceId);
    };
    /**
     * Deactivate a formula instance.
     * @method
     * @name platformSDK#deleteFormulasInstancesActive
     * @param {integer} id - The ID of the formula template.
     * @param {integer} instanceId - The ID of the formula instance.
     */
    platformSDK.prototype.deleteFormulasInstancesActive = function (id, instanceId) {
        return new deleteFormulasInstancesActiveParameters(this, 'DELETE', '/formulas/{id}/instances/{instanceId}/active', id, instanceId);
    };
    /**
     * Retrieve the executions of a specific formula instance of a specific formula template.
     * @method
     * @name platformSDK#getFormulasInstancesExecutions2
     * @param {integer} id - The ID of the formula template.
     * @param {integer} instanceId - The ID of the formula instance.
     */
    platformSDK.prototype.getFormulasInstancesExecutions2 = function (id, instanceId) {
        return new getFormulasInstancesExecutions2Parameters(this, 'GET', '/formulas/{id}/instances/{instanceId}/executions', id, instanceId);
    };
    /**
     * Retrieve all formula steps.
     * @method
     * @name platformSDK#getFormulasSteps
     * @param {integer} id - The ID of the formula template.
     */
    platformSDK.prototype.getFormulasSteps = function (id) {
        return new getFormulasStepsParameters(this, 'GET', '/formulas/{id}/steps', id);
    };
    /**
     * Create a new formula step.
     * @method
     * @name platformSDK#createFormulaStep
     * @param {integer} id - The ID of the formula template.
     * @param {} step - The formula step.
     */
    platformSDK.prototype.createFormulaStep = function (id, step) {
        return new createFormulaStepParameters(this, 'POST', '/formulas/{id}/steps', id, step);
    };
    /**
     * Delete a formula step.
     * @method
     * @name platformSDK#deleteFormulasStepByStepId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} stepId - The ID of the formula step.
     */
    platformSDK.prototype.deleteFormulasStepByStepId = function (id, stepId) {
        return new deleteFormulasStepByStepIdParameters(this, 'DELETE', '/formulas/{id}/steps/{stepId}', id, stepId);
    };
    /**
     * Retrieve a formula step.
     * @method
     * @name platformSDK#getFormulasStepByStepId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} stepId - The ID of the formula step.
     */
    platformSDK.prototype.getFormulasStepByStepId = function (id, stepId) {
        return new getFormulasStepByStepIdParameters(this, 'GET', '/formulas/{id}/steps/{stepId}', id, stepId);
    };
    /**
     * Update a formula step.
     * @method
     * @name platformSDK#replaceFormulasStepByStepId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} stepId - The ID of the formula step.
     * @param {} step - The formula step.
     */
    platformSDK.prototype.replaceFormulasStepByStepId = function (id, stepId, step) {
        return new replaceFormulasStepByStepIdParameters(this, 'PUT', '/formulas/{id}/steps/{stepId}', id, stepId, step);
    };
    /**
     * Create a new formula trigger.
     * @method
     * @name platformSDK#createFormulaTrigger
     * @param {integer} id - The ID of the formula template.
     * @param {} trigger - The formula trigger.
     */
    platformSDK.prototype.createFormulaTrigger = function (id, trigger) {
        return new createFormulaTriggerParameters(this, 'POST', '/formulas/{id}/triggers', id, trigger);
    };
    /**
     * Delete a formula trigger.
     * @method
     * @name platformSDK#deleteFormulasTriggerByTriggerId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} triggerId - The ID of the formula trigger.
     */
    platformSDK.prototype.deleteFormulasTriggerByTriggerId = function (id, triggerId) {
        return new deleteFormulasTriggerByTriggerIdParameters(this, 'DELETE', '/formulas/{id}/triggers/{triggerId}', id, triggerId);
    };
    /**
     * Retrieve a formula trigger.
     * @method
     * @name platformSDK#getFormulasTriggerByTriggerId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} triggerId - The ID of the formula trigger.
     */
    platformSDK.prototype.getFormulasTriggerByTriggerId = function (id, triggerId) {
        return new getFormulasTriggerByTriggerIdParameters(this, 'GET', '/formulas/{id}/triggers/{triggerId}', id, triggerId);
    };
    /**
     * Update a formula trigger.
     * @method
     * @name platformSDK#replaceFormulasTriggerByTriggerId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} triggerId - The ID of the formula trigger.
     * @param {} trigger - The formula trigger.
     */
    platformSDK.prototype.replaceFormulasTriggerByTriggerId = function (id, triggerId, trigger) {
        return new replaceFormulasTriggerByTriggerIdParameters(this, 'PUT', '/formulas/{id}/triggers/{triggerId}', id, triggerId, trigger);
    };
    /**
     * Retrieve all available element hubs.
     * @method
     * @name platformSDK#getHubs
     */
    platformSDK.prototype.getHubs = function () {
        return new getHubsParameters(this, 'GET', '/hubs');
    };
    /**
     * Create a new hub.
     * @method
     * @name platformSDK#createHub
     * @param {} hub - The hub
     */
    platformSDK.prototype.createHub = function (hub) {
        return new createHubParameters(this, 'POST', '/hubs', hub);
    };
    /**
     * Retrieve all available element hub keys.
     * @method
     * @name platformSDK#getHubsKeys
     */
    platformSDK.prototype.getHubsKeys = function () {
        return new getHubsKeysParameters(this, 'GET', '/hubs/keys');
    };
    /**
     * Delete a hub.
     * @method
     * @name platformSDK#deleteHubByKey
     * @param {string} key - The elements hub key (i.e. 'documents', 'crm', etc.)
     */
    platformSDK.prototype.deleteHubByKey = function (key) {
        return new deleteHubByKeyParameters(this, 'DELETE', '/hubs/{key}', key);
    };
    /**
     * Retrieve the details about a specific hub.
     * @method
     * @name platformSDK#getHubByKey
     * @param {string} key - The elements hub key (i.e. 'documents', 'crm', etc.)
     */
    platformSDK.prototype.getHubByKey = function (key) {
        return new getHubByKeyParameters(this, 'GET', '/hubs/{key}', key);
    };
    /**
     * Retrieve all available elements for a specific hub.
     * @method
     * @name platformSDK#getHubsElements
     * @param {string} key - The elements hub key (i.e. 'documents', 'crm', etc.)
     */
    platformSDK.prototype.getHubsElements = function (key) {
        return new getHubsElementsParameters(this, 'GET', '/hubs/{key}/elements', key);
    };
    /**
     * Retrieve all element instances from a specified path.  The instances go through Cloud Elements to your console.  Specifying an instance that does not exist results in an error response.
     * @method
     * @name platformSDK#getInstances
     */
    platformSDK.prototype.getInstances = function () {
        return new getInstancesParameters(this, 'GET', '/instances');
    };
    /**
     * Create a new element instance in your console.  Instance creation will flow through Cloud Elements to your console.
     * @method
     * @name platformSDK#createInstance
     * @param {} elementInstance - The element instance to create
     */
    platformSDK.prototype.createInstance = function (elementInstance) {
        return new createInstanceParameters(this, 'POST', '/instances', elementInstance);
    };
    /**
     * Delete an instance associated with an instance token in authorization header. Specifying an instance associated with a given token that does not exist will result in an error message.
     * @method
     * @name platformSDK#deleteInstances
     */
    platformSDK.prototype.deleteInstances = function () {
        return new deleteInstancesParameters(this, 'DELETE', '/instances');
    };
    /**
     * Update an instance associated with a given token in authorization header.  Specifying an instance associated with an token that does not exist will result in an error message.
     * @method
     * @name platformSDK#replaceInstances
     * @param {} elementInstance - The fields of the element instance to update
     */
    platformSDK.prototype.replaceInstances = function (elementInstance) {
        return new replaceInstancesParameters(this, 'PUT', '/instances', elementInstance);
    };
    /**
     * Update an instance partially associated with a given token in authorization header.  Specifying an instance associated with an token that does not exist will result in an error message.
     * @method
     * @name platformSDK#updateInstances
     * @param {} elementInstance - The fields of the element instance to update
     */
    platformSDK.prototype.updateInstances = function (elementInstance) {
        return new updateInstancesParameters(this, 'PATCH', '/instances', elementInstance);
    };
    /**
     * Retrieve configuration for an element instance with an associated token in authorization header
     * @method
     * @name platformSDK#getInstancesConfiguration
     */
    platformSDK.prototype.getInstancesConfiguration = function () {
        return new getInstancesConfigurationParameters(this, 'GET', '/instances/configuration');
    };
    /**
     * Retrieve configuration for an element instance with an associated token in authorization header
     * @method
     * @name platformSDK#getInstancesConfigurationByConfigId
     * @param {integer} configId - The ID of the element instance config
     */
    platformSDK.prototype.getInstancesConfigurationByConfigId = function (configId) {
        return new getInstancesConfigurationByConfigIdParameters(this, 'GET', '/instances/configuration/{configId}', configId);
    };
    /**
     * Update configuration for an element instance with an associated token in authorization header
     * @method
     * @name platformSDK#updateInstancesConfigurationByConfigId
     * @param {integer} configId - The ID of the element instance config
     * @param {} config - The updated element instance config
     */
    platformSDK.prototype.updateInstancesConfigurationByConfigId = function (configId, config) {
        return new updateInstancesConfigurationByConfigIdParameters(this, 'PATCH', '/instances/configuration/{configId}', configId, config);
    };
    /**
     * Retrieve an instance specific swagger documentation with an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesDocs
     */
    platformSDK.prototype.getInstancesDocs = function () {
        return new getInstancesDocsParameters(this, 'GET', '/instances/docs');
    };
    /**
     * Retrieve an instance specific swagger documentation for an operation with an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesDocByOperationId
     * @param {string} operationId - The id of the operation for which swagger docs is returned
     */
    platformSDK.prototype.getInstancesDocByOperationId = function (operationId) {
        return new getInstancesDocByOperationIdParameters(this, 'GET', '/instances/docs/{operationId}', operationId);
    };
    /**
     * Retrieve an definitionation for an operation id with an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesDocsDefinitions
     * @param {string} operationId - The id of the operation for which swagger docs is returned
     */
    platformSDK.prototype.getInstancesDocsDefinitions = function (operationId) {
        return new getInstancesDocsDefinitionsParameters(this, 'GET', '/instances/docs/{operationId}/definitions', operationId);
    };
    /**
     * Enable an element instance with an associated instance token in authorization header
     * @method
     * @name platformSDK#replaceInstancesEnabled
     */
    platformSDK.prototype.replaceInstancesEnabled = function () {
        return new replaceInstancesEnabledParameters(this, 'PUT', '/instances/enabled');
    };
    /**
     * Disable an element instance with an associated instance token in authorization header
     * @method
     * @name platformSDK#deleteInstancesEnabled
     */
    platformSDK.prototype.deleteInstancesEnabled = function () {
        return new deleteInstancesEnabledParameters(this, 'DELETE', '/instances/enabled');
    };
    /**
     * Retrieve events for all element instances or for an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesEvents
     */
    platformSDK.prototype.getInstancesEvents = function () {
        return new getInstancesEventsParameters(this, 'GET', '/instances/events');
    };
    /**
     * Retrieve the number of events within a given date/time range for all element instances within the specified account(s).
     * @method
     * @name platformSDK#getInstancesEventsAnalytics
     */
    platformSDK.prototype.getInstancesEventsAnalytics = function () {
        return new getInstancesEventsAnalyticsParameters(this, 'GET', '/instances/events/analytics');
    };
    /**
     * Retrieve the number of events within a given date/time range, aggregated by account ID. This API is really only useful for organization admins where more than one account exists.
     * @method
     * @name platformSDK#getInstancesEventsAnalyticsAccounts
     */
    platformSDK.prototype.getInstancesEventsAnalyticsAccounts = function () {
        return new getInstancesEventsAnalyticsAccountsParameters(this, 'GET', '/instances/events/analytics/accounts');
    };
    /**
     * Retrieve the number of events  within a given date/time range, aggregated by element instance ID.
     * @method
     * @name platformSDK#getInstancesEventsAnalyticsInstances
     */
    platformSDK.prototype.getInstancesEventsAnalyticsInstances = function () {
        return new getInstancesEventsAnalyticsInstancesParameters(this, 'GET', '/instances/events/analytics/instances');
    };
    /**
     * Retrieve events for all element instances or for an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesEventsDispositions
     */
    platformSDK.prototype.getInstancesEventsDispositions = function () {
        return new getInstancesEventsDispositionsParameters(this, 'GET', '/instances/events/dispositions');
    };
    /**
     * Retrieve an event for all element instances or for an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesEventByEventId
     * @param {integer} eventId - The ID of the event
     */
    platformSDK.prototype.getInstancesEventByEventId = function (eventId) {
        return new getInstancesEventByEventIdParameters(this, 'GET', '/instances/events/{eventId}', eventId);
    };
    /**
     * Retrieve all of the object definitions within a specific instance with an associated instance token in authorization header.  If no object definitions exist, then this will result in an error response.
     * @method
     * @name platformSDK#getInstancesObjectsDefinitions
     */
    platformSDK.prototype.getInstancesObjectsDefinitions = function () {
        return new getInstancesObjectsDefinitionsParameters(this, 'GET', '/instances/objects/definitions');
    };
    /**
     * Delete an object definition associated with an objectName for a specific instance with an associated instance token in authorization header.  Specifying an object name that does not have an object definition will result in an error response.
     * @method
     * @name platformSDK#deleteInstancesObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     */
    platformSDK.prototype.deleteInstancesObjectsObjectNameDefinitions = function (objectName) {
        return new deleteInstancesObjectsObjectNameDefinitionsParameters(this, 'DELETE', '/instances/objects/{objectName}/definitions', objectName);
    };
    /**
     * Retrieve a specific object definition associated with an objectName within a specific instance with an associated instance token in authorization header.  Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#getInstancesObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     */
    platformSDK.prototype.getInstancesObjectsObjectNameDefinitions = function (objectName) {
        return new getInstancesObjectsObjectNameDefinitionsParameters(this, 'GET', '/instances/objects/{objectName}/definitions', objectName);
    };
    /**
     * Create a new object definition associated with an objectName within a specific instance with an associated instance token in authorization header.  The definitions allow you to define what an object looks like within an instance.
     * @method
     * @name platformSDK#createInstanceObjectObjectNameDefinition
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     */
    platformSDK.prototype.createInstanceObjectObjectNameDefinition = function (objectName, body) {
        return new createInstanceObjectObjectNameDefinitionParameters(this, 'POST', '/instances/objects/{objectName}/definitions', objectName, body);
    };
    /**
     * Update a specific object's definition associated with an objectName within a specific instance with an associated instance token in authorization header. Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#replaceInstancesObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     */
    platformSDK.prototype.replaceInstancesObjectsObjectNameDefinitions = function (objectName, body) {
        return new replaceInstancesObjectsObjectNameDefinitionsParameters(this, 'PUT', '/instances/objects/{objectName}/definitions', objectName, body);
    };
    /**
     * Temporarily enable trace-level usage logging for an element instance with an associated instance token in authorization header
     * @method
     * @name platformSDK#replaceInstancesTraceLogging
     */
    platformSDK.prototype.replaceInstancesTraceLogging = function () {
        return new replaceInstancesTraceLoggingParameters(this, 'PUT', '/instances/trace-logging');
    };
    /**
     * Disable trace-level usage logging for an element instance with an associated instance token in authorization header
     * @method
     * @name platformSDK#deleteInstancesTraceLogging
     */
    platformSDK.prototype.deleteInstancesTraceLogging = function () {
        return new deleteInstancesTraceLoggingParameters(this, 'DELETE', '/instances/trace-logging');
    };
    /**
     * Delete the transformation for an element instance with an associated instance token in authorization header
     * @method
     * @name platformSDK#deleteInstancesTransformations
     */
    platformSDK.prototype.deleteInstancesTransformations = function () {
        return new deleteInstancesTransformationsParameters(this, 'DELETE', '/instances/transformations');
    };
    /**
     * Retrieve an element instance transformation with an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesTransformations
     */
    platformSDK.prototype.getInstancesTransformations = function () {
        return new getInstancesTransformationsParameters(this, 'GET', '/instances/transformations');
    };
    /**
     * Delete the transformation for an element instance for a specific object with an associated instance token in authorization header
     * @method
     * @name platformSDK#deleteInstancesTransformationByObjectName
     * @param {string} objectName - The name of the object
     */
    platformSDK.prototype.deleteInstancesTransformationByObjectName = function (objectName) {
        return new deleteInstancesTransformationByObjectNameParameters(this, 'DELETE', '/instances/transformations/{objectName}', objectName);
    };
    /**
     * Retrieve an element instance transformation for a specific object with an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesTransformationByObjectName
     * @param {string} objectName - The name of the object
     */
    platformSDK.prototype.getInstancesTransformationByObjectName = function (objectName) {
        return new getInstancesTransformationByObjectNameParameters(this, 'GET', '/instances/transformations/{objectName}', objectName);
    };
    /**
     * Create a transformation for an element instance for a specific object
     * @method
     * @name platformSDK#createInstanceTransformationByObjectName
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation to create
     */
    platformSDK.prototype.createInstanceTransformationByObjectName = function (objectName, transformation) {
        return new createInstanceTransformationByObjectNameParameters(this, 'POST', '/instances/transformations/{objectName}', objectName, transformation);
    };
    /**
     * Update the transformation for an element instance for a specific object with an associated instance token in authorization header
     * @method
     * @name platformSDK#replaceInstancesTransformationByObjectName
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation to update
     */
    platformSDK.prototype.replaceInstancesTransformationByObjectName = function (objectName, transformation) {
        return new replaceInstancesTransformationByObjectNameParameters(this, 'PUT', '/instances/transformations/{objectName}', objectName, transformation);
    };
    /**
     * Delete an instance associated with a given ID from your console. Specifying an instance associated with a given ID that does not exist will result in an error message.
     * @method
     * @name platformSDK#deleteInstanceById
     * @param {integer} id - The ID of the element instance
     */
    platformSDK.prototype.deleteInstanceById = function (id) {
        return new deleteInstanceByIdParameters(this, 'DELETE', '/instances/{id}', id);
    };
    /**
     * Retrieve an element instance associated with a given ID from a specified path.  The instance goes through Cloud Elements to your console.  Specifying an instance with an associated ID that does not exist results in an error response.
     * @method
     * @name platformSDK#getInstanceById
     * @param {integer} id - The ID of the element instance
     */
    platformSDK.prototype.getInstanceById = function (id) {
        return new getInstanceByIdParameters(this, 'GET', '/instances/{id}', id);
    };
    /**
     * Update an instance associated with a given ID from your console.  Specifying an instance associated with an ID that does not exist will result in an error message.
     * @method
     * @name platformSDK#replaceInstanceById
     * @param {integer} id - The ID of the element instance
     * @param {} elementInstance - The fields of the element instance to update
     */
    platformSDK.prototype.replaceInstanceById = function (id, elementInstance) {
        return new replaceInstanceByIdParameters(this, 'PUT', '/instances/{id}', id, elementInstance);
    };
    /**
     * Update an instance partially associated with a given ID from your console.  Specifying an instance associated with an ID that does not exist will result in an error message.
     * @method
     * @name platformSDK#updateInstanceById
     * @param {integer} id - The ID of the element instance
     * @param {} elementInstance - The fields of the element instance to update
     */
    platformSDK.prototype.updateInstanceById = function (id, elementInstance) {
        return new updateInstanceByIdParameters(this, 'PATCH', '/instances/{id}', id, elementInstance);
    };
    /**
     * Retrieve configuration for an element instance
     * @method
     * @name platformSDK#getInstancesConfiguration2
     * @param {integer} id - The ID of the element instance
     */
    platformSDK.prototype.getInstancesConfiguration2 = function (id) {
        return new getInstancesConfiguration2Parameters(this, 'GET', '/instances/{id}/configuration', id);
    };
    /**
     * Retrieve configuration for an element instance
     * @method
     * @name platformSDK#getInstancesConfigurationByConfigId2
     * @param {integer} id - The ID of the element instance
     * @param {integer} configId - The ID of the element instance config
     */
    platformSDK.prototype.getInstancesConfigurationByConfigId2 = function (id, configId) {
        return new getInstancesConfigurationByConfigId2Parameters(this, 'GET', '/instances/{id}/configuration/{configId}', id, configId);
    };
    /**
     * Update configuration for an element instance
     * @method
     * @name platformSDK#updateInstancesConfigurationByConfigId2
     * @param {integer} id - The ID of the element instance
     * @param {integer} configId - The ID of the element instance config
     * @param {} config - The updated element instance config
     */
    platformSDK.prototype.updateInstancesConfigurationByConfigId2 = function (id, configId, config) {
        return new updateInstancesConfigurationByConfigId2Parameters(this, 'PATCH', '/instances/{id}/configuration/{configId}', id, configId, config);
    };
    /**
     * Retrieve an instance specific swagger documentation
     * @method
     * @name platformSDK#getInstancesDocs2
     * @param {integer} id - The ID of the element instance
     */
    platformSDK.prototype.getInstancesDocs2 = function (id) {
        return new getInstancesDocs2Parameters(this, 'GET', '/instances/{id}/docs', id);
    };
    /**
     * Retrieve an instance specific swagger documentation
     * @method
     * @name platformSDK#getInstancesDocByOperationId2
     * @param {integer} id - The ID of the element instance
     * @param {string} operationId - The id of the operation for which swagger docs is returned
     */
    platformSDK.prototype.getInstancesDocByOperationId2 = function (id, operationId) {
        return new getInstancesDocByOperationId2Parameters(this, 'GET', '/instances/{id}/docs/{operationId}', id, operationId);
    };
    /**
     * Retrieve an instance specific swagger documentation
     * @method
     * @name platformSDK#getInstancesDocsDefinitions2
     * @param {integer} id - The ID of the element instance
     * @param {string} operationId - The id of the operation for which swagger docs is returned
     */
    platformSDK.prototype.getInstancesDocsDefinitions2 = function (id, operationId) {
        return new getInstancesDocsDefinitions2Parameters(this, 'GET', '/instances/{id}/docs/{operationId}/definitions', id, operationId);
    };
    /**
     * Enable an element instance
     * @method
     * @name platformSDK#replaceInstancesEnabled2
     * @param {integer} id - The ID of the element instance
     */
    platformSDK.prototype.replaceInstancesEnabled2 = function (id) {
        return new replaceInstancesEnabled2Parameters(this, 'PUT', '/instances/{id}/enabled', id);
    };
    /**
     * Disable an element instance
     * @method
     * @name platformSDK#deleteInstancesEnabled2
     * @param {integer} id - The ID of the element instance
     */
    platformSDK.prototype.deleteInstancesEnabled2 = function (id) {
        return new deleteInstancesEnabled2Parameters(this, 'DELETE', '/instances/{id}/enabled', id);
    };
    /**
     * Retrieve events for an element instance
     * @method
     * @name platformSDK#getInstancesEvents2
     * @param {integer} id - The ID of the element instance
     */
    platformSDK.prototype.getInstancesEvents2 = function (id) {
        return new getInstancesEvents2Parameters(this, 'GET', '/instances/{id}/events', id);
    };
    /**
     * Retrieve an event for an element instance
     * @method
     * @name platformSDK#getInstancesEventByEventId2
     * @param {integer} id - The ID of the element instance
     * @param {integer} eventId - The ID of the event
     */
    platformSDK.prototype.getInstancesEventByEventId2 = function (id, eventId) {
        return new getInstancesEventByEventId2Parameters(this, 'GET', '/instances/{id}/events/{eventId}', id, eventId);
    };
    /**
     * Retrieve all of the object definitions within a specific instance.  If no object definitions exist, then this will result in an error response.
     * @method
     * @name platformSDK#getInstancesObjectsDefinitions2
     * @param {integer} id - The ID of the instance
     */
    platformSDK.prototype.getInstancesObjectsDefinitions2 = function (id) {
        return new getInstancesObjectsDefinitions2Parameters(this, 'GET', '/instances/{id}/objects/definitions', id);
    };
    /**
     * Delete an object definition associated with an objectName for a specific instance.  Specifying an object name that does not have an object definition will result in an error response.
     * @method
     * @name platformSDK#deleteInstancesObjectsObjectNameDefinitions2
     * @param {integer} id - The ID of the instance
     * @param {string} objectName - The name of the object
     */
    platformSDK.prototype.deleteInstancesObjectsObjectNameDefinitions2 = function (id, objectName) {
        return new deleteInstancesObjectsObjectNameDefinitions2Parameters(this, 'DELETE', '/instances/{id}/objects/{objectName}/definitions', id, objectName);
    };
    /**
     * Retrieve a specific object definition associated with an objectName within a specific instance.  Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#getInstancesObjectsObjectNameDefinitions2
     * @param {integer} id - The ID of the instance
     * @param {string} objectName - The name of the object
     */
    platformSDK.prototype.getInstancesObjectsObjectNameDefinitions2 = function (id, objectName) {
        return new getInstancesObjectsObjectNameDefinitions2Parameters(this, 'GET', '/instances/{id}/objects/{objectName}/definitions', id, objectName);
    };
    /**
     * Create a new object definition associated with an objectName within a specific instance.  The definitions allow you to define what an object looks like within an instance.
     * @method
     * @name platformSDK#createInstanceObjectObjectNameDefinition2
     * @param {integer} id - The ID of the instance
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     */
    platformSDK.prototype.createInstanceObjectObjectNameDefinition2 = function (id, objectName, body) {
        return new createInstanceObjectObjectNameDefinition2Parameters(this, 'POST', '/instances/{id}/objects/{objectName}/definitions', id, objectName, body);
    };
    /**
     * Update a specific object's definition associated with an objectName within a specific instance. Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#replaceInstancesObjectsObjectNameDefinitions2
     * @param {integer} id - The ID of the instance
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     */
    platformSDK.prototype.replaceInstancesObjectsObjectNameDefinitions2 = function (id, objectName, body) {
        return new replaceInstancesObjectsObjectNameDefinitions2Parameters(this, 'PUT', '/instances/{id}/objects/{objectName}/definitions', id, objectName, body);
    };
    /**
     * Temporarily enable trace-level usage logging for an element instance
     * @method
     * @name platformSDK#replaceInstancesTraceLogging2
     * @param {integer} id - The ID of the element instance
     */
    platformSDK.prototype.replaceInstancesTraceLogging2 = function (id) {
        return new replaceInstancesTraceLogging2Parameters(this, 'PUT', '/instances/{id}/trace-logging', id);
    };
    /**
     * Disable trace-level usage logging for an element instance
     * @method
     * @name platformSDK#deleteInstancesTraceLogging2
     * @param {integer} id - The ID of the element instance
     */
    platformSDK.prototype.deleteInstancesTraceLogging2 = function (id) {
        return new deleteInstancesTraceLogging2Parameters(this, 'DELETE', '/instances/{id}/trace-logging', id);
    };
    /**
     * Delete the transformation for an element instance
     * @method
     * @name platformSDK#deleteInstancesTransformations2
     * @param {integer} id - The ID of the element instance
     */
    platformSDK.prototype.deleteInstancesTransformations2 = function (id) {
        return new deleteInstancesTransformations2Parameters(this, 'DELETE', '/instances/{id}/transformations', id);
    };
    /**
     * Retrieve an element instance transformation
     * @method
     * @name platformSDK#getInstancesTransformations2
     * @param {integer} id - The ID of the element instance
     */
    platformSDK.prototype.getInstancesTransformations2 = function (id) {
        return new getInstancesTransformations2Parameters(this, 'GET', '/instances/{id}/transformations', id);
    };
    /**
     * Delete the transformation for an element instance for a specific object
     * @method
     * @name platformSDK#deleteInstancesTransformationByObjectName2
     * @param {integer} id - The ID of the element instance
     * @param {string} objectName - The name of the object
     */
    platformSDK.prototype.deleteInstancesTransformationByObjectName2 = function (id, objectName) {
        return new deleteInstancesTransformationByObjectName2Parameters(this, 'DELETE', '/instances/{id}/transformations/{objectName}', id, objectName);
    };
    /**
     * Retrieve an element instance transformation for a specific object
     * @method
     * @name platformSDK#getInstancesTransformationByObjectName2
     * @param {integer} id - The ID of the element instance
     * @param {string} objectName - The name of the object
     */
    platformSDK.prototype.getInstancesTransformationByObjectName2 = function (id, objectName) {
        return new getInstancesTransformationByObjectName2Parameters(this, 'GET', '/instances/{id}/transformations/{objectName}', id, objectName);
    };
    /**
     * Create a transformation for an element instance for a specific object
     * @method
     * @name platformSDK#createInstanceTransformationByObjectName2
     * @param {integer} id - The ID of the element instance
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation to create
     */
    platformSDK.prototype.createInstanceTransformationByObjectName2 = function (id, objectName, transformation) {
        return new createInstanceTransformationByObjectName2Parameters(this, 'POST', '/instances/{id}/transformations/{objectName}', id, objectName, transformation);
    };
    /**
     * Update the transformation for an element instance for a specific object
     * @method
     * @name platformSDK#replaceInstancesTransformationByObjectName2
     * @param {integer} id - The ID of the element instance
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation to update
     */
    platformSDK.prototype.replaceInstancesTransformationByObjectName2 = function (id, objectName, transformation) {
        return new replaceInstancesTransformationByObjectName2Parameters(this, 'PUT', '/instances/{id}/transformations/{objectName}', id, objectName, transformation);
    };
    /**
     * Get a list of all configured jobs.
     * @method
     * @name platformSDK#getJobs
     */
    platformSDK.prototype.getJobs = function () {
        return new getJobsParameters(this, 'GET', '/jobs');
    };
    /**
     * Create a new job.
     * @method
     * @name platformSDK#createJob
     */
    platformSDK.prototype.createJob = function () {
        return new createJobParameters(this, 'POST', '/jobs');
    };
    /**
     * Get a list of the previous job executions.
     * @method
     * @name platformSDK#getJobsExecutions
     */
    platformSDK.prototype.getJobsExecutions = function () {
        return new getJobsExecutionsParameters(this, 'GET', '/jobs/executions');
    };
    /**
     * Delete a specific job.
     * @method
     * @name platformSDK#deleteJobById
     * @param {string} id - The ID of the job.
     */
    platformSDK.prototype.deleteJobById = function (id) {
        return new deleteJobByIdParameters(this, 'DELETE', '/jobs/{id}', id);
    };
    /**
     * Get information about a specific job.
     * @method
     * @name platformSDK#getJobById
     * @param {string} id - The ID of the job.
     */
    platformSDK.prototype.getJobById = function (id) {
        return new getJobByIdParameters(this, 'GET', '/jobs/{id}', id);
    };
    /**
     * Disable a job.
     * @method
     * @name platformSDK#replaceJobsDisable
     * @param {string} id - The ID of the job.
     */
    platformSDK.prototype.replaceJobsDisable = function (id) {
        return new replaceJobsDisableParameters(this, 'PUT', '/jobs/{id}/disable', id);
    };
    /**
     * Enable a job.
     * @method
     * @name platformSDK#replaceJobsEnable
     * @param {string} id - The ID of the job.
     */
    platformSDK.prototype.replaceJobsEnable = function (id) {
        return new replaceJobsEnableParameters(this, 'PUT', '/jobs/{id}/enable', id);
    };
    /**
     * Get a list of history records for a specific job.
     * @method
     * @name platformSDK#getJobsHistory
     * @param {string} id - The ID of the job.
     */
    platformSDK.prototype.getJobsHistory = function (id) {
        return new getJobsHistoryParameters(this, 'GET', '/jobs/{id}/history', id);
    };
    /**
     * Get a specific history record for a specific job.
     * @method
     * @name platformSDK#getJobsHistoryByHistoryId
     * @param {string} id - The ID of the job.
     * @param {integer} historyId - The ID of the History record.
     */
    platformSDK.prototype.getJobsHistoryByHistoryId = function (id, historyId) {
        return new getJobsHistoryByHistoryIdParameters(this, 'GET', '/jobs/{id}/history/{historyId}', id, historyId);
    };
    /**
     * Update a job's CRON string and reschedule it.
     * @method
     * @name platformSDK#updateJobsReschedule
     * @param {string} id - The ID of the job.
     */
    platformSDK.prototype.updateJobsReschedule = function (id) {
        return new updateJobsRescheduleParameters(this, 'PATCH', '/jobs/{id}/reschedule', id);
    };
    /**
     * Retrieve the API metrics for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsApi
     */
    platformSDK.prototype.getMetricsApi = function () {
        return new getMetricsApiParameters(this, 'GET', '/metrics/api');
    };
    /**
     * Retrieve the metrics of number of bulk jobs executed for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsBulkJobs
     */
    platformSDK.prototype.getMetricsBulkJobs = function () {
        return new getMetricsBulkJobsParameters(this, 'GET', '/metrics/bulk-jobs');
    };
    /**
     * Retrieve the element instance creation API metrics for the accounts provided, split up by element key. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsElementInstancesCreated
     */
    platformSDK.prototype.getMetricsElementInstancesCreated = function () {
        return new getMetricsElementInstancesCreatedParameters(this, 'GET', '/metrics/element-instances-created');
    };
    /**
     * Retrieve the metrics of number of custom elements created for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsElementsCreated
     */
    platformSDK.prototype.getMetricsElementsCreated = function () {
        return new getMetricsElementsCreatedParameters(this, 'GET', '/metrics/elements-created');
    };
    /**
     * Retrieve the metrics of number of events received for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsEvents
     */
    platformSDK.prototype.getMetricsEvents = function () {
        return new getMetricsEventsParameters(this, 'GET', '/metrics/events');
    };
    /**
     * Retrieve the metrics of number of formulas executions for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsFormulaExecutions
     */
    platformSDK.prototype.getMetricsFormulaExecutions = function () {
        return new getMetricsFormulaExecutionsParameters(this, 'GET', '/metrics/formula-executions');
    };
    /**
     * Retrieve the metrics of number of formulas created for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsFormulasCreated
     */
    platformSDK.prototype.getMetricsFormulasCreated = function () {
        return new getMetricsFormulasCreatedParameters(this, 'GET', '/metrics/formulas-created');
    };
    /**
     * Retrieve the API metrics for the accounts provided, split up by hub. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsHubApi
     */
    platformSDK.prototype.getMetricsHubApi = function () {
        return new getMetricsHubApiParameters(this, 'GET', '/metrics/hub-api');
    };
    /**
     * Retrieve the hubs created metrics for the accounts provided, split up by hub. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsHubsCreated
     */
    platformSDK.prototype.getMetricsHubsCreated = function () {
        return new getMetricsHubsCreatedParameters(this, 'GET', '/metrics/hubs-created');
    };
    /**
     * Retrieve the metrics of number of VDRs created for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsVdrsCreated
     */
    platformSDK.prototype.getMetricsVdrsCreated = function () {
        return new getMetricsVdrsCreatedParameters(this, 'GET', '/metrics/vdrs-created');
    };
    /**
     * Retrieve the metrics of number of calls using VDRs for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsVdrsInvoked
     */
    platformSDK.prototype.getMetricsVdrsInvoked = function () {
        return new getMetricsVdrsInvokedParameters(this, 'GET', '/metrics/vdrs-invoked');
    };
    /**
     * Create a new organization within the user's customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#createOrganization
     * @param {} organization - The organization to create.
     */
    platformSDK.prototype.createOrganization = function (organization) {
        return new createOrganizationParameters(this, 'POST', '/organizations', organization);
    };
    /**
     * Delete the default transformation for an element within an organization.  The key field denotes the element being referenced in the API call, i.e. dropbox.
     * @method
     * @name platformSDK#deleteOrganizationsElementsTransformations
     * @param {string} keyOrId - The element key or ID
     */
    platformSDK.prototype.deleteOrganizationsElementsTransformations = function (keyOrId) {
        return new deleteOrganizationsElementsTransformationsParameters(this, 'DELETE', '/organizations/elements/{keyOrId}/transformations', keyOrId);
    };
    /**
     * Retrieve the default transformation for a specific element within an organization.  The key field denotes the element being referenced in the API call, i.e. dropbox.
     * @method
     * @name platformSDK#getOrganizationsElementsTransformations
     * @param {string} keyOrId - The element key or ID
     */
    platformSDK.prototype.getOrganizationsElementsTransformations = function (keyOrId) {
        return new getOrganizationsElementsTransformationsParameters(this, 'GET', '/organizations/elements/{keyOrId}/transformations', keyOrId);
    };
    /**
     * Delete the default transformation for an object for a specific element within an organization. The key field denotes the element being referenced in the API call, i.e. dropbox.
     * @method
     * @name platformSDK#deleteOrganizationsElementsTransformationByObjectName
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The name of the object
     */
    platformSDK.prototype.deleteOrganizationsElementsTransformationByObjectName = function (keyOrId, objectName) {
        return new deleteOrganizationsElementsTransformationByObjectNameParameters(this, 'DELETE', '/organizations/elements/{keyOrId}/transformations/{objectName}', keyOrId, objectName);
    };
    /**
     * Retrieve the default transformation for an object for a specific element within an organization.  The key field denotes the element being referenced in the API call, i.e. dropbox.
     * @method
     * @name platformSDK#getOrganizationsElementsTransformationByObjectName
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The name of the object
     */
    platformSDK.prototype.getOrganizationsElementsTransformationByObjectName = function (keyOrId, objectName) {
        return new getOrganizationsElementsTransformationByObjectNameParameters(this, 'GET', '/organizations/elements/{keyOrId}/transformations/{objectName}', keyOrId, objectName);
    };
    /**
     * Create a default transformation for a specific object for all elements with the given key, within an organization.  The key field denotes the element being referenced in the API call, i.e. dropbox.
     * @method
     * @name platformSDK#createOrganizationElementTransformationByObjectName
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation
     */
    platformSDK.prototype.createOrganizationElementTransformationByObjectName = function (keyOrId, objectName, transformation) {
        return new createOrganizationElementTransformationByObjectNameParameters(this, 'POST', '/organizations/elements/{keyOrId}/transformations/{objectName}', keyOrId, objectName, transformation);
    };
    /**
     * Update the default transformation for an object for a specific element element within an organization.  The key field denotes the element being referenced in the API call, i.e. dropbox.
     * @method
     * @name platformSDK#replaceOrganizationsElementsTransformationByObjectName
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation
     */
    platformSDK.prototype.replaceOrganizationsElementsTransformationByObjectName = function (keyOrId, objectName, transformation) {
        return new replaceOrganizationsElementsTransformationByObjectNameParameters(this, 'PUT', '/organizations/elements/{keyOrId}/transformations/{objectName}', keyOrId, objectName, transformation);
    };
    /**
     * Retrieve the user's organization
     * @method
     * @name platformSDK#getOrganizationsMe
     */
    platformSDK.prototype.getOrganizationsMe = function () {
        return new getOrganizationsMeParameters(this, 'GET', '/organizations/me');
    };
    /**
     * Update the user's organization metadata
     * @method
     * @name platformSDK#replaceOrganizationsMe
     * @param {} body - The organization metadata to update. The only field that can be updated is 'name'.
     */
    platformSDK.prototype.replaceOrganizationsMe = function (body) {
        return new replaceOrganizationsMeParameters(this, 'PUT', '/organizations/me', body);
    };
    /**
     * Delete all object definitions within an organization.
     * @method
     * @name platformSDK#deleteOrganizationsObjectsDefinitions
     */
    platformSDK.prototype.deleteOrganizationsObjectsDefinitions = function () {
        return new deleteOrganizationsObjectsDefinitionsParameters(this, 'DELETE', '/organizations/objects/definitions');
    };
    /**
     * Retrieve all of the object definitions within an organization.
     * @method
     * @name platformSDK#getOrganizationsObjectsDefinitions
     */
    platformSDK.prototype.getOrganizationsObjectsDefinitions = function () {
        return new getOrganizationsObjectsDefinitionsParameters(this, 'GET', '/organizations/objects/definitions');
    };
    /**
     * Create multiple object definitions within an organization.  The definitions allow you to define what an object looks like within an organization.
     * @method
     * @name platformSDK#createOrganizationObjectDefinition
     * @param {} body - The object definitions to create
     */
    platformSDK.prototype.createOrganizationObjectDefinition = function (body) {
        return new createOrganizationObjectDefinitionParameters(this, 'POST', '/organizations/objects/definitions', body);
    };
    /**
     * Delete an object definition associated with a specific objectName within an organization. Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#deleteOrganizationsObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     */
    platformSDK.prototype.deleteOrganizationsObjectsObjectNameDefinitions = function (objectName) {
        return new deleteOrganizationsObjectsObjectNameDefinitionsParameters(this, 'DELETE', '/organizations/objects/{objectName}/definitions', objectName);
    };
    /**
     * Retrieve a specific object definition associated with an objectName within an organization.
     * @method
     * @name platformSDK#getOrganizationsObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     */
    platformSDK.prototype.getOrganizationsObjectsObjectNameDefinitions = function (objectName) {
        return new getOrganizationsObjectsObjectNameDefinitionsParameters(this, 'GET', '/organizations/objects/{objectName}/definitions', objectName);
    };
    /**
     * Create a new object definition associated with an objectName within an organization.  The definitions allow you to define what an object looks like within an organization.
     * @method
     * @name platformSDK#createOrganizationObjectObjectNameDefinition
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     */
    platformSDK.prototype.createOrganizationObjectObjectNameDefinition = function (objectName, body) {
        return new createOrganizationObjectObjectNameDefinitionParameters(this, 'POST', '/organizations/objects/{objectName}/definitions', objectName, body);
    };
    /**
     * Update a specific object's definition associated with a specific objectName within an organization.  Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#replaceOrganizationsObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     */
    platformSDK.prototype.replaceOrganizationsObjectsObjectNameDefinitions = function (objectName, body) {
        return new replaceOrganizationsObjectsObjectNameDefinitionsParameters(this, 'PUT', '/organizations/objects/{objectName}/definitions', objectName, body);
    };
    /**
     * Find users within your default organizational account.  The CEQL search expression or the where clause, without the WHERE keyword, in a typical SQL query. For example, to search for users containing the name 'greg', the search expression will be where name=‘greg’. When this parameter is omitted, all accounts are returned in a paginated fashion.
     * @method
     * @name platformSDK#getOrganizationsUsers
     */
    platformSDK.prototype.getOrganizationsUsers = function () {
        return new getOrganizationsUsersParameters(this, 'GET', '/organizations/users');
    };
    /**
     * Create a user under the default organization account
     * @method
     * @name platformSDK#createOrganizationUser
     * @param {} body - The user to create<br/><br/>The required fields are:<br/><ul><li><b>email</b> - The user's email address</li><li><b>firstName</b> - The user's first name</li><li><b>lastName</b> - The user's last name</li></ul><br/>Upon success, the created object will be returned.
     */
    platformSDK.prototype.createOrganizationUser = function (body) {
        return new createOrganizationUserParameters(this, 'POST', '/organizations/users', body);
    };
    /**
     * Retrieve a user associated with an email or ID within the default organization.  Specifying a user associated with a given emailOrId that does not exist will result in an error response.
     * @method
     * @name platformSDK#getOrganizationsUserByEmailOrId
     * @param {string} emailOrId - The email address or numeric ID of the user
     */
    platformSDK.prototype.getOrganizationsUserByEmailOrId = function (emailOrId) {
        return new getOrganizationsUserByEmailOrIdParameters(this, 'GET', '/organizations/users/{emailOrId:.+}', emailOrId);
    };
    /**
     * Delete a user associated with an ID within your organization. WARNING: This action will irreversibly delete all jobs, and formula and element instances associated with the user.
     * @method
     * @name platformSDK#deleteOrganizationsUserById
     * @param {integer} id - The ID of the user
     */
    platformSDK.prototype.deleteOrganizationsUserById = function (id) {
        return new deleteOrganizationsUserByIdParameters(this, 'DELETE', '/organizations/users/{id}', id);
    };
    /**
     * Update a user associated with an ID within your organization. WARNING: If updating the 'active' field to false, all of the scheduled jobs for the user will be deleted.
     * @method
     * @name platformSDK#updateOrganizationsUserById
     * @param {integer} id - The ID of the user
     * @param {} body - The updated user information
     */
    platformSDK.prototype.updateOrganizationsUserById = function (id, body) {
        return new updateOrganizationsUserByIdParameters(this, 'PATCH', '/organizations/users/{id}', id, body);
    };
    /**
     * Create a new account within an organization. NOTE: Only a user with the 'org-admin' privilege within the organization, or the 'customer-admin' privilege within the customer is able to use this API.
     * @method
     * @name platformSDK#createOrganizationAccount
     * @param {integer} id - The ID of the organization
     * @param {} account - The account to create.
     */
    platformSDK.prototype.createOrganizationAccount = function (id, account) {
        return new createOrganizationAccountParameters(this, 'POST', '/organizations/{id}/accounts', id, account);
    };
    /**
     * Retrieve all the accounts within an organization. NOTE: Only a user with the 'org-admin' privilege within the organization, or the 'customer-admin' privilege within the customer is able to use this API.
     * @method
     * @name platformSDK#getOrganizationsAccounts
     * @param {integer} id - The ID of the organization
     */
    platformSDK.prototype.getOrganizationsAccounts = function (id) {
        return new getOrganizationsAccountsParameters(this, 'GET', '/organizations/{id}/accounts', id);
    };
    /**
     * Retrieve an account within an organization NOTE: Only a user with the 'org-admin' privilege within the organization, or the 'customer-admin' privilege within the customer is able to use this API.
     * @method
     * @name platformSDK#getOrganizationsAccountByAccountId
     * @param {integer} id - The ID of the organization
     * @param {integer} accountId - The ID of the account
     */
    platformSDK.prototype.getOrganizationsAccountByAccountId = function (id, accountId) {
        return new getOrganizationsAccountByAccountIdParameters(this, 'GET', '/organizations/{id}/accounts/{accountId}', id, accountId);
    };
    /**
     * Retrieve the usage logs for your account.
     * @method
     * @name platformSDK#getUsage
     */
    platformSDK.prototype.getUsage = function () {
        return new getUsageParameters(this, 'GET', '/usage');
    };
    /**
     * Retrieve the number of element API calls within a given date/time range
     * @method
     * @name platformSDK#getUsageAnalyticsActivity
     * @param {string} from - Start time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     * @param {string} to - End time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     */
    platformSDK.prototype.getUsageAnalyticsActivity = function (from, to) {
        return new getUsageAnalyticsActivityParameters(this, 'GET', '/usage/analytics/activity', from, to);
    };
    /**
     * Retrieve the number of element API calls for each element within a given date/time range
     * @method
     * @name platformSDK#getUsageAnalyticsActivityElements
     * @param {string} from - Start time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     * @param {string} to - End time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     */
    platformSDK.prototype.getUsageAnalyticsActivityElements = function (from, to) {
        return new getUsageAnalyticsActivityElementsParameters(this, 'GET', '/usage/analytics/activity/elements', from, to);
    };
    /**
     * Retrieve the number of successes and failures of element API calls within a given date/time range.
     * @method
     * @name platformSDK#getUsageAnalyticsStatuses
     * @param {string} from - Start time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     * @param {string} to - End time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     */
    platformSDK.prototype.getUsageAnalyticsStatuses = function (from, to) {
        return new getUsageAnalyticsStatusesParameters(this, 'GET', '/usage/analytics/statuses', from, to);
    };
    /**
     * Retrieve the response times of element API calls within a given date/time range
     * @method
     * @name platformSDK#getUsageAnalyticsTimes
     * @param {string} from - Start time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     * @param {string} to - End time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     */
    platformSDK.prototype.getUsageAnalyticsTimes = function (from, to) {
        return new getUsageAnalyticsTimesParameters(this, 'GET', '/usage/analytics/times', from, to);
    };
    /**
     * Retrieve the usage record by id
     * @method
     * @name platformSDK#getUsageById
     * @param {string} id - The ID of log record
     */
    platformSDK.prototype.getUsageById = function (id) {
        return new getUsageByIdParameters(this, 'GET', '/usage/{id}', id);
    };
    /**
     * Retrieve users within your account or organization.  Find users within your account or organization, using the provided CEQL search expression or the where clause, without the WHERE keyword, in a typical SQL query. For example, to search for users containing the name 'greg', the search expression will be where name='greg'. When this parameter is omitted, all accounts are returned in a paginated fashion.
     * @method
     * @name platformSDK#getUsers
     */
    platformSDK.prototype.getUsers = function () {
        return new getUsersParameters(this, 'GET', '/users');
    };
    /**
     * Retrieve a user associated with a given email or ID within your account or organization.  Specifying a user associated with a given email or ID that does not exist will result in an error response.
     * @method
     * @name platformSDK#getUserByEmailOrId
     * @param {string} emailOrId - The email address or numeric ID of the user
     */
    platformSDK.prototype.getUserByEmailOrId = function (emailOrId) {
        return new getUserByEmailOrIdParameters(this, 'GET', '/users/{emailOrId}', emailOrId);
    };
    /**
     * Delete a user associated with a given ID within your account or organization. WARNING: This action will delete all formula and element instances associated with the user, and is irreversible. Specifying a user associated with a given ID that does not exist will result in an error response.
     * @method
     * @name platformSDK#deleteUserById
     * @param {integer} id - The ID of the user
     */
    platformSDK.prototype.deleteUserById = function (id) {
        return new deleteUserByIdParameters(this, 'DELETE', '/users/{id}', id);
    };
    /**
     * Update a user associated with a given email or ID within your account or organization.  Specifying a user associated with a given email or ID that does not exist will result in an error response.
     * @method
     * @name platformSDK#updateUserById
     * @param {integer} id - The ID of the user
     * @param {} body - The updated user information
     */
    platformSDK.prototype.updateUserById = function (id, body) {
        return new updateUserByIdParameters(this, 'PATCH', '/users/{id}', id, body);
    };
    /**
     * Retrieve the roles that a user has been granted. This will return the effective roles, meaning the role could have been granted at the user level OR at the account level.
     * @method
     * @name platformSDK#getUsersRoles
     * @param {number} id - The ID of the user.
     */
    platformSDK.prototype.getUsersRoles = function (id) {
        return new getUsersRolesParameters(this, 'GET', '/users/{id}/roles', id);
    };
    /**
     * Revoke a role from a user. This will only remove roles granted directly to the user, and will not affect roles that may have been granted at the account level.
     * @method
     * @name platformSDK#deleteUsersRoleByRoleKey
     * @param {number} userId - The ID of the user from which the role will be revoked.
     * @param {string} roleKey - The key of the role to revoke (org-admin, org, or admin)
     */
    platformSDK.prototype.deleteUsersRoleByRoleKey = function (userId, roleKey) {
        return new deleteUsersRoleByRoleKeyParameters(this, 'DELETE', '/users/{userId}/roles/{roleKey}', userId, roleKey);
    };
    /**
     * Grant a role to a user.
     * @method
     * @name platformSDK#replaceUsersRoleByRoleKey
     * @param {number} userId - The ID of the user to which the role will be granted.
     * @param {string} roleKey - The key of the role to grant (org-admin, org, or admin)
     */
    platformSDK.prototype.replaceUsersRoleByRoleKey = function (userId, roleKey) {
        return new replaceUsersRoleByRoleKeyParameters(this, 'PUT', '/users/{userId}/roles/{roleKey}', userId, roleKey);
    };
    return platformSDK;
}());
exports.platformSDK = platformSDK;
