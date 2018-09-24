import * as request from "superagent";
import {
    SuperAgentStatic
} from "superagent";

type CallbackHandler = (err: any, res ? : request.Response) => void;
type Authentication =

    {
        'type' ? : string

    }

;
type Configuration =

    {
        'description' ? : string

        'key': string

        'name': string

        'type': "value" | "elementInstance"

    }

;
type DefaultTransformations =

    {
        'name' ? : string

        'vendorName' ? : string

    }

;
type ObjectMetadata =

    {
        '&lt;objectName&gt;' ? : ObjectMetadataFields

    }

;
type ObjectMetadataFields =

    {
        'fields' ? :

            Array <
            Field

            >
    }

;
type Field =

    {
        'path' ? : string

        'type' ? : string

    }

;
type ConfigurationPropertyMap =

    {
        '&lt;replace_your_config_property_name&gt;' ? : string

    }

;
type CreateElement =

    {
        'authentication' ? : Authentication

        'configuration' ? :

            Array <
            Configuration

            >
            'description' ? : string

        'hub' ? : string

        'image' ? : string

        'name' ? : string

        'parameters' ? :

            Array <
            Parameter

            >
            'resources' ? :

            Array <
            Resource

            >
    }

;
type DefaultParameter =

    {
        'name' ? : string

        'type' ? : string

        'vendorName' ? : string

        'vendorType' ? : string

    }

;
type Element =

    {
        'active' ? : boolean

        'authenticationType' ? : string

        'configDescription' ? : string

        'createdDate' ? : number

        'deleted' ? : boolean

        'description' ? : string

        'existingAccountDescription' ? : string

        'id' ? : number

        'image' ? : string

        'key' ? : string

        'name' ? : string

        'signupURL' ? : string

        'trialAccount' ? : boolean

        'trialAccountDescription' ? : string

        'typeOauth' ? : boolean

        'updatedDate' ? : number

    }

;
type ElementConfig =

    {
        'active' ? : boolean

        'companyConfig' ? : boolean

        'configDataType' ? : string

        'defaultValue' ? : string

        'description' ? : string

        'internal' ? : boolean

        'key' ? : string

        'mandatory' ? : boolean

        'name' ? : string

        'resellerConfig' ? : boolean

    }

;
type ElementConfigs =

    {
        'configuration' ? :

            Array <
            ElementConfig

            >
            'providerData' ? :

            Array <
            ElementConfig

            >
    }

;
type ElementInstance =

    {
        'cacheTimeToLive' ? : number

        'cachingEnabled': boolean

        'disabled' ? : boolean

        'element' ? : Element

        'id' ? : number

        'maxCacheSize' ? : number

        'name' ? : string

        'token' ? :

        {}

        'valid' ? : boolean

    }

;
type ElementMetadata =

    {
        'description' ? : string

        'events' ? : EventMetadata

        'id' ? : number

        'key' ? : string

        'name' ? : string

    }

;
type EventMetadata =

    {
        'methods' ? :

            Array < string

            >
            'polling' ? : EventMethodMetadata

        'supported' ? : boolean

        'webhook' ? : EventMethodMetadata

    }

;
type EventMethodMetadata =

    {
        '&lt;resourceName&gt;' ? : EventResourceMetadata

    }

;
type EventResourceMetadata =

    {
        'eventTypes' ? :

            Array < string

            >
            'pollUrl' ? : string

    }

;
type Model =

    {
        'name' ? : string

        'swagger' ? :

        {}

    }

;
type OAuthInfo =

    {
        'apiKey' ? : string

        'apiSecret' ? : string

        'callbackUrl' ? : string

        'scope' ? : string

        'siteAddress' ? : string

        'state' ? : string

        'isOAuthProxy' ? : boolean

        'oauthProxyName' ? : string

        'requestToken' ? : string

    }

;
type OAuthRedirect =

    {
        'element' ? : string

        'oauthUrl' ? : string

    }

;
type OAuthToken =

    {
        'secret' ? : string

        'token' ? : string

    }

;
type Parameter =

    {
        'dataType' ? : string

        'description' ? : string

        'name' ? : string

        'required' ? : boolean

        'type' ? : string

        'vendorDataType' ? : string

        'vendorName' ? : string

        'vendorType' ? : string

    }

;
type ProviderPropertyMap =

    {
        '&lt;replace_your_provider_property_name&gt;' ? : string

    }

;
type User =

    {
        'accountExpired' ? : boolean

        'accountLocked' ? : boolean

        'accountNonExpired' ? : boolean

        'accountNonLocked' ? : boolean

        'activationCode' ? : string

        'active' ? : boolean

        'city' ? : string

        'country' ? : string

        'createdDate' ? : string

        'credentialsExpired' ? : boolean

        'credentialsNonExpired' ? : boolean

        'email' ? : string

        'emailValid' ? : boolean

        'enabled' ? : boolean

        'firstName' ? : string

        'fullName' ? : string

        'id' ? : number

        'lastName' ? : string

        'phone' ? : string

        'postalCode' ? : string

        'secret' ? : string

        'stateprovince' ? : string

        'street1' ? : string

        'street2' ? : string

    }

;
type Resource =

    {
        'description' ? : string

        'operationId' ? : string

        'method' ? : string

        'parameters' ? :

            Array <
            Parameter

            >
            'path' ? : string

        'vendorMethod' ? : string

        'vendorPath' ? : string

        'rootKey' ? : string

        'paginationType' ? : string

        'nextResource' ? : string

        'object' ? : ResourceObject

    }

;
type BulkStatus =

    {
        'batchId' ? : number

        'message' ? : string

        'numOfLeadsProcessed' ? : number

        'numOfRowsFailed' ? : number

        'numOfRowsWithWarning' ? : number

        'status' ? : string

    }

;
type BulkLoad =

    {
        'id' ? : number

        'status' ? : string

    }

;
type BulkQuery =

    {
        'id' ? : number

        'status' ? : string

    }

;
type Pong =

    {
        'dateTime' ? : string

        'endpoint' ? : string

    }

;
type ModelDate =

    {
        'value' ? : string

    }

;
type ResourceField =

    {
        'request' ? : boolean

        'response' ? : boolean

        'required' ? : boolean

        'id' ? : number

        'name' ? : string

        'displayName' ? : string

        'sampleValue' ? : string

        'description' ? : string

        'objectId' ? : number

        'type' ? : string

        'format' ? : string

        'mask' ? : string

        'ownerAccountId' ? : number

        'primaryKey' ? : boolean

        'readOnly' ? : boolean

        'hidden' ? : boolean

        'createdDate' ? : string

        'updatedDate' ? : string

        'referenceObjectId' ? : number

        'reference' ? : ResourceObject

    }

;
type Hook =

    {
        'body' ? : string

        'elementId' ? : number

        'id' ? : number

        'isLegacy' ? : boolean

        'mimeType' ? : string

        'type' ? : string

    }

;
type Object =

    {
        'name' ? : string

        'primaryKeyName' ? : string

        'createdDateName' ? : string

        'createdDateFormat' ? : string

        'updatedDateName' ? : string

        'updatedDateFormat' ? : string

        'ownerAccountId' ? : number

        'bulkDownloadEnabled' ? : boolean

        'bulkUploadEnabled' ? : boolean

        'eventsEnabled' ? : boolean

        'fields' ? :

            Array <
            Field

            >
    }

;
type ResourceObject =

    {
        'name' ? : string

        'primaryKeyName' ? : string

        'createdDateName' ? : string

        'createdDateFormat' ? : string

        'updatedDateName' ? : string

        'updatedDateFormat' ? : string

        'ownerAccountId' ? : number

        'bulkDownloadEnabled' ? : boolean

        'bulkUploadEnabled' ? : boolean

        'eventsEnabled' ? : boolean

        'fields' ? :

            Array <
            ResourceField

            >
    }

;
type AccountAnalyticsRecord =

    {
        'accountId' ? : number

        'success' ? : number

        'failed' ? : number

        'count' ? : number

    }

;
type InstanceAnalyticsRecord =

    {
        'instanceId' ? : number

        'count' ? : number

    }

;
type AccountAnalyticsEntry =

    {
        'records' ? :

            Array <
            AccountAnalyticsRecord

            >
            'total' ? : number

        'timestamp' ? : string

    }

;
type InstanceAnalyticsEntry =

    {
        'records' ? :

            Array <
            InstanceAnalyticsRecord

            >
            'total' ? : number

        'timestamp' ? : string

    }

;
type AnalyticsEntry =

    {
        'count' ? : number

        'timestamp' ? : string

    }

;
type ConfigurationProperty =

    {
        '&lt;key&gt;' ? : string

    }

;
type Definition =

    {
        'fields' ? :

            Array <
            Field

            >
    }

;
type Dictionary =

    {
        '&lt;object_name&gt;' ? : Definition

        'level' ? : string

    }

;
type ElementInstanceConfig =

    {
        'active' ? : boolean

        'description' ? : string

        'hideFromConsole' ? : boolean

        'id' ? : number

        'key' ? : string

        'name' ? : string

        'propertyValue' ? : string

        'required' ? : boolean

        'type' ? : string

    }

;
type ElementInstanceConfigUpdate =

    {
        'propertyValue' ? : string

    }

;
type Transformation =

    {
        'configuration' ? :

            Array <
            Configuration

            >
            'fields' ? :

            Array <
            TransformationField

            >
            'level' ? : string

        'startDate' ? : string

        'vendorName' ? : string

    }

;
type TransformationField =

    {
        'configuration' ? :

            Array <
            Configuration

            >
            'path' ? : string

        'type' ? : string

        'vendorPath' ? : string

        'vendorType' ? : string

    }

;
type TraceLoggingConfig =

    {
        'duration' ? : number

    }

;
type TransformationLibrary =

    {
        '&lt;object_name&gt;' ? : Transformation

    }

;
type EventElementInstance =

    {
        'eventId' ? : string

        'elementInstanceId' ? : number

        'notificationId' ? : number

        'notifiedData' ? : string

        'createdDate' ? : string

        'updatedDate' ? : string

    }

;
type Event =

    {
        'id' ? : string

        'eventElementInstances' ? :

            Array <
            EventElementInstance

            >
            'providerData' ? : string

        'notifiedData' ? :

            Array <

            {}

            >
            'eventDate' ? : string

        'status' ? : string

    }

;
type Customer_GET =

    {
        'environment' ? : string

        'createdDate' ? : string

        'name' ? : string

        'organizations' ? :

            Array <
            Organization_GET

            >
            'active' ? : boolean

        'id' ? : number

        'updatedDate' ? : string

        'contacts' ? :

            Array <
            CustomerContact

            >
            'status' ? : string

    }

;
type CustomerContact =

    {
        'country' ? : string

        'createdDate' ? : string

        'phone' ? : string

        'city' ? : string

        'postalCode' ? : string

        'customerId' ? : number

        'name' ? : string

        'street1' ? : string

        'id' ? : number

        'street2' ? : string

        'updatedDate' ? : string

        'email' ? : string

    }

;
type Organization_POST =

    {
        'environment' ? : "production" | "test"

        'name' ? : string

        'externalId' ? : string

        'status' ? : "paid" | "trial"

    }

;
type Organization_GET =

    {
        'environment' ? : "production" | "test"

        'canCreatePeer' ? : boolean

        'twoFactorAuthEnabled' ? : boolean

        'tierId' ? : number

        'name' ? : string

        'customerId' ? : number

        'active' ? : boolean

        'externalId' ? : string

        'id' ? : number

        'secret' ? : string

        'vdrVersion' ? : string

        'status' ? : "paid" | "trial"

        'street1' ? : string

        'city' ? : string

        'state' ? : string

        'postalCode' ? : string

        'country' ? : string

    }

;
type Account_POST =

    {
        'name' ? : string

        'externalId' ? : string

        'description' ? : string

    }

;
type Account_GET =

    {
        'companyId' ? : number

        'createdDate' ? : string

        'name' ? : string

        'customerId' ? : number

        'customerName' ? : string

        'active' ? : boolean

        'description' ? : string

        'externalId' ? : string

        'id' ? : number

        'defaultAccount' ? : boolean

        'type' ? : string

    }

;
type User_POST =

    {
        'firstName' ? : string

        'lastName' ? : string

        'roles' ? :

            Array <
            roles_POST

            >
            'externalId' ? : string

    }

;
type roles_POST =

    {
        'key' ? : string

    }

;
type IdentityProvider_POST =

    {
        'ssoUrl': string

        'entityId': string

        'logonProtocolBinding' ? : "urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect"

        'logoutUrl' ? : string

        'logoutProtocolBinding' ? : "urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect"

        'logoutResponseUrl' ? : string

        'idFormat' ? : string

        'signingCert': string

        'signatureAlgorithm' ? : "rsa-sha1" | "rsa-sha256" | "rsa-sha384" | "rsa-sha512"

    }

;
type IdentityProvider_GET =

    {
        'id' ? : number

        'ssoUrl': string

        'entityId': string

        'logonProtocolBinding' ? : "urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect"

        'logoutUrl' ? : string

        'logoutProtocolBinding' ? : "urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect"

        'logoutResponseUrl' ? : string

        'idFormat' ? : string

        'signingCert': string

        'signatureAlgorithm' ? : "rsa-sha1" | "rsa-sha256" | "rsa-sha384" | "rsa-sha512"

        'createdDate' ? : string

    }

;
type CustomerSignup_POST =

    {
        'organization' ? : Organization_POST

        'account' ? : Account_POST

        'user' ? : User_POST

    }

;
type CustomerSignup_GET =

    {
        'organization' ? : Organization_GET

        'account' ? : Account_GET

        'user' ? : User_GET

    }

;
type User_GET =

    {
        'accountLocked' ? : boolean

        'lastName' ? : string

        'roles' ? :

            Array <
            roles_GET

            >
            'credentialsNonExpired' ? : boolean

        'active' ? : boolean

        'externalId' ? : string

        'fullName' ? : string

        'secret' ? : string

        'userSecretKeystring' ? : string

        'enabled' ? : boolean

        'firstName' ? : string

        'emailValid' ? : boolean

        'accountExpired' ? : boolean

        'accountNonExpired' ? : boolean

        'id' ? : number

        'credentialsExpired' ? : boolean

        'email' ? : string

        'accountNonLocked' ? : boolean

    }

;
type privileges_GET =

    {
        'hide' ? : boolean

        'createdDate' ? : string

        'name' ? : string

        'active' ? : boolean

        'description' ? : string

        'id' ? : number

        'category' ? : string

        'key' ? : string

    }

;
type roles_GET =

    {
        'privileges' ? :

            Array <
            privileges_GET

            >
            'hide' ? : boolean

        'name' ? : string

        'active' ? : boolean

        'description' ? : string

        'id' ? : number

        'key' ? : string

    }

;
type Organization =

    {
        'id' ? : number

        'name' ? : string

        'createdDate' ? : string

    }

;
type Account =

    {
        'active' ? : boolean

        'companyId' ? : number

        'createdDate' ? : number

        'defaultAccount' ? : boolean

        'description' ? : string

        'externalId' ? : string

        'id' ? : number

        'name' ? : string

        'type' ? : string

        'updatedDate' ? : number

    }

;
type DefinitionField =

    {
        'path' ? : string

        'type' ? : string

    }

;
type TransformationMetadata =

    {
        'account' ? : TransformationAccount

        'element' ? : TransformationElement

        'level' ? : string

        'name' ? : string

    }

;
type Account_PUT =

    {
        'active' ? : boolean

        'description' ? : string

        'externalId' ? : string

        'name' ? : string

    }

;
type FormulaInstance =

    {
        'active' ? : boolean

        'configuration' ? : FormulaInstanceConfiguration

        'settings' ? : FormulaInstanceSettings

        'createdDate' ? : string

        'formula': FormulaInstanceFormula

        'name': string

        'updatedDate' ? : string

    }

;
type TransformationAccount =

    {
        'defaultAccount' ? : boolean

        'externalId' ? : string

        'id' ? : string

    }

;
type TransformationElement =

    {
        'hub' ? : string

        'id' ? : number

        'image' ? : string

        'key' ? : string

        'name' ? : string

        'trialAccount' ? : boolean

        'typeOauth' ? : boolean

    }

;
type Role_PUT =

    {
        'key' ? : string

    }

;
type User_PUT =

    {
        'country' ? : string

        'lastName' ? : string

        'city' ? : string

        'postalCode' ? : string

        'roles' ? :

            Array <
            Role_PUT

            >
            'stateProvince' ? : string

        'active' ? : boolean

        'externalId' ? : string

        'firstName' ? : string

        'phone' ? : string

        'street1' ? : string

        'street2' ? : string

        'email' ? : string

    }

;
type Role =

    {
        'active' ? : boolean

        'description' ? : string

        'features' ? :

            Array <
            Feature

            >
            'id' ? : number

        'key' ? : string

        'name' ? : string

    }

;
type Feature =

    {
        'active' ? : boolean

        'createdDate' ? : string

        'description' ? : string

        'id' ? : number

        'readOnly' ? : boolean

        'name' ? : string

    }

;
type PasswordReset_POST =

    {
        'password' ? : string

    }

;
type Privilege =

    {
        'hide' ? : boolean

        'createdDate' ? : string

        'name' ? : string

        'active' ? : boolean

        'description' ? : string

        'id' ? : number

        'category' ? : string

        'key' ? : string

    }

;
type AuthenticatedUser_GET =

    {
        'lastName' ? : string

        'registeredForTwoFactor' ? : boolean

        'twoFactor' ? : boolean

        'organizationName' ? : string

        'accountName' ? : string

        'roles' ? :

            Array <
            AuthenticatedUserRole

            >
            'lastLoginDate' ? : string

        'organizationAdmin' ? : boolean

        'token' ? : string

        'organizationId' ? : number

        'accountId' ? : number

        'firstName' ? : string

        'createdDate' ? : string

        'inIntelligenceRole' ? : boolean

        'id' ? : number

        'sysAdmin' ? : boolean

        'accountAdmin' ? : boolean

        'username' ? : string

    }

;
type AuthenticatedUserRole =

    {
        'features' ? :

            Array <
            Feature

            >
            'privileges' ? :

            Array <
            Privilege

            >
            'hide' ? : boolean

        'name' ? : string

        'active' ? : boolean

        'description' ? : string

        'id' ? : number

        'key' ? : string

    }

;
type Hub =

    {
        'description' ? : string

        'id' ? : number

        'key' ? : string

        'name' ? : string

    }

;
type ApiMetric =

    {
        'count' ? : number

        'id' ? : number

        'interval' ? : string

        'externalId' ? : string

        'metrics' ? :

            Array <
            ApiMetricsMetrics

            >
    }

;
type ApiMetrics =

    Array <
    ApiMetric

    >
;
type ApiMetricsDetail =

    {
        'count' ? : number

        'type' ? : string

    }

;
type ApiMetricsMetrics =

    {
        'count' ? : number

        'details' ? :

            Array <
            ApiMetricsDetail

            >
            'timestamp' ? : string

    }

;
type HubMetric =

    {
        'count' ? : number

        'id' ? : number

        'interval' ? : string

        'externalId' ? : string

        'metrics' ? :

            Array <
            HubMetricsMetrics

            >
    }

;
type HubMetrics =

    Array <
    HubMetric

    >
;
type HubMetricsDetail =

    {
        'count' ? : number

        'hub' ? : string

    }

;
type HubMetricsMetrics =

    {
        'count' ? : number

        'details' ? :

            Array <
            HubMetricsDetail

            >
            'timestamp' ? : string

    }

;
type ElementInstancesCreatedMetric =

    {
        'count' ? : number

        'id' ? : number

        'interval' ? : string

        'externalId' ? : string

        'metrics' ? :

            Array <
            ElementInstancesCreatedMetricsMetrics

            >
    }

;
type ElementInstancesCreatedMetrics =

    Array <
    ElementInstancesCreatedMetric

    >
;
type ElementInstancesCreatedMetricsDetail =

    {
        'count' ? : number

        'elementKey' ? : string

    }

;
type ElementInstancesCreatedMetricsMetrics =

    {
        'count' ? : number

        'details' ? :

            Array <
            ElementInstancesCreatedMetricsDetail

            >
            'timestamp' ? : string

    }

;
type BulkMetric =

    {
        'count' ? : number

        'id' ? : number

        'interval' ? : string

        'externalId' ? : string

        'metrics' ? :

            Array <
            BulkMetricsMetrics

            >
    }

;
type BulkMetrics =

    Array <
    BulkMetric

    >
;
type BulkMetricsDetail =

    {
        'count' ? : number

        'direction' ? : string

        'records' ? : number

    }

;
type BulkMetricsMetrics =

    {
        'count' ? : number

        'details' ? :

            Array <
            BulkMetricsDetail

            >
            'timestamp' ? : string

    }

;
type Metric =

    {
        'count' ? : number

        'id' ? : number

        'interval' ? : string

        'externalId' ? : string

        'metrics' ? :

            Array <
            MetricsMetrics

            >
    }

;
type Metrics =

    Array <
    Metric

    >
;
type MetricsMetrics =

    {
        'count' ? : number

        'timestamp' ? : string

    }

;
type ActivityElementEntry =

    {
        '&lt;elementKey&gt;' ? : number

        'count' ? : number

        'timestamp' ? : string

    }

;
type ActivityEntry =

    {
        'count' ? : number

        'timestamp' ? : string

    }

;
type StatusEntry =

    {
        'count' ? : number

        'failed' ? : number

        'success' ? : number

        'timestamp' ? : string

    }

;
type TimesEntry =

    {
        'avg' ? : number

        'count' ? : number

        'max' ? : number

        'min' ? : number

        'timestamp' ? : string

    }

;
type TrafficEntry =

    {
        'accountId' ? : number

        'companyId' ? : number

        'elementKey' ? : string

        'elementName' ? : string

        'elementTags' ? : string

        'id' ? : string

        'instanceName' ? : string

        'processTime' ? : number

        'requestIP' ? : number

        'requestStatus' ? : string

        'requestURI' ? : string

        'usageDate' ? : string

        'userId' ? : number

    }

;
type AnalyticsPercentiles =

    {
        '1.0' ? : number

        '5.0' ? : number

        '25.0' ? : number

        '50.0' ? : number

        '75.0' ? : number

        '95.0' ? : number

        '99.0' ? : number

    }

;
type AnalyticEntry =

    {
        'avg' ? : number

        'sum' ? : number

        'percentiles' ? : AnalyticsPercentiles

    }

;
type StatusAnalyticsEntry =

    {
        'success' ? : number

        'failed' ? : number

        'timestamp' ? : string

    }

;
type StatusNowEntry =

    {
        'accountId' ? : number

        'success' ? : number

        'failed' ? : number

        'pending' ? : number

        'canceled' ? : number

        'unknown' ? : number

        'retries' ? :

            Array <
            StatusRetryRecord

            >
    }

;
type StatusRetryRecord =

    {
        'executionId' ? : number

        'retry' ? : number

    }

;
type StepAnalyticsEntry =

    {
        'count' ? : number

        'timestamp' ? : string

        'executionTime' ? : AnalyticEntry

        'executionDelay' ? : AnalyticEntry

        'contextSize' ? : AnalyticEntry

    }

;
type AllInstancesFormula =

    {
        'accountId' ? : number

        'active' ? : boolean

        'configuration' ? :

            Array <
            GetConfiguration

            >
            'createdDate' ? : string

        'description' ? : string

        'id' ? : number

        'name': string

        'updatedDate' ? : string

        'userId' ? : number

    }

;
type CreateConfiguration =

    {
        'description' ? : string

        'key': string

        'name': string

        'type': "value" | "elementInstance"

    }

;
type CreateFormula =

    {
        'active' ? : boolean

        'configuration' ? :

            Array <
            Configuration

            >
            'description' ? : string

        'name': string

        'steps' ? :

            Array <
            Step

            >
            'triggers' ? :

            Array <
            Trigger

            >
    }

;
type CreateFormulaInstance =

    {
        'active' ? : boolean

        'configuration' ? : FormulaInstanceConfiguration

        'settings' ? : FormulaInstanceSettings

        'name': string

    }

;
type CreateStep =

    {
        'name': string

        'onFailure' ? :

            Array < string

            >
            'onSuccess' ? :

            Array < string

            >
            'properties' ? : Properties

        'type': "request" | "elementRequest" | "transform" | "filter" | "script"

    }

;
type CreateTrigger =

    {
        'cron' ? : string

    }

;
type FormulaExecution =

    {
        'createdDate' ? : string

        'formulaInstanceId' ? : number

        'status' ? : "failed" | "success" | "pending" | "queued" | "cancelled" | "unknown"

        'id' ? : number

        'updatedDate' ? : string

    }

;
type FormulaExecutionBody =

    {}

;
type FormulaInstanceConfiguration =

    {
        '&lt;key&gt;' ? : string

    }

;
type FormulaInstanceSettings =

    {
        'notification.email' ? : string

        'notification.webhook.url' ? : string

        'api' ? : string

    }

;
type FormulaInstanceFormula =

    {
        'active' ? : boolean

        'id': number

    }

;
type FormulaInstanceStatus =

    {
        'status': "cancelled"

    }

;
type GetAllFormulaInstances =

    {
        'active' ? : boolean

        'configuration' ? : FormulaInstanceConfiguration

        'settings' ? : FormulaInstanceSettings

        'createdDate' ? : string

        'formula': AllInstancesFormula

        'id' ? : number

        'name': string

        'updatedDate' ? : string

    }

;
type GetAllFormulaExecutionErrors =

    {
        'id' ? : number

        'formula' ? : FormulaInstanceFormula

        'executions' ? :

            Array <
            GetAllInstanceExecutionErrors

            >
    }

;
type GetAllInstanceExecutionErrors =

    {
        'status' ? : "failed" | "success" | "pending" | "queued" | "unknown"

        'createdDate' ? : string

        'id' ? : number

        'updatedDate' ? : string

        'stepExecutions' ? :

            Array <
            StepExecution

            >
    }

;
type GetConfiguration =

    {
        'description' ? : string

        'id': number

        'key': string

        'name': string

        'type': "value" | "elementInstance"

    }

;
type GetFormula =

    {
        'accountId' ? : number

        'active' ? : boolean

        'configuration' ? :

            Array <
            GetConfiguration

            >
            'createdDate' ? : string

        'description' ? : string

        'id' ? : number

        'name': string

        'steps' ? :

            Array <
            GetStep

            >
            'triggers' ? :

            Array <
            GetTrigger

            >
            'updatedDate' ? : string

        'userId' ? : number

    }

;
type GetFormulaSlim =

    {
        'accountId' ? : number

        'active' ? : boolean

        'createdDate' ? : string

        'description' ? : string

        'id': number

        'name': string

        'updatedDate' ? : string

        'userId' ? : number

    }

;
type GetFormulaExecution =

    {
        'createdDate' ? : string

        'formulaInstanceId' ? : number

        'id' ? : number

        'status' ? : "failed" | "success" | "pending" | "queued" | "unknown"

        'stepExecutions' ? :

            Array <
            StepExecution

            >
            'updatedDate' ? : string

    }

;
type GetFormulaFormulaInstance =

    {
        'active' ? : boolean

        'configuration' ? : FormulaInstanceConfiguration

        'settings' ? : FormulaInstanceSettings

        'createdDate' ? : string

        'formula': GetInstanceFormula

        'id' ? : number

        'name': string

        'updatedDate' ? : string

    }

;
type GetFormulaInstance =

    {
        'active' ? : boolean

        'configuration' ? : FormulaInstanceConfiguration

        'settings' ? : FormulaInstanceSettings

        'createdDate' ? : string

        'formula': FormulaInstanceFormula

        'id' ? : number

        'name': string

        'updatedDate' ? : string

    }

;
type GetInstanceFormula =

    {
        'accountId' ? : number

        'active' ? : boolean

        'createdDate' ? : string

        'description' ? : string

        'id': number

        'name' ? : string

        'updatedDate' ? : string

        'userId' ? : number

    }

;
type GetStep =

    {
        'id': number

        'name': string

        'onFailure' ? :

            Array < string

            >
            'onSuccess' ? :

            Array < string

            >
            'properties' ? : Properties

        'type': "request" | "elementRequest" | "transform" | "filter" | "script"

    }

;
type GetTrigger =

    {
        'async' ? : boolean

        'id' ? : number

        'onFailure' ? :

            Array < string

            >
            'onSuccess':

            Array < string

            >
            'properties': Properties

        'type': "elementRequest" | "request" | "event"

    }

;
type Properties =

    {
        'api' ? : string

        'body' ? : string

        'elementInstanceId' ? : string

        'headers' ? : string

        'method' ? : "GET" | "POST" | "PATCH" | "PUT" | "DELETE"

        'mimeType' ? : string

        'path' ? : string

        'query' ? : string

    }

