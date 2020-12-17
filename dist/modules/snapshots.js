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
var Snapshots = /** @class */ (function (_super) {
    __extends(Snapshots, _super);
    function Snapshots(pageSize, requestHelper) {
        var _this = _super.call(this, pageSize, requestHelper) || this;
        _this.basePath = 'snapshots';
        _this.baseOptions = {
            actionPath: _this.basePath,
            key: 'snapshots',
        };
        return _this;
    }
    /**
     * Get all Snapshots, regardless of type
     * @param [tagName] filter to only return Snapshots with a given tag
     * @param [includeAll] return all Snapshots, paginated (optional)
     * @param [page] the specific page of Snapshots to return (optional)
     * @param [pageSize] the number of Snapshots to return per page (optional)
     * @returns Promise
     */
    Snapshots.prototype.get = function (tagName, includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var requestOptions = this._getBasePaginatedRequestOptions(__assign(__assign({}, this.baseOptions), { tagName: tagName, pageSize: pageSize, page: page, includeAll: includeAll }));
        return this._execute(requestOptions);
    };
    /**
     * Get a Snapshot using its identifier
     * @param snapshotId the identifier of the Snapshot to retrieve
     * @returns Promise
     */
    Snapshots.prototype.getById = function (snapshotId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(snapshotId),
        });
    };
    /**
     * Get all Snapshots, only for Volumes
     * @param [tagName] filter to only return Snapshots with a given tag
     * @param [includeAll] return all Snapshots, paginated (optional)
     * @param [page] the specific page of Snapshots to return (optional)
     * @param [pageSize] the number of Snapshots to return per page (optional)
     * @returns Promise
     */
    Snapshots.prototype.getForVolumes = function (tagName, includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var requestOptions = this._getBasePaginatedRequestOptions(__assign(__assign({}, this.baseOptions), { tagName: tagName, pageSize: pageSize, page: page, includeAll: includeAll, qs: {
                resource_type: 'volume',
            } }));
        return this._execute(requestOptions);
    };
    /**
     * Get all Snapshots, only for Droplets
     * @param [tagName] filter to only return Snapshots with a given tag
     * @param [includeAll] return all Snapshots, paginated (optional)
     * @param [page] the specific page of Snapshots to return (optional)
     * @param [pageSize] the number of Snapshots to return per page (optional)
     * @returns Promise
     */
    Snapshots.prototype.getForDroplets = function (tagName, includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var requestOptions = this._getBasePaginatedRequestOptions(__assign(__assign({}, this.baseOptions), { tagName: tagName, pageSize: pageSize, page: page, includeAll: includeAll, qs: {
                resource_type: 'droplet',
            } }));
        return this._execute(requestOptions);
    };
    /**
     * Delete a Snapshot
     * @param snapshotId the identifier of the Snapshot to delete
     * @returns Promise
     */
    Snapshots.prototype.deleteById = function (snapshotId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(snapshotId),
            method: common_1.HttpMethods.DELETE,
        });
    };
    return Snapshots;
}(base_module_1.BaseModule));
exports.default = Snapshots;
