import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { createAppRequest, createAppDeploymentRequest } from "../types/apps";
import { HttpMethods } from "../common";

export default class Apps extends BaseModule {
    private basePath: string = 'apps';

    private baseOptions: any = {
        actionPath: `${this.basePath}/`,
    };

    constructor(pageSize: number, requestHelper: RequestHelper) {
        super(pageSize, requestHelper);
    }

    public getAll(id: string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            ...this.baseOptions,
            key:"Apps",
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });

        return this._execute(requestOptions);
    }

    public create(options: createAppRequest): Promise<any> {
        return this._execute({
            ...this.baseOptions,
            method: HttpMethods.POST,
            body: options,
        });
    }

    public delete(appId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(appId)}`,
            method: HttpMethods.DELETE,
        });
    }

    public getById(appId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(appId)}`
        });
    }

    public update(appId:string, options:createAppRequest):Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(appId)}`,
            method: HttpMethods.PUT,
            body:options
        });
    }

    public createAppDeployment(appId:string, options:createAppDeploymentRequest):Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(appId)}/deployments`,
            method: HttpMethods.POST,
            body:options
        })
    }

    public getAllDeployments(appId:string, includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize):Promise<any>{
        const requestOptions = this._getBasePaginatedRequestOptions({
            actionPath: `${this.basePath}/${encodeURIComponent(appId)}/deployments`,
            key:"deployments",
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });

        return this._execute(requestOptions);
    }

    public cancelDeployment(appId:string,deploymentId:string):Promise<any>{
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(appId)}/deployments/${encodeURIComponent(deploymentId)}/cancel`,
            method: HttpMethods.POST
        })
    }


    public getAppDeployment(appId:string,deploymentId:string):Promise<any>{
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(appId)}/deployments/${encodeURIComponent(deploymentId)}`,
        })
    }
}