;
type Step =

    {
        'name': string

        'onFailure' ? :

            Array < string

            >
            'onSuccess' ? :

            Array < string

            >
            'properties' ? : Properties

        'type': "request" | "elementRequest" | "transform" | "filter" | "script"

    }

;
type StepExecution =

    {
        'createdDate' ? : string

        'id' ? : number

        'status' ? : "pending" | "queued" | "success" | "failed" | "unknown"

        'stepExecutionValues' ? :

            Array <
            StepExecutionValue

            >
            'stepName' ? : string

        'updatedDate' ? : string

    }

;
type StepExecutionValue =

    {
        'id' ? : string

        'key' ? : string

        'value' ? : string

    }

;
type Trigger =

    {
        'calendarName' ? :

        {}

        'mayFireAgain' ? : boolean

        'nextFireTime' ? : number

        'description' ? :

        {}

        'startTime' ? : number

        'id' ? : string

        'endTime' ? :

        {}

        'state' ? : string

        'priority' ? : number

    }

;
type UpdateFormula =

    {
        'active' ? : boolean

        'configuration' ? :

            Array <
            Configuration

            >
            'description' ? : string

        'name': string

        'steps' ? :

            Array <
            Step

            >
            'triggers' ? :

            Array <
            Trigger

            >
    }

;
type PartialUpdateFormula =

    {
        'active' ? : boolean

        'description' ? : string

        'name' ? : string

    }

;
type Createjob =

    {
        'instanceId' ? : string

        'name' ? : string

        'description' ? : string

        'method' ? : string

        'body' ? : CreateJobBody

        'headers' ? : CreateJobHeaders

        'query' ? : CreateJobQuery

        'uri' ? : string

        'trigger' ? : CreateTrigger

    }

;
type CreateJobBody =

    {
        'name' ? : string

        'firstName' ? : string

        'lastName' ? : string

    }

;
type CreateJobHeaders =

    {
        'SampleHeader' ? : string

    }

;
type CreateJobQuery =

    {
        'page' ? : number

        'pageSize' ? : number

        'where' ? : string

    }

;
type CreatedJob =

    {
        'schedule' ? : string

        'name' ? : string

        'id' ? : string

    }

;
type Reschedule =

    {
        'trigger' ? : CreateTrigger

    }

;
type JobHistory =

    {
        'job_class_name' ? : string

        'company_id' ? : number

        'created_dt' ? : number

        'job_group' ? : string

        'job_history_id' ? : number

        'end_time' ? : number

        'description' ? : string

        'external_id' ? :

        {}

        'job_state' ? : string

        'start_time' ? : number

        'account_id' ? : number

        'instance_id' ? : number

        'job_name' ? : string

        'user_id' ? : number

        'updated_dt' ? : number

        'job_data' ? : string

        'job_error_message' ? :

        {}

    }

;
type JobHistories =

    Array <
    JobHistory

    >
;
type JobExecution =

    {
        'job_class_name' ? : string

        'start_time' ? : number

        'job_name' ? : string

        'job_group' ? : string

        'job_history_id' ? : number

        'end_time' ? : number

        'job_data' ? : string

        'description' ? : string

        'job_error_message' ? :

        {}

        'element_key' ? :

        {}

        'job_state' ? : string

    }

;
type JobExecutions =

    Array <
    JobExecution

    >
;
type Job =

    {
        'disallowConcurrent' ? : boolean

        'data' ? : Data

        'name' ? : string

        'description' ? : string

        'id' ? : string

        'trigger' ? : Trigger

    }

;
type Jobs =

    Array <
    Job

    >
;
type Data =

    {
        'elementKey' ? : string

        'topic' ? : string

        'id' ? : number

    }

;
type audit_logs =

    {
        'instance_id' ? : number

        'account_id' ? : number

        'method' ? : string

        'user_id' ? : number

        'org_id' ? : number

        'resource_uri' ? : string

        'id' ? : string

        'ip_address' ? : string

        'entity_id' ? : string

        'timestamp' ? : string

        'status' ? : number

    }

;

type Logger = {
    log: (line: string) => any
};

class platformSDKMethodParameters {
    protected _body: any;
    protected headers: any;
    protected queryParameters: any;
    protected form: any;
    constructor(public superThis: platformSDK, protected method: string, protected path: string) {
        this.queryParameters = {};
        this.headers = {};
        this.form = {};
    }
}

class getAccountsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    where(where: string

    ): getAccountsParameters {
        this.queryParameters['where'] = where;
        return this;
    }
    offset(offset: number

    ): getAccountsParameters {
        this.queryParameters['offset'] = offset;
        return this;
    }
    pageSize(pageSize: number

    ): getAccountsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    includeInactive(includeInactive: boolean

    ): getAccountsParameters {
        this.queryParameters['includeInactive'] = includeInactive;
        return this;
    }
    run(): Promise <

        Array <
        Account

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createAccountParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, body:
        Account

    ) {
        super(superThis, method, path);
        this._body = body;
    }
    run(): Promise <
        Account

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getAccountsInstancesParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    nextPage(nextPage: string

    ): getAccountsInstancesParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getAccountsInstancesParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array <
        ElementInstance

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteAccountsObjectsDefinitionsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getAccountsObjectsDefinitionsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    run(): Promise <
        Dictionary

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createAccountObjectDefinitionParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, body:
        Dictionary

    ) {
        super(superThis, method, path);
        this._body = body;
    }
    run(): Promise <
        Dictionary

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteAccountsObjectsObjectNameDefinitionsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, objectName: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getAccountsObjectsObjectNameDefinitionsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, objectName: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
    }
    run(): Promise <
        Definition

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createAccountObjectObjectNameDefinitionParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, objectName: string

        , body:
        Definition

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this._body = body;
    }
    run(): Promise <
        Definition

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class replaceAccountsObjectsObjectNameDefinitionsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, objectName: string

        , body:
        Definition

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this._body = body;
    }
    run(): Promise <
        Definition

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getAccountsFormulasInstancesParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, accountId: number

        , formulaId: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{accountId}', `${accountId}`);
        this.path = this.path.replace('{formulaId}', `${formulaId}`);
    }
    run(): Promise <
        FormulaInstance

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteAccountByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getAccountByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    includeInactive(includeInactive: boolean

    ): getAccountByIdParameters {
        this.queryParameters['includeInactive'] = includeInactive;
        return this;
    }
    run(): Promise <
        Account

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class updateAccountByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , body:
        Account

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = body;
    }
    permanent(permanent: boolean

    ): updateAccountByIdParameters {
        this.queryParameters['permanent'] = permanent;
        return this;
    }
    run(): Promise <
        Account

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class replaceAccountByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , body:
        Account_PUT

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = body;
    }
    permanent(permanent: boolean

    ): replaceAccountByIdParameters {
        this.queryParameters['permanent'] = permanent;
        return this;
    }
    run(): Promise <
        Account

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteAccountsElementsTransformationsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , keyOrId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getAccountsElementsTransformationsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , keyOrId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
    }
    run(): Promise <
        TransformationLibrary

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteAccountsElementsTransformationByObjectNameParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , keyOrId: string

        , objectName: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{objectName}', `${objectName}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getAccountsElementsTransformationByObjectNameParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , keyOrId: string

        , objectName: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{objectName}', `${objectName}`);
    }
    run(): Promise <
        Transformation

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createAccountElementTransformationByObjectNameParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , keyOrId: string

        , objectName: string

        , transformation:
        Transformation

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this._body = transformation;
    }
    run(): Promise <
        Transformation

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class replaceAccountsElementsTransformationByObjectNameParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , keyOrId: string

        , objectName: string

        , transformation:
        Transformation

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this._body = transformation;
    }
    run(): Promise <
        Transformation

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getAccountsInstances2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    nextPage(nextPage: string

    ): getAccountsInstances2Parameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getAccountsInstances2Parameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array <
        ElementInstance

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteAccountsObjectsDefinitions2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getAccountsObjectsDefinitions2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <
        Dictionary

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createAccountObjectDefinition2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , body:
        Dictionary

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = body;
    }
    run(): Promise <
        Dictionary

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteAccountsObjectsObjectNameDefinitions2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , objectName: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{objectName}', `${objectName}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getAccountsObjectsObjectNameDefinitions2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , objectName: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{objectName}', `${objectName}`);
    }
    run(): Promise <
        Definition

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createAccountObjectObjectNameDefinition2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , objectName: string

        , body:
        Definition

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this._body = body;
    }
    run(): Promise <
        Definition

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class replaceAccountsObjectsObjectNameDefinitions2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , objectName: string

        , body:
        Definition

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this._body = body;
    }
    run(): Promise <
        Definition

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getAccountsUsersParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    where(where: string

    ): getAccountsUsersParameters {
        this.queryParameters['where'] = where;
        return this;
    }
    nextPage(nextPage: string

    ): getAccountsUsersParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getAccountsUsersParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    includeInactive(includeInactive: boolean

    ): getAccountsUsersParameters {
        this.queryParameters['includeInactive'] = includeInactive;
        return this;
    }
    run(): Promise <

        Array <
        User

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createAccountUserParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , body:
        User

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = body;
    }
    run(): Promise <
        User

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getAccountsUserByEmailOrIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , emailOrId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{emailOrId}', `${emailOrId}`);
    }
    elementsUserPassword(elementsUserPassword: string

    ): getAccountsUserByEmailOrIdParameters {
        this.headers['Elements-User-Password'] = elementsUserPassword;
        return this;
    }
    includeInactive(includeInactive: boolean

    ): getAccountsUserByEmailOrIdParameters {
        this.queryParameters['includeInactive'] = includeInactive;
        return this;
    }
    run(): Promise <
        User

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class updateAccountsUserByUserIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , userId: number

        , body:
        User

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{userId}', `${userId}`);
        this._body = body;
    }
    run(): Promise <
        User

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class replaceAccountsUserByUserIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , userId: number

        , body:
        User_PUT

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{userId}', `${userId}`);
        this._body = body;
    }
    run(): Promise <
        User

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteAccountsUserByUserIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , userId: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{userId}', `${userId}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getAuditLogsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    from(from: string

    ): getAuditLogsParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getAuditLogsParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    userId(userId: string

    ): getAuditLogsParameters {
        this.queryParameters['userId'] = userId;
        return this;
    }
    accountId(accountId: string

    ): getAuditLogsParameters {
        this.queryParameters['accountId'] = accountId;
        return this;
    }
    nextPage(nextPage: string

    ): getAuditLogsParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getAuditLogsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array <
        audit_logs

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getAuditLogsAuthenticationParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    from(from: string

    ): getAuditLogsAuthenticationParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getAuditLogsAuthenticationParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    userId(userId: string

    ): getAuditLogsAuthenticationParameters {
        this.queryParameters['userId'] = userId;
        return this;
    }
    accountId(accountId: string

    ): getAuditLogsAuthenticationParameters {
        this.queryParameters['accountId'] = accountId;
        return this;
    }
    nextPage(nextPage: string

    ): getAuditLogsAuthenticationParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getAuditLogsAuthenticationParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array <
        audit_logs

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getAuditLogsCommonResourcesParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    from(from: string

    ): getAuditLogsCommonResourcesParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getAuditLogsCommonResourcesParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    userId(userId: string

    ): getAuditLogsCommonResourcesParameters {
        this.queryParameters['userId'] = userId;
        return this;
    }
    accountId(accountId: string

    ): getAuditLogsCommonResourcesParameters {
        this.queryParameters['accountId'] = accountId;
        return this;
    }
    nextPage(nextPage: string

    ): getAuditLogsCommonResourcesParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getAuditLogsCommonResourcesParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array <
        audit_logs

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getAuditLogsCommonResourceByCommonResourceNameParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    from(from: string

    ): getAuditLogsCommonResourceByCommonResourceNameParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getAuditLogsCommonResourceByCommonResourceNameParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    userId(userId: string

    ): getAuditLogsCommonResourceByCommonResourceNameParameters {
        this.queryParameters['userId'] = userId;
        return this;
    }
    accountId(accountId: string

    ): getAuditLogsCommonResourceByCommonResourceNameParameters {
        this.queryParameters['accountId'] = accountId;
        return this;
    }
    nextPage(nextPage: string

    ): getAuditLogsCommonResourceByCommonResourceNameParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getAuditLogsCommonResourceByCommonResourceNameParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array <
        audit_logs

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getAuditLogsElementInstancesParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    from(from: string

    ): getAuditLogsElementInstancesParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getAuditLogsElementInstancesParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    userId(userId: string

    ): getAuditLogsElementInstancesParameters {
        this.queryParameters['userId'] = userId;
        return this;
    }
    accountId(accountId: string

    ): getAuditLogsElementInstancesParameters {
        this.queryParameters['accountId'] = accountId;
        return this;
    }
    nextPage(nextPage: string

    ): getAuditLogsElementInstancesParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getAuditLogsElementInstancesParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array <
        audit_logs

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getAuditLogsElementInstanceByElementInstanceIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    from(from: string

    ): getAuditLogsElementInstanceByElementInstanceIdParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getAuditLogsElementInstanceByElementInstanceIdParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    userId(userId: string

    ): getAuditLogsElementInstanceByElementInstanceIdParameters {
        this.queryParameters['userId'] = userId;
        return this;
    }
    accountId(accountId: string

    ): getAuditLogsElementInstanceByElementInstanceIdParameters {
        this.queryParameters['accountId'] = accountId;
        return this;
    }
    nextPage(nextPage: string

    ): getAuditLogsElementInstanceByElementInstanceIdParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getAuditLogsElementInstanceByElementInstanceIdParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array <
        audit_logs

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getAuditLogsElementsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    from(from: string

    ): getAuditLogsElementsParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getAuditLogsElementsParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    userId(userId: string

    ): getAuditLogsElementsParameters {
        this.queryParameters['userId'] = userId;
        return this;
    }
    accountId(accountId: string

    ): getAuditLogsElementsParameters {
        this.queryParameters['accountId'] = accountId;
        return this;
    }
    nextPage(nextPage: string

    ): getAuditLogsElementsParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getAuditLogsElementsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array <
        audit_logs

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getAuditLogsElementByElementIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    from(from: string

    ): getAuditLogsElementByElementIdParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getAuditLogsElementByElementIdParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    userId(userId: string

    ): getAuditLogsElementByElementIdParameters {
        this.queryParameters['userId'] = userId;
        return this;
    }
    accountId(accountId: string

    ): getAuditLogsElementByElementIdParameters {
        this.queryParameters['accountId'] = accountId;
        return this;
    }
    nextPage(nextPage: string

    ): getAuditLogsElementByElementIdParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getAuditLogsElementByElementIdParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array <
        audit_logs

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getAuditLogsFormulaInstancesParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    from(from: string

    ): getAuditLogsFormulaInstancesParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getAuditLogsFormulaInstancesParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    userId(userId: string

    ): getAuditLogsFormulaInstancesParameters {
        this.queryParameters['userId'] = userId;
        return this;
    }
    accountId(accountId: string

    ): getAuditLogsFormulaInstancesParameters {
        this.queryParameters['accountId'] = accountId;
        return this;
    }
    nextPage(nextPage: string

    ): getAuditLogsFormulaInstancesParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getAuditLogsFormulaInstancesParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array <
        audit_logs

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getAuditLogsFormulasParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    from(from: string

    ): getAuditLogsFormulasParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getAuditLogsFormulasParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    userId(userId: string

    ): getAuditLogsFormulasParameters {
        this.queryParameters['userId'] = userId;
        return this;
    }
    accountId(accountId: string

    ): getAuditLogsFormulasParameters {
        this.queryParameters['accountId'] = accountId;
        return this;
    }
    nextPage(nextPage: string

    ): getAuditLogsFormulasParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getAuditLogsFormulasParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array <
        audit_logs

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getAuditLogsFormulaByEntityIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    from(from: string

    ): getAuditLogsFormulaByEntityIdParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getAuditLogsFormulaByEntityIdParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    userId(userId: string

    ): getAuditLogsFormulaByEntityIdParameters {
        this.queryParameters['userId'] = userId;
        return this;
    }
    accountId(accountId: string

    ): getAuditLogsFormulaByEntityIdParameters {
        this.queryParameters['accountId'] = accountId;
        return this;
    }
    nextPage(nextPage: string

    ): getAuditLogsFormulaByEntityIdParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getAuditLogsFormulaByEntityIdParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array <
        audit_logs

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createAuthenticationPasswordParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, passwordReset:
        PasswordReset_POST

    ) {
        super(superThis, method, path);
        this._body = passwordReset;
    }
    run(): Promise <
        AuthenticatedUser_GET

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createCustomerIdentityProviderParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, identityProvider:
        IdentityProvider_POST

    ) {
        super(superThis, method, path);
        this._body = identityProvider;
    }
    run(): Promise <
        IdentityProvider_GET

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getCustomersIdentityProvidersParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    run(): Promise <

        Array <
        IdentityProvider_GET

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getCustomersIdentityProviderByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <
        IdentityProvider_GET

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteCustomersIdentityProviderByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getCustomersMeParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    run(): Promise <
        Customer_GET

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getCustomersOrganizationsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    nextPage(nextPage: string

    ): getCustomersOrganizationsParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getCustomersOrganizationsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    where(where: string

    ): getCustomersOrganizationsParameters {
        this.queryParameters['where'] = where;
        return this;
    }
    includeInactive(includeInactive: boolean

    ): getCustomersOrganizationsParameters {
        this.queryParameters['includeInactive'] = includeInactive;
        return this;
    }
    run(): Promise <

        Array <
        Organization_GET

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getCustomersOrganizationByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    includeInactive(includeInactive: boolean

    ): getCustomersOrganizationByIdParameters {
        this.queryParameters['includeInactive'] = includeInactive;
        return this;
    }
    run(): Promise <
        Organization_GET

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteCustomersOrganizationByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class createCustomerSignupParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, customerSignup:
        CustomerSignup_POST

    ) {
        super(superThis, method, path);
        this._body = customerSignup;
    }
    run(): Promise <
        CustomerSignup_GET

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createElementParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, element:
        CreateElement

    ) {
        super(superThis, method, path);
        this._body = element;
    }
    run(): Promise <
        Element

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getElementsKeysParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    nextPage(nextPage: string

    ): getElementsKeysParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getElementsKeysParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array < string

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getElementsDocsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    operationId(operationId: string

    ): getElementsDocsParameters {
        this.queryParameters['operationId'] = operationId;
        return this;
    }
    run(): Promise <
        Swagger

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getElementsMetadataParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <
        ElementMetadata

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteElementByKeyOrIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class replaceElementByKeyOrIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , element:
        CreateElement

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this._body = element;
    }
    run(): Promise <
        Element

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteElementsActiveParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class replaceElementsActiveParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class createElementCloneParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
    }
    run(): Promise <
        Element

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getElementsConfigurationParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
    }
    run(): Promise <
        ElementConfigs

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createElementConfigurationParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , configuration:
        Configuration

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this._body = configuration;
    }
    run(): Promise <
        Configuration

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteElementsConfigurationByConfigurationKeyParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , configurationKey: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{configurationKey}', `${configurationKey}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class replaceElementsConfigurationByConfigurationKeyParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , configurationKey: string

        , configuration:
        Configuration

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{configurationKey}', `${configurationKey}`);
        this._body = configuration;
    }
    run(): Promise <
        Configuration

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getElementsExportParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
    }
    run(): Promise <

        {}

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getElementsHooksParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
    }
    run(): Promise <

        Array <
        Hook

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createElementHookParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , model:
        Hook

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this._body = model;
    }
    run(): Promise <
        Hook

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getElementsHookByHookIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , hookId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{hookId}', `${hookId}`);
    }
    run(): Promise <
        Hook

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteElementsHookByHookIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , hookId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{hookId}', `${hookId}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class replaceElementsHookByHookIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , hookId: string

        , parameter:
        Hook

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{hookId}', `${hookId}`);
        this._body = parameter;
    }
    run(): Promise <
        Hook

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getElementsInstancesParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
    }
    run(): Promise <

        Array <
        ElementInstance

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createElementInstanceParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , elementInstance:
        ElementInstance

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this._body = elementInstance;
    }
    run(): Promise <
        ElementInstance

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteElementsInstanceByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getElementsInstanceByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <
        ElementInstance

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class replaceElementsInstanceByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , id: number

        , elementInstance:
        ElementInstance

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = elementInstance;
    }
    run(): Promise <
        ElementInstance

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getElementsOauthTokenParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , apiKey: string

        , apiSecret: string

        , callbackUrl: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.queryParameters['apiKey'] = apiKey;
        this.queryParameters['apiSecret'] = apiSecret;
        this.queryParameters['callbackUrl'] = callbackUrl;
    }
    scope(scope: string

    ): getElementsOauthTokenParameters {
        this.queryParameters['scope'] = scope;
        return this;
    }
    state(state: string

    ): getElementsOauthTokenParameters {
        this.queryParameters['state'] = state;
        return this;
    }
    siteAddress(siteAddress: string

    ): getElementsOauthTokenParameters {
        this.queryParameters['siteAddress'] = siteAddress;
        return this;
    }
    run(): Promise <
        OAuthToken

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getElementsOauthUrlParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , apiKey: string

        , apiSecret: string

        , callbackUrl: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.queryParameters['apiKey'] = apiKey;
        this.queryParameters['apiSecret'] = apiSecret;
        this.queryParameters['callbackUrl'] = callbackUrl;
    }
    scope(scope: string

    ): getElementsOauthUrlParameters {
        this.queryParameters['scope'] = scope;
        return this;
    }
    state(state: string

    ): getElementsOauthUrlParameters {
        this.queryParameters['state'] = state;
        return this;
    }
    callbackProxy(callbackProxy: boolean

    ): getElementsOauthUrlParameters {
        this.queryParameters['callbackProxy'] = callbackProxy;
        return this;
    }
    requestToken(requestToken: string

    ): getElementsOauthUrlParameters {
        this.queryParameters['requestToken'] = requestToken;
        return this;
    }
    siteAddress(siteAddress: string

    ): getElementsOauthUrlParameters {
        this.queryParameters['siteAddress'] = siteAddress;
        return this;
    }
    run(): Promise <
        OAuthRedirect

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createElementOauthUrlParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , oauthInfo:
        OAuthInfo

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this._body = oauthInfo;
    }
    run(): Promise <
        OAuthRedirect

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getElementsObjectsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
    }
    accountOnly(accountOnly: boolean

    ): getElementsObjectsParameters {
        this.queryParameters['accountOnly'] = accountOnly;
        return this;
    }
    run(): Promise <

        Array <
        Object

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createElementObjectParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , object:
        Object

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this._body = object;
    }
    run(): Promise <
        Object

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteElementsObjectByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class replaceElementsObjectByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , id: string

        , object:
        Object

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = object;
    }
    run(): Promise <
        Object

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getElementsObjectByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <
        Object

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createElementObjectFieldParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , id: string

        , field:
        Field

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = field;
    }
    run(): Promise <
        Field

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getElementsObjectsFieldsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{id}', `${id}`);
    }
    accountOnly(accountOnly: boolean

    ): getElementsObjectsFieldsParameters {
        this.queryParameters['accountOnly'] = accountOnly;
        return this;
    }
    run(): Promise <

        Array <
        Field

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteElementsObjectsFieldByFieldIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , id: string

        , fieldId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{fieldId}', `${fieldId}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class replaceElementsObjectsFieldByFieldIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , id: string

        , fieldId: string

        , object:
        Field

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{fieldId}', `${fieldId}`);
        this._body = object;
    }
    run(): Promise <
        Field

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getElementsObjectsFieldByFieldIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , id: string

        , fieldId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{fieldId}', `${fieldId}`);
    }
    run(): Promise <
        Field

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getElementsParametersParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
    }
    run(): Promise <

        Array <
        DefaultParameter

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createElementParameterParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , parameter:
        DefaultParameter

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this._body = parameter;
    }
    run(): Promise <
        DefaultParameter

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteElementsParameterByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , id: string

        , parameter:
        DefaultParameter

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = parameter;
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class replaceElementsParameterByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , id: string

        , parameter:
        DefaultParameter

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = parameter;
    }
    run(): Promise <
        DefaultParameter

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getElementsResourcesParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
    }
    accountOnly(accountOnly: boolean

    ): getElementsResourcesParameters {
        this.queryParameters['accountOnly'] = accountOnly;
        return this;
    }
    run(): Promise <

        Array <
        Resource

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createElementResourceParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , resource:
        Resource

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this._body = resource;
    }
    run(): Promise <
        Resource

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteElementsResourceByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class replaceElementsResourceByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , id: string

        , resource:
        Resource

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = resource;
    }
    run(): Promise <
        Resource

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getElementsResourceByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <
        Resource

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getElementsResourcesHooksParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <

        Array <
        Hook

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createElementResourceHookParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , id: string

        , model:
        Hook

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = model;
    }
    run(): Promise <
        Hook

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getElementsResourcesHookByHookIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , id: string

        , hookId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{hookId}', `${hookId}`);
    }
    run(): Promise <
        Hook

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteElementsResourcesHookByHookIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , id: string

        , hookId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{hookId}', `${hookId}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class replaceElementsResourcesHookByHookIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , id: string

        , hookId: string

        , parameter:
        Hook

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{hookId}', `${hookId}`);
        this._body = parameter;
    }
    run(): Promise <
        Hook

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteElementsResourcesModelsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getElementsResourcesModelsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <
        Model

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createElementResourceModelParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , id: string

        , model:
        Model

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = model;
    }
    run(): Promise <
        Model

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getElementsResourcesParametersParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <

        Array <
        Parameter

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createElementResourceParameterParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , id: string

        , parameter:
        Parameter

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = parameter;
    }
    run(): Promise <
        Parameter

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteElementsResourcesParameterByParameterIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , id: string

        , parameterId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{parameterId}', `${parameterId}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class replaceElementsResourcesParameterByParameterIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , id: string

        , parameterId: string

        , parameter:
        Parameter

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{parameterId}', `${parameterId}`);
        this._body = parameter;
    }
    run(): Promise <
        Parameter

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getFormulasParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    includeSystem(includeSystem: boolean

    ): getFormulasParameters {
        this.queryParameters['includeSystem'] = includeSystem;
        return this;
    }
    nextPage(nextPage: string

    ): getFormulasParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getFormulasParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array <
        GetFormula

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createFormulaParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, body:
        CreateFormula

    ) {
        super(superThis, method, path);
        this._body = body;
    }
    run(): Promise <
        GetFormula

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getFormulasAnalyticsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    from(from: string

    ): getFormulasAnalyticsParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getFormulasAnalyticsParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    interval(interval: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second"

    ): getFormulasAnalyticsParameters {
        this.queryParameters['interval'] = interval;
        return this;
    }
    accountIds(accountIds:

        Array < number

        >
    ): getFormulasAnalyticsParameters {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    }
    run(): Promise <

        Array <
        AnalyticsEntry

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getFormulasAnalyticsAccountsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    from(from: string

    ): getFormulasAnalyticsAccountsParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getFormulasAnalyticsAccountsParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    interval(interval: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second"

    ): getFormulasAnalyticsAccountsParameters {
        this.queryParameters['interval'] = interval;
        return this;
    }
    accountIds(accountIds:

        Array < number

        >
    ): getFormulasAnalyticsAccountsParameters {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    }
    run(): Promise <

        Array <
        AccountAnalyticsEntry

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getFormulasAnalyticsInstancesParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    from(from: string

    ): getFormulasAnalyticsInstancesParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getFormulasAnalyticsInstancesParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    interval(interval: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second"

    ): getFormulasAnalyticsInstancesParameters {
        this.queryParameters['interval'] = interval;
        return this;
    }
    accountIds(accountIds:

        Array < number

        >
    ): getFormulasAnalyticsInstancesParameters {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    }
    run(): Promise <

        Array <
        InstanceAnalyticsEntry

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getFormulasAnalyticsStatusesParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    from(from: string

    ): getFormulasAnalyticsStatusesParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getFormulasAnalyticsStatusesParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    interval(interval: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second"

    ): getFormulasAnalyticsStatusesParameters {
        this.queryParameters['interval'] = interval;
        return this;
    }
    accountIds(accountIds:

        Array < number

        >
    ): getFormulasAnalyticsStatusesParameters {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    }
    run(): Promise <

        Array <
        StatusAnalyticsEntry

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getFormulasAnalyticsStatusesNowParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    accountIds(accountIds:

        Array < number

        >
    ): getFormulasAnalyticsStatusesNowParameters {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    }
    run(): Promise <

        Array <
        StatusNowEntry

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getFormulasAnalyticsStepsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    from(from: string

    ): getFormulasAnalyticsStepsParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getFormulasAnalyticsStepsParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    interval(interval: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second"

    ): getFormulasAnalyticsStepsParameters {
        this.queryParameters['interval'] = interval;
        return this;
    }
    accountIds(accountIds:

        Array < number

        >
    ): getFormulasAnalyticsStepsParameters {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    }
    run(): Promise <

        Array <
        StepAnalyticsEntry

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getFormulasInstancesParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    elementInstanceId(elementInstanceId: number

    ): getFormulasInstancesParameters {
        this.queryParameters['elementInstanceId'] = elementInstanceId;
        return this;
    }
    nextPage(nextPage: string

    ): getFormulasInstancesParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getFormulasInstancesParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    searchText(searchText: string

    ): getFormulasInstancesParameters {
        this.queryParameters['searchText'] = searchText;
        return this;
    }
    run(): Promise <
        GetAllFormulaInstances

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getFormulasInstancesExecutionsStepsValuesParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, stepExecutionId: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{stepExecutionId}', `${stepExecutionId}`);
    }
    run(): Promise <

        Array <
        StepExecutionValue

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getFormulasInstancesExecutionByExecutionIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, executionId: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{executionId}', `${executionId}`);
    }
    run(): Promise <
        FormulaExecution

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class updateFormulasInstancesExecutionByExecutionIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, executionId: number

        , status:
        FormulaInstanceStatus

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{executionId}', `${executionId}`);
        this._body = status;
    }
    run(): Promise <
        FormulaExecution

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getFormulasInstancesExecutionsErrorsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, executionId: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{executionId}', `${executionId}`);
    }
    run(): Promise <

        Array <
        StepExecution

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getFormulasInstancesExecutionsStepsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, executionId: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{executionId}', `${executionId}`);
    }
    nextPage(nextPage: string

    ): getFormulasInstancesExecutionsStepsParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getFormulasInstancesExecutionsStepsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array <
        StepExecution

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getFormulasInstanceByInstanceIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, instanceId: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{instanceId}', `${instanceId}`);
    }
    run(): Promise <
        GetAllFormulaInstances

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getFormulasInstancesExecutionsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, instanceId: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{instanceId}', `${instanceId}`);
    }
    eventId(eventId: string

    ): getFormulasInstancesExecutionsParameters {
        this.queryParameters['eventId'] = eventId;
        return this;
    }
    objectId(objectId: string

    ): getFormulasInstancesExecutionsParameters {
        this.queryParameters['objectId'] = objectId;
        return this;
    }
    nextPage(nextPage: string

    ): getFormulasInstancesExecutionsParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getFormulasInstancesExecutionsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array <
        FormulaExecution

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createFormulaInstanceExecutionParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, instanceId: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{instanceId}', `${instanceId}`);
    }
    trigger(trigger:
        FormulaExecutionBody

    ): createFormulaInstanceExecutionParameters {
        if (this.queryParameters['trigger'] !== undefined) {
            this._body = this.queryParameters['trigger'];
        }
        return this;
    }
    run(): Promise <

        Array <
        FormulaExecution

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getFormulasInstancesExecutionsErrors2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, instanceId: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{instanceId}', `${instanceId}`);
    }
    nextPage(nextPage: string

    ): getFormulasInstancesExecutionsErrors2Parameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getFormulasInstancesExecutionsErrors2Parameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    from(from: string

    ): getFormulasInstancesExecutionsErrors2Parameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getFormulasInstancesExecutionsErrors2Parameters {
        this.queryParameters['to'] = to;
        return this;
    }
    run(): Promise <

        Array <
        GetAllInstanceExecutionErrors

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getFormulasInstancesExecutionsErrors2_1Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, formulaId: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{formulaId}', `${formulaId}`);
    }
    nextPage(nextPage: string

    ): getFormulasInstancesExecutionsErrors2_1Parameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getFormulasInstancesExecutionsErrors2_1Parameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    from(from: string

    ): getFormulasInstancesExecutionsErrors2_1Parameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getFormulasInstancesExecutionsErrors2_1Parameters {
        this.queryParameters['to'] = to;
        return this;
    }
    run(): Promise <

        Array <
        GetAllFormulaExecutionErrors

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteFormulaByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getFormulaByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <
        GetFormula

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class replaceFormulaByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , formula:
        UpdateFormula

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = formula;
    }
    run(): Promise <
        GetFormula

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class updateFormulaByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , formula:
        PartialUpdateFormula

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = formula;
    }
    run(): Promise <
        GetFormulaSlim

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createFormulaConfigurationParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , configuration:
        CreateConfiguration

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = configuration;
    }
    run(): Promise <
        GetConfiguration

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteFormulasConfigurationByConfigurationIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , configurationId: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{configurationId}', `${configurationId}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getFormulasConfigurationByConfigurationIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , configurationId: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{configurationId}', `${configurationId}`);
    }
    run(): Promise <
        GetConfiguration

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class replaceFormulasConfigurationByConfigurationIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , configurationId: number

        , configuration:
        CreateConfiguration

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{configurationId}', `${configurationId}`);
        this._body = configuration;
    }
    run(): Promise <
        GetConfiguration

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getFormulasExportParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise < string

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getFormulasInstances2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    nextPage(nextPage: string

    ): getFormulasInstances2Parameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getFormulasInstances2Parameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array <
        GetFormulaInstance

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createFormulaInstanceParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , formulaInstance:
        CreateFormulaInstance

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = formulaInstance;
    }
    run(): Promise <
        FormulaInstance

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteFormulasInstanceByInstanceIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , instanceId: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{instanceId}', `${instanceId}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getFormulasInstanceByInstanceId2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , instanceId: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{instanceId}', `${instanceId}`);
    }
    run(): Promise <
        GetFormulaFormulaInstance

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class replaceFormulasInstanceByInstanceIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , instanceId: number

        , formulaInstance:
        CreateFormulaInstance

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{instanceId}', `${instanceId}`);
        this._body = formulaInstance;
    }
    run(): Promise <
        GetFormulaInstance

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class replaceFormulasInstancesActiveParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , instanceId: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{instanceId}', `${instanceId}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class deleteFormulasInstancesActiveParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , instanceId: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{instanceId}', `${instanceId}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getFormulasInstancesExecutions2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , instanceId: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{instanceId}', `${instanceId}`);
    }
    nextPage(nextPage: string

    ): getFormulasInstancesExecutions2Parameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getFormulasInstancesExecutions2Parameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array <
        FormulaExecution

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getFormulasStepsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <

        Array <
        GetStep

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createFormulaStepParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , step:
        CreateStep

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = step;
    }
    run(): Promise <
        GetStep

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteFormulasStepByStepIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , stepId: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{stepId}', `${stepId}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getFormulasStepByStepIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , stepId: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{stepId}', `${stepId}`);
    }
    run(): Promise <
        GetStep

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class replaceFormulasStepByStepIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , stepId: number

        , step:
        CreateStep

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{stepId}', `${stepId}`);
        this._body = step;
    }
    run(): Promise <
        GetStep

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createFormulaTriggerParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , trigger:
        CreateTrigger

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = trigger;
    }
    run(): Promise <
        GetTrigger

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteFormulasTriggerByTriggerIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , triggerId: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{triggerId}', `${triggerId}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getFormulasTriggerByTriggerIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , triggerId: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{triggerId}', `${triggerId}`);
    }
    run(): Promise <
        GetTrigger

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class replaceFormulasTriggerByTriggerIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , triggerId: number

        , trigger:
        CreateTrigger

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{triggerId}', `${triggerId}`);
        this._body = trigger;
    }
    run(): Promise <
        GetTrigger

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getHubsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    nextPage(nextPage: string

    ): getHubsParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getHubsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array <
        Hub

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createHubParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, hub:
        Hub

    ) {
        super(superThis, method, path);
        this._body = hub;
    }
    run(): Promise <
        Hub

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getHubsKeysParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    nextPage(nextPage: string

    ): getHubsKeysParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getHubsKeysParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array < string

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteHubByKeyParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, key: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{key}', `${key}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getHubByKeyParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, key: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{key}', `${key}`);
    }
    run(): Promise <
        Hub

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getHubsElementsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, key: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{key}', `${key}`);
    }
    nextPage(nextPage: string

    ): getHubsElementsParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getHubsElementsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array <
        Element

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getInstancesParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    tags(tags:

        Array < string

        >
    ): getInstancesParameters {
        this.queryParameters['tags[]'] = tags;
        return this;
    }
    searchText(searchText: string

    ): getInstancesParameters {
        this.queryParameters['searchText'] = searchText;
        return this;
    }
    nextPage(nextPage: string

    ): getInstancesParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getInstancesParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    hydrate(hydrate: boolean

    ): getInstancesParameters {
        this.queryParameters['hydrate'] = hydrate;
        return this;
    }
    run(): Promise <

        Array <
        ElementInstance

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createInstanceParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, elementInstance:
        ElementInstance

    ) {
        super(superThis, method, path);
        this._body = elementInstance;
    }
    run(): Promise <
        ElementInstance

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteInstancesParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class replaceInstancesParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, elementInstance:
        ElementInstance

    ) {
        super(superThis, method, path);
        this._body = elementInstance;
    }
    run(): Promise <
        ElementInstance

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class updateInstancesParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, elementInstance:
        ElementInstance

    ) {
        super(superThis, method, path);
        this._body = elementInstance;
    }
    run(): Promise <
        ElementInstance

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getInstancesConfigurationParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    run(): Promise <

        Array <
        ElementInstanceConfig

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getInstancesConfigurationByConfigIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, configId: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{configId}', `${configId}`);
    }
    run(): Promise <
        ElementInstanceConfig

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class updateInstancesConfigurationByConfigIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, configId: number

        , config:
        ElementInstanceConfigUpdate

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{configId}', `${configId}`);
        this._body = config;
    }
    run(): Promise <
        ElementInstanceConfig

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getInstancesDocsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    operationId(operationId: string

    ): getInstancesDocsParameters {
        this.queryParameters['operationId'] = operationId;
        return this;
    }
    run(): Promise <

        {}

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getInstancesDocByOperationIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, operationId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{operationId}', `${operationId}`);
    }
    discovery(discovery: boolean

    ): getInstancesDocByOperationIdParameters {
        this.queryParameters['discovery'] = discovery;
        return this;
    }
    basic(basic: boolean

    ): getInstancesDocByOperationIdParameters {
        this.queryParameters['basic'] = basic;
        return this;
    }
    run(): Promise <

        {}

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getInstancesDocsDefinitionsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, operationId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{operationId}', `${operationId}`);
    }
    discovery(discovery: boolean

    ): getInstancesDocsDefinitionsParameters {
        this.queryParameters['discovery'] = discovery;
        return this;
    }
    resolveReferences(resolveReferences: boolean

    ): getInstancesDocsDefinitionsParameters {
        this.queryParameters['resolveReferences'] = resolveReferences;
        return this;
    }
    basic(basic: boolean

    ): getInstancesDocsDefinitionsParameters {
        this.queryParameters['basic'] = basic;
        return this;
    }
    run(): Promise <

        {}

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class replaceInstancesEnabledParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class deleteInstancesEnabledParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getInstancesEventsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    run(): Promise <

        Array <
        Event

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getInstancesEventsAnalyticsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    from(from: string

    ): getInstancesEventsAnalyticsParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getInstancesEventsAnalyticsParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    interval(interval: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second"

    ): getInstancesEventsAnalyticsParameters {
        this.queryParameters['interval'] = interval;
        return this;
    }
    accountIds(accountIds:

        Array < number

        >
    ): getInstancesEventsAnalyticsParameters {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    }
    run(): Promise <

        Array <
        AnalyticsEntry

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getInstancesEventsAnalyticsAccountsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    from(from: string

    ): getInstancesEventsAnalyticsAccountsParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getInstancesEventsAnalyticsAccountsParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    interval(interval: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second"

    ): getInstancesEventsAnalyticsAccountsParameters {
        this.queryParameters['interval'] = interval;
        return this;
    }
    accountIds(accountIds:

        Array < number

        >
    ): getInstancesEventsAnalyticsAccountsParameters {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    }
    run(): Promise <

        Array <
        AccountAnalyticsEntry

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getInstancesEventsAnalyticsInstancesParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    from(from: string

    ): getInstancesEventsAnalyticsInstancesParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getInstancesEventsAnalyticsInstancesParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    interval(interval: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second"

    ): getInstancesEventsAnalyticsInstancesParameters {
        this.queryParameters['interval'] = interval;
        return this;
    }
    accountIds(accountIds:

        Array < number

        >
    ): getInstancesEventsAnalyticsInstancesParameters {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    }
    run(): Promise <

        Array <
        InstanceAnalyticsEntry

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getInstancesEventsDispositionsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    from(from: string

    ): getInstancesEventsDispositionsParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getInstancesEventsDispositionsParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    nextPage(nextPage: string

    ): getInstancesEventsDispositionsParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getInstancesEventsDispositionsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    run(): Promise <

        Array <
        Event

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getInstancesEventByEventIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, eventId: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{eventId}', `${eventId}`);
    }
    run(): Promise <
        Event

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getInstancesObjectsDefinitionsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    run(): Promise <
        Dictionary

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteInstancesObjectsObjectNameDefinitionsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, objectName: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getInstancesObjectsObjectNameDefinitionsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, objectName: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
    }
    run(): Promise <
        Definition

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createInstanceObjectObjectNameDefinitionParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, objectName: string

        , body:
        Definition

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this._body = body;
    }
    run(): Promise <
        Definition

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class replaceInstancesObjectsObjectNameDefinitionsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, objectName: string

        , body:
        Definition

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this._body = body;
    }
    run(): Promise <
        Definition

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class replaceInstancesTraceLoggingParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    config(config:
        TraceLoggingConfig

    ): replaceInstancesTraceLoggingParameters {
        if (this.queryParameters['config'] !== undefined) {
            this._body = this.queryParameters['config'];
        }
        return this;
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class deleteInstancesTraceLoggingParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class deleteInstancesTransformationsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getInstancesTransformationsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    run(): Promise <
        TransformationLibrary

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteInstancesTransformationByObjectNameParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, objectName: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getInstancesTransformationByObjectNameParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, objectName: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
    }
    run(): Promise <
        Transformation

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createInstanceTransformationByObjectNameParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, objectName: string

        , transformation:
        Transformation

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this._body = transformation;
    }
    run(): Promise <
        Transformation

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class replaceInstancesTransformationByObjectNameParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, objectName: string

        , transformation:
        Transformation

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this._body = transformation;
    }
    run(): Promise <
        Transformation

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteInstanceByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getInstanceByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <
        ElementInstance

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class replaceInstanceByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , elementInstance:
        ElementInstance

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = elementInstance;
    }
    run(): Promise <
        ElementInstance

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class updateInstanceByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , elementInstance:
        ElementInstance

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = elementInstance;
    }
    run(): Promise <
        ElementInstance

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getInstancesConfiguration2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <

        Array <
        ElementInstanceConfig

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getInstancesConfigurationByConfigId2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , configId: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{configId}', `${configId}`);
    }
    run(): Promise <
        ElementInstanceConfig

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class updateInstancesConfigurationByConfigId2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , configId: number

        , config:
        ElementInstanceConfigUpdate

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{configId}', `${configId}`);
        this._body = config;
    }
    run(): Promise <
        ElementInstanceConfig

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getInstancesDocs2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    operationId(operationId: string

    ): getInstancesDocs2Parameters {
        this.queryParameters['operationId'] = operationId;
        return this;
    }
    run(): Promise <

        {}

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getInstancesDocByOperationId2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , operationId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{operationId}', `${operationId}`);
    }
    discovery(discovery: boolean

    ): getInstancesDocByOperationId2Parameters {
        this.queryParameters['discovery'] = discovery;
        return this;
    }
    basic(basic: boolean

    ): getInstancesDocByOperationId2Parameters {
        this.queryParameters['basic'] = basic;
        return this;
    }
    run(): Promise <

        {}

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getInstancesDocsDefinitions2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , operationId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{operationId}', `${operationId}`);
    }
    discovery(discovery: boolean

    ): getInstancesDocsDefinitions2Parameters {
        this.queryParameters['discovery'] = discovery;
        return this;
    }
    resolveReferences(resolveReferences: boolean

    ): getInstancesDocsDefinitions2Parameters {
        this.queryParameters['resolveReferences'] = resolveReferences;
        return this;
    }
    basic(basic: boolean

    ): getInstancesDocsDefinitions2Parameters {
        this.queryParameters['basic'] = basic;
        return this;
    }
    run(): Promise <

        {}

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class replaceInstancesEnabled2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class deleteInstancesEnabled2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getInstancesEvents2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <

        Array <
        Event

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getInstancesEventByEventId2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , eventId: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{eventId}', `${eventId}`);
    }
    run(): Promise <
        Event

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getInstancesObjectsDefinitions2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <
        Dictionary

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteInstancesObjectsObjectNameDefinitions2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , objectName: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{objectName}', `${objectName}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getInstancesObjectsObjectNameDefinitions2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , objectName: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{objectName}', `${objectName}`);
    }
    run(): Promise <
        Definition

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createInstanceObjectObjectNameDefinition2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , objectName: string

        , body:
        Definition

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this._body = body;
    }
    run(): Promise <
        Definition

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class replaceInstancesObjectsObjectNameDefinitions2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , objectName: string

        , body:
        Definition

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this._body = body;
    }
    run(): Promise <
        Definition

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class replaceInstancesTraceLogging2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    config(config:
        TraceLoggingConfig

    ): replaceInstancesTraceLogging2Parameters {
        if (this.queryParameters['config'] !== undefined) {
            this._body = this.queryParameters['config'];
        }
        return this;
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class deleteInstancesTraceLogging2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class deleteInstancesTransformations2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getInstancesTransformations2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <
        TransformationLibrary

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteInstancesTransformationByObjectName2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , objectName: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{objectName}', `${objectName}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getInstancesTransformationByObjectName2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , objectName: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{objectName}', `${objectName}`);
    }
    run(): Promise <
        Transformation

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createInstanceTransformationByObjectName2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , objectName: string

        , transformation:
        Transformation

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this._body = transformation;
    }
    run(): Promise <
        Transformation

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class replaceInstancesTransformationByObjectName2Parameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , objectName: string

        , transformation:
        Transformation

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this._body = transformation;
    }
    run(): Promise <
        Transformation

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getJobsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    run(): Promise <
        Jobs

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createJobParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    body(body:
        Createjob

    ): createJobParameters {
        if (this.queryParameters['body'] !== undefined) {
            this._body = this.queryParameters['body'];
        }
        return this;
    }
    run(): Promise <
        CreatedJob

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getJobsExecutionsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    page(page: number

    ): getJobsExecutionsParameters {
        this.queryParameters['page'] = page;
        return this;
    }
    pageSize(pageSize: number

    ): getJobsExecutionsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    elementKeys(elementKeys: string

    ): getJobsExecutionsParameters {
        this.queryParameters['elementKeys[]'] = elementKeys;
        return this;
    }
    startTime(startTime: string

    ): getJobsExecutionsParameters {
        this.queryParameters['startTime'] = startTime;
        return this;
    }
    endTime(endTime: string

    ): getJobsExecutionsParameters {
        this.queryParameters['endTime'] = endTime;
        return this;
    }
    run(): Promise <
        JobExecutions

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteJobByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getJobByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <
        Job

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class replaceJobsDisableParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class replaceJobsEnableParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getJobsHistoryParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <
        JobHistories

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getJobsHistoryByHistoryIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: string

        , historyId: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{historyId}', `${historyId}`);
    }
    run(): Promise <
        JobHistory

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class updateJobsRescheduleParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    body(body:
        Reschedule

    ): updateJobsRescheduleParameters {
        if (this.queryParameters['body'] !== undefined) {
            this._body = this.queryParameters['body'];
        }
        return this;
    }
    run(): Promise <
        CreatedJob

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getMetricsApiParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    customerIds(customerIds:

        Array < number

        >
    ): getMetricsApiParameters {
        this.queryParameters['customerIds[]'] = customerIds;
        return this;
    }
    orgIds(orgIds:

        Array < number

        >
    ): getMetricsApiParameters {
        this.queryParameters['orgIds[]'] = orgIds;
        return this;
    }
    accountIds(accountIds:

        Array < number

        >
    ): getMetricsApiParameters {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    }
    from(from: string

    ): getMetricsApiParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getMetricsApiParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    pageSize(pageSize: number

    ): getMetricsApiParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    nextPage(nextPage: string

    ): getMetricsApiParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    agg(agg: "account" | "org"

    ): getMetricsApiParameters {
        this.queryParameters['agg'] = agg;
        return this;
    }
    interval(interval: "second" | "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year"

    ): getMetricsApiParameters {
        this.queryParameters['interval'] = interval;
        return this;
    }
    emptyIntervals(emptyIntervals: boolean

    ): getMetricsApiParameters {
        this.queryParameters['emptyIntervals'] = emptyIntervals;
        return this;
    }
    run(): Promise <

        Array <
        ApiMetrics

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getMetricsBulkJobsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    customerIds(customerIds:

        Array < number

        >
    ): getMetricsBulkJobsParameters {
        this.queryParameters['customerIds[]'] = customerIds;
        return this;
    }
    orgIds(orgIds:

        Array < number

        >
    ): getMetricsBulkJobsParameters {
        this.queryParameters['orgIds[]'] = orgIds;
        return this;
    }
    accountIds(accountIds:

        Array < number

        >
    ): getMetricsBulkJobsParameters {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    }
    from(from: string

    ): getMetricsBulkJobsParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getMetricsBulkJobsParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    pageSize(pageSize: number

    ): getMetricsBulkJobsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    nextPage(nextPage: string

    ): getMetricsBulkJobsParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    agg(agg: "account" | "org"

    ): getMetricsBulkJobsParameters {
        this.queryParameters['agg'] = agg;
        return this;
    }
    interval(interval: "second" | "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year"

    ): getMetricsBulkJobsParameters {
        this.queryParameters['interval'] = interval;
        return this;
    }
    emptyIntervals(emptyIntervals: boolean

    ): getMetricsBulkJobsParameters {
        this.queryParameters['emptyIntervals'] = emptyIntervals;
        return this;
    }
    run(): Promise <

        Array <
        BulkMetrics

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getMetricsElementInstancesCreatedParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    customerIds(customerIds:

        Array < number

        >
    ): getMetricsElementInstancesCreatedParameters {
        this.queryParameters['customerIds[]'] = customerIds;
        return this;
    }
    orgIds(orgIds:

        Array < number

        >
    ): getMetricsElementInstancesCreatedParameters {
        this.queryParameters['orgIds[]'] = orgIds;
        return this;
    }
    accountIds(accountIds:

        Array < number

        >
    ): getMetricsElementInstancesCreatedParameters {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    }
    from(from: string

    ): getMetricsElementInstancesCreatedParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getMetricsElementInstancesCreatedParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    pageSize(pageSize: number

    ): getMetricsElementInstancesCreatedParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    nextPage(nextPage: string

    ): getMetricsElementInstancesCreatedParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    agg(agg: "account" | "org"

    ): getMetricsElementInstancesCreatedParameters {
        this.queryParameters['agg'] = agg;
        return this;
    }
    interval(interval: "second" | "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year"

    ): getMetricsElementInstancesCreatedParameters {
        this.queryParameters['interval'] = interval;
        return this;
    }
    emptyIntervals(emptyIntervals: boolean

    ): getMetricsElementInstancesCreatedParameters {
        this.queryParameters['emptyIntervals'] = emptyIntervals;
        return this;
    }
    run(): Promise <

        Array <
        ElementInstancesCreatedMetrics

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getMetricsElementsCreatedParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    customerIds(customerIds:

        Array < number

        >
    ): getMetricsElementsCreatedParameters {
        this.queryParameters['customerIds[]'] = customerIds;
        return this;
    }
    orgIds(orgIds:

        Array < number

        >
    ): getMetricsElementsCreatedParameters {
        this.queryParameters['orgIds[]'] = orgIds;
        return this;
    }
    accountIds(accountIds:

        Array < number

        >
    ): getMetricsElementsCreatedParameters {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    }
    from(from: string

    ): getMetricsElementsCreatedParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getMetricsElementsCreatedParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    pageSize(pageSize: number

    ): getMetricsElementsCreatedParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    nextPage(nextPage: string

    ): getMetricsElementsCreatedParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    agg(agg: "account" | "org"

    ): getMetricsElementsCreatedParameters {
        this.queryParameters['agg'] = agg;
        return this;
    }
    interval(interval: "second" | "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year"

    ): getMetricsElementsCreatedParameters {
        this.queryParameters['interval'] = interval;
        return this;
    }
    emptyIntervals(emptyIntervals: boolean

    ): getMetricsElementsCreatedParameters {
        this.queryParameters['emptyIntervals'] = emptyIntervals;
        return this;
    }
    run(): Promise <

        Array <
        Metrics

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getMetricsEventsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    customerIds(customerIds:

        Array < number

        >
    ): getMetricsEventsParameters {
        this.queryParameters['customerIds[]'] = customerIds;
        return this;
    }
    orgIds(orgIds:

        Array < number

        >
    ): getMetricsEventsParameters {
        this.queryParameters['orgIds[]'] = orgIds;
        return this;
    }
    accountIds(accountIds:

        Array < number

        >
    ): getMetricsEventsParameters {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    }
    from(from: string

    ): getMetricsEventsParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getMetricsEventsParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    pageSize(pageSize: number

    ): getMetricsEventsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    nextPage(nextPage: string

    ): getMetricsEventsParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    agg(agg: "account" | "org"

    ): getMetricsEventsParameters {
        this.queryParameters['agg'] = agg;
        return this;
    }
    interval(interval: "second" | "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year"

    ): getMetricsEventsParameters {
        this.queryParameters['interval'] = interval;
        return this;
    }
    emptyIntervals(emptyIntervals: boolean

    ): getMetricsEventsParameters {
        this.queryParameters['emptyIntervals'] = emptyIntervals;
        return this;
    }
    run(): Promise <

        Array <
        Metrics

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getMetricsFormulaExecutionsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    customerIds(customerIds:

        Array < number

        >
    ): getMetricsFormulaExecutionsParameters {
        this.queryParameters['customerIds[]'] = customerIds;
        return this;
    }
    orgIds(orgIds:

        Array < number

        >
    ): getMetricsFormulaExecutionsParameters {
        this.queryParameters['orgIds[]'] = orgIds;
        return this;
    }
    accountIds(accountIds:

        Array < number

        >
    ): getMetricsFormulaExecutionsParameters {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    }
    from(from: string

    ): getMetricsFormulaExecutionsParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getMetricsFormulaExecutionsParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    pageSize(pageSize: number

    ): getMetricsFormulaExecutionsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    nextPage(nextPage: string

    ): getMetricsFormulaExecutionsParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    agg(agg: "account" | "org"

    ): getMetricsFormulaExecutionsParameters {
        this.queryParameters['agg'] = agg;
        return this;
    }
    interval(interval: "second" | "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year"

    ): getMetricsFormulaExecutionsParameters {
        this.queryParameters['interval'] = interval;
        return this;
    }
    emptyIntervals(emptyIntervals: boolean

    ): getMetricsFormulaExecutionsParameters {
        this.queryParameters['emptyIntervals'] = emptyIntervals;
        return this;
    }
    run(): Promise <

        Array <
        Metrics

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getMetricsFormulasCreatedParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    customerIds(customerIds:

        Array < number

        >
    ): getMetricsFormulasCreatedParameters {
        this.queryParameters['customerIds[]'] = customerIds;
        return this;
    }
    orgIds(orgIds:

        Array < number

        >
    ): getMetricsFormulasCreatedParameters {
        this.queryParameters['orgIds[]'] = orgIds;
        return this;
    }
    accountIds(accountIds:

        Array < number

        >
    ): getMetricsFormulasCreatedParameters {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    }
    from(from: string

    ): getMetricsFormulasCreatedParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getMetricsFormulasCreatedParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    pageSize(pageSize: number

    ): getMetricsFormulasCreatedParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    nextPage(nextPage: string

    ): getMetricsFormulasCreatedParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    agg(agg: "account" | "org"

    ): getMetricsFormulasCreatedParameters {
        this.queryParameters['agg'] = agg;
        return this;
    }
    interval(interval: "second" | "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year"

    ): getMetricsFormulasCreatedParameters {
        this.queryParameters['interval'] = interval;
        return this;
    }
    emptyIntervals(emptyIntervals: boolean

    ): getMetricsFormulasCreatedParameters {
        this.queryParameters['emptyIntervals'] = emptyIntervals;
        return this;
    }
    run(): Promise <

        Array <
        Metrics

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getMetricsHubApiParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    customerIds(customerIds:

        Array < number

        >
    ): getMetricsHubApiParameters {
        this.queryParameters['customerIds[]'] = customerIds;
        return this;
    }
    orgIds(orgIds:

        Array < number

        >
    ): getMetricsHubApiParameters {
        this.queryParameters['orgIds[]'] = orgIds;
        return this;
    }
    accountIds(accountIds:

        Array < number

        >
    ): getMetricsHubApiParameters {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    }
    from(from: string

    ): getMetricsHubApiParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getMetricsHubApiParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    pageSize(pageSize: number

    ): getMetricsHubApiParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    nextPage(nextPage: string

    ): getMetricsHubApiParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    agg(agg: "account" | "org"

    ): getMetricsHubApiParameters {
        this.queryParameters['agg'] = agg;
        return this;
    }
    interval(interval: "second" | "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year"

    ): getMetricsHubApiParameters {
        this.queryParameters['interval'] = interval;
        return this;
    }
    emptyIntervals(emptyIntervals: boolean

    ): getMetricsHubApiParameters {
        this.queryParameters['emptyIntervals'] = emptyIntervals;
        return this;
    }
    run(): Promise <

        Array <
        HubMetrics

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getMetricsHubsCreatedParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    customerIds(customerIds:

        Array < number

        >
    ): getMetricsHubsCreatedParameters {
        this.queryParameters['customerIds[]'] = customerIds;
        return this;
    }
    orgIds(orgIds:

        Array < number

        >
    ): getMetricsHubsCreatedParameters {
        this.queryParameters['orgIds[]'] = orgIds;
        return this;
    }
    accountIds(accountIds:

        Array < number

        >
    ): getMetricsHubsCreatedParameters {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    }
    from(from: string

    ): getMetricsHubsCreatedParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getMetricsHubsCreatedParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    pageSize(pageSize: number

    ): getMetricsHubsCreatedParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    nextPage(nextPage: string

    ): getMetricsHubsCreatedParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    agg(agg: "account" | "org"

    ): getMetricsHubsCreatedParameters {
        this.queryParameters['agg'] = agg;
        return this;
    }
    interval(interval: "second" | "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year"

    ): getMetricsHubsCreatedParameters {
        this.queryParameters['interval'] = interval;
        return this;
    }
    emptyIntervals(emptyIntervals: boolean

    ): getMetricsHubsCreatedParameters {
        this.queryParameters['emptyIntervals'] = emptyIntervals;
        return this;
    }
    run(): Promise <

        Array <
        HubMetrics

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getMetricsVdrsCreatedParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    customerIds(customerIds:

        Array < number

        >
    ): getMetricsVdrsCreatedParameters {
        this.queryParameters['customerIds[]'] = customerIds;
        return this;
    }
    orgIds(orgIds:

        Array < number

        >
    ): getMetricsVdrsCreatedParameters {
        this.queryParameters['orgIds[]'] = orgIds;
        return this;
    }
    accountIds(accountIds:

        Array < number

        >
    ): getMetricsVdrsCreatedParameters {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    }
    from(from: string

    ): getMetricsVdrsCreatedParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getMetricsVdrsCreatedParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    pageSize(pageSize: number

    ): getMetricsVdrsCreatedParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    nextPage(nextPage: string

    ): getMetricsVdrsCreatedParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    agg(agg: "account" | "org"

    ): getMetricsVdrsCreatedParameters {
        this.queryParameters['agg'] = agg;
        return this;
    }
    interval(interval: "second" | "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year"

    ): getMetricsVdrsCreatedParameters {
        this.queryParameters['interval'] = interval;
        return this;
    }
    emptyIntervals(emptyIntervals: boolean

    ): getMetricsVdrsCreatedParameters {
        this.queryParameters['emptyIntervals'] = emptyIntervals;
        return this;
    }
    run(): Promise <

        Array <
        Metrics

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getMetricsVdrsInvokedParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    customerIds(customerIds:

        Array < number

        >
    ): getMetricsVdrsInvokedParameters {
        this.queryParameters['customerIds[]'] = customerIds;
        return this;
    }
    orgIds(orgIds:

        Array < number

        >
    ): getMetricsVdrsInvokedParameters {
        this.queryParameters['orgIds[]'] = orgIds;
        return this;
    }
    accountIds(accountIds:

        Array < number

        >
    ): getMetricsVdrsInvokedParameters {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    }
    from(from: string

    ): getMetricsVdrsInvokedParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getMetricsVdrsInvokedParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    pageSize(pageSize: number

    ): getMetricsVdrsInvokedParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    nextPage(nextPage: string

    ): getMetricsVdrsInvokedParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    agg(agg: "account" | "org"

    ): getMetricsVdrsInvokedParameters {
        this.queryParameters['agg'] = agg;
        return this;
    }
    interval(interval: "second" | "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year"

    ): getMetricsVdrsInvokedParameters {
        this.queryParameters['interval'] = interval;
        return this;
    }
    emptyIntervals(emptyIntervals: boolean

    ): getMetricsVdrsInvokedParameters {
        this.queryParameters['emptyIntervals'] = emptyIntervals;
        return this;
    }
    run(): Promise <

        Array <
        Metrics

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createOrganizationParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, organization:
        Organization_POST

    ) {
        super(superThis, method, path);
        this._body = organization;
    }
    run(): Promise <
        Organization_GET

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteOrganizationsElementsTransformationsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getOrganizationsElementsTransformationsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
    }
    run(): Promise <
        TransformationLibrary

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteOrganizationsElementsTransformationByObjectNameParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , objectName: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{objectName}', `${objectName}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getOrganizationsElementsTransformationByObjectNameParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , objectName: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{objectName}', `${objectName}`);
    }
    run(): Promise <
        Transformation

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createOrganizationElementTransformationByObjectNameParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , objectName: string

        , transformation:
        Transformation

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this._body = transformation;
    }
    run(): Promise <
        Transformation

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class replaceOrganizationsElementsTransformationByObjectNameParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, keyOrId: string

        , objectName: string

        , transformation:
        Transformation

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{keyOrId}', `${keyOrId}`);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this._body = transformation;
    }
    run(): Promise <
        Transformation

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getOrganizationsMeParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    run(): Promise <
        Organization

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class replaceOrganizationsMeParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, body:
        Organization

    ) {
        super(superThis, method, path);
        this._body = body;
    }
    run(): Promise <
        User

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteOrganizationsObjectsDefinitionsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getOrganizationsObjectsDefinitionsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    run(): Promise <
        Dictionary

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createOrganizationObjectDefinitionParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, body:
        Dictionary

    ) {
        super(superThis, method, path);
        this._body = body;
    }
    run(): Promise <
        Dictionary

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteOrganizationsObjectsObjectNameDefinitionsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, objectName: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class getOrganizationsObjectsObjectNameDefinitionsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, objectName: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
    }
    run(): Promise <
        Definition

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createOrganizationObjectObjectNameDefinitionParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, objectName: string

        , body:
        Definition

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this._body = body;
    }
    run(): Promise <
        Definition

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class replaceOrganizationsObjectsObjectNameDefinitionsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, objectName: string

        , body:
        Definition

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{objectName}', `${objectName}`);
        this._body = body;
    }
    run(): Promise <
        Definition

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getOrganizationsUsersParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    where(where: string

    ): getOrganizationsUsersParameters {
        this.queryParameters['where'] = where;
        return this;
    }
    nextPage(nextPage: string

    ): getOrganizationsUsersParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getOrganizationsUsersParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    includeInactive(includeInactive: boolean

    ): getOrganizationsUsersParameters {
        this.queryParameters['includeInactive'] = includeInactive;
        return this;
    }
    run(): Promise <

        Array <
        User

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createOrganizationUserParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, body:
        User

    ) {
        super(superThis, method, path);
        this._body = body;
    }
    run(): Promise <
        User

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getOrganizationsUserByEmailOrIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, emailOrId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{emailOrId}', `${emailOrId}`);
    }
    elementsUserPassword(elementsUserPassword: string

    ): getOrganizationsUserByEmailOrIdParameters {
        this.headers['Elements-User-Password'] = elementsUserPassword;
        return this;
    }
    includeInactive(includeInactive: boolean

    ): getOrganizationsUserByEmailOrIdParameters {
        this.queryParameters['includeInactive'] = includeInactive;
        return this;
    }
    run(): Promise <
        User

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteOrganizationsUserByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class updateOrganizationsUserByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , body:
        User

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = body;
    }
    permanent(permanent: boolean

    ): updateOrganizationsUserByIdParameters {
        this.queryParameters['permanent'] = permanent;
        return this;
    }
    run(): Promise <
        User

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class createOrganizationAccountParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , account:
        Account_POST

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = account;
    }
    run(): Promise <
        Account_GET

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getOrganizationsAccountsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    nextPage(nextPage: string

    ): getOrganizationsAccountsParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getOrganizationsAccountsParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    where(where: string

    ): getOrganizationsAccountsParameters {
        this.queryParameters['where'] = where;
        return this;
    }
    includeInactive(includeInactive: boolean

    ): getOrganizationsAccountsParameters {
        this.queryParameters['includeInactive'] = includeInactive;
        return this;
    }
    run(): Promise <

        Array <
        Account_GET

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getOrganizationsAccountByAccountIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , accountId: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this.path = this.path.replace('{accountId}', `${accountId}`);
    }
    includeInactive(includeInactive: boolean

    ): getOrganizationsAccountByAccountIdParameters {
        this.queryParameters['includeInactive'] = includeInactive;
        return this;
    }
    run(): Promise <
        Account_GET

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getUsageParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    hub(hub: string

    ): getUsageParameters {
        this.queryParameters['hub'] = hub;
        return this;
    }
    keys(keys:

        Array < string

        >
    ): getUsageParameters {
        this.queryParameters['keys[]'] = keys;
        return this;
    }
    tags(tags:

        Array < string

        >
    ): getUsageParameters {
        this.queryParameters['tags[]'] = tags;
        return this;
    }
    accountIds(accountIds:

        Array < number

        >
    ): getUsageParameters {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    }
    status(status: "SUCCESS" | "FAILED"

    ): getUsageParameters {
        this.queryParameters['status'] = status;
        return this;
    }
    from(from: string

    ): getUsageParameters {
        this.queryParameters['from'] = from;
        return this;
    }
    to(to: string

    ): getUsageParameters {
        this.queryParameters['to'] = to;
        return this;
    }
    searchText(searchText: string

    ): getUsageParameters {
        this.queryParameters['searchText'] = searchText;
        return this;
    }
    pageOffset(pageOffset: number

    ): getUsageParameters {
        this.queryParameters['pageOffset'] = pageOffset;
        return this;
    }
    pageSize(pageSize: number

    ): getUsageParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    nextPage(nextPage: string

    ): getUsageParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    run(): Promise <

        Array <
        TrafficEntry

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getUsageAnalyticsActivityParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, from: string

        , to: string

    ) {
        super(superThis, method, path);
        this.queryParameters['from'] = from;
        this.queryParameters['to'] = to;
    }
    interval(interval: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second"

    ): getUsageAnalyticsActivityParameters {
        this.queryParameters['interval'] = interval;
        return this;
    }
    accountIds(accountIds:

        Array < number

        >
    ): getUsageAnalyticsActivityParameters {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    }
    run(): Promise <

        Array <
        ActivityEntry

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getUsageAnalyticsActivityElementsParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, from: string

        , to: string

    ) {
        super(superThis, method, path);
        this.queryParameters['from'] = from;
        this.queryParameters['to'] = to;
    }
    interval(interval: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second"

    ): getUsageAnalyticsActivityElementsParameters {
        this.queryParameters['interval'] = interval;
        return this;
    }
    accountIds(accountIds:

        Array < number

        >
    ): getUsageAnalyticsActivityElementsParameters {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    }
    run(): Promise <

        Array <
        ActivityElementEntry

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getUsageAnalyticsStatusesParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, from: string

        , to: string

    ) {
        super(superThis, method, path);
        this.queryParameters['from'] = from;
        this.queryParameters['to'] = to;
    }
    interval(interval: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second"

    ): getUsageAnalyticsStatusesParameters {
        this.queryParameters['interval'] = interval;
        return this;
    }
    accountIds(accountIds:

        Array < number

        >
    ): getUsageAnalyticsStatusesParameters {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    }
    run(): Promise <

        Array <
        StatusEntry

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getUsageAnalyticsTimesParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, from: string

        , to: string

    ) {
        super(superThis, method, path);
        this.queryParameters['from'] = from;
        this.queryParameters['to'] = to;
    }
    interval(interval: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second"

    ): getUsageAnalyticsTimesParameters {
        this.queryParameters['interval'] = interval;
        return this;
    }
    accountIds(accountIds:

        Array < number

        >
    ): getUsageAnalyticsTimesParameters {
        this.queryParameters['accountIds[]'] = accountIds;
        return this;
    }
    run(): Promise <

        Array <
        TimesEntry

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getUsageByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <
        TrafficEntry

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getUsersParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string) {
        super(superThis, method, path);
    }
    where(where: string

    ): getUsersParameters {
        this.queryParameters['where'] = where;
        return this;
    }
    nextPage(nextPage: string

    ): getUsersParameters {
        this.queryParameters['nextPage'] = nextPage;
        return this;
    }
    pageSize(pageSize: number

    ): getUsersParameters {
        this.queryParameters['pageSize'] = pageSize;
        return this;
    }
    includeInactive(includeInactive: boolean

    ): getUsersParameters {
        this.queryParameters['includeInactive'] = includeInactive;
        return this;
    }
    run(): Promise <

        Array <
        User

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getUserByEmailOrIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, emailOrId: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{emailOrId}', `${emailOrId}`);
    }
    elementsUserPassword(elementsUserPassword: string

    ): getUserByEmailOrIdParameters {
        this.headers['Elements-User-Password'] = elementsUserPassword;
        return this;
    }
    includeInactive(includeInactive: boolean

    ): getUserByEmailOrIdParameters {
        this.queryParameters['includeInactive'] = includeInactive;
        return this;
    }
    run(): Promise <
        User

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteUserByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class updateUserByIdParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

        , body:
        User

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
        this._body = body;
    }
    run(): Promise <
        User

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class getUsersRolesParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, id: number

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{id}', `${id}`);
    }
    run(): Promise <

        Array <
        Role

        >
        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};
class deleteUsersRoleByRoleKeyParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, userId: number

        , roleKey: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{userId}', `${userId}`);
        this.path = this.path.replace('{roleKey}', `${roleKey}`);
    }
    run(): Promise < > {
        return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
            .then(r => r.body)
    }
};
class replaceUsersRoleByRoleKeyParameters extends platformSDKMethodParameters {
    constructor(superThis: platformSDK, method: string, path: string, userId: number

        , roleKey: string

    ) {
        super(superThis, method, path);
        this.path = this.path.replace('{userId}', `${userId}`);
        this.path = this.path.replace('{roleKey}', `${roleKey}`);
    }
    run(): Promise <
        Role

        >
        {
            return this.superThis.request(this.method, this.path, this._body, this.headers, this.queryParameters, this.form)
                .then(r => r.body)
        }
};

/**
 * 
 * @class platformSDK
 * @param {(string)} [domainOrOptions] - The project domain.
 */
export class platformSDK {

    private domain: string = "https://console.cloud-elements.com/elements/api-v2";
    private logger: Logger = {
        log: msg => console.log(msg)
    };
    private errorHandlers: CallbackHandler[] = [];
    private authorizationHeader: string = null;

    constructor(baseUrl ? : string, authorizationHeader ? : string, logger ? : Logger) {
        if (baseUrl) {
            this.domain = `${baseUrl}/elements/api-v2`;
        }
        if (logger) {
            this.logger = logger;
        }
        if (authorizationHeader) {
            this.authorizationHeader = authorizationHeader;
        }
    }

    getDomain() {
        return this.domain;
    }

    addErrorHandler(handler: CallbackHandler) {
        this.errorHandlers.push(handler);
    }

    public post(path: string, body ? : any, headers ? : any, queryParameters ? : any, form ? : any): Promise < request.Response > {
        return this.request('POST', path, body, headers, queryParameters, form)
    }

    public put(path: string, body ? : any, headers ? : any, queryParameters ? : any, form ? : any): Promise < request.Response > {
        return this.request('PUT', path, body, headers, queryParameters, form)
    }

    public patch(path: string, body ? : any, headers ? : any, queryParameters ? : any, form ? : any): Promise < request.Response > {
        return this.request('PATCH', path, body, headers, queryParameters, form)
    }

    public delete(path: string, body ? : any, headers ? : any, queryParameters ? : any, form ? : any): Promise < request.Response > {
        return this.request('DELETE', path, body, headers, queryParameters, form)
    }

    public get(path: string, body ? : any, headers ? : any, queryParameters ? : any, form ? : any): Promise < request.Response > {
        return this.request('GET', path, body, headers, queryParameters, form)
    }

    public request(method: string, path: string, body ? : any, headers ? : any, queryParameters ? : any, form ? : any):
        Promise < request.Response > {
            return new Promise((resolve, reject) => {
                if (!body) {
                    body = {}
                }
                if (!headers) {
                    headers = {}
                }
                if (!queryParameters) {
                    queryParameters = {}
                }
                if (!form) {
                    form = {}
                }
                if (this.authorizationHeader && this.authorizationHeader.length > 0) {
                    headers.authorization = this.authorizationHeader
                }
                let url: string = this.domain + path;
                if (this.logger) {
                    this.logger.log(`Call ${method} ${url}`);
                }

                let req = (request as SuperAgentStatic)(method, url).query(queryParameters);

                Object.keys(headers).forEach(key => {
                    req.set(key, headers[key]);
                });

                if (body) {
                    req.send(body);
                }

                if (typeof(body) === 'object' && !(body.constructor.name === 'Buffer')) {
                    req.set('Content-Type', 'application/json');
                }

                if (Object.keys(form).length > 0) {
                    req.type('form');
                    req.send(form);
                }

                req.end((error, response) => {
                    if (error || !response.ok) {
                        reject(error);
                        this.errorHandlers.forEach(handler => handler(error));
                    } else {
                        resolve(response);
                    }
                });
            });
        }

    /**
     * Retrieve accounts (identified by your organization secret). The provided user secret must be that of the default admin user for the organization.
     * @method
     * @name platformSDK#getAccounts
     */
    getAccounts(): getAccountsParameters {
        return new getAccountsParameters(this, 'GET', '/accounts');
    }

    /**
     * Create a sub-account (identified by your organization secret). The provided user secret must be that of the default admin user for the organization.
     * @method
     * @name platformSDK#createAccount
     * @param {} body - The account to create<br/><br/>The required fields are:<br/><ul><li><b>externalId</b> - An external account identifier, typically an email address</li></ul><br/>Optional fields are:<br/><ul><li><b>name</b> - The name of the account</li><li><b>description</b> - A description of the account</li></ul><br/>Upon success, the created object will be returned.
     */
    createAccount(
        body:
        Account

        ,
    ): createAccountParameters {
        return new createAccountParameters(this, 'POST', '/accounts', body);
    }

    /**
     * Finds all instances for the default users' account
     * @method
     * @name platformSDK#getAccountsInstances
     */
    getAccountsInstances(): getAccountsInstancesParameters {
        return new getAccountsInstancesParameters(this, 'GET', '/accounts/instances');
    }

    /**
     * Delete all object definitions within the default users' account.  If no object definitions exist then this will result in an error response.
     * @method
     * @name platformSDK#deleteAccountsObjectsDefinitions
     */
    deleteAccountsObjectsDefinitions(): deleteAccountsObjectsDefinitionsParameters {
        return new deleteAccountsObjectsDefinitionsParameters(this, 'DELETE', '/accounts/objects/definitions');
    }

    /**
     * Retrieve all of the object definitions within the users' default account.  Specifying an object definition that does not exist will result in an error response.
     * @method
     * @name platformSDK#getAccountsObjectsDefinitions
     */
    getAccountsObjectsDefinitions(): getAccountsObjectsDefinitionsParameters {
        return new getAccountsObjectsDefinitionsParameters(this, 'GET', '/accounts/objects/definitions');
    }

    /**
     * Create multiple object definitions within this users' default account.  The definitions allow you to define what an object looks like within an account.
     * @method
     * @name platformSDK#createAccountObjectDefinition
     * @param {} body - The object definitions to create
     */
    createAccountObjectDefinition(
        body:
        Dictionary

        ,
    ): createAccountObjectDefinitionParameters {
        return new createAccountObjectDefinitionParameters(this, 'POST', '/accounts/objects/definitions', body);
    }

    /**
     * Delete an object definition associated with an objectName within the default users' account.  Specifying an object name that does not have an object definition will result in an error response.
     * @method
     * @name platformSDK#deleteAccountsObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     */
    deleteAccountsObjectsObjectNameDefinitions(
        objectName: string

        ,
    ): deleteAccountsObjectsObjectNameDefinitionsParameters {
        return new deleteAccountsObjectsObjectNameDefinitionsParameters(this, 'DELETE', '/accounts/objects/{objectName}/definitions', objectName);
    }

    /**
     * Retrieve a specific object definition associated with an objectName within the default users' account.  Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#getAccountsObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     */
    getAccountsObjectsObjectNameDefinitions(
        objectName: string

        ,
    ): getAccountsObjectsObjectNameDefinitionsParameters {
        return new getAccountsObjectsObjectNameDefinitionsParameters(this, 'GET', '/accounts/objects/{objectName}/definitions', objectName);
    }

    /**
     * Create a new object definition associated with an objectName within the users' default account.  The definitions allow you to define what an object looks like within an account.
     * @method
     * @name platformSDK#createAccountObjectObjectNameDefinition
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     */
    createAccountObjectObjectNameDefinition(
        objectName: string

        ,
        body:
        Definition

        ,
    ): createAccountObjectObjectNameDefinitionParameters {
        return new createAccountObjectObjectNameDefinitionParameters(this, 'POST', '/accounts/objects/{objectName}/definitions', objectName, body);
    }

    /**
     * Update a specific object's definition associated with an objectName within the default users' account. Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#replaceAccountsObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     */
    replaceAccountsObjectsObjectNameDefinitions(
        objectName: string

        ,
        body:
        Definition

        ,
    ): replaceAccountsObjectsObjectNameDefinitionsParameters {
        return new replaceAccountsObjectsObjectNameDefinitionsParameters(this, 'PUT', '/accounts/objects/{objectName}/definitions', objectName, body);
    }

    /**
     * List formula instances for an account by formula ID
     * @method
     * @name platformSDK#getAccountsFormulasInstances
     * @param {integer} accountId - The account ID
     * @param {integer} formulaId - The formula ID
     */
    getAccountsFormulasInstances(
        accountId: number

        ,
        formulaId: number

        ,
    ): getAccountsFormulasInstancesParameters {
        return new getAccountsFormulasInstancesParameters(this, 'GET', '/accounts/{accountId}/formulas/{formulaId}/instances', accountId, formulaId);
    }

    /**
     * Delete an account by ID. The provided user secret must be that of the default admin user for the organization or customer. WARNING: Deleting an account will delete all users contained within that account along with all of those users' element and formula instances'.
     * @method
     * @name platformSDK#deleteAccountById
     * @param {integer} id - The ID of the account
     */
    deleteAccountById(
        id: number

        ,
    ): deleteAccountByIdParameters {
        return new deleteAccountByIdParameters(this, 'DELETE', '/accounts/{id}', id);
    }

    /**
     * Retrieve an account by ID. The provided user secret must be that of the default admin user for the organization.
     * @method
     * @name platformSDK#getAccountById
     * @param {integer} id - The ID of the account
     */
    getAccountById(
        id: number

        ,
    ): getAccountByIdParameters {
        return new getAccountByIdParameters(this, 'GET', '/accounts/{id}', id);
    }

    /**
     * Update an account (identified by your organization secret). The provided user secret must be that of the admin user for the organization. WARNING: If updating the 'active' field to false, the scheduled jobs for all of the account's users will be deleted.
     * @method
     * @name platformSDK#updateAccountById
     * @param {integer} id - The ID of the account
     * @param {} body - The updated account information<br/><br/>The fields that can be updated are:<br/><ul><li><b>externalId</b> - An external account identifier, typically an email address</li><li><b>name</b> - The name of the account</li><li><b>description</b> - A description of the account</li></ul><br/>Upon success, the updated object will be returned.
     */
    updateAccountById(
        id: number

        ,
        body:
        Account

        ,
    ): updateAccountByIdParameters {
        return new updateAccountByIdParameters(this, 'PATCH', '/accounts/{id}', id, body);
    }

    /**
     * Replace the data for an account by ID. The provided user secret must be that of the admin user for the organization or customer. WARNING: If updating the 'active' field to false, the scheduled jobs for all of the account's users will be deleted.
     * @method
     * @name platformSDK#replaceAccountById
     * @param {integer} id - The ID of the account
     * @param {} body - The updated account information.
     */
    replaceAccountById(
        id: number

        ,
        body:
        Account_PUT

        ,
    ): replaceAccountByIdParameters {
        return new replaceAccountByIdParameters(this, 'PUT', '/accounts/{id}', id, body);
    }

    /**
     * Delete the default transformation for all elements of a certain type for this account.
     * @method
     * @name platformSDK#deleteAccountsElementsTransformations
     * @param {integer} id - The ID of the account
     * @param {string} keyOrId - The element key or ID
     */
    deleteAccountsElementsTransformations(
        id: number

        ,
        keyOrId: string

        ,
    ): deleteAccountsElementsTransformationsParameters {
        return new deleteAccountsElementsTransformationsParameters(this, 'DELETE', '/accounts/{id}/elements/{keyOrId}/transformations', id, keyOrId);
    }

    /**
     * Retrieve the default transformation for all elements of a certain type for this account.
     * @method
     * @name platformSDK#getAccountsElementsTransformations
     * @param {integer} id - The ID of the account
     * @param {string} keyOrId - The element key or ID
     */
    getAccountsElementsTransformations(
        id: number

        ,
        keyOrId: string

        ,
    ): getAccountsElementsTransformationsParameters {
        return new getAccountsElementsTransformationsParameters(this, 'GET', '/accounts/{id}/elements/{keyOrId}/transformations', id, keyOrId);
    }

    /**
     * Delete the default transformation for an object for all elements of a certain type for this account.
     * @method
     * @name platformSDK#deleteAccountsElementsTransformationByObjectName
     * @param {integer} id - The ID of the account
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The object name
     */
    deleteAccountsElementsTransformationByObjectName(
        id: number

        ,
        keyOrId: string

        ,
        objectName: string

        ,
    ): deleteAccountsElementsTransformationByObjectNameParameters {
        return new deleteAccountsElementsTransformationByObjectNameParameters(this, 'DELETE', '/accounts/{id}/elements/{keyOrId}/transformations/{objectName}', id, keyOrId, objectName);
    }

    /**
     * Retrieve the default transformation for an object for all elements of a certain type for this account.
     * @method
     * @name platformSDK#getAccountsElementsTransformationByObjectName
     * @param {integer} id - The ID of the account
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The name of the object
     */
    getAccountsElementsTransformationByObjectName(
        id: number

        ,
        keyOrId: string

        ,
        objectName: string

        ,
    ): getAccountsElementsTransformationByObjectNameParameters {
        return new getAccountsElementsTransformationByObjectNameParameters(this, 'GET', '/accounts/{id}/elements/{keyOrId}/transformations/{objectName}', id, keyOrId, objectName);
    }

    /**
     * Create a default transformation for an object for all elements of a certain type for this account.
     * @method
     * @name platformSDK#createAccountElementTransformationByObjectName
     * @param {integer} id - The ID of the account
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation
     */
    createAccountElementTransformationByObjectName(
        id: number

        ,
        keyOrId: string

        ,
        objectName: string

        ,
        transformation:
        Transformation

        ,
    ): createAccountElementTransformationByObjectNameParameters {
        return new createAccountElementTransformationByObjectNameParameters(this, 'POST', '/accounts/{id}/elements/{keyOrId}/transformations/{objectName}', id, keyOrId, objectName, transformation);
    }

