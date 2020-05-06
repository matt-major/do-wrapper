import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { HttpMethods } from "../common";

export default class CDN extends BaseModule {
    private basePath: string = 'cdn/endpoints';

    constructor(pageSize: number, requestHelper: RequestHelper) {
        super(pageSize, requestHelper);
    }

    /**
     * Get all CDN Endpoints
     * @param tagName filter to only return CDN Endpoints with a given tag
     * @param [includeAll] return all CDN Endpoints, paginated (optional)
     * @param [page] the specific page of CDN Endpoints to return (optional)
     * @param [pageSize] the number of CDN Endpoints to return per page (optional)
     * @returns Promise
     */
    public getAllEndpoints(tagName: string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath,
            key: 'endpoints',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });

        return this._execute(requestOptions);
    }

    /**
     * Get a CDN Endpoint via its Id
     *
     * @param endpointId the identifier of the endpoint to retrieve
     * @returns Promise
     */
    public getEndpointById(endpointId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(endpointId)}`,
        });
    }

    /**
     * Create a new CDN Endpoint
     *
     * @param origin The origin server address (FQDN) which provides the content for the CDN
     * @param ttl The amount of time (seconds) the content is cached by the CDN's edge servers. Defaults to 3600 (one hour)
     * @returns Promise
     */
    public createEndpoint(origin: string, ttl: number): Promise<any> {
        return this._execute({
            actionPath: this.basePath,
            method: HttpMethods.POST,
            body: {
                origin: origin,
                ttl: ttl,
            },
        });
    }

    /**
     * Update the TTL of an existing CDN Endpoint
     *
     * @param endpointId the identifier of the CDN Endpoint you wish to update
     * @param ttl the amount of time (seconds) the content is cached by the CDN's edge servers
     * @returns Promise
     */
    public updateEndpointTtl(endpointId: string, ttl: number): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(endpointId)}`,
            method: HttpMethods.PUT,
            body: {
                ttl: ttl,
            },
        });
    }

    /**
     * Delete an existing CDN Endpoint
     *
     * @param endpointId the identifier of the CDN Endpoint you wish to update
     */
    public deleteEndpoint(endpointId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(endpointId)}`,
            method: HttpMethods.DELETE,
        });
    }

    /**
     * Purge cached content from an existing CDN Endpoint
     *
     * @param endpointId the identifier of the CDN Endpoint to purge the cache on
     * @param fileNames an array of path strings to clear purge from the cache
     * @returns Promise
     */
    public purgeEndpointCache(endpointId: string, fileNames: string[]): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(endpointId)}/cache`,
            method: HttpMethods.DELETE,
            body: {
                files: fileNames,
            },
        });
    }
}
