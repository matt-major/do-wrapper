import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
export default class Account extends BaseModule {
    private baseOptions;
    constructor(pageSize: number, requestHelper: RequestHelper);
    /**
     * Get the account information for the token
     * @returns Promise of the request
     */
    get(): Promise<any>;
}