    /**
     * Update the default transformation for an object for all elements of a certain type for this account.
     * @method
     * @name platformSDK#replaceAccountsElementsTransformationByObjectName
     * @param {integer} id - The ID of the account
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation
     */
    replaceAccountsElementsTransformationByObjectName(
        id: number

        ,
        keyOrId: string

        ,
        objectName: string

        ,
        transformation:
        Transformation

        ,
    ): replaceAccountsElementsTransformationByObjectNameParameters {
        return new replaceAccountsElementsTransformationByObjectNameParameters(this, 'PUT', '/accounts/{id}/elements/{keyOrId}/transformations/{objectName}', id, keyOrId, objectName, transformation);
    }

    /**
     * Finds all instances for the specified account
     * @method
     * @name platformSDK#getAccountsInstances2
     * @param {integer} id - The ID of the account
     */
    getAccountsInstances2(
        id: number

        ,
    ): getAccountsInstances2Parameters {
        return new getAccountsInstances2Parameters(this, 'GET', '/accounts/{id}/instances', id);
    }

    /**
     * Delete all object definitions within a specific account.  If no object definitions exist then this will result in an error response.
     * @method
     * @name platformSDK#deleteAccountsObjectsDefinitions2
     * @param {integer} id - The ID of the account
     */
    deleteAccountsObjectsDefinitions2(
        id: number

        ,
    ): deleteAccountsObjectsDefinitions2Parameters {
        return new deleteAccountsObjectsDefinitions2Parameters(this, 'DELETE', '/accounts/{id}/objects/definitions', id);
    }

    /**
     * Retrieve all of the object definitions within a specific account.  If no object definitions exist, then this will result in an error response.
     * @method
     * @name platformSDK#getAccountsObjectsDefinitions2
     * @param {integer} id - The ID of the account
     */
    getAccountsObjectsDefinitions2(
        id: number

        ,
    ): getAccountsObjectsDefinitions2Parameters {
        return new getAccountsObjectsDefinitions2Parameters(this, 'GET', '/accounts/{id}/objects/definitions', id);
    }

    /**
     * Create multiple object definitions for a specific account.  The definitions allow you to define what an object looks like within an account.
     * @method
     * @name platformSDK#createAccountObjectDefinition2
     * @param {integer} id - The ID of the account
     * @param {} body - The object definitions to create
     */
    createAccountObjectDefinition2(
        id: number

        ,
        body:
        Dictionary

        ,
    ): createAccountObjectDefinition2Parameters {
        return new createAccountObjectDefinition2Parameters(this, 'POST', '/accounts/{id}/objects/definitions', id, body);
    }

    /**
     * Delete an object definition associated with an objectName for a specific account.  Specifying an object name that does not have an object definition will result in an error response.
     * @method
     * @name platformSDK#deleteAccountsObjectsObjectNameDefinitions2
     * @param {integer} id - The ID of the account
     * @param {string} objectName - The name of the object
     */
    deleteAccountsObjectsObjectNameDefinitions2(
        id: number

        ,
        objectName: string

        ,
    ): deleteAccountsObjectsObjectNameDefinitions2Parameters {
        return new deleteAccountsObjectsObjectNameDefinitions2Parameters(this, 'DELETE', '/accounts/{id}/objects/{objectName}/definitions', id, objectName);
    }

    /**
     * Retrieve a specific object definition associated with an objectName within a specific account.  Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#getAccountsObjectsObjectNameDefinitions2
     * @param {integer} id - The ID of the account
     * @param {string} objectName - The name of the object
     */
    getAccountsObjectsObjectNameDefinitions2(
        id: number

        ,
        objectName: string

        ,
    ): getAccountsObjectsObjectNameDefinitions2Parameters {
        return new getAccountsObjectsObjectNameDefinitions2Parameters(this, 'GET', '/accounts/{id}/objects/{objectName}/definitions', id, objectName);
    }

    /**
     * Create a new object definition associated with an objectName within a specific account.  The definitions allow you to define what an object looks like within an account.
     * @method
     * @name platformSDK#createAccountObjectObjectNameDefinition2
     * @param {integer} id - The ID of the account
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     */
    createAccountObjectObjectNameDefinition2(
        id: number

        ,
        objectName: string

        ,
        body:
        Definition

        ,
    ): createAccountObjectObjectNameDefinition2Parameters {
        return new createAccountObjectObjectNameDefinition2Parameters(this, 'POST', '/accounts/{id}/objects/{objectName}/definitions', id, objectName, body);
    }

    /**
     * Update a specific object's definition associated with an objectName within a specific account. Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#replaceAccountsObjectsObjectNameDefinitions2
     * @param {integer} id - The ID of the account
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     */
    replaceAccountsObjectsObjectNameDefinitions2(
        id: number

        ,
        objectName: string

        ,
        body:
        Definition

        ,
    ): replaceAccountsObjectsObjectNameDefinitions2Parameters {
        return new replaceAccountsObjectsObjectNameDefinitions2Parameters(this, 'PUT', '/accounts/{id}/objects/{objectName}/definitions', id, objectName, body);
    }

    /**
     * Find users within an account associated by an ID.  Specifying a user within an account associated with a given ID that does not exist will result in an error response.
     * @method
     * @name platformSDK#getAccountsUsers
     * @param {integer} id - The ID of the account
     */
    getAccountsUsers(
        id: number

        ,
    ): getAccountsUsersParameters {
        return new getAccountsUsersParameters(this, 'GET', '/accounts/{id}/users', id);
    }

    /**
     * Create a user within an account associated by an ID.
     * @method
     * @name platformSDK#createAccountUser
     * @param {integer} id - The ID of the account under which the user should be created
     * @param {} body - The user to create<br/><br/>The required fields are:<br/><ul><li><b>email</b> - The user's email address</li><li><b>firstName</b> - The user's first name</li><li><b>lastName</b> - The user's last name</li></ul><br/>Upon success, the created object will be returned.
     */
    createAccountUser(
        id: number

        ,
        body:
        User

        ,
    ): createAccountUserParameters {
        return new createAccountUserParameters(this, 'POST', '/accounts/{id}/users', id, body);
    }

    /**
     * Retrieve an account user by name or ID within an account associated by an ID.  Specifying a user associated with a given emailOrID or account associated with a given ID that does not exist will result in an error response.
     * @method
     * @name platformSDK#getAccountsUserByEmailOrId
     * @param {integer} id - The ID of the account
     * @param {string} emailOrId - The email address or numeric ID of the user
     */
    getAccountsUserByEmailOrId(
        id: number

        ,
        emailOrId: string

        ,
    ): getAccountsUserByEmailOrIdParameters {
        return new getAccountsUserByEmailOrIdParameters(this, 'GET', '/accounts/{id}/users/{emailOrId}', id, emailOrId);
    }

    /**
     * Update an account user by ID within an account associated by an ID. WARNING: If updating the 'active' field to false, all of the scheduled jobs for the user will be deleted.
     * @method
     * @name platformSDK#updateAccountsUserByUserId
     * @param {integer} id - The ID of the account
     * @param {integer} userId - The ID of the user
     * @param {} body - The updated user information
     */
    updateAccountsUserByUserId(
        id: number

        ,
        userId: number

        ,
        body:
        User

        ,
    ): updateAccountsUserByUserIdParameters {
        return new updateAccountsUserByUserIdParameters(this, 'PATCH', '/accounts/{id}/users/{userId}', id, userId, body);
    }

    /**
     * Replace the data for an account user by ID within an account associated by an ID. WARNING: If updating the 'active' field to false, all of the scheduled jobs for the user will be deleted.
     * @method
     * @name platformSDK#replaceAccountsUserByUserId
     * @param {integer} id - The ID of the account
     * @param {integer} userId - The ID of the user
     * @param {} body - The updated user information
     */
    replaceAccountsUserByUserId(
        id: number

        ,
        userId: number

        ,
        body:
        User_PUT

        ,
    ): replaceAccountsUserByUserIdParameters {
        return new replaceAccountsUserByUserIdParameters(this, 'PUT', '/accounts/{id}/users/{userId}', id, userId, body);
    }

    /**
     * Delete an account user by ID within an account associated by an ID. WARNING: this action will irreversibly delete all jobs, and formula and element instances associated with the user.
     * @method
     * @name platformSDK#deleteAccountsUserByUserId
     * @param {integer} id - The ID of the account
     * @param {integer} userId - The ID of the user
     */
    deleteAccountsUserByUserId(
        id: number

        ,
        userId: number

        ,
    ): deleteAccountsUserByUserIdParameters {
        return new deleteAccountsUserByUserIdParameters(this, 'DELETE', '/accounts/{id}/users/{userId}', id, userId);
    }

    /**
     * Retrieve a list of logged API requests that identify the request, the user who made the request, the time that they made the request, and more.
     * @method
     * @name platformSDK#getAuditLogs
     */
    getAuditLogs(): getAuditLogsParameters {
        return new getAuditLogsParameters(this, 'GET', '/audit-logs');
    }

    /**
     * Retrieve a list of logged authentication API requests.
     * @method
     * @name platformSDK#getAuditLogsAuthentication
     */
    getAuditLogsAuthentication(): getAuditLogsAuthenticationParameters {
        return new getAuditLogsAuthenticationParameters(this, 'GET', '/audit-logs/authentication');
    }

    /**
     * Retrieve a list of logged common resource and transformations API requests.
     * @method
     * @name platformSDK#getAuditLogsCommonResources
     */
    getAuditLogsCommonResources(): getAuditLogsCommonResourcesParameters {
        return new getAuditLogsCommonResourcesParameters(this, 'GET', '/audit-logs/common-resources');
    }

    /**
     * Retrieve a list of logged common resource and transformations API requests by the name of the common resource.
     * @method
     * @name platformSDK#getAuditLogsCommonResourceByCommonResourceName
     */
    getAuditLogsCommonResourceByCommonResourceName(): getAuditLogsCommonResourceByCommonResourceNameParameters {
        return new getAuditLogsCommonResourceByCommonResourceNameParameters(this, 'GET', '/audit-logs/common-resources/{commonResourceName}');
    }

    /**
     * Retrieve a list of logged element instance API requests.
     * @method
     * @name platformSDK#getAuditLogsElementInstances
     */
    getAuditLogsElementInstances(): getAuditLogsElementInstancesParameters {
        return new getAuditLogsElementInstancesParameters(this, 'GET', '/audit-logs/element-instances');
    }

    /**
     * Retrieve a list of logged element instance API requests by element instance ID.
     * @method
     * @name platformSDK#getAuditLogsElementInstanceByElementInstanceId
     */
    getAuditLogsElementInstanceByElementInstanceId(): getAuditLogsElementInstanceByElementInstanceIdParameters {
        return new getAuditLogsElementInstanceByElementInstanceIdParameters(this, 'GET', '/audit-logs/element-instances/{elementInstanceId}');
    }

    /**
     * Retrieve a list of logged element API requests. Requests include element creation and element extension requests.
     * @method
     * @name platformSDK#getAuditLogsElements
     */
    getAuditLogsElements(): getAuditLogsElementsParameters {
        return new getAuditLogsElementsParameters(this, 'GET', '/audit-logs/elements');
    }

    /**
     * Retrieve a list of logged element API requests by element ID.
     * @method
     * @name platformSDK#getAuditLogsElementByElementId
     */
    getAuditLogsElementByElementId(): getAuditLogsElementByElementIdParameters {
        return new getAuditLogsElementByElementIdParameters(this, 'GET', '/audit-logs/elements/{elementId}');
    }

    /**
     * Retrieve a list of logged formula instance API requests.
     * @method
     * @name platformSDK#getAuditLogsFormulaInstances
     */
    getAuditLogsFormulaInstances(): getAuditLogsFormulaInstancesParameters {
        return new getAuditLogsFormulaInstancesParameters(this, 'GET', '/audit-logs/formula-instances');
    }

    /**
     * Retrieve a list of logged formula template API requests.
     * @method
     * @name platformSDK#getAuditLogsFormulas
     */
    getAuditLogsFormulas(): getAuditLogsFormulasParameters {
        return new getAuditLogsFormulasParameters(this, 'GET', '/audit-logs/formulas');
    }

    /**
     * Retrieve a list of logged formula template API requests by the Entity ID associated with the object affected. Entity IDs include step ids, trigger ids, and configuration ids.
     * @method
     * @name platformSDK#getAuditLogsFormulaByEntityId
     */
    getAuditLogsFormulaByEntityId(): getAuditLogsFormulaByEntityIdParameters {
        return new getAuditLogsFormulaByEntityIdParameters(this, 'GET', '/audit-logs/formulas/{entityId}');
    }

    /**
     * Reset the user's password.
     * @method
     * @name platformSDK#createAuthenticationPassword
     * @param {} passwordReset - The new password.
     */
    createAuthenticationPassword(
        passwordReset:
        PasswordReset_POST

        ,
    ): createAuthenticationPasswordParameters {
        return new createAuthenticationPasswordParameters(this, 'POST', '/authentication/passwords', passwordReset);
    }

    /**
     * Create a new identity provider within a customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#createCustomerIdentityProvider
     * @param {} identityProvider - The identity provider data
     */
    createCustomerIdentityProvider(
        identityProvider:
        IdentityProvider_POST

        ,
    ): createCustomerIdentityProviderParameters {
        return new createCustomerIdentityProviderParameters(this, 'POST', '/customers/identity-providers', identityProvider);
    }

    /**
     * Get all of the identity providers within a customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#getCustomersIdentityProviders
     */
    getCustomersIdentityProviders(): getCustomersIdentityProvidersParameters {
        return new getCustomersIdentityProvidersParameters(this, 'GET', '/customers/identity-providers');
    }

    /**
     * Get a specific identity provider within a customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#getCustomersIdentityProviderById
     * @param {string} id - The ID of the identity provider record
     */
    getCustomersIdentityProviderById(
        id: string

        ,
    ): getCustomersIdentityProviderByIdParameters {
        return new getCustomersIdentityProviderByIdParameters(this, 'GET', '/customers/identity-providers/{id}', id);
    }

    /**
     * Delete an identity provider within a customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#deleteCustomersIdentityProviderById
     * @param {string} id - The ID of the identity provider record
     */
    deleteCustomersIdentityProviderById(
        id: string

        ,
    ): deleteCustomersIdentityProviderByIdParameters {
        return new deleteCustomersIdentityProviderByIdParameters(this, 'DELETE', '/customers/identity-providers/{id}', id);
    }

    /**
     * Get details of the current user's customer.
     * @method
     * @name platformSDK#getCustomersMe
     */
    getCustomersMe(): getCustomersMeParameters {
        return new getCustomersMeParameters(this, 'GET', '/customers/me');
    }

    /**
     * Get all of the organizations for the current user's customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#getCustomersOrganizations
     */
    getCustomersOrganizations(): getCustomersOrganizationsParameters {
        return new getCustomersOrganizationsParameters(this, 'GET', '/customers/organizations');
    }

    /**
     * Get a specific organization within the current user's customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#getCustomersOrganizationById
     * @param {integer} id - The ID of the organization
     */
    getCustomersOrganizationById(
        id: number

        ,
    ): getCustomersOrganizationByIdParameters {
        return new getCustomersOrganizationByIdParameters(this, 'GET', '/customers/organizations/{id}', id);
    }

    /**
     * Delete a specific organization within the current user's customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#deleteCustomersOrganizationById
     * @param {integer} id - The ID of the organization
     */
    deleteCustomersOrganizationById(
        id: number

        ,
    ): deleteCustomersOrganizationByIdParameters {
        return new deleteCustomersOrganizationByIdParameters(this, 'DELETE', '/customers/organizations/{id}', id);
    }

    /**
     * Create a new user within a customer. The organization and account will also be created, if existing IDs are not provided. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#createCustomerSignup
     * @param {} customerSignup - The customer sign up data
     */
    createCustomerSignup(
        customerSignup:
        CustomerSignup_POST

        ,
    ): createCustomerSignupParameters {
        return new createCustomerSignupParameters(this, 'POST', '/customers/signup', customerSignup);
    }

    /**
     * Create a new element.
     * @method
     * @name platformSDK#createElement
     * @param {} element - The element
     */
    createElement(
        element:
        CreateElement

        ,
    ): createElementParameters {
        return new createElementParameters(this, 'POST', '/elements', element);
    }

    /**
     * Retrieve all available elements keys.
     * @method
     * @name platformSDK#getElementsKeys
     */
    getElementsKeys(): getElementsKeysParameters {
        return new getElementsKeysParameters(this, 'GET', '/elements/keys');
    }

    /**
     * Swagger 2.0 schema for the element.
     * @method
     * @name platformSDK#getElementsDocs
     * @param {string} id - The ID of the element
     */
    getElementsDocs(
        id: string

        ,
    ): getElementsDocsParameters {
        return new getElementsDocsParameters(this, 'GET', '/elements/{id}/docs', id);
    }

    /**
     * Retrieve the metadata for the specified element.
     * @method
     * @name platformSDK#getElementsMetadata
     * @param {integer} id - The element ID
     */
    getElementsMetadata(
        id: number

        ,
    ): getElementsMetadataParameters {
        return new getElementsMetadataParameters(this, 'GET', '/elements/{id}/metadata', id);
    }

    /**
     * Delete an element.
     * @method
     * @name platformSDK#deleteElementByKeyOrId
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     */
    deleteElementByKeyOrId(
        keyOrId: string

        ,
    ): deleteElementByKeyOrIdParameters {
        return new deleteElementByKeyOrIdParameters(this, 'DELETE', '/elements/{keyOrId}', keyOrId);
    }

    /**
     * Update an element associated with an element key.
     * @method
     * @name platformSDK#replaceElementByKeyOrId
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {} element - The element
     */
    replaceElementByKeyOrId(
        keyOrId: string

        ,
        element:
        CreateElement

        ,
    ): replaceElementByKeyOrIdParameters {
        return new replaceElementByKeyOrIdParameters(this, 'PUT', '/elements/{keyOrId}', keyOrId, element);
    }

    /**
     * De-activate an element, which will remove it from your elements catalog.
     * @method
     * @name platformSDK#deleteElementsActive
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     */
    deleteElementsActive(
        keyOrId: string

        ,
    ): deleteElementsActiveParameters {
        return new deleteElementsActiveParameters(this, 'DELETE', '/elements/{keyOrId}/active', keyOrId);
    }

    /**
     * Activate an element to publish it in your elements catalog.
     * @method
     * @name platformSDK#replaceElementsActive
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     */
    replaceElementsActive(
        keyOrId: string

        ,
    ): replaceElementsActiveParameters {
        return new replaceElementsActiveParameters(this, 'PUT', '/elements/{keyOrId}/active', keyOrId);
    }

    /**
     * Clone an element
     * @method
     * @name platformSDK#createElementClone
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     */
    createElementClone(
        keyOrId: string

        ,
    ): createElementCloneParameters {
        return new createElementCloneParameters(this, 'POST', '/elements/{keyOrId}/clone', keyOrId);
    }

    /**
     * Retrieve a specific element configuration associated with an element key.  Specifying an element associated with an element key that does not exist results in an error response.
     * @method
     * @name platformSDK#getElementsConfiguration
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     */
    getElementsConfiguration(
        keyOrId: string

        ,
    ): getElementsConfigurationParameters {
        return new getElementsConfigurationParameters(this, 'GET', '/elements/{keyOrId}/configuration', keyOrId);
    }

    /**
     * Create a new configuration value for an element
     * @method
     * @name platformSDK#createElementConfiguration
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {} configuration - The configuration to create
     */
    createElementConfiguration(
        keyOrId: string

        ,
        configuration:
        Configuration

        ,
    ): createElementConfigurationParameters {
        return new createElementConfigurationParameters(this, 'POST', '/elements/{keyOrId}/configuration', keyOrId, configuration);
    }

    /**
     * Delete a configuration value for an element
     * @method
     * @name platformSDK#deleteElementsConfigurationByConfigurationKey
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {string} configurationKey - The configuration key
     */
    deleteElementsConfigurationByConfigurationKey(
        keyOrId: string

        ,
        configurationKey: string

        ,
    ): deleteElementsConfigurationByConfigurationKeyParameters {
        return new deleteElementsConfigurationByConfigurationKeyParameters(this, 'DELETE', '/elements/{keyOrId}/configuration/{configurationKey}', keyOrId, configurationKey);
    }

    /**
     * Update an existing configuration value for an element
     * @method
     * @name platformSDK#replaceElementsConfigurationByConfigurationKey
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {string} configurationKey - The configuration key
     * @param {} configuration - The configuration object
     */
    replaceElementsConfigurationByConfigurationKey(
        keyOrId: string

        ,
        configurationKey: string

        ,
        configuration:
        Configuration

        ,
    ): replaceElementsConfigurationByConfigurationKeyParameters {
        return new replaceElementsConfigurationByConfigurationKeyParameters(this, 'PUT', '/elements/{keyOrId}/configuration/{configurationKey}', keyOrId, configurationKey, configuration);
    }

    /**
     * Downloads a specific element JSON data in a file associated with an element key. Specifying an element associated with an element key that does not exist results in an error response.
     * @method
     * @name platformSDK#getElementsExport
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     */
    getElementsExport(
        keyOrId: string

        ,
    ): getElementsExportParameters {
        return new getElementsExportParameters(this, 'GET', '/elements/{keyOrId}/export', keyOrId);
    }

    /**
     * Retrieve the hooks that exists for a element
     * @method
     * @name platformSDK#getElementsHooks
     * @param {string} keyOrId - The element key
     */
    getElementsHooks(
        keyOrId: string

        ,
    ): getElementsHooksParameters {
        return new getElementsHooksParameters(this, 'GET', '/elements/{keyOrId}/hooks', keyOrId);
    }

    /**
     * Create a new hook for a element
     * @method
     * @name platformSDK#createElementHook
     * @param {string} keyOrId - The element key
     * @param {} model - The element Hook
     */
    createElementHook(
        keyOrId: string

        ,
        model:
        Hook

        ,
    ): createElementHookParameters {
        return new createElementHookParameters(this, 'POST', '/elements/{keyOrId}/hooks', keyOrId, model);
    }

    /**
     * Get an existing hook for an custom element
     * @method
     * @name platformSDK#getElementsHookByHookId
     * @param {string} keyOrId - The element key
     * @param {string} hookId - The Hook ID
     */
    getElementsHookByHookId(
        keyOrId: string

        ,
        hookId: string

        ,
    ): getElementsHookByHookIdParameters {
        return new getElementsHookByHookIdParameters(this, 'GET', '/elements/{keyOrId}/hooks/{hookId}', keyOrId, hookId);
    }

    /**
     * Delete one of the hooks for a element
     * @method
     * @name platformSDK#deleteElementsHookByHookId
     * @param {string} keyOrId - The element key
     * @param {string} hookId - The hook ID
     */
    deleteElementsHookByHookId(
        keyOrId: string

        ,
        hookId: string

        ,
    ): deleteElementsHookByHookIdParameters {
        return new deleteElementsHookByHookIdParameters(this, 'DELETE', '/elements/{keyOrId}/hooks/{hookId}', keyOrId, hookId);
    }

    /**
     * Update an existing Hook for an element
     * @method
     * @name platformSDK#replaceElementsHookByHookId
     * @param {string} keyOrId - The element key
     * @param {string} hookId - The hook ID
     * @param {} parameter - The hook
     */
    replaceElementsHookByHookId(
        keyOrId: string

        ,
        hookId: string

        ,
        parameter:
        Hook

        ,
    ): replaceElementsHookByHookIdParameters {
        return new replaceElementsHookByHookIdParameters(this, 'PUT', '/elements/{keyOrId}/hooks/{hookId}', keyOrId, hookId, parameter);
    }

    /**
     * Retrieve all element instances from a specified path.  The instances go through Cloud Elements to your console.  Specifying an instance that does not exist results in an error response.
     * @method
     * @name platformSDK#getElementsInstances
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     */
    getElementsInstances(
        keyOrId: string

        ,
    ): getElementsInstancesParameters {
        return new getElementsInstancesParameters(this, 'GET', '/elements/{keyOrId}/instances', keyOrId);
    }

    /**
     * Create a new element instance in your console.  Instance creation will flow through Cloud Elements to your console.
     * @method
     * @name platformSDK#createElementInstance
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {} elementInstance - The element instance to create
     */
    createElementInstance(
        keyOrId: string

        ,
        elementInstance:
        ElementInstance

        ,
    ): createElementInstanceParameters {
        return new createElementInstanceParameters(this, 'POST', '/elements/{keyOrId}/instances', keyOrId, elementInstance);
    }

    /**
     * Delete an instance associated with a given ID from your console. Specifying an instance associated with a given ID that does not exist will result in an error message.
     * @method
     * @name platformSDK#deleteElementsInstanceById
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {integer} id - The ID of the element instance
     */
    deleteElementsInstanceById(
        keyOrId: string

        ,
        id: number

        ,
    ): deleteElementsInstanceByIdParameters {
        return new deleteElementsInstanceByIdParameters(this, 'DELETE', '/elements/{keyOrId}/instances/{id}', keyOrId, id);
    }

    /**
     * Retrieve an element instance associated with a given ID from a specified path.  The instance goes through Cloud Elements to your console.  Specifying an instance with an associated ID that does not exist results in an error response.
     * @method
     * @name platformSDK#getElementsInstanceById
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {integer} id - The ID of the element instance
     */
    getElementsInstanceById(
        keyOrId: string

        ,
        id: number

        ,
    ): getElementsInstanceByIdParameters {
        return new getElementsInstanceByIdParameters(this, 'GET', '/elements/{keyOrId}/instances/{id}', keyOrId, id);
    }

    /**
     * Update an instance associated with a given ID from your console.  Specifying an instance associated with an ID that does not exist will result in an error message.
     * @method
     * @name platformSDK#replaceElementsInstanceById
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {integer} id - The ID of the element instance
     * @param {} elementInstance - The fields of the element instance to update
     */
    replaceElementsInstanceById(
        keyOrId: string

        ,
        id: number

        ,
        elementInstance:
        ElementInstance

        ,
    ): replaceElementsInstanceByIdParameters {
        return new replaceElementsInstanceByIdParameters(this, 'PUT', '/elements/{keyOrId}/instances/{id}', keyOrId, id, elementInstance);
    }

    /**
     * Retrieve the OAuth 1 request token.  Not applicable with OAuth 2 Elements.
     * @method
     * @name platformSDK#getElementsOauthToken
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {string} apiKey - The OAuth API key
     * @param {string} apiSecret - The OAuth API secret
     * @param {string} callbackUrl - The OAuth callback URL
     */
    getElementsOauthToken(
        keyOrId: string

        ,
        apiKey: string

        ,
        apiSecret: string

        ,
        callbackUrl: string

        ,
    ): getElementsOauthTokenParameters {
        return new getElementsOauthTokenParameters(this, 'GET', '/elements/{keyOrId}/oauth/token', keyOrId, apiKey, apiSecret, callbackUrl);
    }

    /**
     * Retrieve the OAuth 2 redirect URL associated with the specified element.  Specifying an element key associated with an element that does not exist results in an error response.
     * @method
     * @name platformSDK#getElementsOauthUrl
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {string} apiKey - The OAuth API key
     * @param {string} apiSecret - The OAuth API secret (note: For HubSpot, this is the Portal ID.)
     * @param {string} callbackUrl - The OAuth callback URL
     */
    getElementsOauthUrl(
        keyOrId: string

        ,
        apiKey: string

        ,
        apiSecret: string

        ,
        callbackUrl: string

        ,
    ): getElementsOauthUrlParameters {
        return new getElementsOauthUrlParameters(this, 'GET', '/elements/{keyOrId}/oauth/url', keyOrId, apiKey, apiSecret, callbackUrl);
    }

    /**
     * Retrieve the OAuth 2 redirect URL associated with the specified element.  Specifying an element key associated with an element that does not exist results in an error response.
     * @method
     * @name platformSDK#createElementOauthUrl
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {} oauthInfo - The data for generating the OAuth redirect URL
     */
    createElementOauthUrl(
        keyOrId: string

        ,
        oauthInfo:
        OAuthInfo

        ,
    ): createElementOauthUrlParameters {
        return new createElementOauthUrlParameters(this, 'POST', '/elements/{keyOrId}/oauth/url', keyOrId, oauthInfo);
    }

    /**
     * Retrieve all of the objects that exist for a custom element
     * @method
     * @name platformSDK#getElementsObjects
     * @param {string} keyOrId - The element key
     */
    getElementsObjects(
        keyOrId: string

        ,
    ): getElementsObjectsParameters {
        return new getElementsObjectsParameters(this, 'GET', '/elements/{keyOrId}/objects', keyOrId);
    }

    /**
     * Create a new object for a element
     * @method
     * @name platformSDK#createElementObject
     * @param {string} keyOrId - The element key
     * @param {} object - The Object
     */
    createElementObject(
        keyOrId: string

        ,
        object:
        Object

        ,
    ): createElementObjectParameters {
        return new createElementObjectParameters(this, 'POST', '/elements/{keyOrId}/objects', keyOrId, object);
    }

