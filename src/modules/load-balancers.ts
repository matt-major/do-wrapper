import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { LoadBalancerCreationOptions } from "../types/loadbalancers";
import { HttpMethods } from "../common";

export default class LoadBalancers extends BaseModule {
    private basePath: string = 'load_balancers';

    private baseOptions: any = {
        actionPath: this.basePath,
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
            method: HttpMethods.POST,
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
        });
    }

    /**
     * Update a Load Balancer
     * @param loadBalancerId the identifier of the Load Balancer
     * @param options the options to update the Load Balancer
     * @returns Promise
     */
    public update(loadBalancerId: string, options: any): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${loadBalancerId}`,
            method: HttpMethods.PUT,
            body: options,
        });
    }

    /**
     * Delete a Load Balancer
     * @param loadBalancerId the identifier of the Load Balancer
     * @returns Promise
     */
    public delete(loadBalancerId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${loadBalancerId}`,
            method: HttpMethods.DELETE,
        });
    }

    /**
     * Add Droplets to a Load Balancer
     * @param loadBalancerId the identifier of the Load Balancer
     * @param dropletIds the identifiers of the Droplets to add
     * @returns Promise
     */
    public addDroplets(loadBalancerId: string, dropletIds: string[]): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${loadBalancerId}/droplets`,
            method: HttpMethods.POST,
            body: {
                droplet_ids: dropletIds,
            },
        });
    }

    /**
     * Remove Droplets from a Load Balancer
     * @param loadBalancerId the identifier of the Load Balancer
     * @param dropletIds the identifiers of the Droplets to remove
     * @returns Promise
     */
    public removeDroplets(loadBalancerId: string, dropletIds: string[]): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${loadBalancerId}/droplets`,
            method: HttpMethods.DELETE,
            body: {
                droplet_ids: dropletIds,
            },
        });
    }

    /**
     * Add Forwarding Rules to a Load Balancer
     * @param loadBalancerId the identifier of the Load Balancer
     * @param rules the Forwarding Rules to add
     * @returns Promise
     */
    public addForwardingRules(loadBalancerId: string, rules: any[]): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${loadBalancerId}/forwarding_rules`,
            method: HttpMethods.POST,
            body: {
                forwarding_rules: rules,
            },
        });
    }

    /**
     * Remove Forwarding Rules from a Load Balancer
     * @param loadBalancerId the identifier of the Load Balancer
     * @param rules the Forwarding Rules to remove
     * @returns Promise
     */
    public removeForwardingRules(loadBalancerId: string, rules: any[]): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${loadBalancerId}/forwarding_rules`,
            method: HttpMethods.DELETE,
            body: {
                forwarding_rules: rules,
            },
        });
    }
}
