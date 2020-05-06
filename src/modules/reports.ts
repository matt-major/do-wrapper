import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";

export default class Reports extends BaseModule {
    private basePath: string = 'reports';

    constructor(pageSize: number, requestHelper: RequestHelper) {
        super(pageSize, requestHelper);
    }

    /**
     * Get the Droplet neighbors report
     * @returns Promise
     */
    public getDropletNeighbors(): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/droplet_neighbors_ids`,
        });
    }
}