    /**
     * Delete a object for a custom element
     * @method
     * @name platformSDK#deleteElementsObjectById
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     */
    deleteElementsObjectById(
        keyOrId: string

        ,
        id: string

        ,
    ): deleteElementsObjectByIdParameters {
        return new deleteElementsObjectByIdParameters(this, 'DELETE', '/elements/{keyOrId}/objects/{id}', keyOrId, id);
    }

    /**
     * Update an existing object for an element
     * @method
     * @name platformSDK#replaceElementsObjectById
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     * @param {} object - The Object
     */
    replaceElementsObjectById(
        keyOrId: string

        ,
        id: string

        ,
        object:
        Object

        ,
    ): replaceElementsObjectByIdParameters {
        return new replaceElementsObjectByIdParameters(this, 'PUT', '/elements/{keyOrId}/objects/{id}', keyOrId, id, object);
    }

    /**
     * Get an existing object for an element
     * @method
     * @name platformSDK#getElementsObjectById
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     */
    getElementsObjectById(
        keyOrId: string

        ,
        id: string

        ,
    ): getElementsObjectByIdParameters {
        return new getElementsObjectByIdParameters(this, 'GET', '/elements/{keyOrId}/objects/{id}', keyOrId, id);
    }

    /**
     * Create a Field for an element Object
     * @method
     * @name platformSDK#createElementObjectField
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     * @param {} field - The Field
     */
    createElementObjectField(
        keyOrId: string

        ,
        id: string

        ,
        field:
        Field

        ,
    ): createElementObjectFieldParameters {
        return new createElementObjectFieldParameters(this, 'POST', '/elements/{keyOrId}/objects/{id}/fields', keyOrId, id, field);
    }

    /**
     * Retrieve all of the fields that exist for a element object
     * @method
     * @name platformSDK#getElementsObjectsFields
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     */
    getElementsObjectsFields(
        keyOrId: string

        ,
        id: string

        ,
    ): getElementsObjectsFieldsParameters {
        return new getElementsObjectsFieldsParameters(this, 'GET', '/elements/{keyOrId}/objects/{id}/fields', keyOrId, id);
    }

    /**
     * Delete a field for an element object
     * @method
     * @name platformSDK#deleteElementsObjectsFieldByFieldId
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     * @param {string} fieldId - The Field Id
     */
    deleteElementsObjectsFieldByFieldId(
        keyOrId: string

        ,
        id: string

        ,
        fieldId: string

        ,
    ): deleteElementsObjectsFieldByFieldIdParameters {
        return new deleteElementsObjectsFieldByFieldIdParameters(this, 'DELETE', '/elements/{keyOrId}/objects/{id}/fields/{fieldId}', keyOrId, id, fieldId);
    }

    /**
     * Update an existing field for an element object
     * @method
     * @name platformSDK#replaceElementsObjectsFieldByFieldId
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     * @param {string} fieldId - The Field Id
     * @param {} object - The Field
     */
    replaceElementsObjectsFieldByFieldId(
        keyOrId: string

        ,
        id: string

        ,
        fieldId: string

        ,
        object:
        Field

        ,
    ): replaceElementsObjectsFieldByFieldIdParameters {
        return new replaceElementsObjectsFieldByFieldIdParameters(this, 'PUT', '/elements/{keyOrId}/objects/{id}/fields/{fieldId}', keyOrId, id, fieldId, object);
    }

    /**
     * Get an existing field for an element object
     * @method
     * @name platformSDK#getElementsObjectsFieldByFieldId
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     * @param {string} fieldId - The Field Id
     */
    getElementsObjectsFieldByFieldId(
        keyOrId: string

        ,
        id: string

        ,
        fieldId: string

        ,
    ): getElementsObjectsFieldByFieldIdParameters {
        return new getElementsObjectsFieldByFieldIdParameters(this, 'GET', '/elements/{keyOrId}/objects/{id}/fields/{fieldId}', keyOrId, id, fieldId);
    }

    /**
     * Retrieve all of the default parameters for an element
     * @method
     * @name platformSDK#getElementsParameters
     * @param {string} keyOrId - The element key
     */
    getElementsParameters(
        keyOrId: string

        ,
    ): getElementsParametersParameters {
        return new getElementsParametersParameters(this, 'GET', '/elements/{keyOrId}/parameters', keyOrId);
    }

    /**
     * Create a new default parameter for an element
     * @method
     * @name platformSDK#createElementParameter
     * @param {string} keyOrId - The element key
     * @param {} parameter - The default parameter
     */
    createElementParameter(
        keyOrId: string

        ,
        parameter:
        DefaultParameter

        ,
    ): createElementParameterParameters {
        return new createElementParameterParameters(this, 'POST', '/elements/{keyOrId}/parameters', keyOrId, parameter);
    }

    /**
     * Delete a default parameter for an element
     * @method
     * @name platformSDK#deleteElementsParameterById
     * @param {string} keyOrId - The element key
     * @param {string} id - The ID of the parameter
     * @param {} parameter - The default parameter
     */
    deleteElementsParameterById(
        keyOrId: string

        ,
        id: string

        ,
        parameter:
        DefaultParameter

        ,
    ): deleteElementsParameterByIdParameters {
        return new deleteElementsParameterByIdParameters(this, 'DELETE', '/elements/{keyOrId}/parameters/{id}', keyOrId, id, parameter);
    }

    /**
     * Update a default parameter for an element
     * @method
     * @name platformSDK#replaceElementsParameterById
     * @param {string} keyOrId - The element key
     * @param {string} id - The ID of the parameter
     * @param {} parameter - The default parameter
     */
    replaceElementsParameterById(
        keyOrId: string

        ,
        id: string

        ,
        parameter:
        DefaultParameter

        ,
    ): replaceElementsParameterByIdParameters {
        return new replaceElementsParameterByIdParameters(this, 'PUT', '/elements/{keyOrId}/parameters/{id}', keyOrId, id, parameter);
    }

    /**
     * Retrieve all of the resources that exist for a custom element
     * @method
     * @name platformSDK#getElementsResources
     * @param {string} keyOrId - The element key
     */
    getElementsResources(
        keyOrId: string

        ,
    ): getElementsResourcesParameters {
        return new getElementsResourcesParameters(this, 'GET', '/elements/{keyOrId}/resources', keyOrId);
    }

    /**
     * Create a new resource for a custom element
     * @method
     * @name platformSDK#createElementResource
     * @param {string} keyOrId - The element key
     * @param {} resource - The resource
     */
    createElementResource(
        keyOrId: string

        ,
        resource:
        Resource

        ,
    ): createElementResourceParameters {
        return new createElementResourceParameters(this, 'POST', '/elements/{keyOrId}/resources', keyOrId, resource);
    }

    /**
     * Delete a resource for a custom element
     * @method
     * @name platformSDK#deleteElementsResourceById
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     */
    deleteElementsResourceById(
        keyOrId: string

        ,
        id: string

        ,
    ): deleteElementsResourceByIdParameters {
        return new deleteElementsResourceByIdParameters(this, 'DELETE', '/elements/{keyOrId}/resources/{id}', keyOrId, id);
    }

    /**
     * Update an existing resource for an element
     * @method
     * @name platformSDK#replaceElementsResourceById
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {} resource - The resource
     */
    replaceElementsResourceById(
        keyOrId: string

        ,
        id: string

        ,
        resource:
        Resource

        ,
    ): replaceElementsResourceByIdParameters {
        return new replaceElementsResourceByIdParameters(this, 'PUT', '/elements/{keyOrId}/resources/{id}', keyOrId, id, resource);
    }

    /**
     * Get an existing resource for an element
     * @method
     * @name platformSDK#getElementsResourceById
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     */
    getElementsResourceById(
        keyOrId: string

        ,
        id: string

        ,
    ): getElementsResourceByIdParameters {
        return new getElementsResourceByIdParameters(this, 'GET', '/elements/{keyOrId}/resources/{id}', keyOrId, id);
    }

    /**
     * Retrieve the hooks that exists for a custom element's resource
     * @method
     * @name platformSDK#getElementsResourcesHooks
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     */
    getElementsResourcesHooks(
        keyOrId: string

        ,
        id: string

        ,
    ): getElementsResourcesHooksParameters {
        return new getElementsResourcesHooksParameters(this, 'GET', '/elements/{keyOrId}/resources/{id}/hooks', keyOrId, id);
    }

    /**
     * Create a new hook for a custom element's resource
     * @method
     * @name platformSDK#createElementResourceHook
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {} model - The resource Hook
     */
    createElementResourceHook(
        keyOrId: string

        ,
        id: string

        ,
        model:
        Hook

        ,
    ): createElementResourceHookParameters {
        return new createElementResourceHookParameters(this, 'POST', '/elements/{keyOrId}/resources/{id}/hooks', keyOrId, id, model);
    }

    /**
     * Get an existing hook for an custom element's resource
     * @method
     * @name platformSDK#getElementsResourcesHookByHookId
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {string} hookId - The Hook ID
     */
    getElementsResourcesHookByHookId(
        keyOrId: string

        ,
        id: string

        ,
        hookId: string

        ,
    ): getElementsResourcesHookByHookIdParameters {
        return new getElementsResourcesHookByHookIdParameters(this, 'GET', '/elements/{keyOrId}/resources/{id}/hooks/{hookId}', keyOrId, id, hookId);
    }

    /**
     * Delete one of the hooks for a custom element's resource
     * @method
     * @name platformSDK#deleteElementsResourcesHookByHookId
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {string} hookId - The hook ID
     */
    deleteElementsResourcesHookByHookId(
        keyOrId: string

        ,
        id: string

        ,
        hookId: string

        ,
    ): deleteElementsResourcesHookByHookIdParameters {
        return new deleteElementsResourcesHookByHookIdParameters(this, 'DELETE', '/elements/{keyOrId}/resources/{id}/hooks/{hookId}', keyOrId, id, hookId);
    }

    /**
     * Update an existing Hook for an element's resource
     * @method
     * @name platformSDK#replaceElementsResourcesHookByHookId
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {string} hookId - The hook ID
     * @param {} parameter - The hook
     */
    replaceElementsResourcesHookByHookId(
        keyOrId: string

        ,
        id: string

        ,
        hookId: string

        ,
        parameter:
        Hook

        ,
    ): replaceElementsResourcesHookByHookIdParameters {
        return new replaceElementsResourcesHookByHookIdParameters(this, 'PUT', '/elements/{keyOrId}/resources/{id}/hooks/{hookId}', keyOrId, id, hookId, parameter);
    }

    /**
     * Delete the model for this custom element's resource
     * @method
     * @name platformSDK#deleteElementsResourcesModels
     * @param {string} keyOrId - The element key
     * @param {integer} id - The resource ID
     */
    deleteElementsResourcesModels(
        keyOrId: string

        ,
        id: number

        ,
    ): deleteElementsResourcesModelsParameters {
        return new deleteElementsResourcesModelsParameters(this, 'DELETE', '/elements/{keyOrId}/resources/{id}/models', keyOrId, id);
    }

    /**
     * Retrieve the models that exists for a custom element's resource
     * @method
     * @name platformSDK#getElementsResourcesModels
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     */
    getElementsResourcesModels(
        keyOrId: string

        ,
        id: string

        ,
    ): getElementsResourcesModelsParameters {
        return new getElementsResourcesModelsParameters(this, 'GET', '/elements/{keyOrId}/resources/{id}/models', keyOrId, id);
    }

    /**
     * Create a new model for a custom element's resource
     * @method
     * @name platformSDK#createElementResourceModel
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {} model - The model
     */
    createElementResourceModel(
        keyOrId: string

        ,
        id: string

        ,
        model:
        Model

        ,
    ): createElementResourceModelParameters {
        return new createElementResourceModelParameters(this, 'POST', '/elements/{keyOrId}/resources/{id}/models', keyOrId, id, model);
    }

    /**
     * Retrieve all of the parameters for a resource
     * @method
     * @name platformSDK#getElementsResourcesParameters
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     */
    getElementsResourcesParameters(
        keyOrId: string

        ,
        id: string

        ,
    ): getElementsResourcesParametersParameters {
        return new getElementsResourcesParametersParameters(this, 'GET', '/elements/{keyOrId}/resources/{id}/parameters', keyOrId, id);
    }

    /**
     * Create a new parameter for a custom element's resource
     * @method
     * @name platformSDK#createElementResourceParameter
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {} parameter - The parameter
     */
    createElementResourceParameter(
        keyOrId: string

        ,
        id: string

        ,
        parameter:
        Parameter

        ,
    ): createElementResourceParameterParameters {
        return new createElementResourceParameterParameters(this, 'POST', '/elements/{keyOrId}/resources/{id}/parameters', keyOrId, id, parameter);
    }

    /**
     * Delete one of the parameters for a custom element's resource
     * @method
     * @name platformSDK#deleteElementsResourcesParameterByParameterId
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {string} parameterId - The parameter ID
     */
    deleteElementsResourcesParameterByParameterId(
        keyOrId: string

        ,
        id: string

        ,
        parameterId: string

        ,
    ): deleteElementsResourcesParameterByParameterIdParameters {
        return new deleteElementsResourcesParameterByParameterIdParameters(this, 'DELETE', '/elements/{keyOrId}/resources/{id}/parameters/{parameterId}', keyOrId, id, parameterId);
    }

    /**
     * Update an existing parameters for an element's resource
     * @method
     * @name platformSDK#replaceElementsResourcesParameterByParameterId
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {string} parameterId - The parameter ID
     * @param {} parameter - The parameter
     */
    replaceElementsResourcesParameterByParameterId(
        keyOrId: string

        ,
        id: string

        ,
        parameterId: string

        ,
        parameter:
        Parameter

        ,
    ): replaceElementsResourcesParameterByParameterIdParameters {
        return new replaceElementsResourcesParameterByParameterIdParameters(this, 'PUT', '/elements/{keyOrId}/resources/{id}/parameters/{parameterId}', keyOrId, id, parameterId, parameter);
    }

    /**
     * Retrieve a list of all formula templates.
     * @method
     * @name platformSDK#getFormulas
     */
    getFormulas(): getFormulasParameters {
        return new getFormulasParameters(this, 'GET', '/formulas');
    }

    /**
     * Create a new formula template.
     * @method
     * @name platformSDK#createFormula
     * @param {} body - The formula template.
     */
    createFormula(
        body:
        CreateFormula

        ,
    ): createFormulaParameters {
        return new createFormulaParameters(this, 'POST', '/formulas', body);
    }

    /**
     * Retrieve the number of formula executions within a given date/time range
     * @method
     * @name platformSDK#getFormulasAnalytics
     */
    getFormulasAnalytics(): getFormulasAnalyticsParameters {
        return new getFormulasAnalyticsParameters(this, 'GET', '/formulas/analytics');
    }

    /**
     * Retrieve the status analytics of formula step executions within a given date/time range, aggregated by account ID. This API is really only useful for organization admins where more than one account exists.
     * @method
     * @name platformSDK#getFormulasAnalyticsAccounts
     */
    getFormulasAnalyticsAccounts(): getFormulasAnalyticsAccountsParameters {
        return new getFormulasAnalyticsAccountsParameters(this, 'GET', '/formulas/analytics/accounts');
    }

    /**
     * Retrieve the status analytics of formula step executions within a given date/time range, aggregated by formula instance ID.
     * @method
     * @name platformSDK#getFormulasAnalyticsInstances
     */
    getFormulasAnalyticsInstances(): getFormulasAnalyticsInstancesParameters {
        return new getFormulasAnalyticsInstancesParameters(this, 'GET', '/formulas/analytics/instances');
    }

    /**
     * Retrieve the status analytics of formula executions within a given date/time range
     * @method
     * @name platformSDK#getFormulasAnalyticsStatuses
     */
    getFormulasAnalyticsStatuses(): getFormulasAnalyticsStatusesParameters {
        return new getFormulasAnalyticsStatusesParameters(this, 'GET', '/formulas/analytics/statuses');
    }

    /**
     * Retrieve the current status counts of formula executions. If any executions are in a 'retry' status, a list of those execution IDs will be returned, along with the retry attempt that will be executed next.
     * @method
     * @name platformSDK#getFormulasAnalyticsStatusesNow
     */
    getFormulasAnalyticsStatusesNow(): getFormulasAnalyticsStatusesNowParameters {
        return new getFormulasAnalyticsStatusesNowParameters(this, 'GET', '/formulas/analytics/statuses/now');
    }

    /**
     * Retrieve the analytics (execution time, execution delay, etc.) of formula step executions within a given date/time range
     * @method
     * @name platformSDK#getFormulasAnalyticsSteps
     */
    getFormulasAnalyticsSteps(): getFormulasAnalyticsStepsParameters {
        return new getFormulasAnalyticsStepsParameters(this, 'GET', '/formulas/analytics/steps');
    }

    /**
     * Retrieve all instances of all formula templates.
     * @method
     * @name platformSDK#getFormulasInstances
     */
    getFormulasInstances(): getFormulasInstancesParameters {
        return new getFormulasInstancesParameters(this, 'GET', '/formulas/instances');
    }

    /**
     * Retrieve all step execution values for a formula step execution.
     * @method
     * @name platformSDK#getFormulasInstancesExecutionsStepsValues
     * @param {integer} stepExecutionId - The ID of the step execution.
     */
    getFormulasInstancesExecutionsStepsValues(
        stepExecutionId: number

        ,
    ): getFormulasInstancesExecutionsStepsValuesParameters {
        return new getFormulasInstancesExecutionsStepsValuesParameters(this, 'GET', '/formulas/instances/executions/steps/{stepExecutionId}/values', stepExecutionId);
    }

    /**
     * Retrieve a formula instance executions.
     * @method
     * @name platformSDK#getFormulasInstancesExecutionByExecutionId
     * @param {integer} executionId - The ID of the formula instance execution.
     */
    getFormulasInstancesExecutionByExecutionId(
        executionId: number

        ,
    ): getFormulasInstancesExecutionByExecutionIdParameters {
        return new getFormulasInstancesExecutionByExecutionIdParameters(this, 'GET', '/formulas/instances/executions/{executionId}', executionId);
    }

    /**
     * Cancel a formula instance execution
     * @method
     * @name platformSDK#updateFormulasInstancesExecutionByExecutionId
     * @param {integer} executionId - The ID of the formula instance execution.
     * @param {} status - The change in status you want to effect, currently only 'cancel' is supported
     */
    updateFormulasInstancesExecutionByExecutionId(
        executionId: number

        ,
        status:
        FormulaInstanceStatus

        ,
    ): updateFormulasInstancesExecutionByExecutionIdParameters {
        return new updateFormulasInstancesExecutionByExecutionIdParameters(this, 'PATCH', '/formulas/instances/executions/{executionId}', executionId, status);
    }

    /**
     * Retrieve all step execution errors for a formula execution.
     * @method
     * @name platformSDK#getFormulasInstancesExecutionsErrors
     * @param {integer} executionId - The ID of the execution.
     */
    getFormulasInstancesExecutionsErrors(
        executionId: number

        ,
    ): getFormulasInstancesExecutionsErrorsParameters {
        return new getFormulasInstancesExecutionsErrorsParameters(this, 'GET', '/formulas/instances/executions/{executionId}/errors', executionId);
    }

    /**
     * Retrieve all step executions for a formula execution.
     * @method
     * @name platformSDK#getFormulasInstancesExecutionsSteps
     * @param {integer} executionId - The ID of the execution.
     */
    getFormulasInstancesExecutionsSteps(
        executionId: number

        ,
    ): getFormulasInstancesExecutionsStepsParameters {
        return new getFormulasInstancesExecutionsStepsParameters(this, 'GET', '/formulas/instances/executions/{executionId}/steps', executionId);
    }

    /**
     * Retrieve a formula instance.
     * @method
     * @name platformSDK#getFormulasInstanceByInstanceId
     * @param {integer} instanceId - The ID of the formula instance.
     */
    getFormulasInstanceByInstanceId(
        instanceId: number

        ,
    ): getFormulasInstanceByInstanceIdParameters {
        return new getFormulasInstanceByInstanceIdParameters(this, 'GET', '/formulas/instances/{instanceId}', instanceId);
    }

    /**
     * Retrieve all executions for a formula instance.
     * @method
     * @name platformSDK#getFormulasInstancesExecutions
     * @param {integer} instanceId - The ID of the formula instance.
     */
    getFormulasInstancesExecutions(
        instanceId: number

        ,
    ): getFormulasInstancesExecutionsParameters {
        return new getFormulasInstancesExecutionsParameters(this, 'GET', '/formulas/instances/{instanceId}/executions', instanceId);
    }

    /**
     * Manually kickoff a formula instance from the given JSON trigger payload
     * @method
     * @name platformSDK#createFormulaInstanceExecution
     * @param {integer} instanceId - The ID of the formula instance.
     */
    createFormulaInstanceExecution(
        instanceId: number

        ,
    ): createFormulaInstanceExecutionParameters {
        return new createFormulaInstanceExecutionParameters(this, 'POST', '/formulas/instances/{instanceId}/executions', instanceId);
    }

    /**
     * Retrieve all executions that have a step execution error, for a formula instance.
     * @method
     * @name platformSDK#getFormulasInstancesExecutionsErrors2
     * @param {integer} instanceId - The ID of the formula instance.
     */
    getFormulasInstancesExecutionsErrors2(
        instanceId: number

        ,
    ): getFormulasInstancesExecutionsErrors2Parameters {
        return new getFormulasInstancesExecutionsErrors2Parameters(this, 'GET', '/formulas/instances/{instanceId}/executions/errors', instanceId);
    }

    /**
     * Retrieve all executions with a step execution error for all formula instances of a formula.
     * @method
     * @name platformSDK#getFormulasInstancesExecutionsErrors2_1
     * @param {integer} formulaId - The ID of the formula.
     */
    getFormulasInstancesExecutionsErrors2_1(
        formulaId: number

        ,
    ): getFormulasInstancesExecutionsErrors2_1Parameters {
        return new getFormulasInstancesExecutionsErrors2_1Parameters(this, 'GET', '/formulas/{formulaId}/instances/executions/errors', formulaId);
    }

    /**
     * Delete a specific formula template.
     * @method
     * @name platformSDK#deleteFormulaById
     * @param {integer} id - The ID of the formula template.
     */
    deleteFormulaById(
        id: number

        ,
    ): deleteFormulaByIdParameters {
        return new deleteFormulaByIdParameters(this, 'DELETE', '/formulas/{id}', id);
    }

    /**
     * Retrieve a specific formula template.
     * @method
     * @name platformSDK#getFormulaById
     * @param {integer} id - The ID of the formula template.
     */
    getFormulaById(
        id: number

        ,
    ): getFormulaByIdParameters {
        return new getFormulaByIdParameters(this, 'GET', '/formulas/{id}', id);
    }

    /**
     * Replace a specific formula template with the provided template.
     * @method
     * @name platformSDK#replaceFormulaById
     * @param {integer} id - The ID of the formula template.
     * @param {} formula - The formula template.
     */
    replaceFormulaById(
        id: number

        ,
        formula:
        UpdateFormula

        ,
    ): replaceFormulaByIdParameters {
        return new replaceFormulaByIdParameters(this, 'PUT', '/formulas/{id}', id, formula);
    }

    /**
     * Partially update a formula template's metadata.
     * @method
     * @name platformSDK#updateFormulaById
     * @param {integer} id - The ID of the formula template.
     * @param {} formula - The formula template.
     */
    updateFormulaById(
        id: number

        ,
        formula:
        PartialUpdateFormula

        ,
    ): updateFormulaByIdParameters {
        return new updateFormulaByIdParameters(this, 'PATCH', '/formulas/{id}', id, formula);
    }

    /**
     * Create a new formula configuration.
     * @method
     * @name platformSDK#createFormulaConfiguration
     * @param {integer} id - The ID of the formula template.
     * @param {} configuration - The formula configuration.
     */
    createFormulaConfiguration(
        id: number

        ,
        configuration:
        CreateConfiguration

        ,
    ): createFormulaConfigurationParameters {
        return new createFormulaConfigurationParameters(this, 'POST', '/formulas/{id}/configuration', id, configuration);
    }

    /**
     * Delete a formula configuration.
     * @method
     * @name platformSDK#deleteFormulasConfigurationByConfigurationId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} configurationId - The ID of the formula configuration.
     */
    deleteFormulasConfigurationByConfigurationId(
        id: number

        ,
        configurationId: number

        ,
    ): deleteFormulasConfigurationByConfigurationIdParameters {
        return new deleteFormulasConfigurationByConfigurationIdParameters(this, 'DELETE', '/formulas/{id}/configuration/{configurationId}', id, configurationId);
    }

    /**
     * Retrieve a formula configuration.
     * @method
     * @name platformSDK#getFormulasConfigurationByConfigurationId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} configurationId - The ID of the formula configuration.
     */
    getFormulasConfigurationByConfigurationId(
        id: number

        ,
        configurationId: number

        ,
    ): getFormulasConfigurationByConfigurationIdParameters {
        return new getFormulasConfigurationByConfigurationIdParameters(this, 'GET', '/formulas/{id}/configuration/{configurationId}', id, configurationId);
    }

    /**
     * Update a formula configuration.
     * @method
     * @name platformSDK#replaceFormulasConfigurationByConfigurationId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} configurationId - The ID of the formula configuration.
     * @param {} configuration - The formula configuration.
     */
    replaceFormulasConfigurationByConfigurationId(
        id: number

        ,
        configurationId: number

        ,
        configuration:
        CreateConfiguration

        ,
    ): replaceFormulasConfigurationByConfigurationIdParameters {
        return new replaceFormulasConfigurationByConfigurationIdParameters(this, 'PUT', '/formulas/{id}/configuration/{configurationId}', id, configurationId, configuration);
    }

    /**
     * Export a formula template as a JSON file.
     * @method
     * @name platformSDK#getFormulasExport
     * @param {integer} id - The ID of the formula template.
     */
    getFormulasExport(
        id: number

        ,
    ): getFormulasExportParameters {
        return new getFormulasExportParameters(this, 'GET', '/formulas/{id}/export', id);
    }

    /**
     * Retrieve a list of all instances associated with a particular formula template.
     * @method
     * @name platformSDK#getFormulasInstances2
     * @param {integer} id - The ID of the formula template.
     */
    getFormulasInstances2(
        id: number

        ,
    ): getFormulasInstances2Parameters {
        return new getFormulasInstances2Parameters(this, 'GET', '/formulas/{id}/instances', id);
    }

    /**
     * Create an instance of a formula template.
     * @method
     * @name platformSDK#createFormulaInstance
     * @param {integer} id - The ID of the formula template.
     * @param {} formulaInstance - The formula instance.
     */
    createFormulaInstance(
        id: number

        ,
        formulaInstance:
        CreateFormulaInstance

        ,
    ): createFormulaInstanceParameters {
        return new createFormulaInstanceParameters(this, 'POST', '/formulas/{id}/instances', id, formulaInstance);
    }

    /**
     * Delete a specific formula instance of a specific formula template.
     * @method
     * @name platformSDK#deleteFormulasInstanceByInstanceId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} instanceId - The ID of the formula instance.
     */
    deleteFormulasInstanceByInstanceId(
        id: number

        ,
        instanceId: number

        ,
    ): deleteFormulasInstanceByInstanceIdParameters {
        return new deleteFormulasInstanceByInstanceIdParameters(this, 'DELETE', '/formulas/{id}/instances/{instanceId}', id, instanceId);
    }

    /**
     * Retrieve a specific instance of a specific formula template.
     * @method
     * @name platformSDK#getFormulasInstanceByInstanceId2
     * @param {integer} id - The ID of the formula template.
     * @param {integer} instanceId - The ID of the formula instance.
     */
    getFormulasInstanceByInstanceId2(
        id: number

        ,
        instanceId: number

        ,
    ): getFormulasInstanceByInstanceId2Parameters {
        return new getFormulasInstanceByInstanceId2Parameters(this, 'GET', '/formulas/{id}/instances/{instanceId}', id, instanceId);
    }

    /**
     * Replace a specific formula instance of a specific formula template with the provided instance.
     * @method
     * @name platformSDK#replaceFormulasInstanceByInstanceId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} instanceId - The ID of the formula instance.
     * @param {} formulaInstance - The formula instance.
     */
    replaceFormulasInstanceByInstanceId(
        id: number

        ,
        instanceId: number

        ,
        formulaInstance:
        CreateFormulaInstance

        ,
    ): replaceFormulasInstanceByInstanceIdParameters {
        return new replaceFormulasInstanceByInstanceIdParameters(this, 'PUT', '/formulas/{id}/instances/{instanceId}', id, instanceId, formulaInstance);
    }

