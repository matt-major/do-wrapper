import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
export default class Reports extends BaseModule {
    private basePath;
    constructor(pageSize: number, requestHelper: RequestHelper);
    /**
     * Get the Droplet neighbors report
     * @returns Promise
     */
    getDropletNeighbors(): Promise<any>;
}
