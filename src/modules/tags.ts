import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { HttpMethods } from "../common";
import { TagAddResourceOption } from "../types/tags";

export default class Tags extends BaseModule {
    private basePath: string = 'tags';

    private baseOptions: any = {
        actionPath: this.basePath,
    };

    constructor(pageSize: number, requestHelper: RequestHelper) {
        super(pageSize, requestHelper);
    }

    /**
     * Get all Tags
     * @param tagName filter to only return Tags with a given tag
     * @param [includeAll] return all Tags, paginated (optional)
     * @param [page] the specific page of Tags to return (optional)
     * @param [pageSize] the number of Tags to return per page (optional)
     * @returns Promise
     */
    public getAll(tagName: string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            ...this.baseOptions,
            key: 'tags',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });

        return this._execute(requestOptions);
    }

    /**
     * Create a new Tag
     * @param tagName the Tag to create
     * @returns Promise
     */
    public create(tagName: string): Promise<any> {
        return this._execute({
            ...this.baseOptions,
            method: HttpMethods.POST,
            body: {
                name: tagName,
            },
        });
    }

    /**
     * Get a Tag
     * @param tagName the Tag to retrieve
     * @returns Promise
     */
    public getByName(tagName: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(tagName)}`,
        });
    }

    /**
     * Delete a Tag
     * @param tagName the Tag to delete
     * @returns Promise
     */
    public delete(tagName: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(tagName)}`,
            method: HttpMethods.DELETE,
        });
    }

    /**
     * Add Resources to an existing Tag
     * @param tagName the Tag to add them to
     * @param resources the Resources to add
     * @returns Promise
     */
    public addResources(tagName: string, resources: TagAddResourceOption[]): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(tagName)}/resources`,
            method: HttpMethods.POST,
            body: resources,
        });
    }

    /**
     * Remove Resources from an existing Tag
     * @param tagName the Tag to remove them from
     * @param resources the Resources to remove
     * @returns Promise
     */
    public removeResources(tagName: string, resources: TagAddResourceOption[]): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(tagName)}/resources`,
            method: HttpMethods.DELETE,
            body: resources,
        });
    }
}