    /**
     * Activate a formula instance.
     * @method
     * @name platformSDK#replaceFormulasInstancesActive
     * @param {integer} id - The ID of the formula template.
     * @param {integer} instanceId - The ID of the formula instance.
     */
    replaceFormulasInstancesActive(
        id: number

        ,
        instanceId: number

        ,
    ): replaceFormulasInstancesActiveParameters {
        return new replaceFormulasInstancesActiveParameters(this, 'PUT', '/formulas/{id}/instances/{instanceId}/active', id, instanceId);
    }

    /**
     * Deactivate a formula instance.
     * @method
     * @name platformSDK#deleteFormulasInstancesActive
     * @param {integer} id - The ID of the formula template.
     * @param {integer} instanceId - The ID of the formula instance.
     */
    deleteFormulasInstancesActive(
        id: number

        ,
        instanceId: number

        ,
    ): deleteFormulasInstancesActiveParameters {
        return new deleteFormulasInstancesActiveParameters(this, 'DELETE', '/formulas/{id}/instances/{instanceId}/active', id, instanceId);
    }

    /**
     * Retrieve the executions of a specific formula instance of a specific formula template.
     * @method
     * @name platformSDK#getFormulasInstancesExecutions2
     * @param {integer} id - The ID of the formula template.
     * @param {integer} instanceId - The ID of the formula instance.
     */
    getFormulasInstancesExecutions2(
        id: number

        ,
        instanceId: number

        ,
    ): getFormulasInstancesExecutions2Parameters {
        return new getFormulasInstancesExecutions2Parameters(this, 'GET', '/formulas/{id}/instances/{instanceId}/executions', id, instanceId);
    }

    /**
     * Retrieve all formula steps.
     * @method
     * @name platformSDK#getFormulasSteps
     * @param {integer} id - The ID of the formula template.
     */
    getFormulasSteps(
        id: number

        ,
    ): getFormulasStepsParameters {
        return new getFormulasStepsParameters(this, 'GET', '/formulas/{id}/steps', id);
    }

    /**
     * Create a new formula step.
     * @method
     * @name platformSDK#createFormulaStep
     * @param {integer} id - The ID of the formula template.
     * @param {} step - The formula step.
     */
    createFormulaStep(
        id: number

        ,
        step:
        CreateStep

        ,
    ): createFormulaStepParameters {
        return new createFormulaStepParameters(this, 'POST', '/formulas/{id}/steps', id, step);
    }

    /**
     * Delete a formula step.
     * @method
     * @name platformSDK#deleteFormulasStepByStepId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} stepId - The ID of the formula step.
     */
    deleteFormulasStepByStepId(
        id: number

        ,
        stepId: number

        ,
    ): deleteFormulasStepByStepIdParameters {
        return new deleteFormulasStepByStepIdParameters(this, 'DELETE', '/formulas/{id}/steps/{stepId}', id, stepId);
    }

    /**
     * Retrieve a formula step.
     * @method
     * @name platformSDK#getFormulasStepByStepId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} stepId - The ID of the formula step.
     */
    getFormulasStepByStepId(
        id: number

        ,
        stepId: number

        ,
    ): getFormulasStepByStepIdParameters {
        return new getFormulasStepByStepIdParameters(this, 'GET', '/formulas/{id}/steps/{stepId}', id, stepId);
    }

    /**
     * Update a formula step.
     * @method
     * @name platformSDK#replaceFormulasStepByStepId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} stepId - The ID of the formula step.
     * @param {} step - The formula step.
     */
    replaceFormulasStepByStepId(
        id: number

        ,
        stepId: number

        ,
        step:
        CreateStep

        ,
    ): replaceFormulasStepByStepIdParameters {
        return new replaceFormulasStepByStepIdParameters(this, 'PUT', '/formulas/{id}/steps/{stepId}', id, stepId, step);
    }

    /**
     * Create a new formula trigger.
     * @method
     * @name platformSDK#createFormulaTrigger
     * @param {integer} id - The ID of the formula template.
     * @param {} trigger - The formula trigger.
     */
    createFormulaTrigger(
        id: number

        ,
        trigger:
        CreateTrigger

        ,
    ): createFormulaTriggerParameters {
        return new createFormulaTriggerParameters(this, 'POST', '/formulas/{id}/triggers', id, trigger);
    }

    /**
     * Delete a formula trigger.
     * @method
     * @name platformSDK#deleteFormulasTriggerByTriggerId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} triggerId - The ID of the formula trigger.
     */
    deleteFormulasTriggerByTriggerId(
        id: number

        ,
        triggerId: number

        ,
    ): deleteFormulasTriggerByTriggerIdParameters {
        return new deleteFormulasTriggerByTriggerIdParameters(this, 'DELETE', '/formulas/{id}/triggers/{triggerId}', id, triggerId);
    }

    /**
     * Retrieve a formula trigger.
     * @method
     * @name platformSDK#getFormulasTriggerByTriggerId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} triggerId - The ID of the formula trigger.
     */
    getFormulasTriggerByTriggerId(
        id: number

        ,
        triggerId: number

        ,
    ): getFormulasTriggerByTriggerIdParameters {
        return new getFormulasTriggerByTriggerIdParameters(this, 'GET', '/formulas/{id}/triggers/{triggerId}', id, triggerId);
    }

    /**
     * Update a formula trigger.
     * @method
     * @name platformSDK#replaceFormulasTriggerByTriggerId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} triggerId - The ID of the formula trigger.
     * @param {} trigger - The formula trigger.
     */
    replaceFormulasTriggerByTriggerId(
        id: number

        ,
        triggerId: number

        ,
        trigger:
        CreateTrigger

        ,
    ): replaceFormulasTriggerByTriggerIdParameters {
        return new replaceFormulasTriggerByTriggerIdParameters(this, 'PUT', '/formulas/{id}/triggers/{triggerId}', id, triggerId, trigger);
    }

    /**
     * Retrieve all available element hubs.
     * @method
     * @name platformSDK#getHubs
     */
    getHubs(): getHubsParameters {
        return new getHubsParameters(this, 'GET', '/hubs');
    }

    /**
     * Create a new hub.
     * @method
     * @name platformSDK#createHub
     * @param {} hub - The hub
     */
    createHub(
        hub:
        Hub

        ,
    ): createHubParameters {
        return new createHubParameters(this, 'POST', '/hubs', hub);
    }

    /**
     * Retrieve all available element hub keys.
     * @method
     * @name platformSDK#getHubsKeys
     */
    getHubsKeys(): getHubsKeysParameters {
        return new getHubsKeysParameters(this, 'GET', '/hubs/keys');
    }

    /**
     * Delete a hub.
     * @method
     * @name platformSDK#deleteHubByKey
     * @param {string} key - The elements hub key (i.e. 'documents', 'crm', etc.)
     */
    deleteHubByKey(
        key: string

        ,
    ): deleteHubByKeyParameters {
        return new deleteHubByKeyParameters(this, 'DELETE', '/hubs/{key}', key);
    }

    /**
     * Retrieve the details about a specific hub.
     * @method
     * @name platformSDK#getHubByKey
     * @param {string} key - The elements hub key (i.e. 'documents', 'crm', etc.)
     */
    getHubByKey(
        key: string

        ,
    ): getHubByKeyParameters {
        return new getHubByKeyParameters(this, 'GET', '/hubs/{key}', key);
    }

    /**
     * Retrieve all available elements for a specific hub.
     * @method
     * @name platformSDK#getHubsElements
     * @param {string} key - The elements hub key (i.e. 'documents', 'crm', etc.)
     */
    getHubsElements(
        key: string

        ,
    ): getHubsElementsParameters {
        return new getHubsElementsParameters(this, 'GET', '/hubs/{key}/elements', key);
    }

    /**
     * Retrieve all element instances from a specified path.  The instances go through Cloud Elements to your console.  Specifying an instance that does not exist results in an error response.
     * @method
     * @name platformSDK#getInstances
     */
    getInstances(): getInstancesParameters {
        return new getInstancesParameters(this, 'GET', '/instances');
    }

    /**
     * Create a new element instance in your console.  Instance creation will flow through Cloud Elements to your console.
     * @method
     * @name platformSDK#createInstance
     * @param {} elementInstance - The element instance to create
     */
    createInstance(
        elementInstance:
        ElementInstance

        ,
    ): createInstanceParameters {
        return new createInstanceParameters(this, 'POST', '/instances', elementInstance);
    }

    /**
     * Delete an instance associated with an instance token in authorization header. Specifying an instance associated with a given token that does not exist will result in an error message.
     * @method
     * @name platformSDK#deleteInstances
     */
    deleteInstances(): deleteInstancesParameters {
        return new deleteInstancesParameters(this, 'DELETE', '/instances');
    }

    /**
     * Update an instance associated with a given token in authorization header.  Specifying an instance associated with an token that does not exist will result in an error message.
     * @method
     * @name platformSDK#replaceInstances
     * @param {} elementInstance - The fields of the element instance to update
     */
    replaceInstances(
        elementInstance:
        ElementInstance

        ,
    ): replaceInstancesParameters {
        return new replaceInstancesParameters(this, 'PUT', '/instances', elementInstance);
    }

    /**
     * Update an instance partially associated with a given token in authorization header.  Specifying an instance associated with an token that does not exist will result in an error message.
     * @method
     * @name platformSDK#updateInstances
     * @param {} elementInstance - The fields of the element instance to update
     */
    updateInstances(
        elementInstance:
        ElementInstance

        ,
    ): updateInstancesParameters {
        return new updateInstancesParameters(this, 'PATCH', '/instances', elementInstance);
    }

    /**
     * Retrieve configuration for an element instance with an associated token in authorization header
     * @method
     * @name platformSDK#getInstancesConfiguration
     */
    getInstancesConfiguration(): getInstancesConfigurationParameters {
        return new getInstancesConfigurationParameters(this, 'GET', '/instances/configuration');
    }

    /**
     * Retrieve configuration for an element instance with an associated token in authorization header
     * @method
     * @name platformSDK#getInstancesConfigurationByConfigId
     * @param {integer} configId - The ID of the element instance config
     */
    getInstancesConfigurationByConfigId(
        configId: number

        ,
    ): getInstancesConfigurationByConfigIdParameters {
        return new getInstancesConfigurationByConfigIdParameters(this, 'GET', '/instances/configuration/{configId}', configId);
    }

    /**
     * Update configuration for an element instance with an associated token in authorization header
     * @method
     * @name platformSDK#updateInstancesConfigurationByConfigId
     * @param {integer} configId - The ID of the element instance config
     * @param {} config - The updated element instance config
     */
    updateInstancesConfigurationByConfigId(
        configId: number

        ,
        config:
        ElementInstanceConfigUpdate

        ,
    ): updateInstancesConfigurationByConfigIdParameters {
        return new updateInstancesConfigurationByConfigIdParameters(this, 'PATCH', '/instances/configuration/{configId}', configId, config);
    }

    /**
     * Retrieve an instance specific swagger documentation with an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesDocs
     */
    getInstancesDocs(): getInstancesDocsParameters {
        return new getInstancesDocsParameters(this, 'GET', '/instances/docs');
    }

    /**
     * Retrieve an instance specific swagger documentation for an operation with an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesDocByOperationId
     * @param {string} operationId - The id of the operation for which swagger docs is returned
     */
    getInstancesDocByOperationId(
        operationId: string

        ,
    ): getInstancesDocByOperationIdParameters {
        return new getInstancesDocByOperationIdParameters(this, 'GET', '/instances/docs/{operationId}', operationId);
    }

    /**
     * Retrieve an definitionation for an operation id with an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesDocsDefinitions
     * @param {string} operationId - The id of the operation for which swagger docs is returned
     */
    getInstancesDocsDefinitions(
        operationId: string

        ,
    ): getInstancesDocsDefinitionsParameters {
        return new getInstancesDocsDefinitionsParameters(this, 'GET', '/instances/docs/{operationId}/definitions', operationId);
    }

    /**
     * Enable an element instance with an associated instance token in authorization header
     * @method
     * @name platformSDK#replaceInstancesEnabled
     */
    replaceInstancesEnabled(): replaceInstancesEnabledParameters {
        return new replaceInstancesEnabledParameters(this, 'PUT', '/instances/enabled');
    }

    /**
     * Disable an element instance with an associated instance token in authorization header
     * @method
     * @name platformSDK#deleteInstancesEnabled
     */
    deleteInstancesEnabled(): deleteInstancesEnabledParameters {
        return new deleteInstancesEnabledParameters(this, 'DELETE', '/instances/enabled');
    }

    /**
     * Retrieve events for all element instances or for an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesEvents
     */
    getInstancesEvents(): getInstancesEventsParameters {
        return new getInstancesEventsParameters(this, 'GET', '/instances/events');
    }

    /**
     * Retrieve the number of events within a given date/time range for all element instances within the specified account(s).
     * @method
     * @name platformSDK#getInstancesEventsAnalytics
     */
    getInstancesEventsAnalytics(): getInstancesEventsAnalyticsParameters {
        return new getInstancesEventsAnalyticsParameters(this, 'GET', '/instances/events/analytics');
    }

    /**
     * Retrieve the number of events within a given date/time range, aggregated by account ID. This API is really only useful for organization admins where more than one account exists.
     * @method
     * @name platformSDK#getInstancesEventsAnalyticsAccounts
     */
    getInstancesEventsAnalyticsAccounts(): getInstancesEventsAnalyticsAccountsParameters {
        return new getInstancesEventsAnalyticsAccountsParameters(this, 'GET', '/instances/events/analytics/accounts');
    }

    /**
     * Retrieve the number of events  within a given date/time range, aggregated by element instance ID.
     * @method
     * @name platformSDK#getInstancesEventsAnalyticsInstances
     */
    getInstancesEventsAnalyticsInstances(): getInstancesEventsAnalyticsInstancesParameters {
        return new getInstancesEventsAnalyticsInstancesParameters(this, 'GET', '/instances/events/analytics/instances');
    }

    /**
     * Retrieve events for all element instances or for an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesEventsDispositions
     */
    getInstancesEventsDispositions(): getInstancesEventsDispositionsParameters {
        return new getInstancesEventsDispositionsParameters(this, 'GET', '/instances/events/dispositions');
    }

    /**
     * Retrieve an event for all element instances or for an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesEventByEventId
     * @param {integer} eventId - The ID of the event
     */
    getInstancesEventByEventId(
        eventId: number

        ,
    ): getInstancesEventByEventIdParameters {
        return new getInstancesEventByEventIdParameters(this, 'GET', '/instances/events/{eventId}', eventId);
    }

    /**
     * Retrieve all of the object definitions within a specific instance with an associated instance token in authorization header.  If no object definitions exist, then this will result in an error response.
     * @method
     * @name platformSDK#getInstancesObjectsDefinitions
     */
    getInstancesObjectsDefinitions(): getInstancesObjectsDefinitionsParameters {
        return new getInstancesObjectsDefinitionsParameters(this, 'GET', '/instances/objects/definitions');
    }

    /**
     * Delete an object definition associated with an objectName for a specific instance with an associated instance token in authorization header.  Specifying an object name that does not have an object definition will result in an error response.
     * @method
     * @name platformSDK#deleteInstancesObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     */
    deleteInstancesObjectsObjectNameDefinitions(
        objectName: string

        ,
    ): deleteInstancesObjectsObjectNameDefinitionsParameters {
        return new deleteInstancesObjectsObjectNameDefinitionsParameters(this, 'DELETE', '/instances/objects/{objectName}/definitions', objectName);
    }

    /**
     * Retrieve a specific object definition associated with an objectName within a specific instance with an associated instance token in authorization header.  Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#getInstancesObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     */
    getInstancesObjectsObjectNameDefinitions(
        objectName: string

        ,
    ): getInstancesObjectsObjectNameDefinitionsParameters {
        return new getInstancesObjectsObjectNameDefinitionsParameters(this, 'GET', '/instances/objects/{objectName}/definitions', objectName);
    }

    /**
     * Create a new object definition associated with an objectName within a specific instance with an associated instance token in authorization header.  The definitions allow you to define what an object looks like within an instance.
     * @method
     * @name platformSDK#createInstanceObjectObjectNameDefinition
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     */
    createInstanceObjectObjectNameDefinition(
        objectName: string

        ,
        body:
        Definition

        ,
    ): createInstanceObjectObjectNameDefinitionParameters {
        return new createInstanceObjectObjectNameDefinitionParameters(this, 'POST', '/instances/objects/{objectName}/definitions', objectName, body);
    }

    /**
     * Update a specific object's definition associated with an objectName within a specific instance with an associated instance token in authorization header. Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#replaceInstancesObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     */
    replaceInstancesObjectsObjectNameDefinitions(
        objectName: string

        ,
        body:
        Definition

        ,
    ): replaceInstancesObjectsObjectNameDefinitionsParameters {
        return new replaceInstancesObjectsObjectNameDefinitionsParameters(this, 'PUT', '/instances/objects/{objectName}/definitions', objectName, body);
    }

    /**
     * Temporarily enable trace-level usage logging for an element instance with an associated instance token in authorization header
     * @method
     * @name platformSDK#replaceInstancesTraceLogging
     */
    replaceInstancesTraceLogging(): replaceInstancesTraceLoggingParameters {
        return new replaceInstancesTraceLoggingParameters(this, 'PUT', '/instances/trace-logging');
    }

    /**
     * Disable trace-level usage logging for an element instance with an associated instance token in authorization header
     * @method
     * @name platformSDK#deleteInstancesTraceLogging
     */
    deleteInstancesTraceLogging(): deleteInstancesTraceLoggingParameters {
        return new deleteInstancesTraceLoggingParameters(this, 'DELETE', '/instances/trace-logging');
    }

    /**
     * Delete the transformation for an element instance with an associated instance token in authorization header
     * @method
     * @name platformSDK#deleteInstancesTransformations
     */
    deleteInstancesTransformations(): deleteInstancesTransformationsParameters {
        return new deleteInstancesTransformationsParameters(this, 'DELETE', '/instances/transformations');
    }

    /**
     * Retrieve an element instance transformation with an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesTransformations
     */
    getInstancesTransformations(): getInstancesTransformationsParameters {
        return new getInstancesTransformationsParameters(this, 'GET', '/instances/transformations');
    }

    /**
     * Delete the transformation for an element instance for a specific object with an associated instance token in authorization header
     * @method
     * @name platformSDK#deleteInstancesTransformationByObjectName
     * @param {string} objectName - The name of the object
     */
    deleteInstancesTransformationByObjectName(
        objectName: string

        ,
    ): deleteInstancesTransformationByObjectNameParameters {
        return new deleteInstancesTransformationByObjectNameParameters(this, 'DELETE', '/instances/transformations/{objectName}', objectName);
    }

    /**
     * Retrieve an element instance transformation for a specific object with an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesTransformationByObjectName
     * @param {string} objectName - The name of the object
     */
    getInstancesTransformationByObjectName(
        objectName: string

        ,
    ): getInstancesTransformationByObjectNameParameters {
        return new getInstancesTransformationByObjectNameParameters(this, 'GET', '/instances/transformations/{objectName}', objectName);
    }

    /**
     * Create a transformation for an element instance for a specific object
     * @method
     * @name platformSDK#createInstanceTransformationByObjectName
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation to create
     */
    createInstanceTransformationByObjectName(
        objectName: string

        ,
        transformation:
        Transformation

        ,
    ): createInstanceTransformationByObjectNameParameters {
        return new createInstanceTransformationByObjectNameParameters(this, 'POST', '/instances/transformations/{objectName}', objectName, transformation);
    }

    /**
     * Update the transformation for an element instance for a specific object with an associated instance token in authorization header
     * @method
     * @name platformSDK#replaceInstancesTransformationByObjectName
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation to update
     */
    replaceInstancesTransformationByObjectName(
        objectName: string

        ,
        transformation:
        Transformation

        ,
    ): replaceInstancesTransformationByObjectNameParameters {
        return new replaceInstancesTransformationByObjectNameParameters(this, 'PUT', '/instances/transformations/{objectName}', objectName, transformation);
    }

    /**
     * Delete an instance associated with a given ID from your console. Specifying an instance associated with a given ID that does not exist will result in an error message.
     * @method
     * @name platformSDK#deleteInstanceById
     * @param {integer} id - The ID of the element instance
     */
    deleteInstanceById(
        id: number

        ,
    ): deleteInstanceByIdParameters {
        return new deleteInstanceByIdParameters(this, 'DELETE', '/instances/{id}', id);
    }

    /**
     * Retrieve an element instance associated with a given ID from a specified path.  The instance goes through Cloud Elements to your console.  Specifying an instance with an associated ID that does not exist results in an error response.
     * @method
     * @name platformSDK#getInstanceById
     * @param {integer} id - The ID of the element instance
     */
    getInstanceById(
        id: number

        ,
    ): getInstanceByIdParameters {
        return new getInstanceByIdParameters(this, 'GET', '/instances/{id}', id);
    }

    /**
     * Update an instance associated with a given ID from your console.  Specifying an instance associated with an ID that does not exist will result in an error message.
     * @method
     * @name platformSDK#replaceInstanceById
     * @param {integer} id - The ID of the element instance
     * @param {} elementInstance - The fields of the element instance to update
     */
    replaceInstanceById(
        id: number

        ,
        elementInstance:
        ElementInstance

        ,
    ): replaceInstanceByIdParameters {
        return new replaceInstanceByIdParameters(this, 'PUT', '/instances/{id}', id, elementInstance);
    }

    /**
     * Update an instance partially associated with a given ID from your console.  Specifying an instance associated with an ID that does not exist will result in an error message.
     * @method
     * @name platformSDK#updateInstanceById
     * @param {integer} id - The ID of the element instance
     * @param {} elementInstance - The fields of the element instance to update
     */
    updateInstanceById(
        id: number

        ,
        elementInstance:
        ElementInstance

        ,
    ): updateInstanceByIdParameters {
        return new updateInstanceByIdParameters(this, 'PATCH', '/instances/{id}', id, elementInstance);
    }

    /**
     * Retrieve configuration for an element instance
     * @method
     * @name platformSDK#getInstancesConfiguration2
     * @param {integer} id - The ID of the element instance
     */
    getInstancesConfiguration2(
        id: number

        ,
    ): getInstancesConfiguration2Parameters {
        return new getInstancesConfiguration2Parameters(this, 'GET', '/instances/{id}/configuration', id);
    }

    /**
     * Retrieve configuration for an element instance
     * @method
     * @name platformSDK#getInstancesConfigurationByConfigId2
     * @param {integer} id - The ID of the element instance
     * @param {integer} configId - The ID of the element instance config
     */
    getInstancesConfigurationByConfigId2(
        id: number

        ,
        configId: number

        ,
    ): getInstancesConfigurationByConfigId2Parameters {
        return new getInstancesConfigurationByConfigId2Parameters(this, 'GET', '/instances/{id}/configuration/{configId}', id, configId);
    }

    /**
     * Update configuration for an element instance
     * @method
     * @name platformSDK#updateInstancesConfigurationByConfigId2
     * @param {integer} id - The ID of the element instance
     * @param {integer} configId - The ID of the element instance config
     * @param {} config - The updated element instance config
     */
    updateInstancesConfigurationByConfigId2(
        id: number

        ,
        configId: number

        ,
        config:
        ElementInstanceConfigUpdate

        ,
    ): updateInstancesConfigurationByConfigId2Parameters {
        return new updateInstancesConfigurationByConfigId2Parameters(this, 'PATCH', '/instances/{id}/configuration/{configId}', id, configId, config);
    }

    /**
     * Retrieve an instance specific swagger documentation
     * @method
     * @name platformSDK#getInstancesDocs2
     * @param {integer} id - The ID of the element instance
     */
    getInstancesDocs2(
        id: number

        ,
    ): getInstancesDocs2Parameters {
        return new getInstancesDocs2Parameters(this, 'GET', '/instances/{id}/docs', id);
    }

    /**
     * Retrieve an instance specific swagger documentation
     * @method
     * @name platformSDK#getInstancesDocByOperationId2
     * @param {integer} id - The ID of the element instance
     * @param {string} operationId - The id of the operation for which swagger docs is returned
     */
    getInstancesDocByOperationId2(
        id: number

        ,
        operationId: string

        ,
    ): getInstancesDocByOperationId2Parameters {
        return new getInstancesDocByOperationId2Parameters(this, 'GET', '/instances/{id}/docs/{operationId}', id, operationId);
    }

    /**
     * Retrieve an instance specific swagger documentation
     * @method
     * @name platformSDK#getInstancesDocsDefinitions2
     * @param {integer} id - The ID of the element instance
     * @param {string} operationId - The id of the operation for which swagger docs is returned
     */
    getInstancesDocsDefinitions2(
        id: number

        ,
        operationId: string

        ,
    ): getInstancesDocsDefinitions2Parameters {
        return new getInstancesDocsDefinitions2Parameters(this, 'GET', '/instances/{id}/docs/{operationId}/definitions', id, operationId);
    }

    /**
     * Enable an element instance
     * @method
     * @name platformSDK#replaceInstancesEnabled2
     * @param {integer} id - The ID of the element instance
     */
    replaceInstancesEnabled2(
        id: number

        ,
    ): replaceInstancesEnabled2Parameters {
        return new replaceInstancesEnabled2Parameters(this, 'PUT', '/instances/{id}/enabled', id);
    }

    /**
     * Disable an element instance
     * @method
     * @name platformSDK#deleteInstancesEnabled2
     * @param {integer} id - The ID of the element instance
     */
    deleteInstancesEnabled2(
        id: number

        ,
    ): deleteInstancesEnabled2Parameters {
        return new deleteInstancesEnabled2Parameters(this, 'DELETE', '/instances/{id}/enabled', id);
    }

    /**
     * Retrieve events for an element instance
     * @method
     * @name platformSDK#getInstancesEvents2
     * @param {integer} id - The ID of the element instance
     */
    getInstancesEvents2(
        id: number

        ,
    ): getInstancesEvents2Parameters {
        return new getInstancesEvents2Parameters(this, 'GET', '/instances/{id}/events', id);
    }

    /**
     * Retrieve an event for an element instance
     * @method
     * @name platformSDK#getInstancesEventByEventId2
     * @param {integer} id - The ID of the element instance
     * @param {integer} eventId - The ID of the event
     */
    getInstancesEventByEventId2(
        id: number

        ,
        eventId: number

        ,
    ): getInstancesEventByEventId2Parameters {
        return new getInstancesEventByEventId2Parameters(this, 'GET', '/instances/{id}/events/{eventId}', id, eventId);
    }

    /**
     * Retrieve all of the object definitions within a specific instance.  If no object definitions exist, then this will result in an error response.
     * @method
     * @name platformSDK#getInstancesObjectsDefinitions2
     * @param {integer} id - The ID of the instance
     */
    getInstancesObjectsDefinitions2(
        id: number

        ,
    ): getInstancesObjectsDefinitions2Parameters {
        return new getInstancesObjectsDefinitions2Parameters(this, 'GET', '/instances/{id}/objects/definitions', id);
    }

    /**
     * Delete an object definition associated with an objectName for a specific instance.  Specifying an object name that does not have an object definition will result in an error response.
     * @method
     * @name platformSDK#deleteInstancesObjectsObjectNameDefinitions2
     * @param {integer} id - The ID of the instance
     * @param {string} objectName - The name of the object
     */
    deleteInstancesObjectsObjectNameDefinitions2(
        id: number

        ,
        objectName: string

        ,
    ): deleteInstancesObjectsObjectNameDefinitions2Parameters {
        return new deleteInstancesObjectsObjectNameDefinitions2Parameters(this, 'DELETE', '/instances/{id}/objects/{objectName}/definitions', id, objectName);
    }

    /**
     * Retrieve a specific object definition associated with an objectName within a specific instance.  Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#getInstancesObjectsObjectNameDefinitions2
     * @param {integer} id - The ID of the instance
     * @param {string} objectName - The name of the object
     */
    getInstancesObjectsObjectNameDefinitions2(
        id: number

        ,
        objectName: string

        ,
    ): getInstancesObjectsObjectNameDefinitions2Parameters {
        return new getInstancesObjectsObjectNameDefinitions2Parameters(this, 'GET', '/instances/{id}/objects/{objectName}/definitions', id, objectName);
    }

    /**
     * Create a new object definition associated with an objectName within a specific instance.  The definitions allow you to define what an object looks like within an instance.
     * @method
     * @name platformSDK#createInstanceObjectObjectNameDefinition2
     * @param {integer} id - The ID of the instance
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     */
    createInstanceObjectObjectNameDefinition2(
        id: number

        ,
        objectName: string

        ,
        body:
        Definition

        ,
    ): createInstanceObjectObjectNameDefinition2Parameters {
        return new createInstanceObjectObjectNameDefinition2Parameters(this, 'POST', '/instances/{id}/objects/{objectName}/definitions', id, objectName, body);
    }

