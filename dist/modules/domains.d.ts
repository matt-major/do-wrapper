import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { DomainCreateRequest, DomainRecordRequestOptions } from "../types/domain";
export default class Domains extends BaseModule {
    private basePath;
    private baseOptions;
    constructor(pageSize: number, requestHelper: RequestHelper);
    /**
     * Get all Domains
     * @param [tagName] filter to only return Domains with a given tag
     * @param [includeAll] return all Domains, paginated (optional)
     * @param [page] the specific page of Domains to return (optional)
     * @param [pageSize] the number of Domains to return per page (optional)
     * @returns Promise
     */
    getAll(tagName: string, includeAll?: boolean, page?: number, pageSize?: number): Promise<any>;
    /**
     * Create a new Domain
     * @param options the options for the new Domain
     * @returns Promise
     */
    create(options: DomainCreateRequest): Promise<any>;
    /**
     * Get a Domain
     * @params domainName the name of the Domain to retrieve
     * @returns Promise
     */
    getByName(domainName: string): Promise<any>;
    /**
     * Delete a Domain
     * @params domainName the name of the Domain to delete
     * @returns Promise
     */
    delete(domainName: string): Promise<any>;
    /**
     * Get all Domain Records
     * @param domainName the Domain to get the records for
     * @param [tagName] filter to only return Domains with a given tag
     * @param [includeAll] return all Domains, paginated (optional)
     * @param [page] the specific page of Domains to return (optional)
     * @param [pageSize] the number of Domains to return per page (optional)
     * @returns Promise
     */
    getAllRecords(domainName: string, tagName: string, includeAll?: boolean, page?: number, pageSize?: number): Promise<any>;
    /**
     * Add a new Record to a Domain
     * @param domainName the name of the Domain to add it to
     * @param options the Domain Record options
     * @returns Promise
     */
    createRecord(domainName: string, options: DomainRecordRequestOptions): Promise<any>;
    /**
     * Get a Domain Record
     * @param domainName the name of the Domain to retrieve it from
     * @param recordId the Record identifier to retrieve
     * @returns Promise
     */
    getRecord(domainName: string, recordId: string): Promise<any>;
    /**
     * Delete a Domain Record
     * @param domainName the name of the Domain to retrieve it from
     * @param recordId the Record identifier to retrieve
     * @returns Promise
     */
    deleteRecord(domainName: string, recordId: string): Promise<any>;
    /**
     * Update a Domain Record
     * @param domainName the name of the Domain to update
     * @param recordId the Record identifier to update
     * @param options the update options
     * @returns Promise
     */
    updateRecord(domainName: string, recordId: string, options: DomainRecordRequestOptions): Promise<any>;
}
