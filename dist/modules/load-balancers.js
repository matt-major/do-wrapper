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
var LoadBalancers = /** @class */ (function (_super) {
    __extends(LoadBalancers, _super);
    function LoadBalancers(pageSize, requestHelper) {
        var _this = _super.call(this, pageSize, requestHelper) || this;
        _this.basePath = 'load_balancers';
        _this.baseOptions = {
            actionPath: _this.basePath,
        };
        return _this;
    }
    /**
     * Create a new Load Balancer
     * @param options the options for the Load Balancer
     * @returns Promise
     */
    LoadBalancers.prototype.create = function (options) {
        return this._execute(__assign(__assign({}, this.baseOptions), { method: common_1.HttpMethods.POST, body: options }));
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
        });
    };
    /**
     * Update a Load Balancer
     * @param loadBalancerId the identifier of the Load Balancer
     * @param options the options to update the Load Balancer
     * @returns Promise
     */
    LoadBalancers.prototype.update = function (loadBalancerId, options) {
        return this._execute({
            actionPath: this.basePath + "/" + loadBalancerId,
            method: common_1.HttpMethods.PUT,
            body: options,
        });
    };
    /**
     * Delete a Load Balancer
     * @param loadBalancerId the identifier of the Load Balancer
     * @returns Promise
     */
    LoadBalancers.prototype.delete = function (loadBalancerId) {
        return this._execute({
            actionPath: this.basePath + "/" + loadBalancerId,
            method: common_1.HttpMethods.DELETE,
        });
    };
    /**
     * Add Droplets to a Load Balancer
     * @param loadBalancerId the identifier of the Load Balancer
     * @param dropletIds the identifiers of the Droplets to add
     * @returns Promise
     */
    LoadBalancers.prototype.addDroplets = function (loadBalancerId, dropletIds) {
        return this._execute({
            actionPath: this.basePath + "/" + loadBalancerId + "/droplets",
            method: common_1.HttpMethods.POST,
            body: {
                droplet_ids: dropletIds,
            },
        });
    };
    /**
     * Remove Droplets from a Load Balancer
     * @param loadBalancerId the identifier of the Load Balancer
     * @param dropletIds the identifiers of the Droplets to remove
     * @returns Promise
     */
    LoadBalancers.prototype.removeDroplets = function (loadBalancerId, dropletIds) {
        return this._execute({
            actionPath: this.basePath + "/" + loadBalancerId + "/droplets",
            method: common_1.HttpMethods.DELETE,
            body: {
                droplet_ids: dropletIds,
            },
        });
    };
    /**
     * Add Forwarding Rules to a Load Balancer
     * @param loadBalancerId the identifier of the Load Balancer
     * @param rules the Forwarding Rules to add
     * @returns Promise
     */
    LoadBalancers.prototype.addForwardingRules = function (loadBalancerId, rules) {
        return this._execute({
            actionPath: this.basePath + "/" + loadBalancerId + "/forwarding_rules",
            method: common_1.HttpMethods.POST,
            body: {
                forwarding_rules: rules,
            },
        });
    };
    /**
     * Remove Forwarding Rules from a Load Balancer
     * @param loadBalancerId the identifier of the Load Balancer
     * @param rules the Forwarding Rules to remove
     * @returns Promise
     */
    LoadBalancers.prototype.removeForwardingRules = function (loadBalancerId, rules) {
        return this._execute({
            actionPath: this.basePath + "/" + loadBalancerId + "/forwarding_rules",
            method: common_1.HttpMethods.DELETE,
            body: {
                forwarding_rules: rules,
            },
        });
    };
    return LoadBalancers;
}(base_module_1.BaseModule));
exports.default = LoadBalancers;