    /**
     * Update a specific object's definition associated with an objectName within a specific instance. Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#replaceInstancesObjectsObjectNameDefinitions2
     * @param {integer} id - The ID of the instance
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     */
    replaceInstancesObjectsObjectNameDefinitions2(
        id: number

        ,
        objectName: string

        ,
        body:
        Definition

        ,
    ): replaceInstancesObjectsObjectNameDefinitions2Parameters {
        return new replaceInstancesObjectsObjectNameDefinitions2Parameters(this, 'PUT', '/instances/{id}/objects/{objectName}/definitions', id, objectName, body);
    }

    /**
     * Temporarily enable trace-level usage logging for an element instance
     * @method
     * @name platformSDK#replaceInstancesTraceLogging2
     * @param {integer} id - The ID of the element instance
     */
    replaceInstancesTraceLogging2(
        id: number

        ,
    ): replaceInstancesTraceLogging2Parameters {
        return new replaceInstancesTraceLogging2Parameters(this, 'PUT', '/instances/{id}/trace-logging', id);
    }

    /**
     * Disable trace-level usage logging for an element instance
     * @method
     * @name platformSDK#deleteInstancesTraceLogging2
     * @param {integer} id - The ID of the element instance
     */
    deleteInstancesTraceLogging2(
        id: number

        ,
    ): deleteInstancesTraceLogging2Parameters {
        return new deleteInstancesTraceLogging2Parameters(this, 'DELETE', '/instances/{id}/trace-logging', id);
    }

    /**
     * Delete the transformation for an element instance
     * @method
     * @name platformSDK#deleteInstancesTransformations2
     * @param {integer} id - The ID of the element instance
     */
    deleteInstancesTransformations2(
        id: number

        ,
    ): deleteInstancesTransformations2Parameters {
        return new deleteInstancesTransformations2Parameters(this, 'DELETE', '/instances/{id}/transformations', id);
    }

    /**
     * Retrieve an element instance transformation
     * @method
     * @name platformSDK#getInstancesTransformations2
     * @param {integer} id - The ID of the element instance
     */
    getInstancesTransformations2(
        id: number

        ,
    ): getInstancesTransformations2Parameters {
        return new getInstancesTransformations2Parameters(this, 'GET', '/instances/{id}/transformations', id);
    }

    /**
     * Delete the transformation for an element instance for a specific object
     * @method
     * @name platformSDK#deleteInstancesTransformationByObjectName2
     * @param {integer} id - The ID of the element instance
     * @param {string} objectName - The name of the object
     */
    deleteInstancesTransformationByObjectName2(
        id: number

        ,
        objectName: string

        ,
    ): deleteInstancesTransformationByObjectName2Parameters {
        return new deleteInstancesTransformationByObjectName2Parameters(this, 'DELETE', '/instances/{id}/transformations/{objectName}', id, objectName);
    }

    /**
     * Retrieve an element instance transformation for a specific object
     * @method
     * @name platformSDK#getInstancesTransformationByObjectName2
     * @param {integer} id - The ID of the element instance
     * @param {string} objectName - The name of the object
     */
    getInstancesTransformationByObjectName2(
        id: number

        ,
        objectName: string

        ,
    ): getInstancesTransformationByObjectName2Parameters {
        return new getInstancesTransformationByObjectName2Parameters(this, 'GET', '/instances/{id}/transformations/{objectName}', id, objectName);
    }

    /**
     * Create a transformation for an element instance for a specific object
     * @method
     * @name platformSDK#createInstanceTransformationByObjectName2
     * @param {integer} id - The ID of the element instance
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation to create
     */
    createInstanceTransformationByObjectName2(
        id: number

        ,
        objectName: string

        ,
        transformation:
        Transformation

        ,
    ): createInstanceTransformationByObjectName2Parameters {
        return new createInstanceTransformationByObjectName2Parameters(this, 'POST', '/instances/{id}/transformations/{objectName}', id, objectName, transformation);
    }

    /**
     * Update the transformation for an element instance for a specific object
     * @method
     * @name platformSDK#replaceInstancesTransformationByObjectName2
     * @param {integer} id - The ID of the element instance
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation to update
     */
    replaceInstancesTransformationByObjectName2(
        id: number

        ,
        objectName: string

        ,
        transformation:
        Transformation

        ,
    ): replaceInstancesTransformationByObjectName2Parameters {
        return new replaceInstancesTransformationByObjectName2Parameters(this, 'PUT', '/instances/{id}/transformations/{objectName}', id, objectName, transformation);
    }

    /**
     * Get a list of all configured jobs.
     * @method
     * @name platformSDK#getJobs
     */
    getJobs(): getJobsParameters {
        return new getJobsParameters(this, 'GET', '/jobs');
    }

    /**
     * Create a new job.
     * @method
     * @name platformSDK#createJob
     */
    createJob(): createJobParameters {
        return new createJobParameters(this, 'POST', '/jobs');
    }

    /**
     * Get a list of the previous job executions.
     * @method
     * @name platformSDK#getJobsExecutions
     */
    getJobsExecutions(): getJobsExecutionsParameters {
        return new getJobsExecutionsParameters(this, 'GET', '/jobs/executions');
    }

    /**
     * Delete a specific job.
     * @method
     * @name platformSDK#deleteJobById
     * @param {string} id - The ID of the job.
     */
    deleteJobById(
        id: string

        ,
    ): deleteJobByIdParameters {
        return new deleteJobByIdParameters(this, 'DELETE', '/jobs/{id}', id);
    }

    /**
     * Get information about a specific job.
     * @method
     * @name platformSDK#getJobById
     * @param {string} id - The ID of the job.
     */
    getJobById(
        id: string

        ,
    ): getJobByIdParameters {
        return new getJobByIdParameters(this, 'GET', '/jobs/{id}', id);
    }

    /**
     * Disable a job.
     * @method
     * @name platformSDK#replaceJobsDisable
     * @param {string} id - The ID of the job.
     */
    replaceJobsDisable(
        id: string

        ,
    ): replaceJobsDisableParameters {
        return new replaceJobsDisableParameters(this, 'PUT', '/jobs/{id}/disable', id);
    }

    /**
     * Enable a job.
     * @method
     * @name platformSDK#replaceJobsEnable
     * @param {string} id - The ID of the job.
     */
    replaceJobsEnable(
        id: string

        ,
    ): replaceJobsEnableParameters {
        return new replaceJobsEnableParameters(this, 'PUT', '/jobs/{id}/enable', id);
    }

    /**
     * Get a list of history records for a specific job.
     * @method
     * @name platformSDK#getJobsHistory
     * @param {string} id - The ID of the job.
     */
    getJobsHistory(
        id: string

        ,
    ): getJobsHistoryParameters {
        return new getJobsHistoryParameters(this, 'GET', '/jobs/{id}/history', id);
    }

    /**
     * Get a specific history record for a specific job.
     * @method
     * @name platformSDK#getJobsHistoryByHistoryId
     * @param {string} id - The ID of the job.
     * @param {integer} historyId - The ID of the History record.
     */
    getJobsHistoryByHistoryId(
        id: string

        ,
        historyId: number

        ,
    ): getJobsHistoryByHistoryIdParameters {
        return new getJobsHistoryByHistoryIdParameters(this, 'GET', '/jobs/{id}/history/{historyId}', id, historyId);
    }

    /**
     * Update a job's CRON string and reschedule it.
     * @method
     * @name platformSDK#updateJobsReschedule
     * @param {string} id - The ID of the job.
     */
    updateJobsReschedule(
        id: string

        ,
    ): updateJobsRescheduleParameters {
        return new updateJobsRescheduleParameters(this, 'PATCH', '/jobs/{id}/reschedule', id);
    }

    /**
     * Retrieve the API metrics for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsApi
     */
    getMetricsApi(): getMetricsApiParameters {
        return new getMetricsApiParameters(this, 'GET', '/metrics/api');
    }

    /**
     * Retrieve the metrics of number of bulk jobs executed for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsBulkJobs
     */
    getMetricsBulkJobs(): getMetricsBulkJobsParameters {
        return new getMetricsBulkJobsParameters(this, 'GET', '/metrics/bulk-jobs');
    }

    /**
     * Retrieve the element instance creation API metrics for the accounts provided, split up by element key. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsElementInstancesCreated
     */
    getMetricsElementInstancesCreated(): getMetricsElementInstancesCreatedParameters {
        return new getMetricsElementInstancesCreatedParameters(this, 'GET', '/metrics/element-instances-created');
    }

    /**
     * Retrieve the metrics of number of custom elements created for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsElementsCreated
     */
    getMetricsElementsCreated(): getMetricsElementsCreatedParameters {
        return new getMetricsElementsCreatedParameters(this, 'GET', '/metrics/elements-created');
    }

    /**
     * Retrieve the metrics of number of events received for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsEvents
     */
    getMetricsEvents(): getMetricsEventsParameters {
        return new getMetricsEventsParameters(this, 'GET', '/metrics/events');
    }

    /**
     * Retrieve the metrics of number of formulas executions for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsFormulaExecutions
     */
    getMetricsFormulaExecutions(): getMetricsFormulaExecutionsParameters {
        return new getMetricsFormulaExecutionsParameters(this, 'GET', '/metrics/formula-executions');
    }

    /**
     * Retrieve the metrics of number of formulas created for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsFormulasCreated
     */
    getMetricsFormulasCreated(): getMetricsFormulasCreatedParameters {
        return new getMetricsFormulasCreatedParameters(this, 'GET', '/metrics/formulas-created');
    }

    /**
     * Retrieve the API metrics for the accounts provided, split up by hub. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsHubApi
     */
    getMetricsHubApi(): getMetricsHubApiParameters {
        return new getMetricsHubApiParameters(this, 'GET', '/metrics/hub-api');
    }

    /**
     * Retrieve the hubs created metrics for the accounts provided, split up by hub. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsHubsCreated
     */
    getMetricsHubsCreated(): getMetricsHubsCreatedParameters {
        return new getMetricsHubsCreatedParameters(this, 'GET', '/metrics/hubs-created');
    }

    /**
     * Retrieve the metrics of number of VDRs created for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsVdrsCreated
     */
    getMetricsVdrsCreated(): getMetricsVdrsCreatedParameters {
        return new getMetricsVdrsCreatedParameters(this, 'GET', '/metrics/vdrs-created');
    }

    /**
     * Retrieve the metrics of number of calls using VDRs for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsVdrsInvoked
     */
    getMetricsVdrsInvoked(): getMetricsVdrsInvokedParameters {
        return new getMetricsVdrsInvokedParameters(this, 'GET', '/metrics/vdrs-invoked');
    }

    /**
     * Create a new organization within the user's customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#createOrganization
     * @param {} organization - The organization to create.
     */
    createOrganization(
        organization:
        Organization_POST

        ,
    ): createOrganizationParameters {
        return new createOrganizationParameters(this, 'POST', '/organizations', organization);
    }

    /**
     * Delete the default transformation for an element within an organization.  The key field denotes the element being referenced in the API call, i.e. dropbox.
     * @method
     * @name platformSDK#deleteOrganizationsElementsTransformations
     * @param {string} keyOrId - The element key or ID
     */
    deleteOrganizationsElementsTransformations(
        keyOrId: string

        ,
    ): deleteOrganizationsElementsTransformationsParameters {
        return new deleteOrganizationsElementsTransformationsParameters(this, 'DELETE', '/organizations/elements/{keyOrId}/transformations', keyOrId);
    }

    /**
     * Retrieve the default transformation for a specific element within an organization.  The key field denotes the element being referenced in the API call, i.e. dropbox.
     * @method
     * @name platformSDK#getOrganizationsElementsTransformations
     * @param {string} keyOrId - The element key or ID
     */
    getOrganizationsElementsTransformations(
        keyOrId: string

        ,
    ): getOrganizationsElementsTransformationsParameters {
        return new getOrganizationsElementsTransformationsParameters(this, 'GET', '/organizations/elements/{keyOrId}/transformations', keyOrId);
    }

    /**
     * Delete the default transformation for an object for a specific element within an organization. The key field denotes the element being referenced in the API call, i.e. dropbox.
     * @method
     * @name platformSDK#deleteOrganizationsElementsTransformationByObjectName
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The name of the object
     */
    deleteOrganizationsElementsTransformationByObjectName(
        keyOrId: string

        ,
        objectName: string

        ,
    ): deleteOrganizationsElementsTransformationByObjectNameParameters {
        return new deleteOrganizationsElementsTransformationByObjectNameParameters(this, 'DELETE', '/organizations/elements/{keyOrId}/transformations/{objectName}', keyOrId, objectName);
    }

    /**
     * Retrieve the default transformation for an object for a specific element within an organization.  The key field denotes the element being referenced in the API call, i.e. dropbox.
     * @method
     * @name platformSDK#getOrganizationsElementsTransformationByObjectName
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The name of the object
     */
    getOrganizationsElementsTransformationByObjectName(
        keyOrId: string

        ,
        objectName: string

        ,
    ): getOrganizationsElementsTransformationByObjectNameParameters {
        return new getOrganizationsElementsTransformationByObjectNameParameters(this, 'GET', '/organizations/elements/{keyOrId}/transformations/{objectName}', keyOrId, objectName);
    }

    /**
     * Create a default transformation for a specific object for all elements with the given key, within an organization.  The key field denotes the element being referenced in the API call, i.e. dropbox.
     * @method
     * @name platformSDK#createOrganizationElementTransformationByObjectName
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation
     */
    createOrganizationElementTransformationByObjectName(
        keyOrId: string

        ,
        objectName: string

        ,
        transformation:
        Transformation

        ,
    ): createOrganizationElementTransformationByObjectNameParameters {
        return new createOrganizationElementTransformationByObjectNameParameters(this, 'POST', '/organizations/elements/{keyOrId}/transformations/{objectName}', keyOrId, objectName, transformation);
    }

    /**
     * Update the default transformation for an object for a specific element element within an organization.  The key field denotes the element being referenced in the API call, i.e. dropbox.
     * @method
     * @name platformSDK#replaceOrganizationsElementsTransformationByObjectName
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation
     */
    replaceOrganizationsElementsTransformationByObjectName(
        keyOrId: string

        ,
        objectName: string

        ,
        transformation:
        Transformation

        ,
    ): replaceOrganizationsElementsTransformationByObjectNameParameters {
        return new replaceOrganizationsElementsTransformationByObjectNameParameters(this, 'PUT', '/organizations/elements/{keyOrId}/transformations/{objectName}', keyOrId, objectName, transformation);
    }

    /**
     * Retrieve the user's organization
     * @method
     * @name platformSDK#getOrganizationsMe
     */
    getOrganizationsMe(): getOrganizationsMeParameters {
        return new getOrganizationsMeParameters(this, 'GET', '/organizations/me');
    }

    /**
     * Update the user's organization metadata
     * @method
     * @name platformSDK#replaceOrganizationsMe
     * @param {} body - The organization metadata to update. The only field that can be updated is 'name'.
     */
    replaceOrganizationsMe(
        body:
        Organization

        ,
    ): replaceOrganizationsMeParameters {
        return new replaceOrganizationsMeParameters(this, 'PUT', '/organizations/me', body);
    }

    /**
     * Delete all object definitions within an organization.
     * @method
     * @name platformSDK#deleteOrganizationsObjectsDefinitions
     */
    deleteOrganizationsObjectsDefinitions(): deleteOrganizationsObjectsDefinitionsParameters {
        return new deleteOrganizationsObjectsDefinitionsParameters(this, 'DELETE', '/organizations/objects/definitions');
    }

    /**
     * Retrieve all of the object definitions within an organization.
     * @method
     * @name platformSDK#getOrganizationsObjectsDefinitions
     */
    getOrganizationsObjectsDefinitions(): getOrganizationsObjectsDefinitionsParameters {
        return new getOrganizationsObjectsDefinitionsParameters(this, 'GET', '/organizations/objects/definitions');
    }

    /**
     * Create multiple object definitions within an organization.  The definitions allow you to define what an object looks like within an organization.
     * @method
     * @name platformSDK#createOrganizationObjectDefinition
     * @param {} body - The object definitions to create
     */
    createOrganizationObjectDefinition(
        body:
        Dictionary

        ,
    ): createOrganizationObjectDefinitionParameters {
        return new createOrganizationObjectDefinitionParameters(this, 'POST', '/organizations/objects/definitions', body);
    }

    /**
     * Delete an object definition associated with a specific objectName within an organization. Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#deleteOrganizationsObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     */
    deleteOrganizationsObjectsObjectNameDefinitions(
        objectName: string

        ,
    ): deleteOrganizationsObjectsObjectNameDefinitionsParameters {
        return new deleteOrganizationsObjectsObjectNameDefinitionsParameters(this, 'DELETE', '/organizations/objects/{objectName}/definitions', objectName);
    }

    /**
     * Retrieve a specific object definition associated with an objectName within an organization.
     * @method
     * @name platformSDK#getOrganizationsObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     */
    getOrganizationsObjectsObjectNameDefinitions(
        objectName: string

        ,
    ): getOrganizationsObjectsObjectNameDefinitionsParameters {
        return new getOrganizationsObjectsObjectNameDefinitionsParameters(this, 'GET', '/organizations/objects/{objectName}/definitions', objectName);
    }

    /**
     * Create a new object definition associated with an objectName within an organization.  The definitions allow you to define what an object looks like within an organization.
     * @method
     * @name platformSDK#createOrganizationObjectObjectNameDefinition
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     */
    createOrganizationObjectObjectNameDefinition(
        objectName: string

        ,
        body:
        Definition

        ,
    ): createOrganizationObjectObjectNameDefinitionParameters {
        return new createOrganizationObjectObjectNameDefinitionParameters(this, 'POST', '/organizations/objects/{objectName}/definitions', objectName, body);
    }

    /**
     * Update a specific object's definition associated with a specific objectName within an organization.  Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#replaceOrganizationsObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     */
    replaceOrganizationsObjectsObjectNameDefinitions(
        objectName: string

        ,
        body:
        Definition

        ,
    ): replaceOrganizationsObjectsObjectNameDefinitionsParameters {
        return new replaceOrganizationsObjectsObjectNameDefinitionsParameters(this, 'PUT', '/organizations/objects/{objectName}/definitions', objectName, body);
    }

    /**
     * Find users within your default organizational account.  The CEQL search expression or the where clause, without the WHERE keyword, in a typical SQL query. For example, to search for users containing the name 'greg', the search expression will be where name=‘greg’. When this parameter is omitted, all accounts are returned in a paginated fashion.
     * @method
     * @name platformSDK#getOrganizationsUsers
     */
    getOrganizationsUsers(): getOrganizationsUsersParameters {
        return new getOrganizationsUsersParameters(this, 'GET', '/organizations/users');
    }

    /**
     * Create a user under the default organization account
     * @method
     * @name platformSDK#createOrganizationUser
     * @param {} body - The user to create<br/><br/>The required fields are:<br/><ul><li><b>email</b> - The user's email address</li><li><b>firstName</b> - The user's first name</li><li><b>lastName</b> - The user's last name</li></ul><br/>Upon success, the created object will be returned.
     */
    createOrganizationUser(
        body:
        User

        ,
    ): createOrganizationUserParameters {
        return new createOrganizationUserParameters(this, 'POST', '/organizations/users', body);
    }

    /**
     * Retrieve a user associated with an email or ID within the default organization.  Specifying a user associated with a given emailOrId that does not exist will result in an error response.
     * @method
     * @name platformSDK#getOrganizationsUserByEmailOrId
     * @param {string} emailOrId - The email address or numeric ID of the user
     */
    getOrganizationsUserByEmailOrId(
        emailOrId: string

        ,
    ): getOrganizationsUserByEmailOrIdParameters {
        return new getOrganizationsUserByEmailOrIdParameters(this, 'GET', '/organizations/users/{emailOrId:.+}', emailOrId);
    }

    /**
     * Delete a user associated with an ID within your organization. WARNING: This action will irreversibly delete all jobs, and formula and element instances associated with the user.
     * @method
     * @name platformSDK#deleteOrganizationsUserById
     * @param {integer} id - The ID of the user
     */
    deleteOrganizationsUserById(
        id: number

        ,
    ): deleteOrganizationsUserByIdParameters {
        return new deleteOrganizationsUserByIdParameters(this, 'DELETE', '/organizations/users/{id}', id);
    }

    /**
     * Update a user associated with an ID within your organization. WARNING: If updating the 'active' field to false, all of the scheduled jobs for the user will be deleted.
     * @method
     * @name platformSDK#updateOrganizationsUserById
     * @param {integer} id - The ID of the user
     * @param {} body - The updated user information
     */
    updateOrganizationsUserById(
        id: number

        ,
        body:
        User

        ,
    ): updateOrganizationsUserByIdParameters {
        return new updateOrganizationsUserByIdParameters(this, 'PATCH', '/organizations/users/{id}', id, body);
    }

    /**
     * Create a new account within an organization. NOTE: Only a user with the 'org-admin' privilege within the organization, or the 'customer-admin' privilege within the customer is able to use this API.
     * @method
     * @name platformSDK#createOrganizationAccount
     * @param {integer} id - The ID of the organization
     * @param {} account - The account to create.
     */
    createOrganizationAccount(
        id: number

        ,
        account:
        Account_POST

        ,
    ): createOrganizationAccountParameters {
        return new createOrganizationAccountParameters(this, 'POST', '/organizations/{id}/accounts', id, account);
    }

    /**
     * Retrieve all the accounts within an organization. NOTE: Only a user with the 'org-admin' privilege within the organization, or the 'customer-admin' privilege within the customer is able to use this API.
     * @method
     * @name platformSDK#getOrganizationsAccounts
     * @param {integer} id - The ID of the organization
     */
    getOrganizationsAccounts(
        id: number

        ,
    ): getOrganizationsAccountsParameters {
        return new getOrganizationsAccountsParameters(this, 'GET', '/organizations/{id}/accounts', id);
    }

    /**
     * Retrieve an account within an organization NOTE: Only a user with the 'org-admin' privilege within the organization, or the 'customer-admin' privilege within the customer is able to use this API.
     * @method
     * @name platformSDK#getOrganizationsAccountByAccountId
     * @param {integer} id - The ID of the organization
     * @param {integer} accountId - The ID of the account
     */
    getOrganizationsAccountByAccountId(
        id: number

        ,
        accountId: number

        ,
    ): getOrganizationsAccountByAccountIdParameters {
        return new getOrganizationsAccountByAccountIdParameters(this, 'GET', '/organizations/{id}/accounts/{accountId}', id, accountId);
    }

    /**
     * Retrieve the usage logs for your account. 
     * @method
     * @name platformSDK#getUsage
     */
    getUsage(): getUsageParameters {
        return new getUsageParameters(this, 'GET', '/usage');
    }

    /**
     * Retrieve the number of element API calls within a given date/time range
     * @method
     * @name platformSDK#getUsageAnalyticsActivity
     * @param {string} from - Start time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     * @param {string} to - End time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     */
    getUsageAnalyticsActivity(
        from: string

        ,
        to: string

        ,
    ): getUsageAnalyticsActivityParameters {
        return new getUsageAnalyticsActivityParameters(this, 'GET', '/usage/analytics/activity', from, to);
    }

    /**
     * Retrieve the number of element API calls for each element within a given date/time range
     * @method
     * @name platformSDK#getUsageAnalyticsActivityElements
     * @param {string} from - Start time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     * @param {string} to - End time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     */
    getUsageAnalyticsActivityElements(
        from: string

        ,
        to: string

        ,
    ): getUsageAnalyticsActivityElementsParameters {
        return new getUsageAnalyticsActivityElementsParameters(this, 'GET', '/usage/analytics/activity/elements', from, to);
    }

    /**
     * Retrieve the number of successes and failures of element API calls within a given date/time range.
     * @method
     * @name platformSDK#getUsageAnalyticsStatuses
     * @param {string} from - Start time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     * @param {string} to - End time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     */
    getUsageAnalyticsStatuses(
        from: string

        ,
        to: string

        ,
    ): getUsageAnalyticsStatusesParameters {
        return new getUsageAnalyticsStatusesParameters(this, 'GET', '/usage/analytics/statuses', from, to);
    }

    /**
     * Retrieve the response times of element API calls within a given date/time range
     * @method
     * @name platformSDK#getUsageAnalyticsTimes
     * @param {string} from - Start time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     * @param {string} to - End time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     */
    getUsageAnalyticsTimes(
        from: string

        ,
        to: string

        ,
    ): getUsageAnalyticsTimesParameters {
        return new getUsageAnalyticsTimesParameters(this, 'GET', '/usage/analytics/times', from, to);
    }

    /**
     * Retrieve the usage record by id
     * @method
     * @name platformSDK#getUsageById
     * @param {string} id - The ID of log record
     */
    getUsageById(
        id: string

        ,
    ): getUsageByIdParameters {
        return new getUsageByIdParameters(this, 'GET', '/usage/{id}', id);
    }

    /**
     * Retrieve users within your account or organization.  Find users within your account or organization, using the provided CEQL search expression or the where clause, without the WHERE keyword, in a typical SQL query. For example, to search for users containing the name 'greg', the search expression will be where name='greg'. When this parameter is omitted, all accounts are returned in a paginated fashion.
     * @method
     * @name platformSDK#getUsers
     */
    getUsers(): getUsersParameters {
        return new getUsersParameters(this, 'GET', '/users');
    }

    /**
     * Retrieve a user associated with a given email or ID within your account or organization.  Specifying a user associated with a given email or ID that does not exist will result in an error response.
     * @method
     * @name platformSDK#getUserByEmailOrId
     * @param {string} emailOrId - The email address or numeric ID of the user
     */
    getUserByEmailOrId(
        emailOrId: string

        ,
    ): getUserByEmailOrIdParameters {
        return new getUserByEmailOrIdParameters(this, 'GET', '/users/{emailOrId}', emailOrId);
    }

    /**
     * Delete a user associated with a given ID within your account or organization. WARNING: This action will delete all formula and element instances associated with the user, and is irreversible. Specifying a user associated with a given ID that does not exist will result in an error response.
     * @method
     * @name platformSDK#deleteUserById
     * @param {integer} id - The ID of the user
     */
    deleteUserById(
        id: number

        ,
    ): deleteUserByIdParameters {
        return new deleteUserByIdParameters(this, 'DELETE', '/users/{id}', id);
    }

    /**
     * Update a user associated with a given email or ID within your account or organization.  Specifying a user associated with a given email or ID that does not exist will result in an error response.
     * @method
     * @name platformSDK#updateUserById
     * @param {integer} id - The ID of the user
     * @param {} body - The updated user information
     */
    updateUserById(
        id: number

        ,
        body:
        User

        ,
    ): updateUserByIdParameters {
        return new updateUserByIdParameters(this, 'PATCH', '/users/{id}', id, body);
    }

    /**
     * Retrieve the roles that a user has been granted. This will return the effective roles, meaning the role could have been granted at the user level OR at the account level.
     * @method
     * @name platformSDK#getUsersRoles
     * @param {number} id - The ID of the user.
     */
    getUsersRoles(
        id: number

        ,
    ): getUsersRolesParameters {
        return new getUsersRolesParameters(this, 'GET', '/users/{id}/roles', id);
    }

    /**
     * Revoke a role from a user. This will only remove roles granted directly to the user, and will not affect roles that may have been granted at the account level.
     * @method
     * @name platformSDK#deleteUsersRoleByRoleKey
     * @param {number} userId - The ID of the user from which the role will be revoked.
     * @param {string} roleKey - The key of the role to revoke (org-admin, org, or admin)
     */
    deleteUsersRoleByRoleKey(
        userId: number

        ,
        roleKey: string

        ,
    ): deleteUsersRoleByRoleKeyParameters {
        return new deleteUsersRoleByRoleKeyParameters(this, 'DELETE', '/users/{userId}/roles/{roleKey}', userId, roleKey);
    }

    /**
     * Grant a role to a user.
     * @method
     * @name platformSDK#replaceUsersRoleByRoleKey
     * @param {number} userId - The ID of the user to which the role will be granted.
     * @param {string} roleKey - The key of the role to grant (org-admin, org, or admin)
     */
    replaceUsersRoleByRoleKey(
        userId: number

        ,
        roleKey: string

        ,
    ): replaceUsersRoleByRoleKeyParameters {
        return new replaceUsersRoleByRoleKeyParameters(this, 'PUT', '/users/{userId}/roles/{roleKey}', userId, roleKey);
    }
}