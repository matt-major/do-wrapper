import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { HttpMethods } from "../common";

export default class Snapshots extends BaseModule {
    private basePath: string = 'snapshots';

    private baseOptions: any = {
        actionPath: this.basePath,
        key: 'snapshots',
    };

    constructor(pageSize: number, requestHelper: RequestHelper) {
        super(pageSize, requestHelper);
    }

    /**
     * Get all Snapshots, regardless of type
     * @param [tagName] filter to only return Snapshots with a given tag
     * @param [includeAll] return all Snapshots, paginated (optional)
     * @param [page] the specific page of Snapshots to return (optional)
     * @param [pageSize] the number of Snapshots to return per page (optional)
     * @returns Promise
     */
    public get(tagName: string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            ...this.baseOptions,
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });

        return this._execute(requestOptions);
    }

    /**
     * Get a Snapshot using its identifier
     * @param snapshotId the identifier of the Snapshot to retrieve
     * @returns Promise
     */
    public getById(snapshotId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(snapshotId)}`,
        });
    }

    /**
     * Get all Snapshots, only for Volumes
     * @param [tagName] filter to only return Snapshots with a given tag
     * @param [includeAll] return all Snapshots, paginated (optional)
     * @param [page] the specific page of Snapshots to return (optional)
     * @param [pageSize] the number of Snapshots to return per page (optional)
     * @returns Promise
     */
    public getForVolumes(tagName: string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            ...this.baseOptions,
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
            qs: {
                resource_type: 'volume',
            },
        });

        return this._execute(requestOptions);
    }

    /**
     * Get all Snapshots, only for Droplets
     * @param [tagName] filter to only return Snapshots with a given tag
     * @param [includeAll] return all Snapshots, paginated (optional)
     * @param [page] the specific page of Snapshots to return (optional)
     * @param [pageSize] the number of Snapshots to return per page (optional)
     * @returns Promise
     */
    public getForDroplets(tagName: string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            ...this.baseOptions,
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
            qs: {
                resource_type: 'droplet',
            },
        });

        return this._execute(requestOptions);
    }

    /**
     * Delete a Snapshot
     * @param snapshotId the identifier of the Snapshot to delete
     * @returns Promise
     */
    public deleteById(snapshotId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(snapshotId)}`,
            method: HttpMethods.DELETE,
        });
    }
}
