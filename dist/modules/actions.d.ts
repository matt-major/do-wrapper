import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
export default class Actions extends BaseModule {
    private basePath;
    constructor(pageSize: number, requestHelper: RequestHelper);
    /**
     * Get all Actions
     * @param tagName filter to only return actions with a given tag
     * @param [includeAll] return all actions, paginated (optional)
     * @param [page] the specific page of actions to return (optional)
     * @param [pageSize] the number of actions to return per page (optional)
     * @returns Promise
     */
    get(tagName: string, includeAll?: boolean, page?: number, pageSize?: number): Promise<any>;
    /**
     * Get a specific Action using its identifier
     * @param actionId the identifier of the Action
     * @returns Promise
     */
    getById(actionId: number): Promise<any>;
}
