import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";

export default class Sizes extends BaseModule {
    private basePath: string = 'sizes';

    constructor(pageSize: number, requestHelper: RequestHelper) {
        super(pageSize, requestHelper);
    }

    /**
     * Get all Size configurations
     * @param [tagName] filter to only return Droplet Sizes with a given tag
     * @param [includeAll] return all Droplet Sizes, paginated (optional)
     * @param [page] the specific page of Droplet Sizes to return (optional)
     * @param [pageSize] the number of Droplet Sizes to return per page (optional)
     * @returns Promise
     */
    public get(tagName: string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath,
            key: 'sizes',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });

        return this._execute(requestOptions);
    }
}
