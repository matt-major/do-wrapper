import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { AddKeyRequest } from "../types/keys";
import { HttpMethods } from "../common";

export default class Keys extends BaseModule {
    private basePath: string = 'account/keys';

    private baseOptions: any = {
        actionPath: `${this.basePath}/`,
    };

    constructor(pageSize: number, requestHelper: RequestHelper) {
        super(pageSize, requestHelper);
    }

    /**
     * Get all SSH Keys
     * @param [tagName] filter to only return SSH Keys with a given tag
     * @param [includeAll] return all SSH Keys, paginated (optional)
     * @param [page] the specific page of SSH Keys to return (optional)
     * @param [pageSize] the number of SSH Keys to return per page (optional)
     * @returns Promise
     */
    public getAll(tagName: string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath,
            key: 'ssh_keys',
            tagName: tagName,
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });

        return this._execute(requestOptions);
    }

    /**
     * Get a specific SSH Key using its identifier
     * @param keyId the identifier of the SSH Key
     * @returns Promise
     */
    public getById(keyId: number): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(keyId)}`
        });
    }

    /**
     * Get a specific SSH Key using its fingerprint
     * @param fingerprint the fingerprint of the SSH Key to retrieve
     * @returns Promise
     */
    public getByFingerprint(fingerprint: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(fingerprint)}`
        });
    }

    /**
     * Add a new SSH Key to an account
     * @param addKeyRequest the configuration of the SSH Key
     * @returns Promise
     */
    public add(addKeyRequest: AddKeyRequest): Promise<any> {
        const requestOptions = {
            ...this.baseOptions,
            method: HttpMethods.POST,
            body: addKeyRequest,
        };

        return this._execute(requestOptions);
    }

    /**
     * Rename an SSH Key
     * @param identifier the ID or Fingerprint of the SSH Key to rename
     * @param newName the new name to set on the SSH Key
     * @returns Promise
     */
    public rename(identifier: string, newName: string): Promise<any> {
        const requestOptions = {
            actionPath: `${this.basePath}/${encodeURIComponent(identifier)}`,
            method: HttpMethods.PUT,
            body: {
                name: newName,
            },
        };

        return this._execute(requestOptions);
    }

    /**
     * Delete an SSH Key
     * @param identifier the ID or Fingerprint of the SSH Key you wish to delete
     * @returns Promise
     */
    public delete(identifier: string): Promise<any> {
        const requestOptions = {
            actionPath: `${this.basePath}/${encodeURIComponent(identifier)}`,
            method: HttpMethods.DELETE,
        };

        return this._execute(requestOptions);
    }
}
