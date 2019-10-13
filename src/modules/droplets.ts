import RequestHelper from "../request-helper";
import {BaseModule} from "./base-module";

export default class Droplets extends BaseModule {
    private basePath: string = 'droplets';

    private baseOptions: any = {
        actionPath: `${this.basePath}/`,
    };

    constructor(pageSize: number, requestHelper: RequestHelper) {
        super(pageSize, requestHelper);
    }

    /**
     * Get all Droplets
     * @param tagName filter to only return Droplets with a given tag
     * @param [includeAll] return all Droplets, paginated (optional)
     * @param [page] the specific page of Droplets to return (optional)
     * @param [pageSize] the number of Droplets to return per page (optional)
     * @returns Promise
     */
    public getAll(tagName: string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            ...this.baseOptions,
            key: 'droplets',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });

        return this._execute(requestOptions);
    }

    /**
     * Get all Kernels for a Droplet
     * @param dropletId the identifier of the Droplet
     * @param tagName filter to only return Kernels with a given tag
     * @param [includeAll] return all Kernels, paginated (optional)
     * @param [page] the specific page of Kernels to return (optional)
     * @param [pageSize] the number of Kernels to return per page (optional)
     * @returns Promise
     */
    public getKernels(dropletId: string, tagName: string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: `${this.basePath}/${encodeURIComponent(dropletId)}/kernels`,
            key: 'kernels',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });

        return this._execute(requestOptions);
    }

    /**
     * Get all Snapshots for a Droplet
     * @param dropletId the identifier of the Droplet
     * @param tagName filter to only return Snapshots with a given tag
     * @param [includeAll] return all Snapshots, paginated (optional)
     * @param [page] the specific page of Snapshots to return (optional)
     * @param [pageSize] the number of Snapshots to return per page (optional)
     * @returns Promise
     */
    public getSnapshots(dropletId: string, tagName: string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: `${this.basePath}/${encodeURIComponent(dropletId)}/snapshots`,
            key: 'snapshots',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });

        return this._execute(requestOptions);
    }

    /**
     * Get all Backups for a Droplet
     * @param dropletId the identifier of the Droplet
     * @param tagName filter to only return Backups with a given tag
     * @param [includeAll] return all Backups, paginated (optional)
     * @param [page] the specific page of Backups to return (optional)
     * @param [pageSize] the number of Backups to return per page (optional)
     * @returns Promise
     */
    public getBackups(dropletId: string, tagName: string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: `${this.basePath}/${encodeURIComponent(dropletId)}/backups`,
            key: 'backups',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });

        return this._execute(requestOptions);
    }

    /**
     * Get all Actions for a Droplet
     * @param dropletId the identifier of the Droplet
     * @param tagName filter to only return Actions with a given tag
     * @param [includeAll] return all Actions, paginated (optional)
     * @param [page] the specific page of Actions to return (optional)
     * @param [pageSize] the number of Actions to return per page (optional)
     * @returns Promise
     */
    public getActions(dropletId: string, tagName: string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: `${this.basePath}/${encodeURIComponent(dropletId)}/actions`,
            key: 'actions',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });

        return this._execute(requestOptions);
    }
}
