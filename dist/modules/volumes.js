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
var Volumes = /** @class */ (function (_super) {
    __extends(Volumes, _super);
    function Volumes(pageSize, requestHelper) {
        var _this = _super.call(this, pageSize, requestHelper) || this;
        _this.basePath = 'volumes';
        _this.baseOptions = {
            actionPath: _this.basePath + "/",
        };
        return _this;
    }
    /**
     * Get all Volumes
     * @param [region] optional Region Name filter
     * @returns Promise
     */
    Volumes.prototype.getAll = function (region) {
        return this._execute(__assign(__assign({}, this.baseOptions), { qs: {
                region: region || '',
            } }));
    };
    /**
     * Create a new Block Storage Volume
     * @param options the options to create the new Block Storage Volume
     * @returns Promise
     */
    Volumes.prototype.create = function (options) {
        return this._execute(__assign(__assign({}, this.baseOptions), { method: common_1.HttpMethods.POST, body: options }));
    };
    /**
     * Get a Block Storage Volume using its identifier
     * @param volumeId the identifier of the Block Storage Volume
     * @returns Promise
     */
    Volumes.prototype.getById = function (volumeId) {
        return this._execute({
            actionPath: this.basePath + "/" + volumeId,
        });
    };
    /**
     * Get a Block Storage Volume using its name and region
     * @param volumeName the name of the Block Storage Volume
     * @param region the region of the Block Storage Volume
     * @returns Promise
     */
    Volumes.prototype.getByNameAndRegion = function (volumeName, region) {
        return this._execute(__assign(__assign({}, this.baseOptions), { qs: {
                name: volumeName,
                region: region,
            } }));
    };
    /**
     * Delete a Block Storage Volume using its identifier
     * @param volumeId the identifier of the Block Storage Volume
     * @returns Promise
     */
    Volumes.prototype.deleteById = function (volumeId) {
        return this._execute({
            actionPath: this.basePath + "/" + volumeId,
            method: common_1.HttpMethods.DELETE,
        });
    };
    /**
     * Delete a Block Storage Volume using its name and region
     * @param volumeName the name of the Block Storage Volume
     * @param region the region of the Block Storage Volume
     * @returns Promise
     */
    Volumes.prototype.deleteByNameAndRegion = function (volumeName, region) {
        return this._execute(__assign(__assign({}, this.baseOptions), { method: common_1.HttpMethods.DELETE, qs: {
                name: volumeName,
                region: region,
            } }));
    };
    /**
     * Request an action against a specific Block Storage Volume
     * @param volumeId the identifier of the Block Storage Volume
     * @param action the action details to request
     * @returns Promise
     */
    Volumes.prototype.requestAction = function (volumeId, action) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(volumeId) + "/actions",
            method: common_1.HttpMethods.POST,
            body: action,
        });
    };
    /**
     * Get the snapshots for a specific Block Storage Volume
     * @param volumeId the identifier of the Block Storage Volume
     * @returns Promise
     */
    Volumes.prototype.getSnapshots = function (volumeId) {
        return this._execute({
            actionPath: this.basePath + "/" + volumeId + "/snapshots",
        });
    };
    /**
     * Create a new snapshot for a Block Storage Volume
     * @param volumeId the identifier of the Block Storage Volume
     * @param options the options to create the snapshot
     * @returns Promise
     */
    Volumes.prototype.createSnapshot = function (volumeId, options) {
        return this._execute({
            actionPath: this.basePath + "/" + volumeId + "/snapshots",
            method: common_1.HttpMethods.POST,
            body: options,
        });
    };
    return Volumes;
}(base_module_1.BaseModule));
exports.default = Volumes;
