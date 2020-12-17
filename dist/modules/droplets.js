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
     * @param [tagName] filter to only return Droplets with a given tag
     * @param [includeAll] return all Droplets, paginated (optional)
     * @param [page] the specific page of Droplets to return (optional)
     * @param [pageSize] the number of Droplets to return per page (optional)
     * @returns Promise
     */
    Droplets.prototype.getAll = function (tagName, includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var requestOptions = this._getBasePaginatedRequestOptions(__assign(__assign({}, this.baseOptions), { key: 'droplets', tagName: tagName, pageSize: pageSize, page: page, includeAll: includeAll }));
        return this._execute(requestOptions);
    };
    /**
     * Get all Kernels for a Droplet
     * @param dropletId the identifier of the Droplet
     * @param [tagName] filter to only return Kernels with a given tag
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
     * @param [tagName] filter to only return Snapshots with a given tag
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
     * @param [tagName] filter to only return Backups with a given tag
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
     * @param [tagName] filter to only return Actions with a given tag
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
    /**
     * Create a new Droplet
     * @param options the options for the new Droplet
     * @returns Promise
     */
    Droplets.prototype.create = function (options) {
        return this._execute(__assign(__assign({}, this.baseOptions), { method: common_1.HttpMethods.POST, body: options }));
    };
    /**
     * Get a Droplet by its identifier
     * @param dropletId the identifier of the Droplet
     * @returns Promise
     */
    Droplets.prototype.getById = function (dropletId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(dropletId),
        });
    };
    /**
     * Delete a Droplet by its identifier
     * @param dropletId the identifier of the Droplet
     * @returns Promise
     */
    Droplets.prototype.deleteById = function (dropletId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(dropletId),
            method: common_1.HttpMethods.DELETE,
        });
    };
    /**
     * Delete all Droplets with a given Tag
     * @param tagName the Tag to delete Droplets for
     * @returns Promise
     */
    Droplets.prototype.deleteByTag = function (tagName) {
        return this._execute(__assign(__assign({}, this.baseOptions), { method: common_1.HttpMethods.DELETE, qs: {
                tag_name: tagName,
            } }));
    };
    /**
     * Get the neighbors of a Droplet by its identifier
     * @param dropletId the identifier of the Droplet
     * @returns Promise
     */
    Droplets.prototype.getNeighbors = function (dropletId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(dropletId) + "/neighbors",
        });
    };
    /**
     * Get Droplet Upgrades
     * @returns Promise
     */
    Droplets.prototype.getUpgrades = function () {
        return this._execute({
            actionPath: 'droplet_upgrades',
        });
    };
    /**
     * Request an Action on a Droplet
     * @param dropletId the identifier of the Droplet
     * @param action the Action to request
     * @returns Promise
     */
    Droplets.prototype.requestAction = function (dropletId, action) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(dropletId) + "/actions",
            method: common_1.HttpMethods.POST,
            body: action,
        });
    };
    /**
     * Request an Action on all Droplets with a given Tag
     * @param tagName the Tag name to filter Droplets with
     * @param action the Action to request
     * @returns Promise
     */
    Droplets.prototype.requestActionByTag = function (tagName, action) {
        return this._execute({
            actionPath: this.basePath + "/actions",
            method: common_1.HttpMethods.POST,
            qs: {
                tag_name: tagName,
            },
            body: action,
        });
    };
    /**
     * Get the details of an Action on a Droplet
     * @param dropletId the identifier of the Droplet
     * @param actionId the identifier of the Action
     * @returns Promise
     */
    Droplets.prototype.getAction = function (dropletId, actionId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(dropletId) + "/actions/" + encodeURIComponent(actionId),
        });
    };
    return Droplets;
}(base_module_1.BaseModule));
exports.default = Droplets;
