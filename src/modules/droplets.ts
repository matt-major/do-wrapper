import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { DropletCreationRequest } from "../types/droplets";
import { HttpMethods } from "../common";

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
     * @param [tagName] filter to only return Droplets with a given tag
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
     * @param [tagName] filter to only return Kernels with a given tag
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
     * @param [tagName] filter to only return Snapshots with a given tag
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
     * @param [tagName] filter to only return Backups with a given tag
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
     * @param [tagName] filter to only return Actions with a given tag
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

    /**
     * Create a new Droplet
     * @param options the options for the new Droplet
     * @returns Promise
     */
    public create(options: DropletCreationRequest): Promise<any> {
        return this._execute({
            ...this.baseOptions,
            method: HttpMethods.POST,
            body: options,
        });
    }

    /**
     * Get a Droplet by its identifier
     * @param dropletId the identifier of the Droplet
     * @returns Promise
     */
    public getById(dropletId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(dropletId)}`,
        });
    }

    /**
     * Delete a Droplet by its identifier
     * @param dropletId the identifier of the Droplet
     * @returns Promise
     */
    public deleteById(dropletId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(dropletId)}`,
            method: HttpMethods.DELETE,
        });
    }

    /**
     * Delete all Droplets with a given Tag
     * @param tagName the Tag to delete Droplets for
     * @returns Promise
     */
    public deleteByTag(tagName: string): Promise<any> {
        return this._execute({
            ...this.baseOptions,
            method: HttpMethods.DELETE,
            qs: {
                tag_name: tagName,
            }
        });
    }

    /**
     * Get the neighbors of a Droplet by its identifier
     * @param dropletId the identifier of the Droplet
     * @returns Promise
     */
    public getNeighbors(dropletId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(dropletId)}/neighbors`,
        });
    }

    /**
     * Get Droplet Upgrades
     * @returns Promise
     */
    public getUpgrades() {
        return this._execute({
            actionPath: 'droplet_upgrades',
        });
    }

    /**
     * Request an Action on a Droplet
     * @param dropletId the identifier of the Droplet
     * @param action the Action to request
     * @returns Promise
     */
    public requestAction(dropletId: string, action: any): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(dropletId)}/actions`,
            method: HttpMethods.POST,
            body: action,
        });
    }

    /**
     * Request an Action on all Droplets with a given Tag
     * @param tagName the Tag name to filter Droplets with
     * @param action the Action to request
     * @returns Promise
     */
    public requestActionByTag(tagName: string, action: any): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/actions`,
            method: HttpMethods.POST,
            qs: {
                tag_name: tagName,
            },
            body: action,
        });
    }

    /**
     * Get the details of an Action on a Droplet
     * @param dropletId the identifier of the Droplet
     * @param actionId the identifier of the Action
     * @returns Promise
     */
    public getAction(dropletId: string, actionId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(dropletId)}/actions/${encodeURIComponent(actionId)}`,
        });
    }
}
