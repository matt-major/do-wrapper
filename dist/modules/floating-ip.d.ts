import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
export default class FloatingIPs extends BaseModule {
    private basePath;
    private baseOptions;
    constructor(pageSize: number, requestHelper: RequestHelper);
    /**
     * Get all Floating IPs
     * @param [tagName] return all Floating IPs with a given Tag (optional)
     * @param [includeAll] return all Floating IPs, paginated (optional)
     * @param [page] the specific page of Floating IPs to return (optional)
     * @param [pageSize] the number of Floating IPs to return per page (optional)
     * @returns Promise
     */
    getAll(tagName: string, includeAll?: boolean, page?: number, pageSize?: number): Promise<any>;
    /**
     * Assign a Droplet
     * @param dropletId the identifier of the Droplet
     * @returns Promise
     */
    assignDroplet(dropletId: string): Promise<any>;
    /**
     * Assign a Region
     * @param region the region to assign
     * @returns Promise
     */
    assignRegion(region: string): Promise<any>;
    /**
     * Get a Floating IP
     * @param ipAddress the Floating IP to retrieve
     * @returns Promise
     */
    getByIp(ipAddress: string): Promise<any>;
    /**
     * Delete a Floating IP
     * @param ipAddress the Floating IP to delete
     * @returns Promise
     */
    deleteByIp(ipAddress: string): Promise<any>;
    /**
     * Request an action on a Floating IP
     * @param ipAddress the Floating IP to request against
     * @param action the action to request
     * @returns Promise
     */
    requestAction(ipAddress: string, action: string): Promise<any>;
    /**
     * Retrieve an action from a Floating IP
     * @param ipAddress the Floating IP to retrieve
     * @param actionId the action to retrieve
     * @returns Promise
     */
    getAction(ipAddress: string, actionId: string): Promise<any>;
    /**
     * Get all Actions for a Floating IP
     * @param ipAddress the Floating IP to retrieve actions for
     * @param [tagName] return all Actions with a given Tag (optional)
     * @param [includeAll] return all Actions, paginated (optional)
     * @param [page] the specific page of Actions to return (optional)
     * @param [pageSize] the number of Actions to return per page (optional)
     * @returns Promise
     */
    getAllActions(ipAddress: string, tagName: string, includeAll?: boolean, page?: number, pageSize?: number): Promise<any>;
}
