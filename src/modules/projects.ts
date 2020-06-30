import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { CreateProjectOptions, UpdateProjectOptions } from "../types/projects";
import { HttpMethods } from "../common";

export default class Projects extends BaseModule {
    private basePath: string = 'projects';

    private baseOptions: any = {
        actionPath: `${this.basePath}`,
    };

    constructor(pageSize: number, requestHelper: RequestHelper) {
        super(pageSize, requestHelper);
    }

    /**
     * Get all Projects
     * @param [includeAll] return all Projects, paginated (optional)
     * @param [page] the specific page of Projects to return (optional)
     * @param [pageSize] the number of Projects to return per page (optional)
     * @returns Promise
     */
    public getAll(includeAll: boolean = false, page: number = 1, pageSize: number = this.pageSize): Promise<any> {
        const requestOptions = this._getBasePaginatedRequestOptions({
            ...this.baseOptions,
            key: 'projects',
            pageSize: pageSize,
            page: page,
            includeAll: includeAll,
        });

        return this._execute(requestOptions);
    }

    /**
     * Create a new Project
     * @param projectOptions the options for the Project
     * @returns Promise
     */
    public create(projectOptions: CreateProjectOptions): Promise<any> {
        return this._execute({
            ...this.baseOptions,
            method: HttpMethods.POST,
            body: projectOptions,
        });
    }

    /**
     * Get a Project using its identifier
     * @param projectId the identifier of the Project
     * @returns Promise
     */
    public getById(projectId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(projectId)}`,
        });
    }

    /**
     * Update a Project
     * @param projectId the identifier of the Project
     * @param projectOptions the options for the Project
     * @returns Promise
     */
    public update(projectId: string, projectOptions: UpdateProjectOptions): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(projectId)}`,
            method: HttpMethods.PUT,
            body: projectOptions,
        });
    }

    /**
     * Patch a Project
     * @param projectId the identifier of the Project
     * @param projectOptions the options for the Project
     * @returns Promise
     */
    public patch(projectId: string, projectOptions: UpdateProjectOptions): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(projectId)}`,
            method: HttpMethods.PATCH,
            body: projectOptions,
        });
    }

    /**
     * Get the resources for a Project using its identifier
     * @param projectId the identifier of the Project
     * @returns Promise
     */
    public getResources(projectId: string): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(projectId)}/resources`,
        });
    }

    /**
     * Add resources to a Project using its identifier
     * @param projectId the identifier of the Project
     * @param resources the resources to add to the Project
     * @returns Promise
     */
    public addResources(projectId: string, resources: string[]): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/${encodeURIComponent(projectId)}/resources`,
            method: HttpMethods.POST,
            body: {
                resources: resources,
            },
        });
    }

    /**
     * Get the default Project
     * @returns Promise
     */
    public getDefault(): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/default`,
        });
    }

    /**
     * Get the resources of the default Project
     * @returns Promise
     */
    public getDefaultResources(): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/default/resources`,
        });
    }

    /**
     * Add resources to the default Project
     * @param resources the resources to add
     * @returns Promise
     */
    public addDefaultResources(resources: string[]): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/default/resources`,
            method: HttpMethods.POST,
            body: {
                resources: resources,
            },
        });
    }

    /**
     * Update the default Project
     * @param projectOptions the options for the Project
     * @returns Promise
     */
    public updateDefault(projectOptions: UpdateProjectOptions): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/default`,
            method: HttpMethods.PUT,
            body: projectOptions,
        });
    }

    /**
     * Patch the default Project
     * @param projectOptions the options for the Project
     * @returns Promise
     */
    public patchDefault(projectOptions: UpdateProjectOptions): Promise<any> {
        return this._execute({
            actionPath: `${this.basePath}/default`,
            method: HttpMethods.PATCH,
            body: projectOptions,
        });
    }
}
