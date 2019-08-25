import RequestHelper from "../request-helper";

export class BaseModule {
    private requestHelper: RequestHelper;

    constructor(requestHelper: RequestHelper) {
        this.requestHelper = requestHelper;
    }

    protected _execute(options: any, callback: any): any {
        return this.requestHelper.request(options, callback);
    }
}