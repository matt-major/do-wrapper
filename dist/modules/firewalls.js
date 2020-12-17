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
var Firewalls = /** @class */ (function (_super) {
    __extends(Firewalls, _super);
    function Firewalls(pageSize, requestHelper) {
        var _this = _super.call(this, pageSize, requestHelper) || this;
        _this.basePath = 'firewalls';
        _this.baseOptions = {
            actionPath: _this.basePath + "/",
        };
        return _this;
    }
    /**
     * Create a new Firewall
     * @param options the options for the new Firewall
     * @returns Promise
     */
    Firewalls.prototype.create = function (options) {
        return this._execute(__assign(__assign({}, this.baseOptions), { method: common_1.HttpMethods.POST, body: options }));
    };
    /**
     * Delete a Firewall by its identifier
     * @param firewallId the identifier of the Firewall to delete
     * @returns Promise
     */
    Firewalls.prototype.delete = function (firewallId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(firewallId),
            method: common_1.HttpMethods.DELETE,
        });
    };
    /**
     * Retrieve a Firewall using its identifier
     * @param firewallId the identifier of the Firewall to retrieve
     * @returns Promise
     */
    Firewalls.prototype.getById = function (firewallId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(firewallId),
        });
    };
    /**
    * Retrieve all firewalls
    * @returns Promise
    */
    Firewalls.prototype.getAll = function () {
        return this._execute({
            actionPath: this.basePath
        });
    };
    /**
     * Update a Firewall using its identifier
     * @param firewallId the identifier of the Firewall to update
     * @param options the Firewall details
     * @returns Promise
     */
    Firewalls.prototype.update = function (firewallId, options) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(firewallId),
            method: common_1.HttpMethods.PUT,
            body: options,
        });
    };
    /**
     * Add Droplets to an existing Firewall
     * @param firewallId the identifier of the Firewall to add the Droplets to
     * @param dropletIds the identifiers of the Droplets
     * @returns Promise
     */
    Firewalls.prototype.addDroplets = function (firewallId, dropletIds) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(firewallId) + "/droplets",
            method: common_1.HttpMethods.POST,
            body: {
                droplet_ids: dropletIds,
            },
        });
    };
    /**
     * Remove Droplets from an existing Firewall
     * @param firewallId the identifier of the Firewall to remove the Droplets from
     * @param dropletIds the identifiers of the Droplets
     * @returns Promise
     */
    Firewalls.prototype.removeDroplets = function (firewallId, dropletIds) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(firewallId) + "/droplets",
            method: common_1.HttpMethods.DELETE,
            body: {
                droplet_ids: dropletIds,
            },
        });
    };
    /**
     * Add Tags to an existing Firewall
     * @param firewallId the identifier of the Firewall to add the Tags to
     * @param tags the Tags to add
     * @returns Promise
     */
    Firewalls.prototype.addTags = function (firewallId, tags) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(firewallId) + "/tags",
            method: common_1.HttpMethods.POST,
            body: {
                tags: tags,
            },
        });
    };
    /**
     * Remove Tags from an existing Firewall
     * @param firewallId the identifier of the Firewall to remove the Tags from
     * @param tags the Tags to remove
     * @returns Promise
     */
    Firewalls.prototype.removeTags = function (firewallId, tags) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(firewallId) + "/tags",
            method: common_1.HttpMethods.DELETE,
            body: {
                tags: tags,
            },
        });
    };
    /**
     * Add Rules to an existing Firewall
     * @param firewallId the identifier of the Firewall to add the Rules to
     * @param options the Rules to add
     * @returns Promise
     */
    Firewalls.prototype.addRules = function (firewallId, options) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(firewallId) + "/rules",
            method: common_1.HttpMethods.POST,
            body: options,
        });
    };
    /**
     * Remove Rules from an existing Firewall
     * @param firewallId the identifier of the Firewall to remove the Rules from
     * @param options the Rules to remove
     * @returns Promise
     */
    Firewalls.prototype.removeRules = function (firewallId, options) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(firewallId) + "/rules",
            method: common_1.HttpMethods.DELETE,
            body: options,
        });
    };
    return Firewalls;
}(base_module_1.BaseModule));
exports.default = Firewalls;
