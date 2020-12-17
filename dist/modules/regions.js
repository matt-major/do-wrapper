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
var Regions = /** @class */ (function (_super) {
    __extends(Regions, _super);
    function Regions(pageSize, requestHelper) {
        var _this = _super.call(this, pageSize, requestHelper) || this;
        _this.basePath = 'regions';
        return _this;
    }
    /**
     * Get all Regions
     * @param [tagName] filter to only return Regions with a given tag
     * @param [includeAll] return all Regions, paginated (optional)
     * @param [page] the specific page of Regions to return (optional)
     * @param [pageSize] the number of Regions to return per page (optional)
     * @returns Promise
     */
    Regions.prototype.getAll = function (tagName, includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath,
            key: 'regions',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });
        return this._execute(requestOptions);
    };
    return Regions;
}(base_module_1.BaseModule));
exports.default = Regions;
