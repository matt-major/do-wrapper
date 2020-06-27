import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { TagAddResourceOption } from "../types/tags";
export default class Tags extends BaseModule {
    private basePath;
    private baseOptions;
    constructor(pageSize: number, requestHelper: RequestHelper);
    /**
     * Get all Tags
     * @param tagName filter to only return Tags with a given tag
     * @param [includeAll] return all Tags, paginated (optional)
     * @param [page] the specific page of Tags to return (optional)
     * @param [pageSize] the number of Tags to return per page (optional)
     * @returns Promise
     */
    getAll(tagName: string, includeAll?: boolean, page?: number, pageSize?: number): Promise<any>;
    /**
     * Create a new Tag
     * @param tagName the Tag to create
     * @returns Promise
     */
    create(tagName: string): Promise<any>;
    /**
     * Get a Tag
     * @param tagName the Tag to retrieve
     * @returns Promise
     */
    getByName(tagName: string): Promise<any>;
    /**
     * Delete a Tag
     * @param tagName the Tag to delete
     * @returns Promise
     */
    delete(tagName: string): Promise<any>;
    /**
     * Add Resources to an existing Tag
     * @param tagName the Tag to add them to
     * @param resources the Resources to add
     * @returns Promise
     */
    addResources(tagName: string, resources: TagAddResourceOption[]): Promise<any>;
    /**
     * Remove Resources from an existing Tag
     * @param tagName the Tag to remove them from
     * @param resources the Resources to remove
     * @returns Promise
     */
    removeResources(tagName: string, resources: TagAddResourceOption[]): Promise<any>;
}
