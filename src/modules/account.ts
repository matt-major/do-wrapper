import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { ResponseHolder } from "../types/common";
import { AccountGetResponse } from "../types/account";

export default class Account extends BaseModule {
    private baseOptions: Object = {
        actionPath: 'account',
    };

    constructor(pageSize: number, requestHelper: RequestHelper) {
        super(pageSize, requestHelper);
    }

    public get(): Promise<any> | undefined {
        return this._execute(this.baseOptions);
    }
}
