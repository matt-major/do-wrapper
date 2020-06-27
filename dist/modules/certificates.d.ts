import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { CertificatesCreateRequest } from "../types/certificates";
export default class Certificates extends BaseModule {
    private basePath;
    private baseOptions;
    constructor(pageSize: number, requestHelper: RequestHelper);
    /**
     * Get all Certificates
     * @param [tagName] filter to only return Certificates with a given tag
     * @param [includeAll] return all Certificates, paginated (optional)
     * @param [page] the specific page of Certificates to return (optional)
     * @param [pageSize] the number of Certificates to return per page (optional)
     * @returns Promise
     */
    getAll(tagName: string, includeAll?: boolean, page?: number, pageSize?: number): Promise<any>;
    /**
     * Create a new Certificate
     * @param options the options for the Certificate
     * @returns Promise
     */
    create(options: CertificatesCreateRequest): Promise<any>;
    /**
     * Get a Certificate
     * @param certificateId the identifier of the Certificate
     * @returns Promise
     */
    getById(certificateId: string): Promise<any>;
    /**
     * Delete a Certificate
     * @param certificateId the identifier of the Certificate
     * @returns Promise
     */
    delete(certificateId: string): Promise<any>;
}
