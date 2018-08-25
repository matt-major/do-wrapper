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
      }
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
   * Info: {@link https://developers.digitalocean.com/documentation/v2/#create-a-new-floating-ip-assigned-to-a-droplet create-a-new-floating-ip-assigned-to-a-droplet}
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
}
