"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
var Droplets = /** @class */ (function (_super) {
    __extends(Droplets, _super);
    function Droplets(pageSize, requestHelper) {
        var _this = _super.call(this, pageSize, requestHelper) || this;
        _this.basePath = 'droplets';
        _this.baseOptions = {
            actionPath: _this.basePath + "/",
        };
        return _this;
    }
    /**
     * Get all Droplets
     * @param tagName filter to only return Droplets with a given tag
     * @param [includeAll] return all Droplets, paginated (optional)
     * @param [page] the specific page of Droplets to return (optional)
     * @param [pageSize] the number of Droplets to return per page (optional)
     * @returns Promise
     */
    Droplets.prototype.getAll = function (tagName, includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var requestOptions = this._getBasePaginatedRequestOptions(__assign({}, this.baseOptions, { key: 'droplets', tagName: tagName, pageSize: pageSize, page: page, includeAll: includeAll }));
        return this._execute(requestOptions);
    };
    /**
     * Get all Kernels for a Droplet
     * @param dropletId the identifier of the Droplet
     * @param tagName filter to only return Kernels with a given tag
     * @param [includeAll] return all Kernels, paginated (optional)
     * @param [page] the specific page of Kernels to return (optional)
     * @param [pageSize] the number of Kernels to return per page (optional)
     * @returns Promise
     */
    Droplets.prototype.getKernels = function (dropletId, tagName, includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath + "/" + encodeURIComponent(dropletId) + "/kernels",
            key: 'kernels',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });
        return this._execute(requestOptions);
    };
    /**
     * Get all Snapshots for a Droplet
     * @param dropletId the identifier of the Droplet
     * @param tagName filter to only return Snapshots with a given tag
     * @param [includeAll] return all Snapshots, paginated (optional)
     * @param [page] the specific page of Snapshots to return (optional)
     * @param [pageSize] the number of Snapshots to return per page (optional)
     * @returns Promise
     */
    Droplets.prototype.getSnapshots = function (dropletId, tagName, includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath + "/" + encodeURIComponent(dropletId) + "/snapshots",
            key: 'snapshots',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });
        return this._execute(requestOptions);
    };
    /**
     * Get all Backups for a Droplet
     * @param dropletId the identifier of the Droplet
     * @param tagName filter to only return Backups with a given tag
     * @param [includeAll] return all Backups, paginated (optional)
     * @param [page] the specific page of Backups to return (optional)
     * @param [pageSize] the number of Backups to return per page (optional)
     * @returns Promise
     */
    Droplets.prototype.getBackups = function (dropletId, tagName, includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath + "/" + encodeURIComponent(dropletId) + "/backups",
            key: 'backups',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });
        return this._execute(requestOptions);
    };
    /**
     * Get all Actions for a Droplet
     * @param dropletId the identifier of the Droplet
     * @param tagName filter to only return Actions with a given tag
     * @param [includeAll] return all Actions, paginated (optional)
     * @param [page] the specific page of Actions to return (optional)
     * @param [pageSize] the number of Actions to return per page (optional)
     * @returns Promise
     */
    Droplets.prototype.getActions = function (dropletId, tagName, includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath + "/" + encodeURIComponent(dropletId) + "/actions",
            key: 'actions',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });
        return this._execute(requestOptions);
    };
    return Droplets;
}(base_module_1.BaseModule));
exports.default = Droplets;
