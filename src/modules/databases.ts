import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { AddPoolRequestOptions, DatabaseCreateClusterRequest, DatabaseResizeClusterRequest } from "../types/databases";
import { HttpMethods } from "../common";

export default class Databases extends BaseModule {
    private basePath: string = 'databases';

    constructor(pageSize: number, requestHelper: RequestHelper) {
        super(pageSize, requestHelper);
    }

    /**
     * Get all Database Clusters
     * @param [tagName] filter to only return Database Clusters with a given tag
     * @param [includeAll] return all Database Clusters, paginated (optional)
     * @param [page] the specific page of Database Clusters to return (optional)
     * @param [pageSize] the number of Database Clusters to return per page (optional)
     * @returns Promise
     */
    public getAllClusters(tagName: string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath,
            key: 'databases',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });

        return this._execute(requestOptions);
    }

    /**
     * Create a new Database Cluster
     * @param clusterOptions the options for the Database Cluster
     * @returns Promise
     */
    public createCluster(clusterOptions: DatabaseCreateClusterRequest): Promise<any> {
        return this._execute({
            actionPath: this.basePath,
            method: HttpMethods.POST,
            body: clusterOptions,
        });
    }

    /**
     * Retrieve a single Database Cluster using its identifier
     * @param clusterId the identifier of the Database Cluster to retrieve
     * @returns Promise
     */
    public getClusterById(clusterId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(clusterId)}`,
        });
    }

    /**
     * Resize an existing Database Cluster
     * @param clusterId the identifier of the Database Cluster to resize
     * @param configuration the resizing configuration
     */
    public resizeCluster(clusterId: string, configuration: DatabaseResizeClusterRequest): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(clusterId)}/resize`,
            method: HttpMethods.PUT,
            body: configuration,
        });
    }

    /**
     * Create a new User on an existing Database Cluster
     * @param clusterId the identifier of the Database Cluster
     * @param username the name of the User to create
     * @returns Promise
     */
    public createUser(clusterId: string, username: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(clusterId)}/users`,
            method: HttpMethods.POST,
            body: {
                name: username,
            },
        });
    }

    /**
     * Delete a User from a Database Cluster
     * @param clusterId the identifier of the Database Cluster
     * @param username the username of the User to delete
     */
    public deleteUser(clusterId: string, username: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(clusterId)}/users/${encodeURIComponent(username)}`,
            method: HttpMethods.DELETE,
        });
    }

    /**
     * Retrieve a single User for a Database Cluster
     * @param clusterId the identifier of the Database Cluster
     * @param username the username of the User to retrieve
     */
    public getUser(clusterId: string, username: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(clusterId)}/users/${encodeURIComponent(username)}`,
        });
    }

    /**
     * Retrieve a list of all the Users for a given Database Cluster
     * @param clusterId the identifier of the Database Cluster
     */
    public getAllUsers(clusterId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(clusterId)}/users`,
        });
    }

    /**
     * Get all Pools for a Cluster
     * @param clusterId the identifier of the Cluster
     * @param poolOptions the Pool options
     * @returns Promise
     */
    public addPool(clusterId: string, poolOptions: AddPoolRequestOptions): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(clusterId)}/pools`,
            method: HttpMethods.POST,
            body: poolOptions,
        });
    }

    /**
     * Get all Pools for a Cluster
     * @param clusterId the identifier of the Cluster
     * @returns Promise
     */
    public getAllPools(clusterId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(clusterId)}/pools`,
        });
    }

    /**
     * Get a Pool for an existing Cluster
     * @param clusterId the identifier of the Cluster
     * @param poolName the name of the Pool
     * @returns Promise
     */
    public getPool(clusterId: string, poolName: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(clusterId)}/pools/${encodeURIComponent(poolName)}`,
        });
    }

    /**
     * Delete a Pool from an existing Cluster
     * @param clusterId the identifier of the Cluster
     * @param poolName the name of the Pool
     * @returns Promise
     */
    public deletePool(clusterId: string, poolName: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(clusterId)}/pools/${encodeURIComponent(poolName)}`,
            method: HttpMethods.DELETE,
        });
    }
}
