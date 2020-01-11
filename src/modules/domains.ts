import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { HttpMethods } from "../common";
import { DomainCreateRequest, DomainRecordRequestOptions } from "../types/domain";

export default class Domains extends BaseModule {
    private basePath: string = 'domains';

    private baseOptions: any = {
        actionPath: `${this.basePath}/`,
    };

    constructor(pageSize: number, requestHelper: RequestHelper) {
        super(pageSize, requestHelper);
    }

    /**
     * Get all Domains
     * @param tagName filter to only return Domains with a given tag
     * @param [includeAll] return all Domains, paginated (optional)
     * @param [page] the specific page of Domains to return (optional)
     * @param [pageSize] the number of Domains to return per page (optional)
     * @returns Promise
     */
    public getAll(tagName: string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            ...this.baseOptions,
            key: 'domains',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });

        return this._execute(requestOptions);
    }

    /**
     * Create a new Domain
     * @param options the options for the new Domain
     * @returns Promise
     */
    public create(options: DomainCreateRequest): Promise<any> {
        return this._execute({
            ...this.baseOptions,
            method: HttpMethods.POST,
            body: options,
        });
    }

    /**
     * Get a Domain
     * @params domainName the name of the Domain to retrieve
     * @returns Promise
     */
    public getByName(domainName: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(domainName)}`,
        });
    }

    /**
     * Delete a Domain
     * @params domainName the name of the Domain to delete
     * @returns Promise
     */
    public delete(domainName: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(domainName)}`,
            method: HttpMethods.DELETE,
        });
    }

    /**
     * Get all Domain Records
     * @param domainName the Domain to get the records for
     * @param tagName filter to only return Domains with a given tag
     * @param [includeAll] return all Domains, paginated (optional)
     * @param [page] the specific page of Domains to return (optional)
     * @param [pageSize] the number of Domains to return per page (optional)
     * @returns Promise
     */
    public getAllRecords(domainName: string, tagName: string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: `${this.basePath}/${encodeURIComponent(domainName)}/records`,
            key: 'domain_records',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });

        return this._execute(requestOptions);
    }

    /**
     * Add a new Record to a Domain
     * @param domainName the name of the Domain to add it to
     * @param options the Domain Record options
     * @returns Promise
     */
    public createRecord(domainName: string, options: DomainRecordRequestOptions): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(domainName)}/records`,
            method: HttpMethods.POST,
            body: options,
        });
    }

    /**
     * Get a Domain Record
     * @param domainName the name of the Domain to retrieve it from
     * @param recordId the Record identifier to retrieve
     * @returns Promise
     */
    public getRecord(domainName: string, recordId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(domainName)}/records/${encodeURIComponent(recordId)}`,
        });
    }

    /**
     * Delete a Domain Record
     * @param domainName the name of the Domain to retrieve it from
     * @param recordId the Record identifier to retrieve
     * @returns Promise
     */
    public deleteRecord(domainName: string, recordId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(domainName)}/records/${encodeURIComponent(recordId)}`,
            method: HttpMethods.DELETE,
        });
    }

    /**
     * Update a Domain Record
     * @param domainName the name of the Domain to update
     * @param recordId the Record identifier to update
     * @param options the update options
     * @returns Promise
     */
    public updateRecord(domainName: string, recordId: string, options: DomainRecordRequestOptions): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(domainName)}/records/${encodeURIComponent(recordId)}`,
            method: HttpMethods.PUT,
            body: options,
        });
    }
}
