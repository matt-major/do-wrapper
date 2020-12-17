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
var Keys = /** @class */ (function (_super) {
    __extends(Keys, _super);
    function Keys(pageSize, requestHelper) {
        var _this = _super.call(this, pageSize, requestHelper) || this;
        _this.basePath = 'account/keys';
        _this.baseOptions = {
            actionPath: _this.basePath + "/",
        };
        return _this;
    }
    /**
     * Get all SSH Keys
     * @param [tagName] filter to only return SSH Keys with a given tag
     * @param [includeAll] return all SSH Keys, paginated (optional)
     * @param [page] the specific page of SSH Keys to return (optional)
     * @param [pageSize] the number of SSH Keys to return per page (optional)
     * @returns Promise
     */
    Keys.prototype.getAll = function (tagName, includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath,
            key: 'ssh_keys',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });
        return this._execute(requestOptions);
    };
    /**
     * Get a specific SSH Key using its identifier
     * @param keyId the identifier of the SSH Key
     * @returns Promise
     */
    Keys.prototype.getById = function (keyId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(keyId)
        });
    };
    /**
     * Get a specific SSH Key using its fingerprint
     * @param fingerprint the fingerprint of the SSH Key to retrieve
     * @returns Promise
     */
    Keys.prototype.getByFingerprint = function (fingerprint) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(fingerprint)
        });
    };
    /**
     * Add a new SSH Key to an account
     * @param addKeyRequest the configuration of the SSH Key
     * @returns Promise
     */
    Keys.prototype.add = function (addKeyRequest) {
        var requestOptions = __assign(__assign({}, this.baseOptions), { method: common_1.HttpMethods.POST, body: addKeyRequest });
        return this._execute(requestOptions);
    };
    /**
     * Rename an SSH Key
     * @param identifier the ID or Fingerprint of the SSH Key to rename
     * @param newName the new name to set on the SSH Key
     * @returns Promise
     */
    Keys.prototype.rename = function (identifier, newName) {
        var requestOptions = {
            actionPath: this.basePath + "/" + encodeURIComponent(identifier),
            method: common_1.HttpMethods.PUT,
            body: {
                name: newName,
            },
        };
        return this._execute(requestOptions);
    };
    /**
     * Delete an SSH Key
     * @param identifier the ID or Fingerprint of the SSH Key you wish to delete
     * @returns Promise
     */
    Keys.prototype.delete = function (identifier) {
        var requestOptions = {
            actionPath: this.basePath + "/" + encodeURIComponent(identifier),
            method: common_1.HttpMethods.DELETE,
        };
        return this._execute(requestOptions);
    };
    return Keys;
}(base_module_1.BaseModule));
exports.default = Keys;
