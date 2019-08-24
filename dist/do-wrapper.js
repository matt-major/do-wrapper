'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_helper_1 = __importDefault(require("./request-helper"));
var DigitalOcean = /** @class */ (function () {
    /**
     * Digital Ocean API Wrapper
     * @param {string} token - Your Private API Token
     * @param {number} perPage - Page Size of results to return
     * @constructor
     */
    function DigitalOcean(token, perPage) {
        this.perPage = perPage;
        this.requestHelper = new request_helper_1.default(token);
    }
    DigitalOcean.prototype._handleRequest = function (options, callback) {
        return this.requestHelper.request(options, callback);
    };
    /**
     * Get Account Information
     * Info {@link https://developers.digitalocean.com/documentation/v2/#account account}
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.account = function (callback) {
        var options = { actionPath: 'account' };
        return this._handleRequest(options, callback);
    };
    /**
     * Get Account Actions
     * Info {@link https://developers.digitalocean.com/documentation/v2/#list-all-actions list-all-actions}
     * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.accountGetActions = function (query, callback) {
        var options = {
            actionPath: 'actions',
            key: 'actions',
            qs: {
                tag_name: (query) ? (query.tag_name || '') : '',
                per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
                page: (query) ? (query.page || 1) : 1
            },
            includeAll: (query) ? (query.includeAll || false) : false
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get Action Information for Account
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-action retrieve-an-existing-action}
     *
     * @param {number} actionId - The Id of the Action
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.accountGetAction = function (actionId, callback) {
        var options = { actionPath: "actions/" + encodeURIComponent(actionId) };
        return this._handleRequest(options, callback);
    };
    /**
     * List all SSH Keys
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-keys list-all-keys}
     *
     * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.accountGetKeys = function (query, callback) {
        var options = {
            actionPath: 'account/keys',
            key: 'ssh_keys',
            qs: {
                tag_name: (query) ? (query.tag_name || '') : '',
                per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
                page: (query) ? (query.page || 1) : 1
            },
            includeAll: (query) ? (query.includeAll || false) : false
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Add a new SSH Key
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-key create-a-new-key}
     *
     * @param {*} configuration - Information required to create SSH Key | {name: ?, public_key: ?}
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.accountAddKey = function (configuration, callback) {
        var options = {
            actionPath: 'account/keys',
            method: 'POST',
            body: configuration
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get an SSH Key via its Id
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-key retrieve-an-existing-key}
     *
     * @param {number} keyId - The Id of the Key
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.accountGetKeyById = function (keyId, callback) {
        var options = { actionPath: "account/keys/" + encodeURIComponent(keyId) };
        return this._handleRequest(options, callback);
    };
    /**
     * Get an SSH Key via its Fingerprint
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-key retrieve-an-existing-key}
     *
     * @param {string} fingerprint - The Fingerprint of the Key
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.accountGetKeyByFingerprint = function (fingerprint, callback) {
        var options = { actionPath: "account/keys/" + encodeURIComponent(fingerprint) };
        return this._handleRequest(options, callback);
    };
    /**
     * Rename a SSH Key
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#update-a-key update-a-key}
     *
     * @param {*} keyIdentity - The Id or Fingerprint of the SSH Key
     * @param {string} keyName - What to rename the SSH Key to
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.accountRenameKey = function (keyIdentity, keyName, callback) {
        var options = {
            actionPath: "account/keys/" + encodeURIComponent(keyIdentity),
            method: 'PUT',
            body: {
                name: keyName
            }
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Delete a SSH Key
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#destroy-a-key destroy-a-key}
     *
     * @param {*} keyIdentity - The Id or Fingerprint of the SSH Key
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.accountDeleteKey = function (keyIdentity, callback) {
        var options = { actionPath: "account/keys/" + encodeURIComponent(keyIdentity), method: 'DELETE' };
        return this._handleRequest(options, callback);
    };
    /**
     * Create a new CDN endpoint
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-cdn-endpoint create-a-new-cdn-endpoint}
     *
     * @param {string} origin - The origin server address (FQDN) which provides the content for the CDN
     * @param {number} ttl - The amount of time (seconds) the content is cached by the CDN's edge servers. Defaults to 3600 (one hour)
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.cdnEndpointCreate = function (origin, ttl, callback) {
        var options = {
            actionPath: 'cdn/endpoints',
            method: 'POST',
            body: { origin: origin, ttl: ttl }
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get information about an existing CDN endpoint
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-cdn-endpoint retrieve-an-existing-cdn-endpoint}
     *
     * @param {string} endpointId - The id of an existing CDN endpoint
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.cdnEndpointGet = function (endpointId, callback) {
        var options = {
            actionPath: "cdn/endpoints/" + encodeURIComponent(endpointId)
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get a list of CDN endpoints
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-cdn-endpoints list-all-cdn-endpoints}
     *
     * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.cdnEndpointGetAll = function (query, callback) {
        var options = {
            actionPath: 'cdn/endpoints',
            key: 'endpoints',
            qs: {
                tag_name: (query) ? (query.tag_name || '') : '',
                per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
                page: (query) ? (query.page || 1) : 1
            },
            includeAll: (query) ? (query.includeAll || false) : false
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Update an existing endpoint
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#update-an-existing-cdn-endpoint update-an-existing-cdn-endpoint}
     *
     * @param {string} endpointId - The id of an existing CDN endpoint
     * @param {number} ttl - The amount of time (seconds) the content is cached by the CDN's edge servers.
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.cdnEndpointUpdate = function (endpointId, ttl, callback) {
        var options = {
            actionPath: "cdn/endpoints/" + encodeURIComponent(endpointId),
            method: 'PUT',
            body: { ttl: ttl }
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Delete a specific CDN endpoint
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-cdn-endpoint delete-a-cdn-endpoint}
     *
     * @param {string} endpointId - The id of an existing CDN endpoint
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.cdnEndpointDelete = function (endpointId, callback) {
        var options = {
            actionPath: "cdn/endpoints/" + encodeURIComponent(endpointId),
            method: 'DELETE'
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Purge cached content from a CDN endpoint
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#purge-the-cache-for-an-existing-cdn-endpoint purge-the-cache-for-an-existing-cdn-endpoint}
     *
     * @param {string} endpointId - The id of an existing CDN endpoint
     * @param {Array} files - An array of strings containing the path to the content to be purged from the CDN cache
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.cdnEndpointPurgeCache = function (endpointId, files, callback) {
        var options = {
            actionPath: "cdn/endpoints/" + encodeURIComponent(endpointId) + "/cache",
            method: 'DELETE',
            body: { files: files }
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get a list of Droplets
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-droplets list-all-droplets}
     *
     * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.dropletsGetAll = function (query, callback) {
        var options = {
            actionPath: 'droplets',
            key: 'droplets',
            qs: {
                tag_name: (query) ? (query.tag_name || '') : '',
                per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
                page: (query) ? (query.page || 1) : 1
            },
            includeAll: (query) ? (query.includeAll || false) : false
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get a list of Kernels available for a Droplet
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-available-kernels-for-a-droplet list-all-available-kernels-for-a-droplet}
     *
     * @param {number} dropletId - The Id of the Droplet
     * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.dropletsGetKernels = function (dropletId, query, callback) {
        var options = {
            actionPath: "droplets/" + encodeURIComponent(dropletId) + "/kernels",
            key: 'kernels',
            qs: {
                tag_name: (query) ? (query.tag_name || '') : '',
                per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
                page: (query) ? (query.page || 1) : 1
            },
            includeAll: (query) ? (query.includeAll || false) : false
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get a list of Snapshots for a Droplet
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-snapshots-for-a-droplet retrieve-snapshots-for-a-droplet}
     *
     * @param {number} dropletId - The Id of the Droplet
     * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.dropletsGetSnapshots = function (dropletId, query, callback) {
        var options = {
            actionPath: "droplets/" + encodeURIComponent(dropletId) + "/snapshots",
            key: 'snapshots',
            qs: {
                tag_name: (query) ? (query.tag_name || '') : '',
                per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
                page: (query) ? (query.page || 1) : 1
            },
            includeAll: (query) ? (query.includeAll || false) : false
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get a list of Backups for a Droplet
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-backups-for-a-droplet list-backups-for-a-droplet}
     *
     * @param {number} dropletId - The Id of the Droplet
     * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.dropletsGetBackups = function (dropletId, query, callback) {
        var options = {
            actionPath: "droplets/" + encodeURIComponent(dropletId) + "/backups",
            key: 'backups',
            qs: {
                tag_name: (query) ? (query.tag_name || '') : '',
                per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
                page: (query) ? (query.page || 1) : 1
            },
            includeAll: (query) ? (query.includeAll || false) : false
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get a list of Actions for a Droplet
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-actions-for-a-droplet list-actions-for-a-droplet}
     *
     * @param {number} dropletId - The Id of the Droplet
     * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.dropletsGetActions = function (dropletId, query, callback) {
        var options = {
            actionPath: "droplets/" + encodeURIComponent(dropletId) + "/actions",
            key: 'actions',
            qs: {
                tag_name: (query) ? (query.tag_name || '') : '',
                per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
                page: (query) ? (query.page || 1) : 1
            },
            includeAll: (query) ? (query.includeAll || false) : false
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Create a New Droplet
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-droplet create-a-new-droplet}
     *
     * @param {*} configuration - Creation parameters, see info for more details.
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.dropletsCreate = function (configuration, callback) {
        var options = {
            actionPath: 'droplets',
            method: 'POST',
            body: configuration
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get a Droplet by Id
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-droplet-by-id retrieve-an-existing-droplet-by-id}
     *
     * @param {number} dropletId - The Id of the Droplet
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.dropletsGetById = function (dropletId, callback) {
        var options = { actionPath: "droplets/" + encodeURIComponent(dropletId) };
        return this._handleRequest(options, callback);
    };
    /**
     * Delete a Droplet
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-droplet delete-a-droplet}
     *
     * @param {number} dropletId - The Id of the Droplet
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.dropletsDelete = function (dropletId, callback) {
        var options = {
            actionPath: "droplets/" + encodeURIComponent(dropletId),
            method: 'DELETE'
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get a list of Droplet Neighbors
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-neighbors-for-a-droplet list-neighbors-for-a-droplet}
     *
     * @param {number} dropletId - The Id of the Droplet
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.dropletsGetNeighbors = function (dropletId, callback) {
        var options = { actionPath: "droplets/" + encodeURIComponent(dropletId) + "/neighbors" };
        return this._handleRequest(options, callback);
    };
    /**
     * Get a report of Droplets sharing the same hardware
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-droplet-neighbors list-all-droplet-neighbors}
     *
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.dropletsGetNeighborsReport = function (callback) {
        var options = { actionPath: 'reports/droplet_neighbors' };
        return this._handleRequest(options, callback);
    };
    /**
     * Get a list of scheduled Droplet Upgrades
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-droplet-upgrades list-droplet-upgrades}
     *
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.dropletsGetUpgrades = function (callback) {
        var options = { actionPath: 'droplet_upgrades' };
        return this._handleRequest(options, callback);
    };
    /**
     * Request an Action on a Droplet
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#droplet-actions droplet-actions}
     *
     * @param {number} dropletId - The Id of the Droplet
     * @param {*} action - Action Object
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.dropletsRequestAction = function (dropletId, action, callback) {
        var options = {
            actionPath: "droplets/" + encodeURIComponent(dropletId) + "/actions",
            method: 'POST',
            body: action
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get an Action for a Droplet
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-a-droplet-action retrieve-a-droplet-action}
     *
     * @param {number} dropletId - The Id of the Droplet
     * @param {number} actionId - The Id of the Action
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.dropletsGetAction = function (dropletId, actionId, callback) {
        var options = { actionPath: "droplets/" + encodeURIComponent(dropletId) + "/actions/" + encodeURIComponent(actionId) };
        return this._handleRequest(options, callback);
    };
    /**
     * Get all Domains
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-domains list-all-domains}
     *
     * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.domainsGetAll = function (query, callback) {
        var options = {
            actionPath: 'domains',
            key: 'domains',
            qs: {
                tag_name: (query) ? ((query) ? (query.tag_name || '') : '') : '',
                per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
                page: (query) ? (query.page || 1) : 1
            },
            includeAll: (query) ? (query.includeAll || false) : false
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Add a new Domain
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-domain create-a-new-domain}
     *
     * @param {string} name - Domain Name
     * @param {string} ip - The Ip of the Droplet
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.domainsCreate = function (name, ip, callback) {
        var options = {
            actionPath: 'domains',
            method: 'POST',
            body: { name: name, ip_address: ip }
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get a Domain
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-domain retrieve-an-existing-domain}
     *
     * @param {string} name - The Domain Name
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.domainsGet = function (name, callback) {
        var options = {
            actionPath: "domains/" + encodeURIComponent(name)
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Delete a Domain
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-domain delete-a-domain}
     *
     * @param {string} name - The Domain Name
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.domainsDelete = function (name, callback) {
        var options = {
            actionPath: "domains/" + encodeURIComponent(name),
            method: 'DELETE'
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get all Domain Records for a Domain
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-domain-records list-all-domain-records}
     *
     * @param {string} name - The Domain Name
     * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.domainRecordsGetAll = function (name, query, callback) {
        var options = {
            actionPath: "domains/" + encodeURIComponent(name) + "/records",
            key: 'domain_records',
            qs: {
                tag_name: (query) ? (query.tag_name || '') : '',
                per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
                page: (query) ? (query.page || 1) : 1
            },
            includeAll: (query) ? (query.includeAll || false) : false
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Create a new Domain Record on a Domain
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-domain-record create-a-new-domain-record}
     *
     * @param {string} name - The Domain Name
     * @param {*} configuration - Data required to create the Domain Record
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.domainRecordsCreate = function (name, configuration, callback) {
        var options = {
            actionPath: "domains/" + encodeURIComponent(name) + "/records",
            method: 'POST',
            body: configuration
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get a single Domain Record
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-domain-record retrieve-an-existing-domain-record}
     *
     * @param {string} name - The Domain Name
     * @param {number} domainRecordId - The Id of the Domain Record
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.domainRecordsGet = function (name, domainRecordId, callback) {
        var options = { actionPath: "domains/" + encodeURIComponent(name) + "/records/" + encodeURIComponent(domainRecordId) };
        return this._handleRequest(options, callback);
    };
    /**
     * Update a Domain Record
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#update-a-domain-record update-a-domain-record}
     *
     * @param {string} name - The Domain Name
     * @param {number} domainRecordId - The Id of the Domain Record
     * @param {*} configuration - Data required to update the Domain Record
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.domainRecordsUpdate = function (name, domainRecordId, configuration, callback) {
        var options = {
            actionPath: "domains/" + encodeURIComponent(name) + "/records/" + encodeURIComponent(domainRecordId),
            method: 'PUT',
            body: configuration
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Delete a Domain Record
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-domain-record delete-a-domain-record}
     *
     * @param {string} name - The Domain Name
     * @param {number} domainRecordId - The Id of the Domain Record
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.domainRecordsDelete = function (name, domainRecordId, callback) {
        var options = {
            actionPath: "domains/" + encodeURIComponent(name) + "/records/" + encodeURIComponent(domainRecordId),
            method: 'DELETE'
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get all Regions
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-regions list-all-regions}
     *
     * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.regionsGetAll = function (query, callback) {
        var options = {
            actionPath: 'regions',
            key: 'regions',
            qs: {
                tag_name: (query) ? (query.tag_name || '') : '',
                per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
                page: (query) ? (query.page || 1) : 1
            },
            includeAll: (query) ? (query.includeAll || false) : false
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get all Droplet sizes
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-sizes list-all-sizes}
     *
     * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.sizesGetAll = function (query, callback) {
        var options = {
            actionPath: 'sizes',
            key: 'sizes',
            qs: {
                tag_name: (query) ? (query.tag_name || '') : '',
                per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
                page: (query) ? (query.page || 1) : 1
            },
            includeAll: (query) ? (query.includeAll || false) : false
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get all Images
     * Include type=[distribution,application] or private=true in the query object to limit results.
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-images list-all-images}
     *
     * @param {{per_page: number, page: number, includeAll: boolean, private: boolean}} query - Query Options
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.imagesGetAll = function (query, callback) {
        var options = {
            actionPath: 'images',
            key: 'images',
            qs: {
                tag_name: (query) ? (query.tag_name || '') : '',
                per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
                page: (query) ? (query.page || 1) : 1,
                private: (query) ? (query.private || false) : false,
                type: (query) ? (query.type || null) : null
            },
            includeAll: (query) ? (query.includeAll || false) : false
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get an Image using its Id
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-by-id retrieve-an-existing-image-by-id}
     *
     * @param {number} imageId - The Id of the Image
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.imagesGetById = function (imageId, callback) {
        var options = { actionPath: "images/" + encodeURIComponent(imageId) };
        return this._handleRequest(options, callback);
    };
    /**
     * Get an Image using its Slug
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-by-slug retrieve-an-existing-image-by-slug}
     *
     * @param {string} slug - The Slug of the Image
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.imagesGetBySlug = function (slug, callback) {
        var options = { actionPath: "images/" + encodeURIComponent(slug) };
        return this._handleRequest(options, callback);
    };
    /**
     * Get all Actions for an Image
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-actions-for-an-image list-all-actions-for-an-image}
     *
     * @param {number} imageId - The Id of the Image
     * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.imagesGetActions = function (imageId, query, callback) {
        var options = {
            actionPath: "images/" + encodeURIComponent(imageId) + "/actions",
            key: 'actions',
            qs: {
                tag_name: (query) ? (query.tag_name || '') : '',
                per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
                page: (query) ? (query.page || 1) : 1
            },
            includeAll: (query) ? (query.includeAll || false) : false
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Update the name of an Image
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#update-an-image update-an-image}
     *
     * @param {number} imageId - The Id of the Image
     * @param {string} name - The Name to update the Image to
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.imagesUpdate = function (imageId, name, callback) {
        var options = {
            actionPath: "images/" + encodeURIComponent(imageId),
            body: { name: name },
            method: 'PUT'
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Delete an Image
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-an-image delete-an-image}
     *
     * @param {number} imageId - The Id of the Image
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.imagesDelete = function (imageId, callback) {
        var options = {
            actionPath: "images/" + encodeURIComponent(imageId),
            method: 'DELETE'
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Request an Action on an Image
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#image-actions image-actions}
     *
     * @param {number} imageId - The Id of the Image
     * @param {*} action - Action Options
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.imagesRequestAction = function (imageId, action, callback) {
        var options = {
            actionPath: "images/" + encodeURIComponent(imageId) + "/actions",
            method: 'POST',
            body: action
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get the status of an Action
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-action retrieve-an-existing-image-action}
     *
     * @param {number} imageId - The Id of the Image
     * @param {number} actionId - The Id of the Action
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.imagesGetAction = function (imageId, actionId, callback) {
        var options = { actionPath: "images/" + encodeURIComponent(imageId) + "/actions/" + encodeURIComponent(actionId) };
        return this._handleRequest(options, callback);
    };
    /**
     * Get all Floating IPs
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-floating-ips list-all-floating-ips}
     *
     * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.floatingIpsGetAll = function (query, callback) {
        var options = {
            actionPath: 'floating_ips',
            key: 'floating_ips',
            qs: {
                tag_name: (query) ? (query.tag_name || '') : '',
                per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
                page: (query) ? (query.page || 1) : 1
            },
            includeAll: (query) ? (query.includeAll || false) : false
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Create and assign a Floating IP to a specific droplet.
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-floating-ip-assigned-to-a-droplet create-a-new-floating-ip-assigned-to-a-droplet}
     *
     * @param {number} dropletId - The ID of Droplet that the Floating IP will be assigned to.
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.floatingIpsAssignDroplet = function (dropletId, callback) {
        var options = {
            actionPath: 'floating_ips',
            method: 'POST',
            body: {
                droplet_id: dropletId
            }
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Create and assign a Floating IP to a region.
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-floating-ip-reserved-to-a-region create-a-new-floating-ip-reserved-to-a-region}
     *
     * @param {string} region - The slug identifier for the region the Floating IP will be reserved to.
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.floatingIpsAssignRegion = function (region, callback) {
        var options = {
            actionPath: 'floating_ips',
            method: 'POST',
            body: {
                region: region
            }
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Retrieve an existing Floating IP
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-floating-ip retrieve-an-existing-floating-ip}
     *
     * @param {string} ipAddress - Floating IP address.
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.floatingIpsGet = function (ipAddress, callback) {
        var options = { actionPath: "floating_ips/" + encodeURIComponent(ipAddress) };
        return this._handleRequest(options, callback);
    };
    /**
     * Delete a Floating IP
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-floating-ips delete-a-floating-ips}
     *
     * @param {string} ipAddress - Floating IP address
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.floatingIpsDelete = function (ipAddress, callback) {
        var options = { actionPath: "floating_ips/" + encodeURIComponent(ipAddress), method: 'DELETE' };
        return this._handleRequest(options, callback);
    };
    /**
     * Request an action on a Floating IP
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#floating-ip-actions floating-ip-actions}
     *
     * @param {string} ipAddress - Floating IP address
     * @param {*} action - Action options
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.floatingIpsRequestAction = function (ipAddress, action, callback) {
        var options = {
            actionPath: "floating_ips/" + encodeURIComponent(ipAddress) + "/actions",
            method: 'POST',
            body: action
        };
        return this._handleRequest(options, callback);
    };
    /**
     * List all actions for a Floating IP
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-actions-for-a-floating-ip list-all-actions-for-a-floating-ip}
     *
     * @param {string} ipAddress - Floating IP address
     * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.floatingIpsGetActions = function (ipAddress, query, callback) {
        var options = {
            actionPath: "floating_ips/" + encodeURIComponent(ipAddress) + "/actions",
            key: 'actions',
            qs: {
                tag_name: (query) ? (query.tag_name || '') : '',
                per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
                page: (query) ? (query.page || 1) : 1
            },
            includeAll: (query) ? (query.includeAll || false) : false
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Retrieve an existing Floating IP action
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-floating-ip-action retrieve-an-existing-floating-ip-action}
     *
     * @param {string} ipAddress - Floating IP address
     * @param {number} actionId - The Id of the action
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.floatingIpsGetAction = function (ipAddress, actionId, callback) {
        var options = { actionPath: "floating_ips/" + encodeURIComponent(ipAddress) + "/actions/" + encodeURIComponent(actionId) };
        return this._handleRequest(options, callback);
    };
    /**
     * Add a new Tag
     * Info: {@link https://developers.digitalocean.com/documentation/v2/tagging-preview/#create-a-new-tag create-a-new-tag}
     *
     * @param {string} name - Tag Name
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.tagsCreate = function (name, callback) {
        var options = {
            actionPath: 'tags',
            method: 'POST',
            body: { name: name }
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Delete a Tag
     * Info: {@link https://developers.digitalocean.com/documentation/v2/tagging-preview/#delete-a-tag delete-a-tag}
     *
     * @param {string} name - Tag Name
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.tagsDelete = function (name, callback) {
        var options = { actionPath: "tags/" + encodeURIComponent(name), method: 'DELETE' };
        return this._handleRequest(options, callback);
    };
    /**
     * Get a Tag
     * Info: {@link https://developers.digitalocean.com/documentation/v2/tagging-preview/#retrieve-a-tag retrieve-a-tag}
     *
     * @param {string} name - The Tag Name
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.tagsGet = function (name, callback) {
        var options = { actionPath: "tags/" + encodeURIComponent(name) };
        return this._handleRequest(options, callback);
    };
    /**
     * Get all Tags
     * Info: {@link https://developers.digitalocean.com/documentation/v2/tagging-preview/#list-all-tags list-all-tags}
     *
     * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.tagsGetAll = function (query, callback) {
        var options = {
            actionPath: 'tags',
            key: 'tags',
            qs: {
                tag_name: (query) ? (query.tag_name || '') : '',
                per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
                page: (query) ? (query.page || 1) : 1
            },
            includeAll: (query) ? (query.includeAll || false) : false
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Tag resources
     * Info: {@link https://developers.digitalocean.com/documentation/v2/tagging-preview/#tag-a-resource tag-a-resource}
     *
     * @param {string} name - The Tag Name
     * @param {*} configuration - Array of objects which identify the resources to tag
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.tagsAddResources = function (name, configuration, callback) {
        var options = {
            actionPath: "tags/" + encodeURIComponent(name) + "/resources",
            method: 'POST',
            body: configuration
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Untag a resource
     * Info: {@link https://developers.digitalocean.com/documentation/v2/tagging-preview/#untag-a-resource untag-a-resource}
     *
     * @param {string} name - The Tag Name
     * @param {*} configuration - Array of objects which identify the resources to untag
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.tagsDeleteResource = function (name, configuration, callback) {
        var options = {
            actionPath: "tags/" + encodeURIComponent(name) + "/resources",
            method: 'DELETE',
            body: configuration
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get Droplets by Tag
     *
     * Info: {@link https://developers.digitalocean.com/documentation/v2/tagging-preview/#listing-droplets-by-tag listing-droplets-by-tag}
     *
     * @param {string} name - The Tag Name
     * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.tagsGetDroplets = function (name, query, callback) {
        var options = {
            actionPath: 'droplets',
            key: 'droplets',
            qs: {
                per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
                page: (query) ? (query.page || 1) : 1,
                tag_name: name
            },
            includeAll: (query) ? (query.includeAll || false) : false
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Delete Droplets by Tag
     *
     * Info: {@link https://developers.digitalocean.com/documentation/v2/tagging-preview/#deleting-droplets-by-tag deleting-droplets-by-tag}
     *
     * @param {string} name - The Tag Name
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.tagsDeleteDroplets = function (name, callback) {
        var options = {
            actionPath: 'droplets',
            method: 'DELETE',
            qs: {
                tag_name: name
            }
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Request an Action on a tag's Droplets
     * Info: {@link https://developers.digitalocean.com/documentation/v2/tagging-preview/#acting-on-tagged-droplets acting-on-tagged-droplets}
     *
     * @param {string} name - The Tag Name
     * @param {*} action - Action Object
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.tagsRequestAction = function (name, action, callback) {
        var options = {
            actionPath: 'droplets/actions',
            method: 'POST',
            qs: {
                tag_name: name
            },
            body: action
        };
        return this._handleRequest(options, callback);
    };
    /**
     * List all of the Block Storage Volumes available on your account
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-block-storage-volumes list-all-block-storage-volumes}
     *
     * @param {string} [region] - Optional Region Name Filter
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.volumes = function (region, callback) {
        var options = {
            actionPath: 'volumes',
            method: 'GET',
            qs: {
                region: region || ''
            }
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Create a new Block Storage Volume in a particular region
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-block-storage-volume create-a-new-block-storage-volume}
     *
     * @param {Object} volume - Volume configuration to create
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.volumesCreate = function (volume, callback) {
        var options = {
            actionPath: 'volumes',
            method: 'POST',
            body: volume
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Show information about a Block Storage Volume based on its ID
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-block-storage-volume retrieve-an-existing-block-storage-volume}
     *
     * @param {string} driveId - ID of the Volume Drive
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.volumesGetById = function (driveId, callback) {
        var options = { actionPath: "volumes/" + driveId, method: 'GET' };
        return this._handleRequest(options, callback);
    };
    /**
     * Show information about a Block Storage Volume based on its Name and Region
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-block-storage-volume-by-name retrieve-an-existing-block-storage-volume-by-name}
     *
     * @param {string} name - Name of the Block Storage Volume
     * @param {string} region - Region of the Block Storage Volume
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.volumesGetByName = function (name, region, callback) {
        var options = {
            actionPath: 'volumes',
            method: 'GET',
            qs: {
                name: name,
                region: region
            }
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Delete a Block Storage Volume based on its ID
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-block-storage-volume delete-a-block-storage-volume}
     *
     * @param {string} driveId - ID of the Block Storage Volume Drive
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.volumesDeleteById = function (driveId, callback) {
        var options = { actionPath: "volumes/" + driveId, method: 'DELETE' };
        return this._handleRequest(options, callback);
    };
    /**
     * Delete a Block Storage Volume based on its Name and Region
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-block-storage-volume-by-name delete-a-block-storage-volume-by-name}
     *
     * @param {string} name - Name of the Block Storage Volume
     * @param {string} region - Region of the Block Storage Volume
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.volumesDeleteByName = function (name, region, callback) {
        var options = {
            actionPath: 'volumes',
            method: 'DELETE',
            qs: {
                name: name,
                region: region
            }
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Request an Action on a Volume
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#block-storage-actions block-storage-actions}
     *
     * @param {number} volumeId - The Id of the Volume
     * @param {*} action - Action Object
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.volumesRequestAction = function (volumeId, action, callback) {
        var options = {
            actionPath: "volumes/" + encodeURIComponent(volumeId) + "/actions",
            method: 'POST',
            body: action
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Create a new Load Balancer
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-load-balancer load-balancer-create}
     *
     * @param {Object} data - Load Balancer configuration data
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.loadBalancersCreate = function (data, callback) {
        var options = {
            actionPath: 'load_balancers',
            method: 'POST',
            body: data
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get an existing Load Balancer using its Id
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-load-balancer load-balancer-get-by-id}
     *
     * @param {string} loadBalancerId - The Id of the Load Balancer
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.loadBalancersGetById = function (loadBalancerId, callback) {
        var options = { actionPath: "load_balancers/" + loadBalancerId };
        return this._handleRequest(options, callback);
    };
    /**
     * Get a list of existing Load Balancers
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-load-balancers load-balancers-get-all}
     *
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.loadBalancers = function (callback) {
        var options = { actionPath: 'load_balancers' };
        return this._handleRequest(options, callback);
    };
    /**
     * Update an existing Load Balancer using its Id
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#update-a-load-balancer load-balancers-update}
     *
     * @param {string} loadBalancerId - The Id of the Load Balancer
     * @param {Object} data - Load Balancer configuration data
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.loadBalancersUpdateById = function (loadBalancerId, data, callback) {
        var options = {
            actionPath: "load_balancers/" + loadBalancerId,
            method: 'PUT',
            body: data
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Delete an existing Load Balancer using its Id
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-load-balancer load-balancers-delete}
     *
     * @param {string} loadBalancerId - The Id of the Load Balancer
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.loadBalancersDelete = function (loadBalancerId, callback) {
        var options = { actionPath: "load_balancers/" + loadBalancerId, method: 'DELETE' };
        return this._handleRequest(options, callback);
    };
    /**
     * Add Droplets to an existing Load Balancer using its Id
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#add-droplets-to-a-load-balancer load-balancers-add-droplets}
     *
     * @param {string} loadBalancerId - The Id of the Load Balancer
     * @param {Array} dropletIds - The Droplet Ids
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.loadBalancersAddDroplets = function (loadBalancerId, dropletIds, callback) {
        var options = {
            actionPath: "load_balancers/" + loadBalancerId + "/droplets",
            method: 'POST',
            body: {
                droplet_ids: dropletIds
            }
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Remove Droplets from an existing Load Balancer using its Id
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#remove-droplets-from-a-load-balancer load-balancers-remove-droplets}
     *
     * @param {string} loadBalancerId - The Id of the Load Balancer
     * @param {Array} dropletIds - The Droplet Ids
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.loadBalancersRemoveDroplets = function (loadBalancerId, dropletIds, callback) {
        var options = {
            actionPath: "load_balancers/" + loadBalancerId + "/droplets",
            method: 'DELETE',
            body: {
                droplet_ids: dropletIds
            }
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Add a Forwarding Rule to an existing Load Balancer using its Id
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#add-forwarding-rules-to-a-load-balancer load-balancers-add-forwarding-rule}
     *
     * @param {string} loadBalancerId - The Id of the Load Balancer
     * @param {Object} forwardingRules - The Forwarding Rule objects to add to the Load Balancer
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.loadBalancersAddForwardingRule = function (loadBalancerId, forwardingRules, callback) {
        var options = {
            actionPath: "load_balancers/" + loadBalancerId + "/forwarding_rules",
            method: 'POST',
            body: {
                forwarding_rules: forwardingRules
            }
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Remove a Forwarding Rule to an existing Load Balancer using its Id
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#add-forwarding-rules-to-a-load-balancer load-balancers-add-forwarding-rule}
     *
     * @param {string} loadBalancerId - The Id of the Load Balancer
     * @param {Object} forwardingRules - The Forwarding Rule objects to remove from the Load Balancer
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.loadBalancersRemoveForwardingRule = function (loadBalancerId, forwardingRules, callback) {
        var options = {
            actionPath: "load_balancers/" + loadBalancerId + "/forwarding_rules",
            method: 'DELETE',
            body: {
                forwarding_rules: forwardingRules
            }
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Create a new Firewall
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-firewall firewall-create-new}
     *
     * @param {Object} firewallData
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.firewallsCreate = function (firewallData, callback) {
        var options = {
            actionPath: 'firewalls',
            method: 'POST',
            body: firewallData
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Retrieve an existing Firewall using its Id
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-firewall firewall-get-by-id}
     *
     * @param {string} firewallId - The Id of the Firewall to retrieve
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.firewallsGetById = function (firewallId, callback) {
        var options = { actionPath: "firewalls/" + firewallId };
        return this._handleRequest(options, callback);
    };
    /**
     * Retrieve a list of Firewalls
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-firewalls firealls-get-all}
     *
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.firewalls = function (callback) {
        var options = { actionPath: 'firewalls' };
        return this._handleRequest(options, callback);
    };
    /**
     * Update a Firewall using its Id
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#update-a-firewall firewalls-update-by-id}
     *
     * @param {string} firewallId - The Id of the Firewall
     * @param {Object} firewallData - The Firewall update data
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.firewallsUpdateById = function (firewallId, firewallData, callback) {
        var options = {
            actionPath: "firewalls/" + firewallId,
            method: 'PUT',
            body: firewallData
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Delete a Firewall using its Id
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-firewall firewalls-delete-by-id}
     *
     * @param {string} firewallId - The Id of the Firewall
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.firewallsDeleteById = function (firewallId, callback) {
        var options = {
            actionPath: "firewalls/" + firewallId,
            method: 'DELETE'
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Add Droplets to an existing Firewall
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#add-droplets-to-a-firewall firewalls-add-droplets}
     *
     * @param {string} firewallId - The Id of the Firewall
     * @param {Array<number>} dropletIds - The Droplet Ids
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.firewallsAddDroplets = function (firewallId, dropletIds, callback) {
        var options = {
            actionPath: "firewalls/" + firewallId + "/droplets",
            method: 'POST',
            body: {
                droplet_ids: dropletIds
            }
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Remove Droplets from an existing Firewall
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#remove-droplets-from-a-firewall firewalls-remove-droplets}
     *
     * @param {string} firewallId - The Id of the Firewall
     * @param {Array<number>} dropletIds - The Droplet Ids
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.firewallsRemoveDroplets = function (firewallId, dropletIds, callback) {
        var options = {
            actionPath: "firewalls/" + firewallId + "/droplets",
            method: 'DELETE',
            body: {
                droplet_ids: dropletIds
            }
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Add Tags to an existing Firewall
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#add-tags-to-a-firewall firealls-add-tags}
     *
     * @param {string} firewallId - The Id of the Firewall
     * @param {Array<string>} tags - The Tags to add to the Firewall
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.firewallsAddTags = function (firewallId, tags, callback) {
        var options = {
            actionPath: "firewalls/" + firewallId + "/tags",
            method: 'POST',
            body: {
                tags: tags
            }
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Remove Tags from an existing Firewall
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#remove-tags-from-a-firewall firewalls-remove-tags}
     *
     * @param {string} firewallId - The Id of the Firewall
     * @param {Array<string>} tags - The Tags to remove from the Firewall
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.firewallsRemoveTags = function (firewallId, tags, callback) {
        var options = {
            actionPath: "firewalls/" + firewallId + "/tags",
            method: 'DELETE',
            body: {
                tags: tags
            }
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Add Rules to an existing Firewall
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#add-rules-to-a-firewall firewalls-add-rules}
     *
     * @param {string} firewallId - The Id of the Firewall
     * @param {object} rules - The Rules to add to the Firewall
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.firewallsAddRules = function (firewallId, rules, callback) {
        var options = {
            actionPath: "firewalls/" + firewallId + "/rules",
            method: 'POST',
            body: rules
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Remove Rules from an existing Firewall
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#remove-rules-from-a-firewall firewalls-remove-rules}
     *
     * @param {string} firewallId - The Id of the Firewall
     * @param {object} rules - The Rules to remove from the Firewall
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.firewallsRemoveRules = function (firewallId, rules, callback) {
        var options = {
            actionPath: "firewalls/" + firewallId + "/rules",
            method: 'DELETE',
            body: rules
        };
        return this._handleRequest(options, callback);
    };
    /**
     * List all snapshots
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-snapshots list-all-snapshots}
     *
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.snapshots = function (callback) {
        var options = { actionPath: 'snapshots' };
        return this._handleRequest(options, callback);
    };
    /**
     * List all Droplet snapshots
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-droplet-snapshots list-all-droplet-snapshots}
     *
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.snapshotsDroplets = function (callback) {
        var options = {
            actionPath: 'snapshots',
            qs: {
                resource_type: 'droplet'
            }
        };
        return this._handleRequest(options, callback);
    };
    /**
     * List all Volume snapshots
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-volume-snapshots list-all-volume-snapshots}
     *
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.snapshotsVolumes = function (callback) {
        var options = {
            actionPath: 'snapshots',
            qs: {
                resource_type: 'volume'
            }
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Retrieve an existing snapshot by id
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-snapshot-by-id retrieve-an-existing-snapshot-by-id}
     *
     * @param {string} snapshotId - The Id of the Snapshot
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.snapshotsGetById = function (snapshotId, callback) {
        var options = {
            actionPath: "snapshots/" + snapshotId
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Delete a snapshot
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-snapshot delete-a-snapshot}
     *
     * @param {string} snapshotId - The Id of the Snapshot
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.snapshotsDeleteById = function (snapshotId, callback) {
        var options = {
            actionPath: "snapshots/" + snapshotId,
            method: 'DELETE'
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get All Certificates
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-certificates certificates}
     * @param {object} [query] - Optional query parameters
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.certificates = function (query, callback) {
        var options = {
            actionPath: 'certificates',
            key: 'certificates',
            qs: {
                per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
                page: (query) ? (query.page || 1) : 1
            },
            includeAll: (query) ? (query.includeAll || false) : false
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Create A Certificate
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-certificate certificates-create-new}
     * @param {object} certificateData - Certificate Creation Data
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.certificatesCreate = function (certificateData, callback) {
        var options = {
            actionPath: 'certificates',
            method: 'POST',
            body: certificateData
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get Certificate By Id
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-certificate certificates-get-by-id}
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.certificatesGetById = function (certificateId, callback) {
        var options = { actionPath: "certificates/" + encodeURIComponent(certificateId) };
        return this._handleRequest(options, callback);
    };
    /**
     * Delete Certificate By Id
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-certificate certificates-delete-by-id}
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.certificatesDeleteById = function (certificateId, callback) {
        var options = { actionPath: "certificates/" + encodeURIComponent(certificateId), method: 'DELETE' };
        return this._handleRequest(options, callback);
    };
    /**
     * Get All Database clusters
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-database-clusters list-all-database-clusters}
     * @param {object} [query] - Optional query parameters
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.databases = function (query, callback) {
        var options = {
            actionPath: 'databases/',
            qs: {
                per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
                page: (query) ? (query.page || 1) : 1
            },
            includeAll: (query) ? (query.includeAll || false) : false
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Create a database cluster
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-database-cluster create-a-new-database-cluster}
     * @param {object} [clusterData] - Database cluster creation data
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.databasesCreate = function (clusterData, callback) {
        var options = {
            actionPath: 'databases',
            method: 'POST',
            body: clusterData
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Retrieve an existing Database cluster
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-database-cluster retrieve-an-existing-database-cluster}
     * @param {string} [clusterId] - The database cluster ID
     * @param {*} callback  - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.databasesGet = function (clusterId, callback) {
        var options = {
            actionPath: "databases/" + encodeURIComponent(clusterId)
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Resize a database cluster
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#resize-a-database-cluster resize-a-database-cluster}
     * @param {string} clusterId - The database cluster ID
     * @param {Object} configuration - The configuration required to resize the cluster
     * @param {*} callback  - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.databasesResize = function (clusterId, configuration, callback) {
        var options = {
            actionPath: "databases/" + encodeURIComponent(clusterId) + "/resize",
            method: 'PUT',
            body: configuration
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Migrate a database cluster to a new region
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#migrate-a-database-cluster-to-a-new-region migrate-a-database-cluster-to-a-new-region}
     * @param {string} clusterId - The database cluster ID
     * @param {string} region - The slug identifier for the region
     * @param {*} callback - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.databasesMigrate = function (clusterId, region, callback) {
        var options = {
            actionPath: "databases/" + encodeURIComponent(clusterId) + "/migrate",
            method: 'PUT',
            body: {
                region: region
            }
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Cofigure a database cluster's maintenance window
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#configure-a-database-cluster-s-maintenance-window configure-a-database-cluster-s-maintenance-window}
     * @param {string} clusterId - The database cluster ID
     * @param {Object} configuration - The configuration required to perform maintenance
     * @param {*} callback - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.databasesMaintenance = function (clusterId, configuration, callback) {
        var options = {
            actionPath: "databases/" + encodeURIComponent(clusterId) + "/maintenance",
            method: 'PUT',
            body: configuration
        };
        return this._handleRequest(options, callback);
    };
    /**
     * List all of the available backups of a database cluster
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-backups-for-a-database-cluster list-backups-for-a-database-cluster}
     * @param {string} clusterId - The databases cluster ID
     * @param {*} callback - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.databasesGetBackups = function (clusterId, callback) {
        var options = {
            actionPath: "databases/" + encodeURIComponent(clusterId) + "/backups",
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Create a new database cluster based on backup of an existing cluster
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#restore-from-a-database-cluster-backup restore-from-a-database-cluster-backup}
     * @param {Object} configuration - The configuration required to restore a database cluster
     * @param {*} callback - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.databasesRestore = function (configuration, callback) {
        var options = {
            actionPath: "databases",
            method: 'POST',
            body: configuration
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Destroy a database cluster
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#destroy-a-database-cluster destroy-a-database-cluster}
     * @param {string} clusterId - The database cluster ID
     * @param {*} callback - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.databasesDelete = function (clusterId, callback) {
        var options = {
            actionPath: "databases/" + encodeURIComponent(clusterId),
            method: 'DELETE'
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Create a read-only replica of the database
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-read-only-replica create-a-read-only-replica}
     * @param {string} clusterId - The database cluster ID
     * @param {Object} configuration - The configuration to create a replica
     * @param {*} callback - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.databasesCreateReplica = function (clusterId, configuration, callback) {
        var options = {
            actionPath: "databases/" + encodeURIComponent(clusterId) + "/replicas",
            method: 'POST',
            body: configuration
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Retrieve an existing read-only replica
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-read-only-replica retrieve-an-existing-read-only-replica}
     * @param {string} clusterId - The database cluster ID
     * @param {string} replicaName - The existing database replica name
     * @param {*} callback - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.databasesGetReplica = function (clusterId, replicaName, callback) {
        var options = {
            actionPath: "databases/" + encodeURIComponent(clusterId) + "/replicas/" + encodeURIComponent(replicaName),
        };
        return this._handleRequest(options, callback);
    };
    /**
     * List all of the read-only replicas associated with a database cluster
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-read-only-replicas list-all-read-only-replicas}
     * @param {string} clusterId - The database cluster ID
     * @param {*} callback - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.databasesReplicaGetAll = function (clusterId, callback) {
        var options = {
            actionPath: "databases/" + encodeURIComponent(clusterId) + "/replicas"
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Destroy a specific read-only replica
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#destroy-a-read-only-replica destroy-a-read-only-replica}
     * @param {string} clusterId - The database cluster ID
     * @param {string} replicaName - The existing database replica name
     * @param {*} callback - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.databasesDeleteReplica = function (clusterId, replicaName, callback) {
        var options = {
            actionPath: "databases/" + encodeURIComponent(clusterId) + "/replicas/" + encodeURIComponent(replicaName),
            method: 'DELETE'
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Add a database user
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#add-a-database-user add-a-database-user}
     * @param {string} clusterId - The database cluster ID
     * @param {string} username - The name to give the database user
     * @param {*} callback - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.databasesCreateUser = function (clusterId, username, callback) {
        var options = {
            actionPath: "databases/" + encodeURIComponent(clusterId) + "/users",
            method: 'POST',
            body: {
                name: username
            }
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get information about an existing database user
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-database-user retrieve-an-existing-database-user}
     * @param {string} clusterId - The database cluster ID
     * @param {string} username - The name of the database user
     * @param {*} callback - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.databasesGetUser = function (clusterId, username, callback) {
        var options = {
            actionPath: "databases/" + encodeURIComponent(clusterId) + "/users/" + encodeURIComponent(username),
        };
        return this._handleRequest(options, callback);
    };
    /**
     * List all the users of a database cluster
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-database-users list-all-database-users}
     * @param {string} clusterId - The database cluster ID
     * @param {*} callback - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.databasesUsersGetAll = function (clusterId, callback) {
        var options = {
            actionPath: "databases/" + encodeURIComponent(clusterId) + "/users"
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Remove a database user
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#remove-a-database-user remove-a-database-user}
     * @param {string} clusterId - The database cluster ID
     * @param {string} username - The name of the database user
     * @param {*} callback - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.databasesDeleteUser = function (clusterId, username, callback) {
        var options = {
            actionPath: "databases/" + encodeURIComponent(clusterId) + "/users/" + encodeURIComponent(username),
            method: 'DELETE',
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Add a new database to an existing cluster
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#add-a-new-database add-a-new-database}
     * @param {string} clusterId - The database cluster ID
     * @param {string} databaseName - The name to give the database
     * @param {*} callback - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.databasesCreateDB = function (clusterId, databaseName, callback) {
        var options = {
            actionPath: "databases/" + encodeURIComponent(clusterId) + "/dbs",
            method: 'POST',
            body: {
                name: databaseName
            }
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get information about an existing database cluster
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-database retrieve-an-existing-database}
     * @param {string} clusterId - The database cluster ID
     * @param {string} databaseName - The name of the database
     * @param {*} callback - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.databasesGetDB = function (clusterId, databaseName, callback) {
        var options = {
            actionPath: "databases/" + encodeURIComponent(clusterId) + "/dbs/" + databaseName,
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Delete a specific database
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-database delete-a-database}
     * @param {string} clusterId - The database cluster ID
     * @param {string} databaseName - The name of the database
     * @param {*} callback - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.databasesDeleteDB = function (clusterId, databaseName, callback) {
        var options = {
            actionPath: "databases/" + encodeURIComponent(clusterId) + "/dbs/" + databaseName,
            method: 'DELETE'
        };
        return this._handleRequest(options, callback);
    };
    /**
     * List all of the databases in a cluster
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-databases list-all-databases}
     * @param {string} clusterId - The database cluster ID
     * @param {*} callback - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.databasesDBGetAll = function (clusterId, callback) {
        var options = {
            actionPath: "databases/" + encodeURIComponent(clusterId) + "/dbs"
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Add a new connection pool
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#add-a-new-connection-pool add-a-new-connection-pool}
     * @param {string} clusterId - The database cluster ID
     * @param {Object} configuration - The configuration for a new connection pool
     * @param {*} callback - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.databasesCreatePool = function (clusterId, configuration, callback) {
        var options = {
            actionPath: "databases/" + encodeURIComponent(clusterId) + "/pools",
            method: 'POST',
            body: configuration
        };
        return this._handleRequest(options, callback);
    };
    /**
    * List all of the connection pools
    * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-connection-pools list-all-connection-pools}
    * @param {string} clusterId - The database cluster ID
    * @param {*} callback - Optional function to execute on completion
    * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
    */
    DigitalOcean.prototype.databasesPoolGetAll = function (clusterId, callback) {
        var options = {
            actionPath: "databases/" + encodeURIComponent(clusterId) + "/pools",
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get information about an existing connection pool
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-connection-pool  retrieve-an-existing-connection-pool}
     * @param {string} clusterId - The database cluster ID
     * @param {string} poolName - The name of the pool
     * @param {*} callback - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.databasesGetPool = function (clusterId, poolName, callback) {
        var options = {
            actionPath: "databases/" + encodeURIComponent(clusterId) + "/pools/" + encodeURIComponent(poolName),
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Delete a specific connection pool
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-connection-pool delete-a-connection-pool}
     * @param {string} clusterId - The database cluster ID
     * @param {string} poolName - The name of the pool
     * @param {*} callback - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.databasesDeletePool = function (clusterId, poolName, callback) {
        var options = {
            actionPath: "databases/" + encodeURIComponent(clusterId) + "/pools/" + encodeURIComponent(poolName),
            method: 'DELETE'
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get All Kubernetes Clusters
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-kubernetes-clusters kubernetes-get-clusters}
     * @param {object} [query] - Optional query parameters
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.kubernetes = function (query, callback) {
        var options = {
            actionPath: 'kubernetes/clusters',
            key: 'kubernetes',
            qs: {
                per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
                page: (query) ? (query.page || 1) : 1
            },
            includeAll: (query) ? (query.includeAll || false) : false
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Create a Kubernetes Cluster
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-kubernetes-cluster kubernetes-create-cluster}
     * @param {object} clusterData - Cluster creation data
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.kubernetesCreateCluster = function (clusterData, callback) {
        var options = {
            actionPath: 'kubernetes/clusters',
            method: 'POST',
            body: clusterData
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get A Single Kubernetes Cluster
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-kubernetes-cluster kubernetes-cluster-get-by-id}
     * @param {string} clusterId - Id of the Cluster to get
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.kubernetesClusterGet = function (clusterId, callback) {
        var options = { actionPath: "kubernetes/clusters/" + encodeURIComponent(clusterId) };
        return this._handleRequest(options, callback);
    };
    /**
     * Delete a Kubernetes Cluster
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-kubernetes-cluster kubernetes-cluster-delete}
     * @param {string} clusterId - Id of the Cluster to delete
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.kubernetesClusterDelete = function (clusterId, callback) {
        var options = { actionPath: "kubernetes/clusters/" + encodeURIComponent(clusterId), method: 'DELETE' };
        return this._handleRequest(options, callback);
    };
    /**
     * Get the kubeconfig for a Cluster
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-the-kubeconfig-for-a-kubernetes-cluster kubernetes-cluster-get-config}
     * @param {string} clusterId - Id of the Cluster to get the Kubeconfig for
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.kubernetesClusterGetConfig = function (clusterId, callback) {
        var options = { actionPath: "kubernetes/clusters/" + encodeURIComponent(clusterId) + "/kubeconfig" };
        return this._handleRequest(options, callback);
    };
    /**
     * Get the NodePools for a Cluster
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-node-pools-in-a-kubernetes-clusters kubernetes-get-node-pools}
     * @param {string} clusterId - The Id of the Cluster
     * @param {object} [query] - Optional query parameters
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.kubernetesNodePools = function (clusterId, query, callback) {
        var options = {
            actionPath: "kubernetes/clusters/" + encodeURIComponent(clusterId) + "/node_pools",
            key: 'kubernetes',
            qs: {
                per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
                page: (query) ? (query.page || 1) : 1
            },
            includeAll: (query) ? (query.includeAll || false) : false
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get a NodePool on a Cluster by Id
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-a-node-pool-for-a-kubernetes-cluster kubernetes-cluster-get-nodepool-by-id}
     * @param {string} clusterId - Id of the Cluster
     * @param {string} nodePoolId - Id of the NodePool to retrieve
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.kubernetesNodePoolGet = function (clusterId, nodePoolId, callback) {
        var options = { actionPath: "kubernetes/clusters/" + encodeURIComponent(clusterId) + "/node_pools/" + encodeURIComponent(nodePoolId) };
        return this._handleRequest(options, callback);
    };
    /**
     * Add a NodePool on a Cluster
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#add-a-node-pool-to-a-kubernetes-cluster kubernetes-cluster-add-node-pool}
     * @param {string} clusterId - Id of the Cluster
     * @param {string} nodePoolId - Id of the NodePool to delete
     * @param {object} nodePoolConfiguration - The NodePool creation data
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.kubernetesNodePoolAdd = function (clusterId, nodePoolConfiguration, callback) {
        var options = {
            actionPath: "kubernetes/clusters/" + encodeURIComponent(clusterId) + "/node_pools",
            method: 'POST',
            body: nodePoolConfiguration
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Update a NodePool on a Cluster
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#update-a-node-pool-in-a-kubernetes-cluster kubernetes-cluster-update-node-pool}
     * @param {string} clusterId - Id of the Cluster
     * @param {string} nodePoolId - Id of the NodePool to delete
     * @param {object} nodePoolConfiguration - The update data
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.kubernetesNodePoolUpdate = function (clusterId, nodePoolId, nodePoolConfiguration, callback) {
        var options = {
            actionPath: "kubernetes/clusters/" + encodeURIComponent(clusterId) + "/node_pools/" + encodeURIComponent(nodePoolId),
            method: 'PUT',
            body: nodePoolConfiguration
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Delete a NodePool from a Cluster
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-node-pool-in-a-kubernetes-cluster kubernetes-cluster-delete-node-pool}
     * @param {string} clusterId - Id of the Cluster
     * @param {string} nodePoolId - Id of the NodePool to delete
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.kubernetesNodePoolDelete = function (clusterId, nodePoolId, callback) {
        var options = { actionPath: "kubernetes/clusters/" + encodeURIComponent(clusterId) + "/node_pools/" + encodeURIComponent(nodePoolId), method: 'DELETE' };
        return this._handleRequest(options, callback);
    };
    /**
     * Recycle the NodePool of a Kubernetes Cluster
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#recycle-nodes-in-a-kubernetes-cluster kubernetes-cluster-recycle}
     * @param {string} clusterId - Id of the Cluster to cycle
     * @param {string} nodePoolId - Id of the NodePool to cycle
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.kubernetesNodesRecycle = function (clusterId, nodePoolId, callback) {
        var options = { actionPath: "kubernetes/clusters/" + encodeURIComponent(clusterId) + "/node_pools/" + encodeURIComponent(nodePoolId) + "/recycle", method: 'POST' };
        return this._handleRequest(options, callback);
    };
    /**
     * Get Kubernetes availability
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-available-regions--node-sizes--and-versions-of-kubernetes kubernetes-get-availability}
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.kubernetesAvailability = function (callback) {
        var options = { actionPath: 'kubernetes/options' };
        return this._handleRequest(options, callback);
    };
    /**
     * Get All Projects
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-projects projects}
     *
     * @param {object} [query] - Optional query parameters
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.projects = function (query, callback) {
        var options = {
            actionPath: 'projects',
            key: 'projects',
            qs: {
                per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
                page: (query) ? (query.page || 1) : 1
            },
            includeAll: (query) ? (query.includeAll || false) : false
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Create a Project
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-project projects-create}
     * @param {object} projectData - Project creation data
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.projectsCreate = function (projectData, callback) {
        var options = {
            actionPath: 'projects',
            method: 'POST',
            body: projectData
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Update A Project
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#update-a-project projects-update}
     *
     * @param {string} projectId - The Project Id to get
     * @param {object} projectData - The Update Data
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.projectsUpdate = function (projectId, projectData, callback) {
        var options = {
            actionPath: "projects/" + encodeURIComponent(projectId),
            method: 'PUT',
            body: projectData
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Patch A Project
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#patch-a-project projects-patch}
     *
     * @param {string} projectId - The Project Id to get
     * @param {object} projectData - The Patch Data
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.projectsPatch = function (projectId, projectData, callback) {
        var options = {
            actionPath: "projects/" + encodeURIComponent(projectId),
            method: 'PATCH',
            body: projectData
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Get A Project
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-project projects-get-by-id}
     *
     * @param {string} projectId - The Project Id to get
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.projectsGet = function (projectId, callback) {
        var options = { actionPath: "projects/" + encodeURIComponent(projectId) };
        return this._handleRequest(options, callback);
    };
    /**
   * Get Project Resources
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-resources list-all-resources}
   *
   * @param {string} projectId - The Project Id to get
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
    DigitalOcean.prototype.projectsGetResources = function (projectId, callback) {
        var options = { actionPath: "projects/" + encodeURIComponent(projectId) + "/resources" };
        return this._handleRequest(options, callback);
    };
    /**
     * Get The Default Project
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-the-default-project projects-get-default}
     *
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.projectsGetDefault = function (callback) {
        var options = { actionPath: 'projects/default' };
        return this._handleRequest(options, callback);
    };
    /**
     * Update The Default Project
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#update-the-default-project projects-default-update}
     *
     * @param {object} projectData - The Update Data
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.projectsUpdateDefault = function (projectData, callback) {
        var options = {
            actionPath: 'projects/default',
            method: 'PUT',
            body: projectData
        };
        return this._handleRequest(options, callback);
    };
    /**
     * Patch The Default Project
     * Info: {@link https://developers.digitalocean.com/documentation/v2/#patch-the-default-project projects-default-patch}
     *
     * @param {object} projectData - The Patch Data
     * @param {*} [callback] - Optional function to execute on completion
     * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
     */
    DigitalOcean.prototype.projectsPatchDefault = function (projectData, callback) {
        var options = {
            actionPath: 'projects/default',
            method: 'PATCH',
            body: projectData
        };
        return this._handleRequest(options, callback);
    };
    return DigitalOcean;
}());
exports.default = DigitalOcean;
