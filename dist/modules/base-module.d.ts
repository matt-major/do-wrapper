import RequestHelper from "../request-helper";
export declare class BaseModule {
    protected pageSize: number;
    private requestHelper;
    constructor(pageSize: number, requestHelper: RequestHelper);
    protected _getBasePaginatedRequestOptions(options: any): any;
    protected _execute(options: any): Promise<any>;
}
