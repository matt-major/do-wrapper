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
var Kubernetes = /** @class */ (function (_super) {
    __extends(Kubernetes, _super);
    function Kubernetes(pageSize, requestHelper) {
        var _this = _super.call(this, pageSize, requestHelper) || this;
        _this.basePath = 'kubernetes/clusters';
        _this.baseOptions = {
            actionPath: _this.basePath + "/",
        };
        return _this;
    }
    /**
     * Get the Kubernetes Feature Availability
     * @returns Promise
     */
    Kubernetes.prototype.getAvailability = function () {
        return this._execute({
            actionPath: "kubernetes/options",
        });
    };
    /**
     * Get all Kubernetes Clusters
     * @param [includeAll] return all Kubernetes Clusters, paginated (optional)
     * @param [page] the specific page of Kubernetes Clusters to return (optional)
     * @param [pageSize] the number of Kubernetes Clusters to return per page (optional)
     * @returns Promise
     */
    Kubernetes.prototype.getClusters = function (includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var requestOptions = this._getBasePaginatedRequestOptions(__assign(__assign({}, this.baseOptions), { key: 'kubernetes', pageSize: pageSize, page: page, includeAll: includeAll }));
        return this._execute(requestOptions);
    };
    /**
     * Create a new Kubernetes Cluster
     * @param options the options for the new Kubernetes Cluster
     * @returns Promise
     */
    Kubernetes.prototype.create = function (options) {
        return this._execute(__assign(__assign({}, this.baseOptions), { method: common_1.HttpMethods.POST, body: options }));
    };
    /**
     * Get a Kubernetes Cluster by its identifier
     * @param clusterId the identifier of the Cluster
     * @returns Promise
     */
    Kubernetes.prototype.getById = function (clusterId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(clusterId),
        });
    };
    /**
     * Get the kubeconfig for a  Kubernetes Cluster
     * @param clusterId the identifier of the Cluster
     * @returns Promise
     */
    Kubernetes.prototype.getKubeconfig = function (clusterId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(clusterId) + "/kubeconfig",
        });
    };
    /**
     * Delete a Kubernetes Cluster by its identifier
     * @param clusterId the identifier of the Cluster
     * @returns Promise
     */
    Kubernetes.prototype.delete = function (clusterId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(clusterId),
            method: common_1.HttpMethods.DELETE,
        });
    };
    /**
     * Get the Node Pools for a Kubernetes Cluster
     * @param clusterId the Cluster identifier
     * @param [includeAll] return all Node Pools, paginated (optional)
     * @param [page] the specific page of Node Pools to return (optional)
     * @param [pageSize] the number of Node Pools to return per page (optional)
     * @returns Promise
     */
    Kubernetes.prototype.getNodePools = function (clusterId, includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath + "/" + encodeURIComponent(clusterId) + "/node_pools",
            key: 'kubernetes',
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });
        return this._execute(requestOptions);
    };
    /**
     * Get a specific Node Pool for a Kubernetes Cluster
     * @param clusterId the identifier of the Cluster
     * @param nodePoolId the identifier of the Node Pool
     * @returns Promise
     */
    Kubernetes.prototype.getNodePoolById = function (clusterId, nodePoolId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(clusterId) + "/node_pools/" + encodeURIComponent(nodePoolId),
        });
    };
    /**
     * Add a Node Pool to a Kubernetes Cluster
     * @param clusterId the identifier of the Cluster
     * @param nodePool the Node Pool configuration options
     * @returns Promise
     */
    Kubernetes.prototype.addNodePool = function (clusterId, nodePool) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(clusterId) + "/node_pools",
            method: common_1.HttpMethods.POST,
            body: nodePool,
        });
    };
    /**
     * Update a specific Node Pool for a Kubernetes Cluster
     * @param clusterId the identifier of the Cluster
     * @param nodePoolId the identifier of the Node Pool
     * @param nodePoolOptions the Node Pool options
     * @returns Promise
     */
    Kubernetes.prototype.updateNodePool = function (clusterId, nodePoolId, nodePoolOptions) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(clusterId) + "/node_pools/" + encodeURIComponent(nodePoolId),
            method: common_1.HttpMethods.PUT,
            body: nodePoolOptions,
        });
    };
    /**
     * Delete a Node Pool for a Kubernetes Cluster
     * @param clusterId the identifier of the Cluster
     * @param nodePoolId the identifier of the Node Pool
     * @returns Promise
     */
    Kubernetes.prototype.deleteNodePool = function (clusterId, nodePoolId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(clusterId) + "/node_pools/" + encodeURIComponent(nodePoolId),
            method: common_1.HttpMethods.DELETE,
        });
    };
    /**
     * Recycle a Node Pool on a Cluster
     * @param clusterId the identifier of the Cluster
     * @param nodePoolId the identifier of the Node Pool
     * @returns Promise
     */
    Kubernetes.prototype.recycleNodePool = function (clusterId, nodePoolId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(clusterId) + "/node_pools/" + encodeURIComponent(nodePoolId) + "/recycle",
            method: common_1.HttpMethods.POST,
        });
    };
    return Kubernetes;
}(base_module_1.BaseModule));
exports.default = Kubernetes;
