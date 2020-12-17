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
var Certificates = /** @class */ (function (_super) {
    __extends(Certificates, _super);
    function Certificates(pageSize, requestHelper) {
        var _this = _super.call(this, pageSize, requestHelper) || this;
        _this.basePath = 'certificates';
        _this.baseOptions = {
            actionPath: _this.basePath + "/",
        };
        return _this;
    }
    /**
     * Get all Certificates
     * @param [tagName] filter to only return Certificates with a given tag
     * @param [includeAll] return all Certificates, paginated (optional)
     * @param [page] the specific page of Certificates to return (optional)
     * @param [pageSize] the number of Certificates to return per page (optional)
     * @returns Promise
     */
    Certificates.prototype.getAll = function (tagName, includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath,
            key: 'certificates',
            pageSize: pageSize,
            tagName: tagName,
            page: page,
            includeAll: includeAll,
        });
        return this._execute(requestOptions);
    };
    /**
     * Create a new Certificate
     * @param options the options for the Certificate
     * @returns Promise
     */
    Certificates.prototype.create = function (options) {
        return this._execute(__assign(__assign({}, this.baseOptions), { method: common_1.HttpMethods.POST, body: options }));
    };
    /**
     * Get a Certificate
     * @param certificateId the identifier of the Certificate
     * @returns Promise
     */
    Certificates.prototype.getById = function (certificateId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(certificateId),
        });
    };
    /**
     * Delete a Certificate
     * @param certificateId the identifier of the Certificate
     * @returns Promise
     */
    Certificates.prototype.delete = function (certificateId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(certificateId),
            method: common_1.HttpMethods.DELETE,
        });
    };
    return Certificates;
}(base_module_1.BaseModule));
exports.default = Certificates;
