import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";

export default class Keys extends BaseModule {
    private basePath: string = 'account/keys';

    constructor(pageSize: number, requestHelper: RequestHelper) {
        super(pageSize, requestHelper);
    }

    /**
     * Get all SSH Keys
     * @param tagName filter to only return SSH Keys with a given tag
     * @param [includeAll] return all SSH Keys, paginated (optional)
     * @param [page] the specific page of SSH Keys to return (optional)
     * @param [pageSize] the number of SSH Keys to return per page (optional)
     * @returns Promise
     */
    public get(tagName: string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath,
            key: 'ssh_keys',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll
        });

        return this._execute(requestOptions);
    }

    /**
     * Get a specific SSH Key using its identifier
     * @param actionId the identifier of the SSH Key
     * @returns Promise
     */
    public getById(keyId: number): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(keyId)}`
        });
    }
}
