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
var FloatingIPs = /** @class */ (function (_super) {
    __extends(FloatingIPs, _super);
    function FloatingIPs(pageSize, requestHelper) {
        var _this = _super.call(this, pageSize, requestHelper) || this;
        _this.basePath = 'floating_ips';
        _this.baseOptions = {
            actionPath: _this.basePath + "/",
        };
        return _this;
    }
    /**
     * Get all Floating IPs
     * @param [tagName] return all Floating IPs with a given Tag (optional)
     * @param [includeAll] return all Floating IPs, paginated (optional)
     * @param [page] the specific page of Floating IPs to return (optional)
     * @param [pageSize] the number of Floating IPs to return per page (optional)
     * @returns Promise
     */
    FloatingIPs.prototype.getAll = function (tagName, includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var requestOptions = this._getBasePaginatedRequestOptions(__assign(__assign({}, this.baseOptions), { key: 'floating_ips', tagName: tagName, pageSize: pageSize, page: page, includeAll: includeAll }));
        return this._execute(requestOptions);
    };
    /**
     * Assign a Droplet
     * @param dropletId the identifier of the Droplet
     * @returns Promise
     */
    FloatingIPs.prototype.assignDroplet = function (dropletId) {
        return this._execute(__assign(__assign({}, this.baseOptions), { method: common_1.HttpMethods.POST, body: {
                droplet_id: dropletId,
            } }));
    };
    /**
     * Assign a Region
     * @param region the region to assign
     * @returns Promise
     */
    FloatingIPs.prototype.assignRegion = function (region) {
        return this._execute(__assign(__assign({}, this.baseOptions), { method: common_1.HttpMethods.POST, body: {
                region: region,
            } }));
    };
    /**
     * Get a Floating IP
     * @param ipAddress the Floating IP to retrieve
     * @returns Promise
     */
    FloatingIPs.prototype.getByIp = function (ipAddress) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(ipAddress),
        });
    };
    /**
     * Delete a Floating IP
     * @param ipAddress the Floating IP to delete
     * @returns Promise
     */
    FloatingIPs.prototype.deleteByIp = function (ipAddress) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(ipAddress),
            method: common_1.HttpMethods.DELETE,
        });
    };
    /**
     * Request an action on a Floating IP
     * @param ipAddress the Floating IP to request against
     * @param action the action to request
     * @returns Promise
     */
    FloatingIPs.prototype.requestAction = function (ipAddress, action) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(ipAddress) + "/actions",
            method: common_1.HttpMethods.POST,
            body: action,
        });
    };
    /**
     * Retrieve an action from a Floating IP
     * @param ipAddress the Floating IP to retrieve
     * @param actionId the action to retrieve
     * @returns Promise
     */
    FloatingIPs.prototype.getAction = function (ipAddress, actionId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(ipAddress) + "/actions/" + encodeURIComponent(actionId),
        });
    };
    /**
     * Get all Actions for a Floating IP
     * @param ipAddress the Floating IP to retrieve actions for
     * @param [tagName] return all Actions with a given Tag (optional)
     * @param [includeAll] return all Actions, paginated (optional)
     * @param [page] the specific page of Actions to return (optional)
     * @param [pageSize] the number of Actions to return per page (optional)
     * @returns Promise
     */
    FloatingIPs.prototype.getAllActions = function (ipAddress, tagName, includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath + "/" + encodeURIComponent(ipAddress) + "/actions",
            key: 'actions',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });
        return this._execute(requestOptions);
    };
    return FloatingIPs;
}(base_module_1.BaseModule));
exports.default = FloatingIPs;
