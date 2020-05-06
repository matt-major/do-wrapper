import RequestHelper from "../request-helper";

export class BaseModule {
    protected pageSize: number;

    private requestHelper: RequestHelper;

    constructor(pageSize: number, requestHelper: RequestHelper) {
        this.pageSize = pageSize;
        this.requestHelper = requestHelper;
    }

    protected _getBasePaginatedRequestOptions(options: any): any {
        return {
            actionPath: options.actionPath,
            key: options.key,
            qs: {
                ...(options.tagName && { tag_name: options.tagName }),
                per_page: options.pageSize || this.pageSize,
                page: options.page || 1,
            },
            includeAll: options.includeAll || false,
        };
    }

    protected _execute(options: any): Promise<any> {
        return this.requestHelper.request(options);
    }
}