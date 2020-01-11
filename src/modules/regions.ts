import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";

export default class Regions extends BaseModule {
    private basePath: string = 'regions';

    constructor(pageSize: number, requestHelper: RequestHelper) {
        super(pageSize, requestHelper);
    }

    /**
     * Get all Regions
     * @param [tagName] filter to only return Regions with a given tag
     * @param [includeAll] return all Regions, paginated (optional)
     * @param [page] the specific page of Regions to return (optional)
     * @param [pageSize] the number of Regions to return per page (optional)
     * @returns Promise
     */
    public getAll(tagName: string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath,
            key: 'regions',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });

        return this._execute(requestOptions);
    }
}
