import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { createVpcRequest, updateVpcRequest} from "../types/vpc";
import { HttpMethods } from "../common";

export default class Vpc extends BaseModule {
    private basePath: string = 'vpcs';

    private baseOptions: any = {
        actionPath: `${this.basePath}/`,
    };

    constructor(pageSize: number, requestHelper: RequestHelper) {
        super(pageSize, requestHelper);
    }

   
    public getAll(includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: this.basePath,
            key: 'vpcs',
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });

        return this._execute(requestOptions);
    }

    public create(options: createVpcRequest): Promise<any> {
        return this._execute({
            ...this.baseOptions,
            method: HttpMethods.POST,
            body: options,
        });
    }


    public getById(vpcId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(vpcId)}`,
        });
    }


    public delete(vpcId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(vpcId)}`,
            method: HttpMethods.DELETE,
        });
    }

    public update(vpcId: string, options: updateVpcRequest): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(vpcId)}`,
            method: HttpMethods.PUT,
            body: options,
        });
    }

}
