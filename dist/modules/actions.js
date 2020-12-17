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
var Actions = /** @class */ (function (_super) {
    __extends(Actions, _super);
    function Actions(pageSize, requestHelper) {
        var _this = _super.call(this, pageSize, requestHelper) || this;
        _this.basePath = 'actions';
        return _this;
    }
    /**
     * Get all Actions
     * @param tagName filter to only return actions with a given tag
     * @param [includeAll] return all actions, paginated (optional)
     * @param [page] the specific page of actions to return (optional)
     * @param [pageSize] the number of actions to return per page (optional)
     * @returns Promise
     */
    Actions.prototype.get = function (tagName, includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath,
            key: 'actions',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll
        });
        return this._execute(requestOptions);
    };
    /**
     * Get a specific Action using its identifier
     * @param actionId the identifier of the Action
     * @returns Promise
     */
    Actions.prototype.getById = function (actionId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(actionId)
        });
    };
    return Actions;
}(base_module_1.BaseModule));
exports.default = Actions;
