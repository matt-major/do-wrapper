"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = __importDefault(require("request"));
var RequestHelper = /** @class */ (function () {
    /**
     * Request Helper
     * @param {string} token - Your Private API Token
     * @constructor
     */
    function RequestHelper(token) {
        this.headers = {
            'authorization': "Bearer " + token,
            'content_type': 'application/json'
        };
        this.apiUrl = 'https://api.digitalocean.com/v2/';
    }
    /**
     * Check the required Request & Trigger
     * @param {*} options - Request Options
     * @returns {Promise} - Returns a promise
     */
    RequestHelper.prototype.request = function (options) {
        var callback;
        var promise = new Promise(function (resolve, reject) {
            callback = function (err, response, body) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve({ response: response, body: body });
                }
            };
        });
        options.includeAll ? this.getAllPages(options.key, options, callback) : this.submitRequest(options, callback);
        return promise;
    };
    /**
     * Submit the Request
     * @param {*} options - Request Options Object
     * @param {*} callback - Function to execute on completion
     */
    RequestHelper.prototype.submitRequest = function (options, callback) {
        var _this = this;
        var requestOptions = this.requestBuilder(options);
        request_1.default(requestOptions, function (err, response, body) {
            if (err) {
                callback(err);
            }
            else if (!err && !_this._isSuccessfulRequest(response.statusCode)) {
                callback(body);
            }
            else {
                callback(null, response, body);
            }
        });
    };
    /**
     * Validate the Response Status Code
     * @param {number} statusCode - The Status Code
     * @returns {boolean}
     */
    RequestHelper.prototype._isSuccessfulRequest = function (statusCode) {
        var statusCodePattern = /^[2][0-9][0-9]$/;
        return statusCodePattern.test("" + statusCode);
    };
    /**
     * Get All Pages
     * @param {string} key - Type of Item
     * @param {*} options - Request Options
     * @param {*} callback - Function to execute on completion
     */
    RequestHelper.prototype.getAllPages = function (key, options, callback) {
        var _this = this;
        var items = [], total = 0, required = 0, completed = 1;
        options.qs.page = 1;
        this.submitRequest(options, function (err, response, body) {
            if (err) {
                callback(err);
            }
            total = body.meta.total;
            items = items.concat(body[key]);
            required = total / (options.qs.per_page || 25);
            if (items.length >= total) {
                return callback(null, response, items);
            }
            else {
                _this.getRemainingPages(options, 2, required, function (err, response, body) {
                    if (err) {
                        callback(err);
                    }
                    completed++;
                    items = items.concat(body[key]);
                    if (completed === required) {
                        callback(null, response, items);
                    }
                });
            }
        });
    };
    /**
     * Get the Remaining Pages
     * @param {*} options - Request Options
     * @param {number} first - The first page to retrieve
     * @param {number} last - The last page to retrieve
     * @param {*} callback - Function to execute on completion
     */
    RequestHelper.prototype.getRemainingPages = function (options, first, last, callback) {
        for (var current = first; current <= last; current++) {
            options.qs.page = current;
            this.submitRequest(options, callback);
        }
    };
    /**
     * Build Options for Request
     * @param {*} options - Options Object
     * @returns {*}
     */
    RequestHelper.prototype.requestBuilder = function (options) {
        return {
            uri: this.apiUrl + options.actionPath,
            method: options.method || 'GET',
            headers: options.headers || this.headers,
            body: options.body || {},
            strictSSL: true,
            json: true,
            qs: options.qs || {}
        };
    };
    return RequestHelper;
}());
exports.default = RequestHelper;
