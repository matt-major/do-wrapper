"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var got_1 = __importDefault(require("got"));
var common_1 = require("./common");
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
            callback = function (body, err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(body);
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
        var requestOptions = this.requestBuilder(options);
        got_1.default(this.apiUrl + options.actionPath, requestOptions)
            .then(function (response) {
            callback(response.statusCode === 204 ? null : JSON.parse(response.body), null);
        })
            .catch(function (error) {
            callback(null, error);
        });
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
        // Override the per_page amount to avoid HTTP 429 TOO_MANY_REQUESTS
        options.qs.per_page = 25;
        this.submitRequest(options, function (body, err) {
            if (err) {
                return callback(null, err);
            }
            total = body.meta.total;
            items = items.concat(body[key]);
            required = Math.ceil(total / options.qs.per_page);
            if (items.length >= total) {
                return callback(items);
            }
            else {
                _this.getRemainingPages(options, 2, required, function (body, err) {
                    if (err) {
                        return callback(null, err);
                    }
                    completed++;
                    items = items.concat(body[key]);
                    if (completed === required) {
                        return callback(items);
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
        return __assign({ method: options.method || common_1.HttpMethods.GET, headers: options.headers || this.headers, strictSSL: true, searchParams: options.qs || {}, retry: 0 }, (options.body && { json: options.body }));
    };
    return RequestHelper;
}());
exports.default = RequestHelper;
