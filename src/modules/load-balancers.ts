import RequestHelper from "../request-helper";
import {BaseModule} from "./base-module";
import {LoadBalancerCreationOptions} from "../types/LoadBalancers";

export default class LoadBalancers extends BaseModule {
    private basePath: string = 'load_balancers';

    private baseOptions: any = {
        actionPath: `${this.basePath}/`,
    };

    constructor(pageSize: number, requestHelper: RequestHelper) {
        super(pageSize, requestHelper);
    }

    /**
     * Create a new Load Balancer
     * @param options the options for the Load Balancer
     * @returns Promise
     */
    public create(options: LoadBalancerCreationOptions): Promise<any> {
        return this._execute({
            ...this.baseOptions,
            method: 'POST',
            body: options,
        });
    }

    /**
     * Get all Load Balancers
     * @returns Promise
     */
    public getAll(): Promise<any> {
        return this._execute({
            ...this.baseOptions,
        });
    }

    /**
     * Get a Load Balancer using its identifier
     * @param loadBalancerId the identifier of the Load Balancer
     * @returns Promise
     */
    public getById(loadBalancerId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${loadBalancerId}`,
            method: 'GET',
        });
    }
}
