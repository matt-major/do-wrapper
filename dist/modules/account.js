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
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account(pageSize, requestHelper) {
        var _this = _super.call(this, pageSize, requestHelper) || this;
        _this.baseOptions = {
            actionPath: 'account',
        };
        return _this;
    }
    /**
     * Get the account information for the token
     * @returns Promise of the request
     */
    Account.prototype.get = function () {
        return this._execute(this.baseOptions);
    };
    return Account;
}(base_module_1.BaseModule));
exports.default = Account;
