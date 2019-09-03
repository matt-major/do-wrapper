import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { ResponseHolder } from "../types/common";
import { ActionEntry } from "../types/actions";

export default class Actions extends BaseModule {
    private baseOptions: Object = {
        actionPath: 'actions',
    };

    constructor(pageSize: number, requestHelper: RequestHelper) {
        super(pageSize, requestHelper);
    }

    public get(tagName: string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> | undefined {
        const requestOptions = {
            ...this.baseOptions,
            qs: {
                tag_name: tagName || '',
                per_page: pageSize || this.pageSize,
                page: page || 1,
            },
            includeAll: includeAll || false,
        };

        return this._execute(requestOptions);
    }
}
