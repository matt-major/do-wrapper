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
Object.defineProperty(exports, "__esModule", { value: true });
var base_module_1 = require("./base-module");
var common_1 = require("../common");
var Domains = /** @class */ (function (_super) {
    __extends(Domains, _super);
    function Domains(pageSize, requestHelper) {
        var _this = _super.call(this, pageSize, requestHelper) || this;
        _this.basePath = 'domains';
        _this.baseOptions = {
            actionPath: _this.basePath + "/",
        };
        return _this;
    }
    /**
     * Get all Domains
     * @param [tagName] filter to only return Domains with a given tag
     * @param [includeAll] return all Domains, paginated (optional)
     * @param [page] the specific page of Domains to return (optional)
     * @param [pageSize] the number of Domains to return per page (optional)
     * @returns Promise
     */
    Domains.prototype.getAll = function (tagName, includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var requestOptions = this._getBasePaginatedRequestOptions(__assign(__assign({}, this.baseOptions), { key: 'domains', tagName: tagName, pageSize: pageSize, page: page, includeAll: includeAll }));
        return this._execute(requestOptions);
    };
    /**
     * Create a new Domain
     * @param options the options for the new Domain
     * @returns Promise
     */
    Domains.prototype.create = function (options) {
        return this._execute(__assign(__assign({}, this.baseOptions), { method: common_1.HttpMethods.POST, body: options }));
    };
    /**
     * Get a Domain
     * @params domainName the name of the Domain to retrieve
     * @returns Promise
     */
    Domains.prototype.getByName = function (domainName) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(domainName),
        });
    };
    /**
     * Delete a Domain
     * @params domainName the name of the Domain to delete
     * @returns Promise
     */
    Domains.prototype.delete = function (domainName) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(domainName),
            method: common_1.HttpMethods.DELETE,
        });
    };
    /**
     * Get all Domain Records
     * @param domainName the Domain to get the records for
     * @param [tagName] filter to only return Domains with a given tag
     * @param [includeAll] return all Domains, paginated (optional)
     * @param [page] the specific page of Domains to return (optional)
     * @param [pageSize] the number of Domains to return per page (optional)
     * @returns Promise
     */
    Domains.prototype.getAllRecords = function (domainName, tagName, includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath + "/" + encodeURIComponent(domainName) + "/records",
            key: 'domain_records',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });
        return this._execute(requestOptions);
    };
    /**
     * Add a new Record to a Domain
     * @param domainName the name of the Domain to add it to
     * @param options the Domain Record options
     * @returns Promise
     */
    Domains.prototype.createRecord = function (domainName, options) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(domainName) + "/records",
            method: common_1.HttpMethods.POST,
            body: options,
        });
    };
    /**
     * Get a Domain Record
     * @param domainName the name of the Domain to retrieve it from
     * @param recordId the Record identifier to retrieve
     * @returns Promise
     */
    Domains.prototype.getRecord = function (domainName, recordId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(domainName) + "/records/" + encodeURIComponent(recordId),
        });
    };
    /**
     * Delete a Domain Record
     * @param domainName the name of the Domain to retrieve it from
     * @param recordId the Record identifier to retrieve
     * @returns Promise
     */
    Domains.prototype.deleteRecord = function (domainName, recordId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(domainName) + "/records/" + encodeURIComponent(recordId),
            method: common_1.HttpMethods.DELETE,
        });
    };
    /**
     * Update a Domain Record
     * @param domainName the name of the Domain to update
     * @param recordId the Record identifier to update
     * @param options the update options
     * @returns Promise
     */
    Domains.prototype.updateRecord = function (domainName, recordId, options) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(domainName) + "/records/" + encodeURIComponent(recordId),
            method: common_1.HttpMethods.PUT,
            body: options,
        });
    };
    return Domains;
}(base_module_1.BaseModule));
exports.default = Domains;
