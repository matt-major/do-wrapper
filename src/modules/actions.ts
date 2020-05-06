import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";

export default class Actions extends BaseModule {
    private basePath: string = 'actions';

    constructor(pageSize: number, requestHelper: RequestHelper) {
        super(pageSize, requestHelper);
    }

    /**
     * Get all Actions
     * @param tagName filter to only return actions with a given tag
     * @param [includeAll] return all actions, paginated (optional)
     * @param [page] the specific page of actions to return (optional)
     * @param [pageSize] the number of actions to return per page (optional)
     * @returns Promise
     */
    public get(tagName: string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath,
            key: 'actions',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll
        });

        return this._execute(requestOptions);
    }

    /**
     * Get a specific Action using its identifier
     * @param actionId the identifier of the Action
     * @returns Promise
     */
    public getById(actionId: number): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(actionId)}`
        });
    }
}
