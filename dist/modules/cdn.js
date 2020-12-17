"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_module_1 = require("./base-module");
var common_1 = require("../common");
var CDN = /** @class */ (function (_super) {
    __extends(CDN, _super);
    function CDN(pageSize, requestHelper) {
        var _this = _super.call(this, pageSize, requestHelper) || this;
        _this.basePath = 'cdn/endpoints';
        return _this;
    }
    /**
     * Get all CDN Endpoints
     * @param tagName filter to only return CDN Endpoints with a given tag
     * @param [includeAll] return all CDN Endpoints, paginated (optional)
     * @param [page] the specific page of CDN Endpoints to return (optional)
     * @param [pageSize] the number of CDN Endpoints to return per page (optional)
     * @returns Promise
     */
    CDN.prototype.getAllEndpoints = function (tagName, includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath,
            key: 'endpoints',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });
        return this._execute(requestOptions);
    };
    /**
     * Get a CDN Endpoint via its Id
     *
     * @param endpointId the identifier of the endpoint to retrieve
     * @returns Promise
     */
    CDN.prototype.getEndpointById = function (endpointId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(endpointId),
        });
    };
    /**
     * Create a new CDN Endpoint
     *
     * @param origin The origin server address (FQDN) which provides the content for the CDN
     * @param ttl The amount of time (seconds) the content is cached by the CDN's edge servers. Defaults to 3600 (one hour)
     * @returns Promise
     */
    CDN.prototype.createEndpoint = function (origin, ttl) {
        return this._execute({
            actionPath: this.basePath,
            method: common_1.HttpMethods.POST,
            body: {
                origin: origin,
                ttl: ttl,
            },
        });
    };
    /**
     * Update the TTL of an existing CDN Endpoint
     *
     * @param endpointId the identifier of the CDN Endpoint you wish to update
     * @param ttl the amount of time (seconds) the content is cached by the CDN's edge servers
     * @returns Promise
     */
    CDN.prototype.updateEndpointTtl = function (endpointId, ttl) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(endpointId),
            method: common_1.HttpMethods.PUT,
            body: {
                ttl: ttl,
            },
        });
    };
    /**
     * Delete an existing CDN Endpoint
     *
     * @param endpointId the identifier of the CDN Endpoint you wish to update
     */
    CDN.prototype.deleteEndpoint = function (endpointId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(endpointId),
            method: common_1.HttpMethods.DELETE,
        });
    };
    /**
     * Purge cached content from an existing CDN Endpoint
     *
     * @param endpointId the identifier of the CDN Endpoint to purge the cache on
     * @param fileNames an array of path strings to clear purge from the cache
     * @returns Promise
     */
    CDN.prototype.purgeEndpointCache = function (endpointId, fileNames) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(endpointId) + "/cache",
            method: common_1.HttpMethods.DELETE,
            body: {
                files: fileNames,
            },
        });
    };
    return CDN;
}(base_module_1.BaseModule));
exports.default = CDN;
