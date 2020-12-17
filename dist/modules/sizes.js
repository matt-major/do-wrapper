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
var Sizes = /** @class */ (function (_super) {
    __extends(Sizes, _super);
    function Sizes(pageSize, requestHelper) {
        var _this = _super.call(this, pageSize, requestHelper) || this;
        _this.basePath = 'sizes';
        return _this;
    }
    /**
     * Get all Size configurations
     * @param [tagName] filter to only return Droplet Sizes with a given tag
     * @param [includeAll] return all Droplet Sizes, paginated (optional)
     * @param [page] the specific page of Droplet Sizes to return (optional)
     * @param [pageSize] the number of Droplet Sizes to return per page (optional)
     * @returns Promise
     */
    Sizes.prototype.get = function (tagName, includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath,
            key: 'sizes',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });
        return this._execute(requestOptions);
    };
    return Sizes;
}(base_module_1.BaseModule));
exports.default = Sizes;
