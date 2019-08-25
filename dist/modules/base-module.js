"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModule = /** @class */ (function () {
    function BaseModule(requestHelper) {
        this.requestHelper = requestHelper;
    }
    BaseModule.prototype._execute = function (options, callback) {
        return this.requestHelper.request(options, callback);
    };
    return BaseModule;
}());
exports.BaseModule = BaseModule;
