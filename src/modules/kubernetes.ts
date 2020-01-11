import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { HttpMethods } from "../common";
import { ClusterNodePool, ClusterNodePoolUpdateOptions, NewClusterRequest } from "../types/kubernetes";

export default class Kubernetes extends BaseModule {
    private basePath: string = 'kubernetes/clusters';

    private baseOptions: any = {
        actionPath: `${this.basePath}/`,
    };

    constructor(pageSize: number, requestHelper: RequestHelper) {
        super(pageSize, requestHelper);
    }

    /**
     * Get the Kubernetes Feature Availability
     * @returns Promise
     */
    public getAvailability(): Promise<any> {
        return this._execute({
            actionPath: `kubernetes/options`,
        });
    }

    /**
     * Get all Kubernetes Clusters
     * @param [includeAll] return all Kubernetes Clusters, paginated (optional)
     * @param [page] the specific page of Kubernetes Clusters to return (optional)
     * @param [pageSize] the number of Kubernetes Clusters to return per page (optional)
     * @returns Promise
     */
    public getClusters(includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            ...this.baseOptions,
            key: 'kubernetes',
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });

        return this._execute(requestOptions);
    }

    /**
     * Create a new Kubernetes Cluster
     * @param options the options for the new Kubernetes Cluster
     * @returns Promise
     */
    public create(options: NewClusterRequest): Promise<any> {
        return this._execute({
            ...this.baseOptions,
            method: HttpMethods.POST,
            body: options,
        });
    }

    /**
     * Get a Kubernetes Cluster by its identifier
     * @param clusterId the identifier of the Cluster
     * @returns Promise
     */
    public getById(clusterId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(clusterId)}`,
        });
    }

    /**
     * Get the kubeconfig for a  Kubernetes Cluster
     * @param clusterId the identifier of the Cluster
     * @returns Promise
     */
    public getKubeconfig(clusterId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(clusterId)}/kubeconfig`,
        });
    }

    /**
     * Delete a Kubernetes Cluster by its identifier
     * @param clusterId the identifier of the Cluster
     * @returns Promise
     */
    public delete(clusterId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(clusterId)}`,
            method: HttpMethods.DELETE,
        });
    }

    /**
     * Get the Node Pools for a Kubernetes Cluster
     * @param clusterId the Cluster identifier
     * @param [includeAll] return all Node Pools, paginated (optional)
     * @param [page] the specific page of Node Pools to return (optional)
     * @param [pageSize] the number of Node Pools to return per page (optional)
     * @returns Promise
     */
    public getNodePools(clusterId: string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: `${this.basePath}/${encodeURIComponent(clusterId)}/node_pools`,
            key: 'kubernetes',
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });

        return this._execute(requestOptions);
    }

    /**
     * Get a specific Node Pool for a Kubernetes Cluster
     * @param clusterId the identifier of the Cluster
     * @param nodePoolId the identifier of the Node Pool
     * @returns Promise
     */
    public getNodePoolById(clusterId: string, nodePoolId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(clusterId)}/node_pools/${encodeURIComponent(nodePoolId)}`,
        });
    }

    /**
     * Add a Node Pool to a Kubernetes Cluster
     * @param clusterId the identifier of the Cluster
     * @param nodePool the Node Pool configuration options
     * @returns Promise
     */
    public addNodePool(clusterId: string, nodePool: ClusterNodePool): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(clusterId)}/node_pools`,
            method: HttpMethods.POST,
            body: nodePool,
        });
    }

    /**
     * Update a specific Node Pool for a Kubernetes Cluster
     * @param clusterId the identifier of the Cluster
     * @param nodePoolId the identifier of the Node Pool
     * @param nodePoolOptions the Node Pool options
     * @returns Promise
     */
    public updateNodePool(clusterId: string, nodePoolId: string, nodePoolOptions: ClusterNodePoolUpdateOptions): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(clusterId)}/node_pools/${encodeURIComponent(nodePoolId)}`,
            method: HttpMethods.PUT,
            body: nodePoolOptions,
        });
    }

    /**
     * Delete a Node Pool for a Kubernetes Cluster
     * @param clusterId the identifier of the Cluster
     * @param nodePoolId the identifier of the Node Pool
     * @returns Promise
     */
    public deleteNodePool(clusterId: string, nodePoolId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(clusterId)}/node_pools/${encodeURIComponent(nodePoolId)}`,
            method: HttpMethods.DELETE,
        });
    }

    /**
     * Recycle a Node Pool on a Cluster
     * @param clusterId the identifier of the Cluster
     * @param nodePoolId the identifier of the Node Pool
     * @returns Promise
     */
    public recycleNodePool(clusterId: string, nodePoolId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(clusterId)}/node_pools/${encodeURIComponent(nodePoolId)}/recycle`,
            method: HttpMethods.POST,
        });
    }
}
