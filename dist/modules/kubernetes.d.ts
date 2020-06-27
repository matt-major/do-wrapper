import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { ClusterNodePool, ClusterNodePoolUpdateOptions, NewClusterRequest } from "../types/kubernetes";
export default class Kubernetes extends BaseModule {
    private basePath;
    private baseOptions;
    constructor(pageSize: number, requestHelper: RequestHelper);
    /**
     * Get the Kubernetes Feature Availability
     * @returns Promise
     */
    getAvailability(): Promise<any>;
    /**
     * Get all Kubernetes Clusters
     * @param [includeAll] return all Kubernetes Clusters, paginated (optional)
     * @param [page] the specific page of Kubernetes Clusters to return (optional)
     * @param [pageSize] the number of Kubernetes Clusters to return per page (optional)
     * @returns Promise
     */
    getClusters(includeAll?: boolean, page?: number, pageSize?: number): Promise<any>;
    /**
     * Create a new Kubernetes Cluster
     * @param options the options for the new Kubernetes Cluster
     * @returns Promise
     */
    create(options: NewClusterRequest): Promise<any>;
    /**
     * Get a Kubernetes Cluster by its identifier
     * @param clusterId the identifier of the Cluster
     * @returns Promise
     */
    getById(clusterId: string): Promise<any>;
    /**
     * Get the kubeconfig for a  Kubernetes Cluster
     * @param clusterId the identifier of the Cluster
     * @returns Promise
     */
    getKubeconfig(clusterId: string): Promise<any>;
    /**
     * Delete a Kubernetes Cluster by its identifier
     * @param clusterId the identifier of the Cluster
     * @returns Promise
     */
    delete(clusterId: string): Promise<any>;
    /**
     * Get the Node Pools for a Kubernetes Cluster
     * @param clusterId the Cluster identifier
     * @param [includeAll] return all Node Pools, paginated (optional)
     * @param [page] the specific page of Node Pools to return (optional)
     * @param [pageSize] the number of Node Pools to return per page (optional)
     * @returns Promise
     */
    getNodePools(clusterId: string, includeAll?: boolean, page?: number, pageSize?: number): Promise<any>;
    /**
     * Get a specific Node Pool for a Kubernetes Cluster
     * @param clusterId the identifier of the Cluster
     * @param nodePoolId the identifier of the Node Pool
     * @returns Promise
     */
    getNodePoolById(clusterId: string, nodePoolId: string): Promise<any>;
    /**
     * Add a Node Pool to a Kubernetes Cluster
     * @param clusterId the identifier of the Cluster
     * @param nodePool the Node Pool configuration options
     * @returns Promise
     */
    addNodePool(clusterId: string, nodePool: ClusterNodePool): Promise<any>;
    /**
     * Update a specific Node Pool for a Kubernetes Cluster
     * @param clusterId the identifier of the Cluster
     * @param nodePoolId the identifier of the Node Pool
     * @param nodePoolOptions the Node Pool options
     * @returns Promise
     */
    updateNodePool(clusterId: string, nodePoolId: string, nodePoolOptions: ClusterNodePoolUpdateOptions): Promise<any>;
    /**
     * Delete a Node Pool for a Kubernetes Cluster
     * @param clusterId the identifier of the Cluster
     * @param nodePoolId the identifier of the Node Pool
     * @returns Promise
     */
    deleteNodePool(clusterId: string, nodePoolId: string): Promise<any>;
    /**
     * Recycle a Node Pool on a Cluster
     * @param clusterId the identifier of the Cluster
     * @param nodePoolId the identifier of the Node Pool
     * @returns Promise
     */
    recycleNodePool(clusterId: string, nodePoolId: string): Promise<any>;
}
