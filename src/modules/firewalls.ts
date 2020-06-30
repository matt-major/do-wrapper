import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";

import { FirewallChangeRequest } from "../types/firewalls";
import { HttpMethods } from "../common";

export default class Firewalls extends BaseModule {
    private basePath: string = 'firewalls';

    private baseOptions: any = {
        actionPath: `${this.basePath}/`,
    };

    constructor(pageSize: number, requestHelper: RequestHelper) {
        super(pageSize, requestHelper);
    }

    /**
     * Create a new Firewall
     * @param options the options for the new Firewall
     * @returns Promise
     */
    public create(options: FirewallChangeRequest): Promise<any> {
        return this._execute({
            ...this.baseOptions,
            method: HttpMethods.POST,
            body: options,
        });
    }

    /**
     * Delete a Firewall by its identifier
     * @param firewallId the identifier of the Firewall to delete
     * @returns Promise
     */
    public delete(firewallId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(firewallId)}`,
            method: HttpMethods.DELETE,
        });
    }

    /**
     * Retrieve a Firewall using its identifier
     * @param firewallId the identifier of the Firewall to retrieve
     * @returns Promise
     */
    public getById(firewallId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(firewallId)}`,
        });
    }

    /**
    * Retrieve all firewalls
    * @returns Promise
    */
    public getAll(): Promise<any> {
        return this._execute({
          actionPath: this.basePath
        });
    }

    /**
     * Update a Firewall using its identifier
     * @param firewallId the identifier of the Firewall to update
     * @param options the Firewall details
     * @returns Promise
     */
    public update(firewallId: string, options: FirewallChangeRequest): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(firewallId)}`,
            method: HttpMethods.PUT,
            body: options,
        });
    }

    /**
     * Add Droplets to an existing Firewall
     * @param firewallId the identifier of the Firewall to add the Droplets to
     * @param dropletIds the identifiers of the Droplets
     * @returns Promise
     */
    public addDroplets(firewallId: string, dropletIds: string[]): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(firewallId)}/droplets`,
            method: HttpMethods.POST,
            body: {
                droplet_ids: dropletIds,
            },
        });
    }

    /**
     * Remove Droplets from an existing Firewall
     * @param firewallId the identifier of the Firewall to remove the Droplets from
     * @param dropletIds the identifiers of the Droplets
     * @returns Promise
     */
    public removeDroplets(firewallId: string, dropletIds: string[]): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(firewallId)}/droplets`,
            method: HttpMethods.DELETE,
            body: {
                droplet_ids: dropletIds,
            },
        });
    }

    /**
     * Add Tags to an existing Firewall
     * @param firewallId the identifier of the Firewall to add the Tags to
     * @param tags the Tags to add
     * @returns Promise
     */
    public addTags(firewallId: string, tags: string[]): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(firewallId)}/tags`,
            method: HttpMethods.POST,
            body: {
                tags: tags,
            },
        });
    }

    /**
     * Remove Tags from an existing Firewall
     * @param firewallId the identifier of the Firewall to remove the Tags from
     * @param tags the Tags to remove
     * @returns Promise
     */
    public removeTags(firewallId: string, tags: string[]): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(firewallId)}/tags`,
            method: HttpMethods.DELETE,
            body: {
                tags: tags,
            },
        });
    }

    /**
     * Add Rules to an existing Firewall
     * @param firewallId the identifier of the Firewall to add the Rules to
     * @param options the Rules to add
     * @returns Promise
     */
    public addRules(firewallId: string, options: any): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(firewallId)}/rules`,
            method: HttpMethods.POST,
            body: options,
        });
    }

    /**
     * Remove Rules from an existing Firewall
     * @param firewallId the identifier of the Firewall to remove the Rules from
     * @param options the Rules to remove
     * @returns Promise
     */
    public removeRules(firewallId: string, options: any): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(firewallId)}/rules`,
            method: HttpMethods.DELETE,
            body: options,
        });
    }
}
