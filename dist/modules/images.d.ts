import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
export default class Images extends BaseModule {
    private basePath;
    private baseOptions;
    constructor(pageSize: number, requestHelper: RequestHelper);
    /**
     * Get all Images
     * @param [tagName] filter to only return Images with a given tag
     * @param [includeAll] return all Images, paginated (optional)
     * @param [page] the specific page of Images to return (optional)
     * @param [pageSize] the number of Images to return per page (optional)
     * @returns Promise
     */
    getAll(tagName: string, includeAll?: boolean, page?: number, pageSize?: number): Promise<any>;
    /**
     * Get an Image using its identifier or slug
     * @param imageIdOrSlug the identifier or slug of the Image
     * @returns Promise
     */
    getByIdOrSlug(imageIdOrSlug: string): Promise<any>;
    /**
     * Delete an Image using its identifier
     * @param imageId the identifier of the Image
     * @returns Promise
     */
    deleteById(imageId: string): Promise<any>;
    /**
     * Rename an Image
     * @param imageId the identifier of the Image
     * @param newName the new name to use
     * @returns Promise
     */
    rename(imageId: string, newName: string): Promise<any>;
    /**
     * Get all actions for an Image
     * @param imageId the identifier of the Image to retrieve actions for
     * @param [includeAll] return all Images, paginated (optional)
     * @param [page] the specific page of Images to return (optional)
     * @param [pageSize] the number of Images to return per page (optional)
     * @returns Promise
     */
    getActions(imageId: string, includeAll?: boolean, page?: number, pageSize?: number): Promise<any>;
    /**
     * Get the details of an Action for an Image
     * @param imageId the identifier of the Image
     * @param actionId the identifier of the Action
     * @returns Promise
     */
    getActionById(imageId: string, actionId: string): Promise<any>;
    /**
     * Request an Action on an Image
     * @param imageId the identifier of the Image
     * @param action the Action to request on the Image
     * @returns Promise
     */
    requestAction(imageId: string, action: any): Promise<any>;
}
