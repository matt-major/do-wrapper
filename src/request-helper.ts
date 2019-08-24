import request from 'request';

interface Headers {
  [key: string]: any;
}

export default class RequestHelper {
  private headers: Headers;
  private apiUrl: string;

  /**
   * Request Helper
   * @param {string} token - Your Private API Token
   * @constructor
   */
  constructor(token: string) {
    this.headers = {
      'authorization': `Bearer ${token}`,
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
  request(options: any, callback?: Function): any {
    let promise;
    if ( !callback ) {
      promise = new Promise((resolve, reject) => {
        callback = (err: any, response: any, body: any) => {
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
  submitRequest(options: any, callback: any): void {
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
  isSuccessfulRequest(statusCode: number) {
    const statusCodePattern = /^[2][0-9][0-9]$/;
    return statusCodePattern.test(`${statusCode}`);
  }

  /**
   * Get All Pages
   * @param {string} key - Type of Item
   * @param {*} options - Request Options
   * @param {*} callback - Function to execute on completion
   */
  getAllPages(key: string, options: any, callback: any) {
    let items: any[] = [],
        total: number = 0,
        required: number = 0,
        completed: number = 1;

    options.qs.page = 1;

    this.submitRequest(options, (err: any, response: any, body: any) => {
      if (err) {
        callback(err);
      }

      total = body.meta.total;
      items = items.concat(body[key]);
      required = total / (options.qs.per_page || 25);

      if ( items.length >= total ) {
        return callback(null, response, items);
      } else {
        this.getRemainingPages(options, 2, required, function (err: any, response: any, body: any) {
          if ( err ) {
            callback(err);
          }
          
          completed++;
          items = items.concat(body[key]);

          if ( completed === required ) {
            callback(null, response, items);
          }
        });
      }
    });
  }

  /**
   * Get the Remaining Pages
   * @param {*} options - Request Options
   * @param {number} first - The first page to retrieve
   * @param {number} last - The last page to retrieve
   * @param {*} callback - Function to execute on completion
   */
  getRemainingPages(options: any, first: number, last: number, callback: Function) {
    for (let current = first; current <= last; current++) {
      options.qs.page = current;
      this.submitRequest(options, callback);
    }
  }

  /**
   * Build Options for Request
   * @param {*} options - Options Object
   * @returns {*}
   */
  requestBuilder(options: any) {
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
