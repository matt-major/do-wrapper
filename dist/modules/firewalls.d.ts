import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { FirewallChangeRequest } from "../types/firewalls";
export default class Firewalls extends BaseModule {
    private basePath;
    private baseOptions;
    constructor(pageSize: number, requestHelper: RequestHelper);
    /**
     * Create a new Firewall
     * @param options the options for the new Firewall
     * @returns Promise
     */
    create(options: FirewallChangeRequest): Promise<any>;
    /**
     * Delete a Firewall by its identifier
     * @param firewallId the identifier of the Firewall to delete
     * @returns Promise
     */
    delete(firewallId: string): Promise<any>;
    /**
     * Retrieve a Firewall using its identifier
     * @param firewallId the identifier of the Firewall to retrieve
     * @returns Promise
     */
    getById(firewallId: string): Promise<any>;
    /**
    * Retrieve all firewalls
    * @returns Promise
    */
    getAll(): Promise<any>;
    /**
     * Update a Firewall using its identifier
     * @param firewallId the identifier of the Firewall to update
     * @param options the Firewall details
     * @returns Promise
     */
    update(firewallId: string, options: FirewallChangeRequest): Promise<any>;
    /**
     * Add Droplets to an existing Firewall
     * @param firewallId the identifier of the Firewall to add the Droplets to
     * @param dropletIds the identifiers of the Droplets
     * @returns Promise
     */
    addDroplets(firewallId: string, dropletIds: string[]): Promise<any>;
    /**
     * Remove Droplets from an existing Firewall
     * @param firewallId the identifier of the Firewall to remove the Droplets from
     * @param dropletIds the identifiers of the Droplets
     * @returns Promise
     */
    removeDroplets(firewallId: string, dropletIds: string[]): Promise<any>;
    /**
     * Add Tags to an existing Firewall
     * @param firewallId the identifier of the Firewall to add the Tags to
     * @param tags the Tags to add
     * @returns Promise
     */
    addTags(firewallId: string, tags: string[]): Promise<any>;
    /**
     * Remove Tags from an existing Firewall
     * @param firewallId the identifier of the Firewall to remove the Tags from
     * @param tags the Tags to remove
     * @returns Promise
     */
    removeTags(firewallId: string, tags: string[]): Promise<any>;
    /**
     * Add Rules to an existing Firewall
     * @param firewallId the identifier of the Firewall to add the Rules to
     * @param options the Rules to add
     * @returns Promise
     */
    addRules(firewallId: string, options: any): Promise<any>;
    /**
     * Remove Rules from an existing Firewall
     * @param firewallId the identifier of the Firewall to remove the Rules from
     * @param options the Rules to remove
     * @returns Promise
     */
    removeRules(firewallId: string, options: any): Promise<any>;
}
