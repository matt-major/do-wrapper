import RequestHelper from "../request-helper";

export class BaseModule {
    protected pageSize: number;
    private requestHelper: RequestHelper;

    constructor(pageSize: number, requestHelper: RequestHelper) {
        this.pageSize = pageSize;
        this.requestHelper = requestHelper;
    }

    protected _execute(options: any): Promise<any> | undefined {
        return this.requestHelper.request(options);
    }
}