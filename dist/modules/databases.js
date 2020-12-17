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
var Databases = /** @class */ (function (_super) {
    __extends(Databases, _super);
    function Databases(pageSize, requestHelper) {
        var _this = _super.call(this, pageSize, requestHelper) || this;
        _this.basePath = 'databases';
        return _this;
    }
    /**
     * Get all Database Clusters
     * @param [tagName] filter to only return Database Clusters with a given tag
     * @param [includeAll] return all Database Clusters, paginated (optional)
     * @param [page] the specific page of Database Clusters to return (optional)
     * @param [pageSize] the number of Database Clusters to return per page (optional)
     * @returns Promise
     */
    Databases.prototype.getAllClusters = function (tagName, includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath,
            key: 'databases',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });
        return this._execute(requestOptions);
    };
    /**
     * Create a new Database Cluster
     * @param clusterOptions the options for the Database Cluster
     * @returns Promise
     */
    Databases.prototype.createCluster = function (clusterOptions) {
        return this._execute({
            actionPath: this.basePath,
            method: common_1.HttpMethods.POST,
            body: clusterOptions,
        });
    };
    /**
     * Retrieve a single Database Cluster using its identifier
     * @param clusterId the identifier of the Database Cluster to retrieve
     * @returns Promise
     */
    Databases.prototype.getClusterById = function (clusterId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(clusterId),
        });
    };
    /**
     * Resize an existing Database Cluster
     * @param clusterId the identifier of the Database Cluster to resize
     * @param configuration the resizing configuration
     */
    Databases.prototype.resizeCluster = function (clusterId, configuration) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(clusterId) + "/resize",
            method: common_1.HttpMethods.PUT,
            body: configuration,
        });
    };
    /**
     * Create a new User on an existing Database Cluster
     * @param clusterId the identifier of the Database Cluster
     * @param username the name of the User to create
     * @returns Promise
     */
    Databases.prototype.createUser = function (clusterId, username) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(clusterId) + "/users",
            method: common_1.HttpMethods.POST,
            body: {
                name: username,
            },
        });
    };
    /**
     * Delete a User from a Database Cluster
     * @param clusterId the identifier of the Database Cluster
     * @param username the username of the User to delete
     */
    Databases.prototype.deleteUser = function (clusterId, username) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(clusterId) + "/users/" + encodeURIComponent(username),
            method: common_1.HttpMethods.DELETE,
        });
    };
    /**
     * Retrieve a single User for a Database Cluster
     * @param clusterId the identifier of the Database Cluster
     * @param username the username of the User to retrieve
     */
    Databases.prototype.getUser = function (clusterId, username) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(clusterId) + "/users/" + encodeURIComponent(username),
        });
    };
    /**
     * Retrieve a list of all the Users for a given Database Cluster
     * @param clusterId the identifier of the Database Cluster
     */
    Databases.prototype.getAllUsers = function (clusterId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(clusterId) + "/users",
        });
    };
    /**
     * Get all Pools for a Cluster
     * @param clusterId the identifier of the Cluster
     * @param poolOptions the Pool options
     * @returns Promise
     */
    Databases.prototype.addPool = function (clusterId, poolOptions) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(clusterId) + "/pools",
            method: common_1.HttpMethods.POST,
            body: poolOptions,
        });
    };
    /**
     * Get all Pools for a Cluster
     * @param clusterId the identifier of the Cluster
     * @returns Promise
     */
    Databases.prototype.getAllPools = function (clusterId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(clusterId) + "/pools",
        });
    };
    /**
     * Get a Pool for an existing Cluster
     * @param clusterId the identifier of the Cluster
     * @param poolName the name of the Pool
     * @returns Promise
     */
    Databases.prototype.getPool = function (clusterId, poolName) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(clusterId) + "/pools/" + encodeURIComponent(poolName),
        });
    };
    /**
     * Delete a Pool from an existing Cluster
     * @param clusterId the identifier of the Cluster
     * @param poolName the name of the Pool
     * @returns Promise
     */
    Databases.prototype.deletePool = function (clusterId, poolName) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(clusterId) + "/pools/" + encodeURIComponent(poolName),
            method: common_1.HttpMethods.DELETE,
        });
    };
    return Databases;
}(base_module_1.BaseModule));
exports.default = Databases;
