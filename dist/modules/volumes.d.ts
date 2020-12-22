import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { VolumeCreationOptions, VolumeSnapshopCreationOptions } from "../types/volumes";
export default class Volumes extends BaseModule {
    private basePath;
    private baseOptions;
    constructor(pageSize: number, requestHelper: RequestHelper);
    /**
     * Get all Volumes
     * @param [region] optional Region Name filter
     * @returns Promise
     */
    getAll(region: string): Promise<any>;
    /**
     * Create a new Block Storage Volume
     * @param options the options to create the new Block Storage Volume
     * @returns Promise
     */
    create(options: VolumeCreationOptions): Promise<any>;
    /**
     * Get a Block Storage Volume using its identifier
     * @param volumeId the identifier of the Block Storage Volume
     * @returns Promise
     */
    getById(volumeId: string): Promise<any>;
    /**
     * Get a Block Storage Volume using its name and region
     * @param volumeName the name of the Block Storage Volume
     * @param region the region of the Block Storage Volume
     * @returns Promise
     */
    getByNameAndRegion(volumeName: string, region: string): Promise<any>;
    /**
     * Delete a Block Storage Volume using its identifier
     * @param volumeId the identifier of the Block Storage Volume
     * @returns Promise
     */
    deleteById(volumeId: string): Promise<any>;
    /**
     * Delete a Block Storage Volume using its name and region
     * @param volumeName the name of the Block Storage Volume
     * @param region the region of the Block Storage Volume
     * @returns Promise
     */
    deleteByNameAndRegion(volumeName: string, region: string): Promise<any>;
    /**
     * Request an action against a specific Block Storage Volume
     * @param volumeId the identifier of the Block Storage Volume
     * @param action the action details to request
     * @returns Promise
     */
    requestAction(volumeId: string, action: any): Promise<any>;
    /**
     * Get the snapshots for a specific Block Storage Volume
     * @param volumeId the identifier of the Block Storage Volume
     * @returns Promise
     */
    getSnapshots(volumeId: string): Promise<any>;
    /**
     * Create a new snapshot for a Block Storage Volume
     * @param volumeId the identifier of the Block Storage Volume
     * @param options the options to create the snapshot
     * @returns Promise
     */
    createSnapshot(volumeId: string, options: VolumeSnapshopCreationOptions): Promise<any>;
}
