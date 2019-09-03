"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModule = /** @class */ (function () {
    function BaseModule(pageSize, requestHelper) {
        this.pageSize = pageSize;
        this.requestHelper = requestHelper;
    }
    BaseModule.prototype._execute = function (options) {
        return this.requestHelper.request(options);
    };
    return BaseModule;
}());
exports.BaseModule = BaseModule;
