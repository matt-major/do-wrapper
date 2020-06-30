import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
export default class Sizes extends BaseModule {
    private basePath;
    constructor(pageSize: number, requestHelper: RequestHelper);
    /**
     * Get all Size configurations
     * @param [tagName] filter to only return Droplet Sizes with a given tag
     * @param [includeAll] return all Droplet Sizes, paginated (optional)
     * @param [page] the specific page of Droplet Sizes to return (optional)
     * @param [pageSize] the number of Droplet Sizes to return per page (optional)
     * @returns Promise
     */
    get(tagName: string, includeAll?: boolean, page?: number, pageSize?: number): Promise<any>;
}
