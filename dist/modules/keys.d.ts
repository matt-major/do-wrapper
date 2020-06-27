import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { AddKeyRequest } from "../types/keys";
export default class Keys extends BaseModule {
    private basePath;
    private baseOptions;
    constructor(pageSize: number, requestHelper: RequestHelper);
    /**
     * Get all SSH Keys
     * @param [tagName] filter to only return SSH Keys with a given tag
     * @param [includeAll] return all SSH Keys, paginated (optional)
     * @param [page] the specific page of SSH Keys to return (optional)
     * @param [pageSize] the number of SSH Keys to return per page (optional)
     * @returns Promise
     */
    getAll(tagName: string, includeAll?: boolean, page?: number, pageSize?: number): Promise<any>;
    /**
     * Get a specific SSH Key using its identifier
     * @param keyId the identifier of the SSH Key
     * @returns Promise
     */
    getById(keyId: number): Promise<any>;
    /**
     * Get a specific SSH Key using its fingerprint
     * @param fingerprint the fingerprint of the SSH Key to retrieve
     * @returns Promise
     */
    getByFingerprint(fingerprint: string): Promise<any>;
    /**
     * Add a new SSH Key to an account
     * @param addKeyRequest the configuration of the SSH Key
     * @returns Promise
     */
    add(addKeyRequest: AddKeyRequest): Promise<any>;
    /**
     * Rename an SSH Key
     * @param identifier the ID or Fingerprint of the SSH Key to rename
     * @param newName the new name to set on the SSH Key
     * @returns Promise
     */
    rename(identifier: string, newName: string): Promise<any>;
    /**
     * Delete an SSH Key
     * @param identifier the ID or Fingerprint of the SSH Key you wish to delete
     * @returns Promise
     */
    delete(identifier: string): Promise<any>;
}
