import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { DatabaseCreateClusterRequest } from "../types/databases";

export default class Databases extends BaseModule {
    private basePath: string = 'databases';

    private baseOptions: any = {
        actionPath: `${this.basePath}/`,
    };

    constructor(pageSize: number, requestHelper: RequestHelper) {
        super(pageSize, requestHelper);
    }

    /**
     * Get all Database Clusters
     * @param tagName filter to only return Database Clusters with a given tag
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
            method: 'POST',
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
}
