import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
export default class CDN extends BaseModule {
    private basePath;
    constructor(pageSize: number, requestHelper: RequestHelper);
    /**
     * Get all CDN Endpoints
     * @param tagName filter to only return CDN Endpoints with a given tag
     * @param [includeAll] return all CDN Endpoints, paginated (optional)
     * @param [page] the specific page of CDN Endpoints to return (optional)
     * @param [pageSize] the number of CDN Endpoints to return per page (optional)
     * @returns Promise
     */
    getAllEndpoints(tagName: string, includeAll?: boolean, page?: number, pageSize?: number): Promise<any>;
    /**
     * Get a CDN Endpoint via its Id
     *
     * @param endpointId the identifier of the endpoint to retrieve
     * @returns Promise
     */
    getEndpointById(endpointId: string): Promise<any>;
    /**
     * Create a new CDN Endpoint
     *
     * @param origin The origin server address (FQDN) which provides the content for the CDN
     * @param ttl The amount of time (seconds) the content is cached by the CDN's edge servers. Defaults to 3600 (one hour)
     * @returns Promise
     */
    createEndpoint(origin: string, ttl: number): Promise<any>;
    /**
     * Update the TTL of an existing CDN Endpoint
     *
     * @param endpointId the identifier of the CDN Endpoint you wish to update
     * @param ttl the amount of time (seconds) the content is cached by the CDN's edge servers
     * @returns Promise
     */
    updateEndpointTtl(endpointId: string, ttl: number): Promise<any>;
    /**
     * Delete an existing CDN Endpoint
     *
     * @param endpointId the identifier of the CDN Endpoint you wish to update
     */
    deleteEndpoint(endpointId: string): Promise<any>;
    /**
     * Purge cached content from an existing CDN Endpoint
     *
     * @param endpointId the identifier of the CDN Endpoint to purge the cache on
     * @param fileNames an array of path strings to clear purge from the cache
     * @returns Promise
     */
    purgeEndpointCache(endpointId: string, fileNames: string[]): Promise<any>;
}
