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
var common_1 = require("../common");
var Images = /** @class */ (function (_super) {
    __extends(Images, _super);
    function Images(pageSize, requestHelper) {
        var _this = _super.call(this, pageSize, requestHelper) || this;
        _this.basePath = 'images';
        _this.baseOptions = {
            actionPath: _this.basePath + "/",
        };
        return _this;
    }
    /**
     * Get all Images
     * @param [tagName] filter to only return Images with a given tag
     * @param [includeAll] return all Images, paginated (optional)
     * @param [page] the specific page of Images to return (optional)
     * @param [pageSize] the number of Images to return per page (optional)
     * @returns Promise
     */
    Images.prototype.getAll = function (tagName, includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath,
            key: 'images',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });
        return this._execute(requestOptions);
    };
    /**
     * Get an Image using its identifier or slug
     * @param imageIdOrSlug the identifier or slug of the Image
     * @returns Promise
     */
    Images.prototype.getByIdOrSlug = function (imageIdOrSlug) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(imageIdOrSlug),
        });
    };
    /**
     * Delete an Image using its identifier
     * @param imageId the identifier of the Image
     * @returns Promise
     */
    Images.prototype.deleteById = function (imageId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(imageId),
            method: common_1.HttpMethods.DELETE,
        });
    };
    /**
     * Rename an Image
     * @param imageId the identifier of the Image
     * @param newName the new name to use
     * @returns Promise
     */
    Images.prototype.rename = function (imageId, newName) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(imageId),
            method: common_1.HttpMethods.PUT,
            body: {
                name: newName,
            },
        });
    };
    /**
     * Get all actions for an Image
     * @param imageId the identifier of the Image to retrieve actions for
     * @param [includeAll] return all Images, paginated (optional)
     * @param [page] the specific page of Images to return (optional)
     * @param [pageSize] the number of Images to return per page (optional)
     * @returns Promise
     */
    Images.prototype.getActions = function (imageId, includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath + "/" + encodeURIComponent(imageId) + "/actions",
            key: 'actions',
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });
        return this._execute(requestOptions);
    };
    /**
     * Get the details of an Action for an Image
     * @param imageId the identifier of the Image
     * @param actionId the identifier of the Action
     * @returns Promise
     */
    Images.prototype.getActionById = function (imageId, actionId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(imageId) + "/actions/" + encodeURIComponent(actionId),
        });
    };
    /**
     * Request an Action on an Image
     * @param imageId the identifier of the Image
     * @param action the Action to request on the Image
     * @returns Promise
     */
    Images.prototype.requestAction = function (imageId, action) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(imageId) + "/actions",
            method: common_1.HttpMethods.POST,
            body: action,
        });
    };
    return Images;
}(base_module_1.BaseModule));
exports.default = Images;
