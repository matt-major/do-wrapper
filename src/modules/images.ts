import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { HttpMethods } from "../common";

export default class Images extends BaseModule {
    private basePath: string = 'images';

    private baseOptions: any = {
        actionPath: `${this.basePath}/`,
    };

    constructor(pageSize: number, requestHelper: RequestHelper) {
        super(pageSize, requestHelper);
    }

    /**
     * Get all Images
     * @param [tagName] filter to only return Images with a given tag
     * @param [includeAll] return all Images, paginated (optional)
     * @param [page] the specific page of Images to return (optional)
     * @param [pageSize] the number of Images to return per page (optional)
     * @returns Promise
     */
    public getAll(tagName: string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath,
            key: 'images',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });

        return this._execute(requestOptions);
    }

    /**
     * Get an Image using its identifier or slug
     * @param imageIdOrSlug the identifier or slug of the Image
     * @returns Promise
     */
    public getByIdOrSlug(imageIdOrSlug: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(imageIdOrSlug)}`,
        });
    }

    /**
     * Delete an Image using its identifier
     * @param imageId the identifier of the Image
     * @returns Promise
     */
    public deleteById(imageId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(imageId)}`,
            method: HttpMethods.DELETE,
        });
    }

    /**
     * Rename an Image
     * @param imageId the identifier of the Image
     * @param newName the new name to use
     * @returns Promise
     */
    public rename(imageId: string, newName: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(imageId)}`,
            method: HttpMethods.PUT,
            body: {
                name: newName,
            },
        });
    }

    /**
     * Get all actions for an Image
     * @param imageId the identifier of the Image to retrieve actions for
     * @param [includeAll] return all Images, paginated (optional)
     * @param [page] the specific page of Images to return (optional)
     * @param [pageSize] the number of Images to return per page (optional)
     * @returns Promise
     */
    public getActions(imageId: string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: `${this.basePath}/${encodeURIComponent(imageId)}/actions`,
            key: 'actions',
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });

        return this._execute(requestOptions);
    }

    /**
     * Get the details of an Action for an Image
     * @param imageId the identifier of the Image
     * @param actionId the identifier of the Action
     * @returns Promise
     */
    public getActionById(imageId: string, actionId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(imageId)}/actions/${encodeURIComponent(actionId)}`,
        });
    }

    /**
     * Request an Action on an Image
     * @param imageId the identifier of the Image
     * @param action the Action to request on the Image
     * @returns Promise
     */
    public requestAction(imageId: string, action: any): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(imageId)}/actions`,
            method: HttpMethods.POST,
            body: action,
        });
    }
}
