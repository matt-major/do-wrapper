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
Object.defineProperty(exports, "__esModule", { value: true });
var base_module_1 = require("./base-module");
var Keys = /** @class */ (function (_super) {
    __extends(Keys, _super);
    function Keys(pageSize, requestHelper) {
        var _this = _super.call(this, pageSize, requestHelper) || this;
        _this.basePath = 'account/keys';
        return _this;
    }
    /**
     * Get all SSH Keys
     * @param tagName filter to only return SSH Keys with a given tag
     * @param [includeAll] return all SSH Keys, paginated (optional)
     * @param [page] the specific page of SSH Keys to return (optional)
     * @param [pageSize] the number of SSH Keys to return per page (optional)
     * @returns Promise
     */
    Keys.prototype.get = function (tagName, includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var requestOptions = this._getBaseRequestOptions({
            actionPath: this.basePath,
            key: 'ssh_keys',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll
        });
        return this._execute(requestOptions);
    };
    Keys.prototype.getById = function (keyId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(keyId)
        });
    };
    return Keys;
}(base_module_1.BaseModule));
exports.default = Keys;
