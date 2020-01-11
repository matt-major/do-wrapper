import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { CertificatesCreateRequest } from "../types/certificates";
import { HttpMethods } from "../common";

export default class Certificates extends BaseModule {
    private basePath: string = 'certificates';

    private baseOptions: any = {
        actionPath: `${this.basePath}/`,
    };

    constructor(pageSize: number, requestHelper: RequestHelper) {
        super(pageSize, requestHelper);
    }

    /**
     * Get all Certificates
     * @param [tagName] filter to only return Certificates with a given tag
     * @param [includeAll] return all Certificates, paginated (optional)
     * @param [page] the specific page of Certificates to return (optional)
     * @param [pageSize] the number of Certificates to return per page (optional)
     * @returns Promise
     */
    public getAll(tagName: string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath,
            key: 'certificates',
            pageSize: pageSize,
            tagName: tagName,
            page: page,
            includeAll: includeAll,
        });

        return this._execute(requestOptions);
    }

    /**
     * Create a new Certificate
     * @param options the options for the Certificate
     * @returns Promise
     */
    public create(options: CertificatesCreateRequest): Promise<any> {
        return this._execute({
            ...this.baseOptions,
            method: HttpMethods.POST,
            body: options,
        });
    }

    /**
     * Get a Certificate
     * @param certificateId the identifier of the Certificate
     * @returns Promise
     */
    public getById(certificateId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(certificateId)}`,
        });
    }

    /**
     * Delete a Certificate
     * @param certificateId the identifier of the Certificate
     * @returns Promise
     */
    public delete(certificateId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(certificateId)}`,
            method: HttpMethods.DELETE,
        });
    }
}
