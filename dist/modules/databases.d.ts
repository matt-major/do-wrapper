import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { AddPoolRequestOptions, DatabaseCreateClusterRequest, DatabaseResizeClusterRequest } from "../types/databases";
export default class Databases extends BaseModule {
    private basePath;
    constructor(pageSize: number, requestHelper: RequestHelper);
    /**
     * Get all Database Clusters
     * @param [tagName] filter to only return Database Clusters with a given tag
     * @param [includeAll] return all Database Clusters, paginated (optional)
     * @param [page] the specific page of Database Clusters to return (optional)
     * @param [pageSize] the number of Database Clusters to return per page (optional)
     * @returns Promise
     */
    getAllClusters(tagName: string, includeAll?: boolean, page?: number, pageSize?: number): Promise<any>;
    /**
     * Create a new Database Cluster
     * @param clusterOptions the options for the Database Cluster
     * @returns Promise
     */
    createCluster(clusterOptions: DatabaseCreateClusterRequest): Promise<any>;
    /**
     * Retrieve a single Database Cluster using its identifier
     * @param clusterId the identifier of the Database Cluster to retrieve
     * @returns Promise
     */
    getClusterById(clusterId: string): Promise<any>;
    /**
     * Resize an existing Database Cluster
     * @param clusterId the identifier of the Database Cluster to resize
     * @param configuration the resizing configuration
     */
    resizeCluster(clusterId: string, configuration: DatabaseResizeClusterRequest): Promise<any>;
    /**
     * Create a new User on an existing Database Cluster
     * @param clusterId the identifier of the Database Cluster
     * @param username the name of the User to create
     * @returns Promise
     */
    createUser(clusterId: string, username: string): Promise<any>;
    /**
     * Delete a User from a Database Cluster
     * @param clusterId the identifier of the Database Cluster
     * @param username the username of the User to delete
     */
    deleteUser(clusterId: string, username: string): Promise<any>;
    /**
     * Retrieve a single User for a Database Cluster
     * @param clusterId the identifier of the Database Cluster
     * @param username the username of the User to retrieve
     */
    getUser(clusterId: string, username: string): Promise<any>;
    /**
     * Retrieve a list of all the Users for a given Database Cluster
     * @param clusterId the identifier of the Database Cluster
     */
    getAllUsers(clusterId: string): Promise<any>;
    /**
     * Get all Pools for a Cluster
     * @param clusterId the identifier of the Cluster
     * @param poolOptions the Pool options
     * @returns Promise
     */
    addPool(clusterId: string, poolOptions: AddPoolRequestOptions): Promise<any>;
    /**
     * Get all Pools for a Cluster
     * @param clusterId the identifier of the Cluster
     * @returns Promise
     */
    getAllPools(clusterId: string): Promise<any>;
    /**
     * Get a Pool for an existing Cluster
     * @param clusterId the identifier of the Cluster
     * @param poolName the name of the Pool
     * @returns Promise
     */
    getPool(clusterId: string, poolName: string): Promise<any>;
    /**
     * Delete a Pool from an existing Cluster
     * @param clusterId the identifier of the Cluster
     * @param poolName the name of the Pool
     * @returns Promise
     */
    deletePool(clusterId: string, poolName: string): Promise<any>;
}
