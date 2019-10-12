"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
var LoadBalancers = /** @class */ (function (_super) {
    __extends(LoadBalancers, _super);
    function LoadBalancers(pageSize, requestHelper) {
        var _this = _super.call(this, pageSize, requestHelper) || this;
        _this.basePath = 'load_balancers';
        _this.baseOptions = {
            actionPath: _this.basePath + "/",
        };
        return _this;
    }
    /**
     * Create a new Load Balancer
     * @param options the options for the Load Balancer
     * @returns Promise
     */
    LoadBalancers.prototype.create = function (options) {
        return this._execute(__assign({}, this.baseOptions, { method: 'POST', body: options }));
    };
    /**
     * Get all Load Balancers
     * @returns Promise
     */
    LoadBalancers.prototype.getAll = function () {
        return this._execute(__assign({}, this.baseOptions));
    };
    /**
     * Get a Load Balancer using its identifier
     * @param loadBalancerId the identifier of the Load Balancer
     * @returns Promise
     */
    LoadBalancers.prototype.getById = function (loadBalancerId) {
        return this._execute({
            actionPath: this.basePath + "/" + loadBalancerId,
            method: 'GET',
        });
    };
    return LoadBalancers;
}(base_module_1.BaseModule));
exports.default = LoadBalancers;
