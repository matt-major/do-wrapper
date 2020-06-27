import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { DropletCreationRequest } from "../types/droplets";
export default class Droplets extends BaseModule {
    private basePath;
    private baseOptions;
    constructor(pageSize: number, requestHelper: RequestHelper);
    /**
     * Get all Droplets
     * @param [tagName] filter to only return Droplets with a given tag
     * @param [includeAll] return all Droplets, paginated (optional)
     * @param [page] the specific page of Droplets to return (optional)
     * @param [pageSize] the number of Droplets to return per page (optional)
     * @returns Promise
     */
    getAll(tagName: string, includeAll?: boolean, page?: number, pageSize?: number): Promise<any>;
    /**
     * Get all Kernels for a Droplet
     * @param dropletId the identifier of the Droplet
     * @param [tagName] filter to only return Kernels with a given tag
     * @param [includeAll] return all Kernels, paginated (optional)
     * @param [page] the specific page of Kernels to return (optional)
     * @param [pageSize] the number of Kernels to return per page (optional)
     * @returns Promise
     */
    getKernels(dropletId: string, tagName: string, includeAll?: boolean, page?: number, pageSize?: number): Promise<any>;
    /**
     * Get all Snapshots for a Droplet
     * @param dropletId the identifier of the Droplet
     * @param [tagName] filter to only return Snapshots with a given tag
     * @param [includeAll] return all Snapshots, paginated (optional)
     * @param [page] the specific page of Snapshots to return (optional)
     * @param [pageSize] the number of Snapshots to return per page (optional)
     * @returns Promise
     */
    getSnapshots(dropletId: string, tagName: string, includeAll?: boolean, page?: number, pageSize?: number): Promise<any>;
    /**
     * Get all Backups for a Droplet
     * @param dropletId the identifier of the Droplet
     * @param [tagName] filter to only return Backups with a given tag
     * @param [includeAll] return all Backups, paginated (optional)
     * @param [page] the specific page of Backups to return (optional)
     * @param [pageSize] the number of Backups to return per page (optional)
     * @returns Promise
     */
    getBackups(dropletId: string, tagName: string, includeAll?: boolean, page?: number, pageSize?: number): Promise<any>;
    /**
     * Get all Actions for a Droplet
     * @param dropletId the identifier of the Droplet
     * @param [tagName] filter to only return Actions with a given tag
     * @param [includeAll] return all Actions, paginated (optional)
     * @param [page] the specific page of Actions to return (optional)
     * @param [pageSize] the number of Actions to return per page (optional)
     * @returns Promise
     */
    getActions(dropletId: string, tagName: string, includeAll?: boolean, page?: number, pageSize?: number): Promise<any>;
    /**
     * Create a new Droplet
     * @param options the options for the new Droplet
     * @returns Promise
     */
    create(options: DropletCreationRequest): Promise<any>;
    /**
     * Get a Droplet by its identifier
     * @param dropletId the identifier of the Droplet
     * @returns Promise
     */
    getById(dropletId: string): Promise<any>;
    /**
     * Delete a Droplet by its identifier
     * @param dropletId the identifier of the Droplet
     * @returns Promise
     */
    deleteById(dropletId: string): Promise<any>;
    /**
     * Delete all Droplets with a given Tag
     * @param tagName the Tag to delete Droplets for
     * @returns Promise
     */
    deleteByTag(tagName: string): Promise<any>;
    /**
     * Get the neighbors of a Droplet by its identifier
     * @param dropletId the identifier of the Droplet
     * @returns Promise
     */
    getNeighbors(dropletId: string): Promise<any>;
    /**
     * Get Droplet Upgrades
     * @returns Promise
     */
    getUpgrades(): Promise<any>;
    /**
     * Request an Action on a Droplet
     * @param dropletId the identifier of the Droplet
     * @param action the Action to request
     * @returns Promise
     */
    requestAction(dropletId: string, action: any): Promise<any>;
    /**
     * Request an Action on all Droplets with a given Tag
     * @param tagName the Tag name to filter Droplets with
     * @param action the Action to request
     * @returns Promise
     */
    requestActionByTag(tagName: string, action: any): Promise<any>;
    /**
     * Get the details of an Action on a Droplet
     * @param dropletId the identifier of the Droplet
     * @param actionId the identifier of the Action
     * @returns Promise
     */
    getAction(dropletId: string, actionId: string): Promise<any>;
}
