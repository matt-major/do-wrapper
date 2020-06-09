"use strict";
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
exports.BaseModule = void 0;
var BaseModule = /** @class */ (function () {
    function BaseModule(pageSize, requestHelper) {
        this.pageSize = pageSize;
        this.requestHelper = requestHelper;
    }
    BaseModule.prototype._getBasePaginatedRequestOptions = function (options) {
        return {
            actionPath: options.actionPath,
            key: options.key,
            qs: __assign(__assign({}, (options.tagName && { tag_name: options.tagName })), { per_page: options.pageSize || this.pageSize, page: options.page || 1 }),
            includeAll: options.includeAll || false,
        };
    };
    BaseModule.prototype._execute = function (options) {
        return this.requestHelper.request(options);
    };
    return BaseModule;
}());
exports.BaseModule = BaseModule;
