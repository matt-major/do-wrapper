import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { LoadBalancerCreationOptions } from "../types/loadbalancers";
export default class LoadBalancers extends BaseModule {
    private basePath;
    private baseOptions;
    constructor(pageSize: number, requestHelper: RequestHelper);
    /**
     * Create a new Load Balancer
     * @param options the options for the Load Balancer
     * @returns Promise
     */
    create(options: LoadBalancerCreationOptions): Promise<any>;
    /**
     * Get all Load Balancers
     * @returns Promise
     */
    getAll(): Promise<any>;
    /**
     * Get a Load Balancer using its identifier
     * @param loadBalancerId the identifier of the Load Balancer
     * @returns Promise
     */
    getById(loadBalancerId: string): Promise<any>;
    /**
     * Update a Load Balancer
     * @param loadBalancerId the identifier of the Load Balancer
     * @param options the options to update the Load Balancer
     * @returns Promise
     */
    update(loadBalancerId: string, options: any): Promise<any>;
    /**
     * Delete a Load Balancer
     * @param loadBalancerId the identifier of the Load Balancer
     * @returns Promise
     */
    delete(loadBalancerId: string): Promise<any>;
    /**
     * Add Droplets to a Load Balancer
     * @param loadBalancerId the identifier of the Load Balancer
     * @param dropletIds the identifiers of the Droplets to add
     * @returns Promise
     */
    addDroplets(loadBalancerId: string, dropletIds: string[]): Promise<any>;
    /**
     * Remove Droplets from a Load Balancer
     * @param loadBalancerId the identifier of the Load Balancer
     * @param dropletIds the identifiers of the Droplets to remove
     * @returns Promise
     */
    removeDroplets(loadBalancerId: string, dropletIds: string[]): Promise<any>;
    /**
     * Add Forwarding Rules to a Load Balancer
     * @param loadBalancerId the identifier of the Load Balancer
     * @param rules the Forwarding Rules to add
     * @returns Promise
     */
    addForwardingRules(loadBalancerId: string, rules: any[]): Promise<any>;
    /**
     * Remove Forwarding Rules from a Load Balancer
     * @param loadBalancerId the identifier of the Load Balancer
     * @param rules the Forwarding Rules to remove
     * @returns Promise
     */
    removeForwardingRules(loadBalancerId: string, rules: any[]): Promise<any>;
}
