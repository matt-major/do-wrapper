import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { VolumeCreationOptions, VolumeSnapshopCreationOptions } from "../types/volumes";
import { HttpMethods } from "../common";

export default class Volumes extends BaseModule {
    private basePath: string = 'volumes';

    private baseOptions: any = {
        actionPath: `${this.basePath}/`,
    };

    constructor(pageSize: number, requestHelper: RequestHelper) {
        super(pageSize, requestHelper);
    }

    /**
     * Get all Volumes
     * @param [region] optional Region Name filter
     * @returns Promise
     */
    public getAll(region: string): Promise<any> {
        return this._execute({
            ...this.baseOptions,
            qs: {
                region: region || '',
            },
        });
    }

    /**
     * Create a new Block Storage Volume
     * @param options the options to create the new Block Storage Volume
     * @returns Promise
     */
    public create(options: VolumeCreationOptions): Promise<any> {
        return this._execute({
            ...this.baseOptions,
            method: HttpMethods.POST,
            body: options,
        });
    }

    /**
     * Get a Block Storage Volume using its identifier
     * @param volumeId the identifier of the Block Storage Volume
     * @returns Promise
     */
    public getById(volumeId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${volumeId}`,
        });
    }

    /**
     * Get a Block Storage Volume using its name and region
     * @param volumeName the name of the Block Storage Volume
     * @param region the region of the Block Storage Volume
     * @returns Promise
     */
    public getByNameAndRegion(volumeName: string, region: string): Promise<any> {
        return this._execute({
            ...this.baseOptions,
            qs: {
                name: volumeName,
                region: region,
            },
        });
    }

    /**
     * Delete a Block Storage Volume using its identifier
     * @param volumeId the identifier of the Block Storage Volume
     * @returns Promise
     */
    public deleteById(volumeId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${volumeId}`,
            method: HttpMethods.DELETE,
        });
    }

    /**
     * Delete a Block Storage Volume using its name and region
     * @param volumeName the name of the Block Storage Volume
     * @param region the region of the Block Storage Volume
     * @returns Promise
     */
    public deleteByNameAndRegion(volumeName: string, region: string): Promise<any> {
        return this._execute({
            ...this.baseOptions,
            method: HttpMethods.DELETE,
            qs: {
                name: volumeName,
                region: region,
            },
        });
    }

    /**
     * Request an action against a specific Block Storage Volume
     * @param volumeId the identifier of the Block Storage Volume
     * @param action the action details to request
     * @returns Promise
     */
    public requestAction(volumeId: string, action: any): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(volumeId)}/actions`,
            method: HttpMethods.POST,
            body: action,
        });
    }

    /**
     * Get the snapshots for a specific Block Storage Volume
     * @param volumeId the identifier of the Block Storage Volume
     * @returns Promise
     */
    public getSnapshots(volumeId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${volumeId}/snapshots`,
        });
    }

    /**
     * Create a new snapshot for a Block Storage Volume
     * @param volumeId the identifier of the Block Storage Volume
     * @param options the options to create the snapshot
     * @returns Promise
     */
    public createSnapshot(volumeId: string, options: VolumeSnapshopCreationOptions): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${volumeId}/snapshots`,
            method: HttpMethods.POST,
            body: options,
        });
    }
}
