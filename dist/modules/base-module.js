"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModule = /** @class */ (function () {
    function BaseModule(pageSize, requestHelper) {
        this.pageSize = pageSize;
        this.requestHelper = requestHelper;
    }
    BaseModule.prototype._getBaseRequestOptions = function (options) {
        return {
            actionPath: options.actionPath,
            key: options.key,
            qs: {
                tag_name: options.tagName || '',
                per_page: options.pageSize || this.pageSize,
                page: options.page || 1,
            },
            includeAll: options.includeAll || false,
        };
    };
    BaseModule.prototype._execute = function (options) {
        return this.requestHelper.request(options);
    };
    return BaseModule;
}());
exports.BaseModule = BaseModule;
