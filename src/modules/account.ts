import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { ResponseHolder } from "../types/common";
import { AccountGetResponse } from "../types/account";

export default class Account extends BaseModule {
    private baseOptions: Object = {
        actionPath: 'account',
    };

    constructor(requestHelper: RequestHelper) {
        super(requestHelper);
    }

    public get(callback: any): ResponseHolder<AccountGetResponse> {
        return this._execute(this.baseOptions, callback);
    }
}
