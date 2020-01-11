import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";

export default class Account extends BaseModule {
    private baseOptions: Object = {
        actionPath: 'account',
    };

    constructor(pageSize: number, requestHelper: RequestHelper) {
        super(pageSize, requestHelper);
    }

    /**
     * Get the account information for the token
     * @returns Promise of the request
     */
    public get(): Promise<any> {
        return this._execute(this.baseOptions);
    }
}
