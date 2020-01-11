import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { HttpMethods } from "../common";

export default class FloatingIPs extends BaseModule {
    private basePath: string = 'floating_ips';

    private baseOptions: any = {
        actionPath: `${this.basePath}/`,
    };

    constructor(pageSize: number, requestHelper: RequestHelper) {
        super(pageSize, requestHelper);
    }

    /**
     * Get all Floating IPs
     * @param [tagName] return all Floating IPs with a given Tag (optional)
     * @param [includeAll] return all Floating IPs, paginated (optional)
     * @param [page] the specific page of Floating IPs to return (optional)
     * @param [pageSize] the number of Floating IPs to return per page (optional)
     * @returns Promise
     */
    public getAll(tagName: string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            ...this.baseOptions,
            key: 'floating_ips',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });

        return this._execute(requestOptions);
    }

    /**
     * Assign a Droplet
     * @param dropletId the identifier of the Droplet
     * @returns Promise
     */
    public assignDroplet(dropletId: string): Promise<any> {
        return this._execute({
            ...this.baseOptions,
            method: HttpMethods.POST,
            body: {
                droplet_id: dropletId,
            },
        });
    }

    /**
     * Assign a Region
     * @param region the region to assign
     * @returns Promise
     */
    public assignRegion(region: string): Promise<any> {
        return this._execute({
            ...this.baseOptions,
            method: HttpMethods.POST,
            body: {
                region: region,
            },
        });
    }

    /**
     * Get a Floating IP
     * @param ipAddress the Floating IP to retrieve
     * @returns Promise
     */
    public getByIp(ipAddress: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(ipAddress)}`,
        });
    }

    /**
     * Delete a Floating IP
     * @param ipAddress the Floating IP to delete
     * @returns Promise
     */
    public deleteByIp(ipAddress: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(ipAddress)}`,
            method: HttpMethods.DELETE,
        });
    }

    /**
     * Request an action on a Floating IP
     * @param ipAddress the Floating IP to request against
     * @param action the action to request
     * @returns Promise
     */
    public requestAction(ipAddress: string, action: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(ipAddress)}/actions`,
            method: HttpMethods.POST,
            body: action,
        });
    }

    /**
     * Retrieve an action from a Floating IP
     * @param ipAddress the Floating IP to retrieve
     * @param actionId the action to retrieve
     * @returns Promise
     */
    public getAction(ipAddress: string, actionId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(ipAddress)}/actions/${encodeURIComponent(actionId)}`,
        });
    }

    /**
     * Get all Actions for a Floating IP
     * @param ipAddress the Floating IP to retrieve actions for
     * @param [tagName] return all Actions with a given Tag (optional)
     * @param [includeAll] return all Actions, paginated (optional)
     * @param [page] the specific page of Actions to return (optional)
     * @param [pageSize] the number of Actions to return per page (optional)
     * @returns Promise
     */
    public getAllActions(ipAddress: string, tagName: string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: `${this.basePath}/${encodeURIComponent(ipAddress)}/actions`,
            key: 'actions',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });

        return this._execute(requestOptions);
    }
}
