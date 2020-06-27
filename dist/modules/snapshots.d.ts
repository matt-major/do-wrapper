import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
export default class Snapshots extends BaseModule {
    private basePath;
    private baseOptions;
    constructor(pageSize: number, requestHelper: RequestHelper);
    /**
     * Get all Snapshots, regardless of type
     * @param [tagName] filter to only return Snapshots with a given tag
     * @param [includeAll] return all Snapshots, paginated (optional)
     * @param [page] the specific page of Snapshots to return (optional)
     * @param [pageSize] the number of Snapshots to return per page (optional)
     * @returns Promise
     */
    get(tagName: string, includeAll?: boolean, page?: number, pageSize?: number): Promise<any>;
    /**
     * Get a Snapshot using its identifier
     * @param snapshotId the identifier of the Snapshot to retrieve
     * @returns Promise
     */
    getById(snapshotId: string): Promise<any>;
    /**
     * Get all Snapshots, only for Volumes
     * @param [tagName] filter to only return Snapshots with a given tag
     * @param [includeAll] return all Snapshots, paginated (optional)
     * @param [page] the specific page of Snapshots to return (optional)
     * @param [pageSize] the number of Snapshots to return per page (optional)
     * @returns Promise
     */
    getForVolumes(tagName: string, includeAll?: boolean, page?: number, pageSize?: number): Promise<any>;
    /**
     * Get all Snapshots, only for Droplets
     * @param [tagName] filter to only return Snapshots with a given tag
     * @param [includeAll] return all Snapshots, paginated (optional)
     * @param [page] the specific page of Snapshots to return (optional)
     * @param [pageSize] the number of Snapshots to return per page (optional)
     * @returns Promise
     */
    getForDroplets(tagName: string, includeAll?: boolean, page?: number, pageSize?: number): Promise<any>;
    /**
     * Delete a Snapshot
     * @param snapshotId the identifier of the Snapshot to delete
     * @returns Promise
     */
    deleteById(snapshotId: string): Promise<any>;
}
