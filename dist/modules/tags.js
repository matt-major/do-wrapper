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
var Tags = /** @class */ (function (_super) {
    __extends(Tags, _super);
    function Tags(pageSize, requestHelper) {
        var _this = _super.call(this, pageSize, requestHelper) || this;
        _this.basePath = 'tags';
        _this.baseOptions = {
            actionPath: _this.basePath,
        };
        return _this;
    }
    /**
     * Get all Tags
     * @param tagName filter to only return Tags with a given tag
     * @param [includeAll] return all Tags, paginated (optional)
     * @param [page] the specific page of Tags to return (optional)
     * @param [pageSize] the number of Tags to return per page (optional)
     * @returns Promise
     */
    Tags.prototype.getAll = function (tagName, includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var requestOptions = this._getBasePaginatedRequestOptions(__assign(__assign({}, this.baseOptions), { key: 'tags', tagName: tagName, pageSize: pageSize, page: page, includeAll: includeAll }));
        return this._execute(requestOptions);
    };
    /**
     * Create a new Tag
     * @param tagName the Tag to create
     * @returns Promise
     */
    Tags.prototype.create = function (tagName) {
        return this._execute(__assign(__assign({}, this.baseOptions), { method: common_1.HttpMethods.POST, body: {
                name: tagName,
            } }));
    };
    /**
     * Get a Tag
     * @param tagName the Tag to retrieve
     * @returns Promise
     */
    Tags.prototype.getByName = function (tagName) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(tagName),
        });
    };
    /**
     * Delete a Tag
     * @param tagName the Tag to delete
     * @returns Promise
     */
    Tags.prototype.delete = function (tagName) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(tagName),
            method: common_1.HttpMethods.DELETE,
        });
    };
    /**
     * Add Resources to an existing Tag
     * @param tagName the Tag to add them to
     * @param resources the Resources to add
     * @returns Promise
     */
    Tags.prototype.addResources = function (tagName, resources) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(tagName) + "/resources",
            method: common_1.HttpMethods.POST,
            body: resources,
        });
    };
    /**
     * Remove Resources from an existing Tag
     * @param tagName the Tag to remove them from
     * @param resources the Resources to remove
     * @returns Promise
     */
    Tags.prototype.removeResources = function (tagName, resources) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(tagName) + "/resources",
            method: common_1.HttpMethods.DELETE,
            body: resources,
        });
    };
    return Tags;
}(base_module_1.BaseModule));
exports.default = Tags;
