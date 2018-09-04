'use strict';

import request from 'request';
import timesSeries from 'async/times';

export default class RequestHelper {
  /**
   * Request Helper
   * @param {string} token - Your Private API Token
   * @constructor
   */
  constructor(token) {
    this.headers = {
      'authorization': 'Bearer ' + token,
      'content_type': 'application/json'
    };
    this.apiUrl = 'https://api.digitalocean.com/v2/';
  }

  /**
   * Check the required Request & Trigger
   * @param {*} options - Request Options
   * @param {*} [callback] - Optional function to execute on completion
   * @returns {Promise|undefined} - Returns a promise if callback is not defined
   */
  request(options, callback) {
    let promise;
    if ( !callback ) {
      promise = new Promise((resolve, reject) => {
        callback = (err, response, body) => {
          if (err) {
            reject(err);
          } else {
            resolve({response, body});
          }
        };
      });
    }
    options.includeAll ? this.getAllPages(options.key, options, callback) : this.submitRequest(options, callback);
    return promise; // Will be undefined if callback was passed.
  }

  /**
   * Submit the Request
   * @param {*} options - Request Options Object
   * @param {*} callback - Function to execute on completion
   */
  submitRequest(options, callback) {
    let requestOptions = this.requestBuilder(options);
    request(requestOptions, (err, response, body) => {
      if ( err ) {
        callback(err);
      } else if ( !err && !this.isSuccessfulRequest(response.statusCode) ) {
        callback(body);
      } else {
        callback(null, response, body);
      }
    });
  }

  /**
   * Validate the Response Status Code
   * @param {number} statusCode - The Status Code
   * @returns {boolean}
   */
  isSuccessfulRequest(statusCode) {
    const statusCodePattern = /^[2][0-9][0-9]$/;
    return statusCodePattern.test(statusCode);
  }

  /**
   * Get All Pages
   * @param {string} key - Type of Item
   * @param {*} options - Request Options
   * @param {*} callback - Function to execute on completion
   */
  getAllPages(key, options, callback) {
    let items = [],
        total = 0,
        required = 0;

    options.qs.page = 1;

    this.submitRequest(options, (err, response, body) => {
      if ( err ) {
        return callback(err);
      }
      total = body.meta.total;
      items = items.concat(body[key]);
      required = Math.ceil(total / (options.qs.per_page || 25));
      if ( items.length >= total ) {
        return callback(null, response, items);
      } else {
        let lastResponse;
        this.getRemainingPages(options, 2, required, (response, body) => {
          items = items.concat(body[key]);
          lastResponse = response;
        }, (err) => {
          if (err) {
            return callback(err);
          }
          callback(null, lastResponse, items);
        });
      }
    });
  }

  /**
   * Get the Remaining Pages
   * @param {*} options - Request Options
   * @param {number} first - The first page to retrieve
   * @param {number} last - The last page to retrieve
   * @param {*} step - Function to execute on every request
   * @param {*} callback - Function to execute on completion
   */
  getRemainingPages(options, first, last, step, callback) {
    const count = last - first + 1;
    timesSeries(count, (n, next) => {
      options.qs.page = first + n;
      this.submitRequest(options, (err, response, body) => {
        if (err) {
          return next(err);
        }
        step(response, body);
        next();
      });
    }, callback);
  }

  /**
   * Build Options for Request
   * @param {*} options - Options Object
   * @returns {*}
   */
  requestBuilder(options) {
    return {
      uri: this.apiUrl + options.actionPath,
      method: options.method || 'GET',
      headers: options.headers || this.headers,
      body: options.body || {},
      strictSSL: true,
      json: true,
      qs: options.qs || {}
    };
  }
}
