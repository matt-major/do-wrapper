'use strict';

import RequestHelper from './request-helper';

export default class DigitalOcean {
  /**
   * Digital Ocean API Wrapper
   * @param {string} token - Your Private API Token
   * @param {number} perPage - Page Size of results to return
   * @constructor
   */
  constructor(token, perPage) {
    this.perPage = perPage;
    this.requestHelper = new RequestHelper(token);
  }

  _handleRequest(options, callback) {
    return this.requestHelper.request(options, callback);
  }

  /**
   * Get Account Information
   * Info {@link https://developers.digitalocean.com/documentation/v2/#account account}
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  account(callback) {
    const options = { actionPath: 'account' };
    return this._handleRequest(options, callback);
  }

  /**
   * Get Account Actions
   * Info {@link https://developers.digitalocean.com/documentation/v2/#list-all-actions list-all-actions}
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  accountGetActions(query, callback) {
    const options = {
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
  }

  /**
   * Get Action Information for Account
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-action retrieve-an-existing-action}
   *
   * @param {number} actionId - The Id of the Action
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  accountGetAction(actionId, callback) {
    const options = { actionPath: `actions/${encodeURIComponent(actionId)}` };
    return this._handleRequest(options, callback);
  }

  /**
   * List all SSH Keys
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-keys list-all-keys}
   *
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  accountGetKeys(query, callback) {
    const options = {
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
  }

  /**
   * Add a new SSH Key
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-key create-a-new-key}
   *
   * @param {*} configuration - Information required to create SSH Key | {name: ?, public_key: ?}
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  accountAddKey(configuration, callback) {
    const options = {
      actionPath: 'account/keys',
      method: 'POST',
      body: configuration
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Get an SSH Key via its Id
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-key retrieve-an-existing-key}
   *
   * @param {number} keyId - The Id of the Key
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  accountGetKeyById(keyId, callback) {
    const options = { actionPath: `account/keys/${encodeURIComponent(keyId)}` };
    return this._handleRequest(options, callback);
  }

  /**
   * Get an SSH Key via its Fingerprint
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-key retrieve-an-existing-key}
   *
   * @param {string} fingerprint - The Fingerprint of the Key
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  accountGetKeyByFingerprint(fingerprint, callback) {
    const options = { actionPath: `account/keys/${encodeURIComponent(fingerprint)}` };
    return this._handleRequest(options, callback);
  }

  /**
   * Rename a SSH Key
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#update-a-key update-a-key}
   *
   * @param {*} keyIdentity - The Id or Fingerprint of the SSH Key
   * @param {string} keyName - What to rename the SSH Key to
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  accountRenameKey(keyIdentity, keyName, callback) {
    const options = {
      actionPath: `account/keys/${encodeURIComponent(keyIdentity)}`,
      method: 'PUT',
      body: {
        name: keyName
      }
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Delete a SSH Key
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#destroy-a-key destroy-a-key}
   *
   * @param {*} keyIdentity - The Id or Fingerprint of the SSH Key
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  accountDeleteKey(keyIdentity, callback) {
    const options = { actionPath: `account/keys/${encodeURIComponent(keyIdentity)}`, method: 'DELETE' };
    return this._handleRequest(options, callback);
  }

  /**
   * Create a new CDN endpoint
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-cdn-endpoint create-a-new-cdn-endpoint}
   *
   * @param {string} origin - The origin server address (FQDN) which provides the content for the CDN
   * @param {number} ttl - The amount of time (seconds) the content is cached by the CDN's edge servers. Defaults to 3600 (one hour)
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  cdnEndpointCreate(origin, ttl, callback) {
    const options = {
      actionPath: 'cdn/endpoints',
      method: 'POST',
      body: { origin: origin, ttl: ttl }
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Get information about an existing CDN endpoint
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-cdn-endpoint retrieve-an-existing-cdn-endpoint}
   *
   * @param {string} endpointId - The id of an existing CDN endpoint
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  cdnEndpointGet(endpointId, callback) {
    const options = {
      actionPath: `cdn/endpoints/${encodeURIComponent(endpointId)}`
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Get a list of CDN endpoints
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-cdn-endpoints list-all-cdn-endpoints}
   *
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  cdnEndpointGetAll(query, callback) {
    const options = {
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
  }

  /**
   * Update an existing endpoint
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#update-an-existing-cdn-endpoint update-an-existing-cdn-endpoint}
   *
   * @param {string} endpointId - The id of an existing CDN endpoint
   * @param {number} ttl - The amount of time (seconds) the content is cached by the CDN's edge servers.
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  cdnEndpointUpdate(endpointId, ttl, callback) {
    const options = {
      actionPath: `cdn/endpoints/${encodeURIComponent(endpointId)}`,
      method: 'PUT',
      body: { ttl: ttl }
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Delete a specific CDN endpoint
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-cdn-endpoint delete-a-cdn-endpoint}
   *
   * @param {string} endpointId - The id of an existing CDN endpoint
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  cdnEndpointDelete(endpointId, callback) {
    const options = {
      actionPath: `cdn/endpoints/${encodeURIComponent(endpointId)}`,
      method: 'DELETE'
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Purge cached content from a CDN endpoint
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#purge-the-cache-for-an-existing-cdn-endpoint purge-the-cache-for-an-existing-cdn-endpoint}
   *
   * @param {string} endpointId - The id of an existing CDN endpoint
   * @param {Array} files - An array of strings containing the path to the content to be purged from the CDN cache
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  cdnEndpointPurgeCache(endpointId, files, callback) {
    const options = {
      actionPath: `cdn/endpoints/${encodeURIComponent(endpointId)}/cache`,
      method: 'DELETE',
      body: { files: files }
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Get a list of Droplets
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-droplets list-all-droplets}
   *
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  dropletsGetAll(query, callback) {
    const options = {
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
  }

  /**
   * Get a list of Kernels available for a Droplet
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-available-kernels-for-a-droplet list-all-available-kernels-for-a-droplet}
   *
   * @param {number} dropletId - The Id of the Droplet
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  dropletsGetKernels(dropletId, query, callback) {
    const options = {
      actionPath: `droplets/${encodeURIComponent(dropletId)}/kernels`,
      key: 'kernels',
      qs: {
        tag_name: (query) ? (query.tag_name || '') : '',
        per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
        page: (query) ? (query.page || 1) : 1
      },
      includeAll: (query) ? (query.includeAll || false) : false
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Get a list of Snapshots for a Droplet
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-snapshots-for-a-droplet retrieve-snapshots-for-a-droplet}
   *
   * @param {number} dropletId - The Id of the Droplet
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  dropletsGetSnapshots(dropletId, query, callback) {
    const options = {
      actionPath: `droplets/${encodeURIComponent(dropletId)}/snapshots`,
      key: 'snapshots',
      qs: {
        tag_name: (query) ? (query.tag_name || '') : '',
        per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
        page: (query) ? (query.page || 1) : 1
      },
      includeAll: (query) ? (query.includeAll || false) : false
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Get a list of Backups for a Droplet
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-backups-for-a-droplet list-backups-for-a-droplet}
   *
   * @param {number} dropletId - The Id of the Droplet
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  dropletsGetBackups(dropletId, query, callback) {
    const options = {
      actionPath: `droplets/${encodeURIComponent(dropletId)}/backups`,
      key: 'backups',
      qs: {
        tag_name: (query) ? (query.tag_name || '') : '',
        per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
        page: (query) ? (query.page || 1) : 1
      },
      includeAll: (query) ? (query.includeAll || false) : false
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Get a list of Actions for a Droplet
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-actions-for-a-droplet list-actions-for-a-droplet}
   *
   * @param {number} dropletId - The Id of the Droplet
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  dropletsGetActions(dropletId, query, callback) {
    const options = {
      actionPath: `droplets/${encodeURIComponent(dropletId)}/actions`,
      key: 'actions',
      qs: {
        tag_name: (query) ? (query.tag_name || '') : '',
        per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
        page: (query) ? (query.page || 1) : 1
      },
      includeAll: (query) ? (query.includeAll || false) : false
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Create a New Droplet
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-droplet create-a-new-droplet}
   *
   * @param {*} configuration - Creation parameters, see info for more details.
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  dropletsCreate(configuration, callback) {
    const options = {
      actionPath: 'droplets',
      method: 'POST',
      body: configuration
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Get a Droplet by Id
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-droplet-by-id retrieve-an-existing-droplet-by-id}
   *
   * @param {number} dropletId - The Id of the Droplet
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  dropletsGetById(dropletId, callback) {
    const options = { actionPath: `droplets/${encodeURIComponent(dropletId)}` };
    return this._handleRequest(options, callback);
  }

  /**
   * Delete a Droplet
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-droplet delete-a-droplet}
   *
   * @param {number} dropletId - The Id of the Droplet
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  dropletsDelete(dropletId, callback) {
    const options = {
      actionPath: `droplets/${encodeURIComponent(dropletId)}`,
      method: 'DELETE'
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Get a list of Droplet Neighbors
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-neighbors-for-a-droplet list-neighbors-for-a-droplet}
   *
   * @param {number} dropletId - The Id of the Droplet
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  dropletsGetNeighbors(dropletId, callback) {
    const options = { actionPath: `droplets/${encodeURIComponent(dropletId)}/neighbors` };
    return this._handleRequest(options, callback);
  }

  /**
   * Get a report of Droplets sharing the same hardware
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-droplet-neighbors list-all-droplet-neighbors}
   *
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  dropletsGetNeighborsReport(callback) {
    const options = { actionPath: 'reports/droplet_neighbors' };
    return this._handleRequest(options, callback);
  }

  /**
   * Get a list of scheduled Droplet Upgrades
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-droplet-upgrades list-droplet-upgrades}
   *
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  dropletsGetUpgrades(callback) {
    const options = { actionPath: 'droplet_upgrades' };
    return this._handleRequest(options, callback);
  }

  /**
   * Request an Action on a Droplet
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#droplet-actions droplet-actions}
   *
   * @param {number} dropletId - The Id of the Droplet
   * @param {*} action - Action Object
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  dropletsRequestAction(dropletId, action, callback) {
    const options = {
      actionPath: `droplets/${encodeURIComponent(dropletId)}/actions`,
      method: 'POST',
      body: action
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Get an Action for a Droplet
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-a-droplet-action retrieve-a-droplet-action}
   *
   * @param {number} dropletId - The Id of the Droplet
   * @param {number} actionId - The Id of the Action
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  dropletsGetAction(dropletId, actionId, callback) {
    const options = { actionPath: `droplets/${encodeURIComponent(dropletId)}/actions/${encodeURIComponent(actionId)}` };
    return this._handleRequest(options, callback);
  }

  /**
   * Get all Domains
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-domains list-all-domains}
   *
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  domainsGetAll(query, callback) {
    const options = {
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
  }

  /**
   * Add a new Domain
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-domain create-a-new-domain}
   *
   * @param {string} name - Domain Name
   * @param {string} ip - The Ip of the Droplet
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  domainsCreate(name, ip, callback) {
    const options = {
      actionPath: 'domains',
      method: 'POST',
      body: { name: name, ip_address: ip }
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Get a Domain
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-domain retrieve-an-existing-domain}
   *
   * @param {string} name - The Domain Name
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  domainsGet(name, callback) {
    const options = {
      actionPath: `domains/${encodeURIComponent(name)}`
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Delete a Domain
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-domain delete-a-domain}
   *
   * @param {string} name - The Domain Name
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  domainsDelete(name, callback) {
    const options = {
      actionPath: `domains/${encodeURIComponent(name)}`,
      method: 'DELETE'
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Get all Domain Records for a Domain
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-domain-records list-all-domain-records}
   *
   * @param {string} name - The Domain Name
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  domainRecordsGetAll(name, query, callback) {
    const options = {
      actionPath: `domains/${encodeURIComponent(name)}/records`,
      key: 'domain_records',
      qs: {
        tag_name: (query) ? (query.tag_name || '') : '',
        per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
        page: (query) ? (query.page || 1) : 1
      },
      includeAll: (query) ? (query.includeAll || false) : false
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Create a new Domain Record on a Domain
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-domain-record create-a-new-domain-record}
   *
   * @param {string} name - The Domain Name
   * @param {*} configuration - Data required to create the Domain Record
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  domainRecordsCreate(name, configuration, callback) {
    const options = {
      actionPath: `domains/${encodeURIComponent(name)}/records`,
      method: 'POST',
      body: configuration
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Get a single Domain Record
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-domain-record retrieve-an-existing-domain-record}
   *
   * @param {string} name - The Domain Name
   * @param {number} domainRecordId - The Id of the Domain Record
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  domainRecordsGet(name, domainRecordId, callback) {
    const options = { actionPath: `domains/${encodeURIComponent(name)}/records/${encodeURIComponent(domainRecordId)}` };
    return this._handleRequest(options, callback);
  }

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
  domainRecordsUpdate(name, domainRecordId, configuration, callback) {
    const options = {
      actionPath: `domains/${encodeURIComponent(name)}/records/${encodeURIComponent(domainRecordId)}`,
      method: 'PUT',
      body: configuration
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Delete a Domain Record
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-domain-record delete-a-domain-record}
   *
   * @param {string} name - The Domain Name
   * @param {number} domainRecordId - The Id of the Domain Record
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  domainRecordsDelete(name, domainRecordId, callback) {
    const options = {
      actionPath: `domains/${encodeURIComponent(name)}/records/${encodeURIComponent(domainRecordId)}`,
      method: 'DELETE'
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Get all Regions
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-regions list-all-regions}
   *
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  regionsGetAll(query, callback) {
    const options = {
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
  }

  /**
   * Get all Droplet sizes
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-sizes list-all-sizes}
   *
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  sizesGetAll(query, callback) {
    const options = {
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
  }

  /**
   * Get all Images
   * Include type=[distribution,application] or private=true in the query object to limit results.
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-images list-all-images}
   *
   * @param {{per_page: number, page: number, includeAll: boolean, private: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  imagesGetAll(query, callback) {
    const options = {
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
  }

  /**
   * Get an Image using its Id
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-by-id retrieve-an-existing-image-by-id}
   *
   * @param {number} imageId - The Id of the Image
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  imagesGetById(imageId, callback) {
    const options = { actionPath: `images/${encodeURIComponent(imageId)}` };
    return this._handleRequest(options, callback);
  }

  /**
   * Get an Image using its Slug
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-by-slug retrieve-an-existing-image-by-slug}
   *
   * @param {string} slug - The Slug of the Image
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  imagesGetBySlug(slug, callback) {
    const options = { actionPath: `images/${encodeURIComponent(slug)}` };
    return this._handleRequest(options, callback);
  }

  /**
   * Get all Actions for an Image
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-actions-for-an-image list-all-actions-for-an-image}
   *
   * @param {number} imageId - The Id of the Image
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  imagesGetActions(imageId, query, callback) {
    const options = {
      actionPath: `images/${encodeURIComponent(imageId)}/actions`,
      key: 'actions',
      qs: {
        tag_name: (query) ? (query.tag_name || '') : '',
        per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
        page: (query) ? (query.page || 1) : 1
      },
      includeAll: (query) ? (query.includeAll || false) : false
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Update the name of an Image
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#update-an-image update-an-image}
   *
   * @param {number} imageId - The Id of the Image
   * @param {string} name - The Name to update the Image to
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  imagesUpdate(imageId, name, callback) {
    const options = {
      actionPath: `images/${encodeURIComponent(imageId)}`,
      body: { name: name },
      method: 'PUT'
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Delete an Image
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-an-image delete-an-image}
   *
   * @param {number} imageId - The Id of the Image
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  imagesDelete(imageId, callback) {
    const options = {
      actionPath: `images/${encodeURIComponent(imageId)}`,
      method: 'DELETE'
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Request an Action on an Image
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#image-actions image-actions}
   *
   * @param {number} imageId - The Id of the Image
   * @param {*} action - Action Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  imagesRequestAction(imageId, action, callback) {
    const options = {
      actionPath: `images/${encodeURIComponent(imageId)}/actions`,
      method: 'POST',
      body: action
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Get the status of an Action
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-action retrieve-an-existing-image-action}
   *
   * @param {number} imageId - The Id of the Image
   * @param {number} actionId - The Id of the Action
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  imagesGetAction(imageId, actionId, callback) {
    const options = { actionPath: `images/${encodeURIComponent(imageId)}/actions/${encodeURIComponent(actionId)}` };
    return this._handleRequest(options, callback);
  }

  /**
   * Get all Floating IPs
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-floating-ips list-all-floating-ips}
   *
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  floatingIpsGetAll(query, callback) {
    const options = {
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
  }

  /**
   * Create and assign a Floating IP to a specific droplet.
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-floating-ip-assigned-to-a-droplet create-a-new-floating-ip-assigned-to-a-droplet}
   *
   * @param {number} dropletId - The ID of Droplet that the Floating IP will be assigned to.
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  floatingIpsAssignDroplet(dropletId, callback) {
    const options = {
      actionPath: 'floating_ips',
      method: 'POST',
      body: {
        droplet_id: dropletId
      }
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Create and assign a Floating IP to a region.
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-floating-ip-reserved-to-a-region create-a-new-floating-ip-reserved-to-a-region}
   *
   * @param {string} region - The slug identifier for the region the Floating IP will be reserved to.
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  floatingIpsAssignRegion(region, callback) {
    const options = {
      actionPath: 'floating_ips',
      method: 'POST',
      body: {
        region: region
      }
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Retrieve an existing Floating IP
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-floating-ip retrieve-an-existing-floating-ip}
   *
   * @param {string} ipAddress - Floating IP address.
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  floatingIpsGet(ipAddress, callback) {
    const options = { actionPath: `floating_ips/${encodeURIComponent(ipAddress)}` };
    return this._handleRequest(options, callback);
  }

  /**
   * Delete a Floating IP
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-floating-ips delete-a-floating-ips}
   *
   * @param {string} ipAddress - Floating IP address
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  floatingIpsDelete(ipAddress, callback) {
    const options = { actionPath: `floating_ips/${encodeURIComponent(ipAddress)}`, method: 'DELETE' };
    return this._handleRequest(options, callback);
  }

  /**
   * Request an action on a Floating IP
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#floating-ip-actions floating-ip-actions}
   *
   * @param {string} ipAddress - Floating IP address
   * @param {*} action - Action options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  floatingIpsRequestAction(ipAddress, action, callback) {
    const options = {
      actionPath: `floating_ips/${encodeURIComponent(ipAddress)}/actions`,
      method: 'POST',
      body: action
    };
    return this._handleRequest(options, callback);
  }

  /**
   * List all actions for a Floating IP
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-actions-for-a-floating-ip list-all-actions-for-a-floating-ip}
   *
   * @param {string} ipAddress - Floating IP address
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  floatingIpsGetActions(ipAddress, query, callback) {
    const options = {
      actionPath: `floating_ips/${encodeURIComponent(ipAddress)}/actions`,
      key: 'actions',
      qs: {
        tag_name: (query) ? (query.tag_name || '') : '',
        per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
        page: (query) ? (query.page || 1) : 1
      },
      includeAll: (query) ? (query.includeAll || false) : false
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Retrieve an existing Floating IP action
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-floating-ip-action retrieve-an-existing-floating-ip-action}
   *
   * @param {string} ipAddress - Floating IP address
   * @param {number} actionId - The Id of the action
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  floatingIpsGetAction(ipAddress, actionId, callback) {
    const options = { actionPath: `floating_ips/${encodeURIComponent(ipAddress)}/actions/${encodeURIComponent(actionId)}` };
    return this._handleRequest(options, callback);
  }

  /**
   * Add a new Tag
   * Info: {@link https://developers.digitalocean.com/documentation/v2/tagging-preview/#create-a-new-tag create-a-new-tag}
   *
   * @param {string} name - Tag Name
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  tagsCreate(name, callback) {
    const options = {
      actionPath: 'tags',
      method: 'POST',
      body: { name: name }
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Delete a Tag
   * Info: {@link https://developers.digitalocean.com/documentation/v2/tagging-preview/#delete-a-tag delete-a-tag}
   *
   * @param {string} name - Tag Name
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  tagsDelete(name, callback) {
    const options = { actionPath: `tags/${encodeURIComponent(name)}`, method: 'DELETE' };
    return this._handleRequest(options, callback);
  }

  /**
   * Get a Tag
   * Info: {@link https://developers.digitalocean.com/documentation/v2/tagging-preview/#retrieve-a-tag retrieve-a-tag}
   *
   * @param {string} name - The Tag Name
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  tagsGet(name, callback) {
    const options = { actionPath: `tags/${encodeURIComponent(name)}` };
    return this._handleRequest(options, callback);
  }

  /**
   * Get all Tags
   * Info: {@link https://developers.digitalocean.com/documentation/v2/tagging-preview/#list-all-tags list-all-tags}
   *
   * @param {{per_page: number, page: number, includeAll: boolean}} query - Query Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  tagsGetAll(query, callback) {
    const options = {
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
  }

  /**
   * Tag resources
   * Info: {@link https://developers.digitalocean.com/documentation/v2/tagging-preview/#tag-a-resource tag-a-resource}
   *
   * @param {string} name - The Tag Name
   * @param {*} configuration - Array of objects which identify the resources to tag
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  tagsAddResources(name, configuration, callback) {
    const options = {
      actionPath: `tags/${encodeURIComponent(name)}/resources`,
      method: 'POST',
      body: configuration
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Untag a resource
   * Info: {@link https://developers.digitalocean.com/documentation/v2/tagging-preview/#untag-a-resource untag-a-resource}
   *
   * @param {string} name - The Tag Name
   * @param {*} configuration - Array of objects which identify the resources to untag
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  tagsDeleteResource(name, configuration, callback) {
    const options = {
      actionPath: `tags/${encodeURIComponent(name)}/resources`,
      method: 'DELETE',
      body: configuration
    };
    return this._handleRequest(options, callback);
  }

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
  tagsGetDroplets(name, query, callback) {
    const options = {
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
  }

  /**
   * Delete Droplets by Tag
   *
   * Info: {@link https://developers.digitalocean.com/documentation/v2/tagging-preview/#deleting-droplets-by-tag deleting-droplets-by-tag}
   *
   * @param {string} name - The Tag Name
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  tagsDeleteDroplets(name, callback) {
    const options = {
      actionPath: 'droplets',
      method: 'DELETE',
      qs: {
        tag_name: name
      }
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Request an Action on a tag's Droplets
   * Info: {@link https://developers.digitalocean.com/documentation/v2/tagging-preview/#acting-on-tagged-droplets acting-on-tagged-droplets}
   *
   * @param {string} name - The Tag Name
   * @param {*} action - Action Object
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  tagsRequestAction(name, action, callback) {
    const options = {
      actionPath: 'droplets/actions',
      method: 'POST',
      qs: {
        tag_name: name
      },
      body: action
    };
    return this._handleRequest(options, callback);
  }

  /**
   * List all of the Block Storage Volumes available on your account
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-block-storage-volumes list-all-block-storage-volumes}
   *
   * @param {string} [region] - Optional Region Name Filter
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  volumes(region, callback) {
    const options = {
      actionPath: 'volumes',
      method: 'GET',
      qs: {
        region: region || ''
      }
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Create a new Block Storage Volume in a particular region
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-block-storage-volume create-a-new-block-storage-volume}
   *
   * @param {Object} volume - Volume configuration to create
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  volumesCreate(volume, callback) {
    const options = {
      actionPath: 'volumes',
      method: 'POST',
      body: volume
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Show information about a Block Storage Volume based on its ID
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-block-storage-volume retrieve-an-existing-block-storage-volume}
   *
   * @param {string} driveId - ID of the Volume Drive
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  volumesGetById(driveId, callback) {
    const options = { actionPath: `volumes/${driveId}`, method: 'GET' };
    return this._handleRequest(options, callback);
  }

  /**
   * Show information about a Block Storage Volume based on its Name and Region
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-block-storage-volume-by-name retrieve-an-existing-block-storage-volume-by-name}
   *
   * @param {string} name - Name of the Block Storage Volume
   * @param {string} region - Region of the Block Storage Volume
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  volumesGetByName(name, region, callback) {
    const options = {
      actionPath: 'volumes',
      method: 'GET',
      qs: {
        name: name,
        region: region
      }
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Delete a Block Storage Volume based on its ID
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-block-storage-volume delete-a-block-storage-volume}
   *
   * @param {string} driveId - ID of the Block Storage Volume Drive
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  volumesDeleteById(driveId, callback) {
    const options = { actionPath: `volumes/${driveId}`, method: 'DELETE' };
    return this._handleRequest(options, callback);
  }

  /**
   * Delete a Block Storage Volume based on its Name and Region
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-block-storage-volume-by-name delete-a-block-storage-volume-by-name}
   *
   * @param {string} name - Name of the Block Storage Volume
   * @param {string} region - Region of the Block Storage Volume
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  volumesDeleteByName(name, region, callback) {
    const options = {
      actionPath: 'volumes',
      method: 'DELETE',
      qs: {
        name: name,
        region: region
      }
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Request an Action on a Volume
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#block-storage-actions block-storage-actions}
   *
   * @param {number} volumeId - The Id of the Volume
   * @param {*} action - Action Object
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  volumesRequestAction(volumeId, action, callback) {
    const options = {
      actionPath: `volumes/${encodeURIComponent(volumeId)}/actions`,
      method: 'POST',
      body: action
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Create a new Load Balancer
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-load-balancer load-balancer-create}
   *
   * @param {Object} data - Load Balancer configuration data
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  loadBalancersCreate(data, callback) {
    const options = {
      actionPath: 'load_balancers',
      method: 'POST',
      body: data
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Get an existing Load Balancer using its Id
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-load-balancer load-balancer-get-by-id}
   *
   * @param {string} loadBalancerId - The Id of the Load Balancer
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  loadBalancersGetById(loadBalancerId, callback) {
    const options = { actionPath: `load_balancers/${loadBalancerId}` };
    return this._handleRequest(options, callback);
  }

  /**
   * Get a list of existing Load Balancers
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-load-balancers load-balancers-get-all}
   *
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  loadBalancers(callback) {
    const options = { actionPath: 'load_balancers' };
    return this._handleRequest(options, callback);
  }

  /**
   * Update an existing Load Balancer using its Id
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#update-a-load-balancer load-balancers-update}
   *
   * @param {string} loadBalancerId - The Id of the Load Balancer
   * @param {Object} data - Load Balancer configuration data
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  loadBalancersUpdateById(loadBalancerId, data, callback) {
    const options = {
      actionPath: `load_balancers/${loadBalancerId}`,
      method: 'PUT',
      body: data
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Delete an existing Load Balancer using its Id
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-load-balancer load-balancers-delete}
   *
   * @param {string} loadBalancerId - The Id of the Load Balancer
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  loadBalancersDelete(loadBalancerId, callback) {
    const options = { actionPath: `load_balancers/${loadBalancerId}`, method: 'DELETE' };
    return this._handleRequest(options, callback);
  }

  /**
   * Add Droplets to an existing Load Balancer using its Id
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#add-droplets-to-a-load-balancer load-balancers-add-droplets}
   *
   * @param {string} loadBalancerId - The Id of the Load Balancer
   * @param {Array} dropletIds - The Droplet Ids
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  loadBalancersAddDroplets(loadBalancerId, dropletIds, callback) {
    const options = {
      actionPath: `load_balancers/${loadBalancerId}/droplets`,
      method: 'POST',
      body: {
        droplet_ids: dropletIds
      }
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Remove Droplets from an existing Load Balancer using its Id
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#remove-droplets-from-a-load-balancer load-balancers-remove-droplets}
   *
   * @param {string} loadBalancerId - The Id of the Load Balancer
   * @param {Array} dropletIds - The Droplet Ids
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  loadBalancersRemoveDroplets(loadBalancerId, dropletIds, callback) {
    const options = {
      actionPath: `load_balancers/${loadBalancerId}/droplets`,
      method: 'DELETE',
      body: {
        droplet_ids: dropletIds
      }
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Add a Forwarding Rule to an existing Load Balancer using its Id
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#add-forwarding-rules-to-a-load-balancer load-balancers-add-forwarding-rule}
   *
   * @param {string} loadBalancerId - The Id of the Load Balancer
   * @param {Object} forwardingRules - The Forwarding Rule objects to add to the Load Balancer
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  loadBalancersAddForwardingRule(loadBalancerId, forwardingRules, callback) {
    const options = {
      actionPath: `load_balancers/${loadBalancerId}/forwarding_rules`,
      method: 'POST',
      body: {
        forwarding_rules: forwardingRules
      }
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Remove a Forwarding Rule to an existing Load Balancer using its Id
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#add-forwarding-rules-to-a-load-balancer load-balancers-add-forwarding-rule}
   *
   * @param {string} loadBalancerId - The Id of the Load Balancer
   * @param {Object} forwardingRules - The Forwarding Rule objects to remove from the Load Balancer
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  loadBalancersRemoveForwardingRule(loadBalancerId, forwardingRules, callback) {
    const options = {
      actionPath: `load_balancers/${loadBalancerId}/forwarding_rules`,
      method: 'DELETE',
      body: {
        forwarding_rules: forwardingRules
      }
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Create a new Firewall
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-firewall firewall-create-new}
   *
   * @param {Object} firewallData
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  firewallsCreate(firewallData, callback) {
    const options = {
      actionPath: 'firewalls',
      method: 'POST',
      body: firewallData
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Retrieve an existing Firewall using its Id
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-firewall firewall-get-by-id}
   *
   * @param {string} firewallId - The Id of the Firewall to retrieve
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  firewallsGetById(firewallId, callback) {
    const options = { actionPath: `firewalls/${firewallId}` };
    return this._handleRequest(options, callback);
  }

  /**
   * Retrieve a list of Firewalls
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-firewalls firealls-get-all}
   *
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  firewalls(callback) {
    const options = { actionPath: 'firewalls' };
    return this._handleRequest(options, callback);
  }

  /**
   * Update a Firewall using its Id
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#update-a-firewall firewalls-update-by-id}
   *
   * @param {string} firewallId - The Id of the Firewall
   * @param {Object} firewallData - The Firewall update data
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  firewallsUpdateById(firewallId, firewallData, callback) {
    const options = {
      actionPath: `firewalls/${firewallId}`,
      method: 'PUT',
      body: firewallData
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Delete a Firewall using its Id
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-firewall firewalls-delete-by-id}
   *
   * @param {string} firewallId - The Id of the Firewall
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  firewallsDeleteById(firewallId, callback) {
    const options = {
      actionPath: `firewalls/${firewallId}`,
      method: 'DELETE'
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Add Droplets to an existing Firewall
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#add-droplets-to-a-firewall firewalls-add-droplets}
   *
   * @param {string} firewallId - The Id of the Firewall
   * @param {Array<number>} dropletIds - The Droplet Ids
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  firewallsAddDroplets(firewallId, dropletIds, callback) {
    const options = {
      actionPath: `firewalls/${firewallId}/droplets`,
      method: 'POST',
      body: {
        droplet_ids: dropletIds
      }
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Remove Droplets from an existing Firewall
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#remove-droplets-from-a-firewall firewalls-remove-droplets}
   *
   * @param {string} firewallId - The Id of the Firewall
   * @param {Array<number>} dropletIds - The Droplet Ids
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  firewallsRemoveDroplets(firewallId, dropletIds, callback) {
    const options = {
      actionPath: `firewalls/${firewallId}/droplets`,
      method: 'DELETE',
      body: {
        droplet_ids: dropletIds
      }
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Add Tags to an existing Firewall
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#add-tags-to-a-firewall firealls-add-tags}
   *
   * @param {string} firewallId - The Id of the Firewall
   * @param {Array<string>} tags - The Tags to add to the Firewall
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  firewallsAddTags(firewallId, tags, callback) {
    const options = {
      actionPath: `firewalls/${firewallId}/tags`,
      method: 'POST',
      body: {
        tags: tags
      }
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Remove Tags from an existing Firewall
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#remove-tags-from-a-firewall firewalls-remove-tags}
   *
   * @param {string} firewallId - The Id of the Firewall
   * @param {Array<string>} tags - The Tags to remove from the Firewall
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  firewallsRemoveTags(firewallId, tags, callback) {
    const options = {
      actionPath: `firewalls/${firewallId}/tags`,
      method: 'DELETE',
      body: {
        tags: tags
      }
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Add Rules to an existing Firewall
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#add-rules-to-a-firewall firewalls-add-rules}
   *
   * @param {string} firewallId - The Id of the Firewall
   * @param {object} rules - The Rules to add to the Firewall
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  firewallsAddRules(firewallId, rules, callback) {
    const options = {
      actionPath: `firewalls/${firewallId}/rules`,
      method: 'POST',
      body: rules
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Remove Rules from an existing Firewall
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#remove-rules-from-a-firewall firewalls-remove-rules}
   *
   * @param {string} firewallId - The Id of the Firewall
   * @param {object} rules - The Rules to remove from the Firewall
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  firewallsRemoveRules(firewallId, rules, callback) {
    const options = {
      actionPath: `firewalls/${firewallId}/rules`,
      method: 'DELETE',
      body: rules
    };
    return this._handleRequest(options, callback);
  }

  /**
   * List all snapshots
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-snapshots list-all-snapshots}
   *
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  snapshots(callback) {
    const options = { actionPath: 'snapshots' };
    return this._handleRequest(options, callback);
  }

  /**
   * List all Droplet snapshots
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-droplet-snapshots list-all-droplet-snapshots}
   *
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  snapshotsDroplets(callback) {
    const options = {
      actionPath: 'snapshots',
      qs: {
        resource_type: 'droplet'
      }
    };
    return this._handleRequest(options, callback);
  }

  /**
   * List all Volume snapshots
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-volume-snapshots list-all-volume-snapshots}
   *
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  snapshotsVolumes(callback) {
    const options = {
      actionPath: 'snapshots',
      qs: {
        resource_type: 'volume'
      }
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Retrieve an existing snapshot by id
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-snapshot-by-id retrieve-an-existing-snapshot-by-id}
   *
   * @param {string} snapshotId - The Id of the Snapshot
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  snapshotsGetById(snapshotId, callback) {
    const options = {
      actionPath: `snapshots/${snapshotId}`
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Delete a snapshot
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-snapshot delete-a-snapshot}
   *
   * @param {string} snapshotId - The Id of the Snapshot
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  snapshotsDeleteById(snapshotId, callback) {
    const options = {
      actionPath: `snapshots/${snapshotId}`,
      method: 'DELETE'
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Get All Certificates
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-certificates certificates}
   * @param {object} [query] - Optional query parameters
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  certificates(query, callback) {
    const options = {
      actionPath: 'certificates',
      key: 'certificates',
      qs: {
        per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
        page: (query) ? (query.page || 1) : 1
      },
      includeAll: (query) ? (query.includeAll || false) : false
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Create A Certificate
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-certificate certificates-create-new}
   * @param {object} certificateData - Certificate Creation Data
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  certificatesCreate(certificateData, callback) {
    const options = {
      actionPath: 'certificates',
      method: 'POST',
      body: certificateData
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Get Certificate By Id
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-certificate certificates-get-by-id}
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  certificatesGetById(certificateId, callback) {
    const options = { actionPath: `certificates/${encodeURIComponent(certificateId)}` };
    return this._handleRequest(options, callback);
  }

  /**
   * Delete Certificate By Id
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-certificate certificates-delete-by-id}
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  certificatesDeleteById(certificateId, callback) {
    const options = { actionPath: `certificates/${encodeURIComponent(certificateId)}`, method: 'DELETE' };
    return this._handleRequest(options, callback);
  }

  /**
   * Get All Database clusters
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-database-clusters list-all-database-clusters}
   * @param {object} [query] - Optional query parameters
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  databases(query, callback) {
    const options = {
      actionPath: 'databases/',
      qs: {
        per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
        page: (query) ? (query.page || 1) : 1
      },
      includeAll: (query) ? (query.includeAll || false) : false
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Create a database cluster
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-database-cluster create-a-new-database-cluster}
   * @param {object} [clusterData] - Database cluster creation data
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  databasesCreate(clusterData, callback) {
    const options = {
      actionPath: 'databases',
      method: 'POST',
      body: clusterData
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Retrieve an existing Database cluster
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-database-cluster retrieve-an-existing-database-cluster}
   * @param {string} [clusterId] - The database cluster ID
   * @param {*} callback  - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  databasesGet(clusterId, callback) {
    const options = {
      actionPath: `databases/${encodeURIComponent(clusterId)}`
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Resize a database cluster
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#resize-a-database-cluster resize-a-database-cluster}
   * @param {string} clusterId - The database cluster ID
   * @param {Object} configuration - The configuration required to resize the cluster
   * @param {*} callback  - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  databasesResize(clusterId, configuration, callback) {
    const options = {
      actionPath: `databases/${encodeURIComponent(clusterId)}/resize`,
      method: 'PUT',
      body: configuration
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Migrate a database cluster to a new region
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#migrate-a-database-cluster-to-a-new-region migrate-a-database-cluster-to-a-new-region}
   * @param {string} clusterId - The database cluster ID
   * @param {string} region - The slug identifier for the region
   * @param {*} callback - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  databasesMigrate(clusterId, region, callback) {
    const options = {
      actionPath: `databases/${encodeURIComponent(clusterId)}/migrate`,
      method: 'PUT',
      body: {
        region: region
      }
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Cofigure a database cluster's maintenance window
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#configure-a-database-cluster-s-maintenance-window configure-a-database-cluster-s-maintenance-window}
   * @param {string} clusterId - The database cluster ID
   * @param {Object} configuration - The configuration required to perform maintenance
   * @param {*} callback - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  databasesMaintenance(clusterId, configuration, callback) {
    const options = {
      actionPath: `databases/${encodeURIComponent(clusterId)}/maintenance`,
      method: 'PUT',
      body: configuration
    };
    return this._handleRequest(options, callback);
  }

  /**
   * List all of the available backups of a database cluster
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-backups-for-a-database-cluster list-backups-for-a-database-cluster}
   * @param {string} clusterId - The databases cluster ID
   * @param {*} callback - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  databasesGetBackups(clusterId, callback) {
    const options = {
      actionPath: `databases/${encodeURIComponent(clusterId)}/backups`,
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Create a new database cluster based on backup of an existing cluster
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#restore-from-a-database-cluster-backup restore-from-a-database-cluster-backup}
   * @param {Object} configuration - The configuration required to restore a database cluster
   * @param {*} callback - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  databasesRestore(configuration, callback) {
    const options = {
      actionPath: `databases`,
      method: 'POST',
      body: configuration
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Destroy a database cluster
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#destroy-a-database-cluster destroy-a-database-cluster}
   * @param {string} clusterId - The database cluster ID
   * @param {*} callback - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  databasesDelete(clusterId, callback) {
    const options = {
      actionPath: `databases/${encodeURIComponent(clusterId)}`,
      method: 'DELETE'
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Create a read-only replica of the database
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-read-only-replica create-a-read-only-replica}
   * @param {string} clusterId - The database cluster ID
   * @param {Object} configuration - The configuration to create a replica
   * @param {*} callback - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  databasesCreateReplica(clusterId, configuration, callback) {
    const options = {
      actionPath: `databases/${encodeURIComponent(clusterId)}/replicas`,
      method: 'POST',
      body: configuration
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Retrieve an existing read-only replica
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-read-only-replica retrieve-an-existing-read-only-replica}
   * @param {string} clusterId - The database cluster ID
   * @param {string} replicaName - The existing database replica name
   * @param {*} callback - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  databasesGetReplica(clusterId, replicaName, callback) {
    const options = {
      actionPath: `databases/${encodeURIComponent(clusterId)}/replicas/${encodeURIComponent(replicaName)}`,
    };
    return this._handleRequest(options, callback);
  }

  /**
   * List all of the read-only replicas associated with a database cluster
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-read-only-replicas list-all-read-only-replicas}
   * @param {string} clusterId - The database cluster ID
   * @param {*} callback - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  databasesReplicaGetAll(clusterId, callback) {
    const options = {
      actionPath: `databases/${encodeURIComponent(clusterId)}/replicas`
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Destroy a specific read-only replica
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#destroy-a-read-only-replica destroy-a-read-only-replica}
   * @param {string} clusterId - The database cluster ID
   * @param {string} replicaName - The existing database replica name
   * @param {*} callback - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  databasesDeleteReplica(clusterId, replicaName, callback) {
    const options = {
      actionPath: `databases/${encodeURIComponent(clusterId)}/replicas/${encodeURIComponent(replicaName)}`,
      method: 'DELETE'
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Add a database user
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#add-a-database-user add-a-database-user}
   * @param {string} clusterId - The database cluster ID
   * @param {string} username - The name to give the database user
   * @param {*} callback - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  databasesCreateUser(clusterId, username, callback) {
    const options = {
      actionPath: `databases/${encodeURIComponent(clusterId)}/users`,
      method: 'POST',
      body: {
        name: username
      }
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Get information about an existing database user
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-database-user retrieve-an-existing-database-user}
   * @param {string} clusterId - The database cluster ID
   * @param {string} username - The name of the database user
   * @param {*} callback - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  databasesGetUser(clusterId, username, callback) {
    const options = {
      actionPath: `databases/${encodeURIComponent(clusterId)}/users/${encodeURIComponent(username)}`,
    };
    return this._handleRequest(options, callback);
  }

  /**
   * List all the users of a database cluster
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-database-users list-all-database-users}
   * @param {string} clusterId - The database cluster ID
   * @param {*} callback - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  databasesUsersGetAll(clusterId, callback) {
    const options = {
      actionPath: `databases/${encodeURIComponent(clusterId)}/users`
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Remove a database user
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#remove-a-database-user remove-a-database-user}
   * @param {string} clusterId - The database cluster ID
   * @param {string} username - The name of the database user
   * @param {*} callback - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  databasesDeleteUser(clusterId, username, callback) {
    const options = {
      actionPath: `databases/${encodeURIComponent(clusterId)}/users/${encodeURIComponent(username)}`,
      method: 'DELETE',
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Add a new database to an existing cluster
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#add-a-new-database add-a-new-database}
   * @param {string} clusterId - The database cluster ID
   * @param {string} databaseName - The name to give the database
   * @param {*} callback - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  databasesCreateDB(clusterId, databaseName, callback) {
    const options = {
      actionPath: `databases/${encodeURIComponent(clusterId)}/dbs`,
      method: 'POST',
      body: {
        name: databaseName
      }
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Get information about an existing database cluster
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-database retrieve-an-existing-database}
   * @param {string} clusterId - The database cluster ID
   * @param {string} databaseName - The name of the database
   * @param {*} callback - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  databasesGetDB(clusterId, databaseName, callback) {
    const options = {
      actionPath: `databases/${encodeURIComponent(clusterId)}/dbs/${databaseName}`,
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Delete a specific database
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-database delete-a-database}
   * @param {string} clusterId - The database cluster ID
   * @param {string} databaseName - The name of the database
   * @param {*} callback - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  databasesDeleteDB(clusterId, databaseName, callback) {
    const options = {
      actionPath: `databases/${encodeURIComponent(clusterId)}/dbs/${databaseName}`,
      method: 'DELETE'
    };
    return this._handleRequest(options, callback);
  }

  /**
   * List all of the databases in a cluster
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-databases list-all-databases}
   * @param {string} clusterId - The database cluster ID
   * @param {*} callback - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  databasesDBGetAll(clusterId, callback) {
    const options = {
      actionPath: `databases/${encodeURIComponent(clusterId)}/dbs`
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Add a new connection pool
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#add-a-new-connection-pool add-a-new-connection-pool}
   * @param {string} clusterId - The database cluster ID
   * @param {Object} configuration - The configuration for a new connection pool
   * @param {*} callback - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  databasesCreatePool(clusterId, configuration, callback) {
    const options = {
      actionPath: `databases/${encodeURIComponent(clusterId)}/pools`,
      method: 'POST',
      body: configuration
    };
    return this._handleRequest(options, callback);
  }

  /**
  * List all of the connection pools
  * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-connection-pools list-all-connection-pools}
  * @param {string} clusterId - The database cluster ID
  * @param {*} callback - Optional function to execute on completion
  * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
  */
  databasesPoolGetAll(clusterId, callback) {
    const options = {
      actionPath: `databases/${encodeURIComponent(clusterId)}/pools`,
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Get information about an existing connection pool
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-connection-pool  retrieve-an-existing-connection-pool}
   * @param {string} clusterId - The database cluster ID
   * @param {string} poolName - The name of the pool
   * @param {*} callback - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  databasesGetPool(clusterId, poolName, callback) {
    const options = {
      actionPath: `databases/${encodeURIComponent(clusterId)}/pools/${encodeURIComponent(poolName)}`,
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Delete a specific connection pool
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-connection-pool delete-a-connection-pool}
   * @param {string} clusterId - The database cluster ID
   * @param {string} poolName - The name of the pool
   * @param {*} callback - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  databasesDeletePool(clusterId, poolName, callback) {
    const options = {
      actionPath: `databases/${encodeURIComponent(clusterId)}/pools/${encodeURIComponent(poolName)}`,
      method: 'DELETE'
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Get All Kubernetes Clusters
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-kubernetes-clusters kubernetes-get-clusters}
   * @param {object} [query] - Optional query parameters
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  kubernetes(query, callback) {
    const options = {
      actionPath: 'kubernetes/clusters',
      key: 'kubernetes',
      qs: {
        per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
        page: (query) ? (query.page || 1) : 1
      },
      includeAll: (query) ? (query.includeAll || false) : false
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Create a Kubernetes Cluster
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-kubernetes-cluster kubernetes-create-cluster}
   * @param {object} clusterData - Cluster creation data
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  kubernetesCreateCluster(clusterData, callback) {
    const options = {
      actionPath: 'kubernetes/clusters',
      method: 'POST',
      body: clusterData
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Get A Single Kubernetes Cluster
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-kubernetes-cluster kubernetes-cluster-get-by-id}
   * @param {string} clusterId - Id of the Cluster to get
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  kubernetesClusterGet(clusterId, callback) {
    const options = { actionPath: `kubernetes/clusters/${encodeURIComponent(clusterId)}` };
    return this._handleRequest(options, callback);
  }

  /**
   * Delete a Kubernetes Cluster
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-kubernetes-cluster kubernetes-cluster-delete}
   * @param {string} clusterId - Id of the Cluster to delete
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  kubernetesClusterDelete(clusterId, callback) {
    const options = { actionPath: `kubernetes/clusters/${encodeURIComponent(clusterId)}`, method: 'DELETE' };
    return this._handleRequest(options, callback);
  }

  /**
   * Get the kubeconfig for a Cluster
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-the-kubeconfig-for-a-kubernetes-cluster kubernetes-cluster-get-config}
   * @param {string} clusterId - Id of the Cluster to get the Kubeconfig for
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  kubernetesClusterGetConfig(clusterId, callback) {
    const options = { actionPath: `kubernetes/clusters/${encodeURIComponent(clusterId)}/kubeconfig` };
    return this._handleRequest(options, callback);
  }

  /**
   * Get the NodePools for a Cluster
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-node-pools-in-a-kubernetes-clusters kubernetes-get-node-pools}
   * @param {string} clusterId - The Id of the Cluster
   * @param {object} [query] - Optional query parameters
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  kubernetesNodePools(clusterId, query, callback) {
    const options = {
      actionPath: `kubernetes/clusters/${encodeURIComponent(clusterId)}/node_pools`,
      key: 'kubernetes',
      qs: {
        per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
        page: (query) ? (query.page || 1) : 1
      },
      includeAll: (query) ? (query.includeAll || false) : false
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Get a NodePool on a Cluster by Id
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-a-node-pool-for-a-kubernetes-cluster kubernetes-cluster-get-nodepool-by-id}
   * @param {string} clusterId - Id of the Cluster
   * @param {string} nodePoolId - Id of the NodePool to retrieve
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  kubernetesNodePoolGet(clusterId, nodePoolId, callback) {
    const options = { actionPath: `kubernetes/clusters/${encodeURIComponent(clusterId)}/node_pools/${encodeURIComponent(nodePoolId)}` };
    return this._handleRequest(options, callback);
  }

  /**
   * Add a NodePool on a Cluster
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#add-a-node-pool-to-a-kubernetes-cluster kubernetes-cluster-add-node-pool}
   * @param {string} clusterId - Id of the Cluster
   * @param {string} nodePoolId - Id of the NodePool to delete
   * @param {object} nodePoolConfiguration - The NodePool creation data
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  kubernetesNodePoolAdd(clusterId, nodePoolConfiguration, callback) {
    const options = {
      actionPath: `kubernetes/clusters/${encodeURIComponent(clusterId)}/node_pools`,
      method: 'POST',
      body: nodePoolConfiguration
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Update a NodePool on a Cluster
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#update-a-node-pool-in-a-kubernetes-cluster kubernetes-cluster-update-node-pool}
   * @param {string} clusterId - Id of the Cluster
   * @param {string} nodePoolId - Id of the NodePool to delete
   * @param {object} nodePoolConfiguration - The update data
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  kubernetesNodePoolUpdate(clusterId, nodePoolId, nodePoolConfiguration, callback) {
    const options = {
      actionPath: `kubernetes/clusters/${encodeURIComponent(clusterId)}/node_pools/${encodeURIComponent(nodePoolId)}`,
      method: 'PUT',
      body: nodePoolConfiguration
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Delete a NodePool from a Cluster
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#delete-a-node-pool-in-a-kubernetes-cluster kubernetes-cluster-delete-node-pool}
   * @param {string} clusterId - Id of the Cluster
   * @param {string} nodePoolId - Id of the NodePool to delete
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  kubernetesNodePoolDelete(clusterId, nodePoolId, callback) {
    const options = { actionPath: `kubernetes/clusters/${encodeURIComponent(clusterId)}/node_pools/${encodeURIComponent(nodePoolId)}`, method: 'DELETE' };
    return this._handleRequest(options, callback);
  }

  /**
   * Recycle the NodePool of a Kubernetes Cluster
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#recycle-nodes-in-a-kubernetes-cluster kubernetes-cluster-recycle}
   * @param {string} clusterId - Id of the Cluster to cycle
   * @param {string} nodePoolId - Id of the NodePool to cycle
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  kubernetesNodesRecycle(clusterId, nodePoolId, callback) {
    const options = { actionPath: `kubernetes/clusters/${encodeURIComponent(clusterId)}/node_pools/${encodeURIComponent(nodePoolId)}/recycle`, method: 'POST' };
    return this._handleRequest(options, callback);
  }

  /**
   * Get Kubernetes availability
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-available-regions--node-sizes--and-versions-of-kubernetes kubernetes-get-availability}
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  kubernetesAvailability(callback) {
    const options = { actionPath: 'kubernetes/options' };
    return this._handleRequest(options, callback);
  }

  /**
   * Get All Projects
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-projects projects}
   *
   * @param {object} [query] - Optional query parameters
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  projects(query, callback) {
    const options = {
      actionPath: 'projects',
      key: 'projects',
      qs: {
        per_page: (query) ? (query.per_page || this.perPage) : this.perPage,
        page: (query) ? (query.page || 1) : 1
      },
      includeAll: (query) ? (query.includeAll || false) : false
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Create a Project
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-project projects-create}
   * @param {object} projectData - Project creation data
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  projectsCreate(projectData, callback) {
    const options = {
      actionPath: 'projects',
      method: 'POST',
      body: projectData
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Update A Project
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#update-a-project projects-update}
   *
   * @param {string} projectId - The Project Id to get
   * @param {object} projectData - The Update Data
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  projectsUpdate(projectId, projectData, callback) {
    const options = {
      actionPath: `projects/${encodeURIComponent(projectId)}`,
      method: 'PUT',
      body: projectData
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Patch A Project
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#patch-a-project projects-patch}
   *
   * @param {string} projectId - The Project Id to get
   * @param {object} projectData - The Patch Data
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  projectsPatch(projectId, projectData, callback) {
    const options = {
      actionPath: `projects/${encodeURIComponent(projectId)}`,
      method: 'PATCH',
      body: projectData
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Get A Project
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-project projects-get-by-id}
   *
   * @param {string} projectId - The Project Id to get
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  projectsGet(projectId, callback) {
    const options = { actionPath: `projects/${encodeURIComponent(projectId)}` };
    return this._handleRequest(options, callback);
  }

    /**
   * Get Project Resources
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#list-all-resources list-all-resources}
   *
   * @param {string} projectId - The Project Id to get
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  projectsGetResources(projectId, callback) {
    const options = { actionPath: `projects/${encodeURIComponent(projectId)}/resources` };
    return this._handleRequest(options, callback);
  }

  /**
   * Get The Default Project
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#retrieve-the-default-project projects-get-default}
   *
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  projectsGetDefault(callback) {
    const options = { actionPath: 'projects/default' };
    return this._handleRequest(options, callback);
  }

  /**
   * Update The Default Project
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#update-the-default-project projects-default-update}
   *
   * @param {object} projectData - The Update Data
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  projectsUpdateDefault(projectData, callback) {
    const options = {
      actionPath: 'projects/default',
      method: 'PUT',
      body: projectData
    };
    return this._handleRequest(options, callback);
  }

  /**
   * Patch The Default Project
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#patch-the-default-project projects-default-patch}
   *
   * @param {object} projectData - The Patch Data
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if [callback] is not defined
   */
  projectsPatchDefault(projectData, callback) {
    const options = {
      actionPath: 'projects/default',
      method: 'PATCH',
      body: projectData
    };
    return this._handleRequest(options, callback);
  }
}
