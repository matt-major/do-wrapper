import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
export default class Regions extends BaseModule {
    private basePath;
    constructor(pageSize: number, requestHelper: RequestHelper);
    /**
     * Get all Regions
     * @param [tagName] filter to only return Regions with a given tag
     * @param [includeAll] return all Regions, paginated (optional)
     * @param [page] the specific page of Regions to return (optional)
     * @param [pageSize] the number of Regions to return per page (optional)
     * @returns Promise
     */
    getAll(tagName: string, includeAll?: boolean, page?: number, pageSize?: number): Promise<any>;
}
