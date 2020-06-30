import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";
import { CreateProjectOptions, UpdateProjectOptions } from "../types/projects";
export default class Projects extends BaseModule {
    private basePath;
    private baseOptions;
    constructor(pageSize: number, requestHelper: RequestHelper);
    /**
     * Get all Projects
     * @param [includeAll] return all Projects, paginated (optional)
     * @param [page] the specific page of Projects to return (optional)
     * @param [pageSize] the number of Projects to return per page (optional)
     * @returns Promise
     */
    getAll(includeAll?: boolean, page?: number, pageSize?: number): Promise<any>;
    /**
     * Create a new Project
     * @param projectOptions the options for the Project
     * @returns Promise
     */
    create(projectOptions: CreateProjectOptions): Promise<any>;
    /**
     * Get a Project using its identifier
     * @param projectId the identifier of the Project
     * @returns Promise
     */
    getById(projectId: string): Promise<any>;
    /**
     * Update a Project
     * @param projectId the identifier of the Project
     * @param projectOptions the options for the Project
     * @returns Promise
     */
    update(projectId: string, projectOptions: UpdateProjectOptions): Promise<any>;
    /**
     * Patch a Project
     * @param projectId the identifier of the Project
     * @param projectOptions the options for the Project
     * @returns Promise
     */
    patch(projectId: string, projectOptions: UpdateProjectOptions): Promise<any>;
    /**
     * Get the resources for a Project using its identifier
     * @param projectId the identifier of the Project
     * @returns Promise
     */
    getResources(projectId: string): Promise<any>;
    /**
     * Add resources to a Project using its identifier
     * @param projectId the identifier of the Project
     * @param resources the resources to add to the Project
     * @returns Promise
     */
    addResources(projectId: string, resources: string[]): Promise<any>;
    /**
     * Get the default Project
     * @returns Promise
     */
    getDefault(): Promise<any>;
    /**
     * Get the resources of the default Project
     * @returns Promise
     */
    getDefaultResources(): Promise<any>;
    /**
     * Add resources to the default Project
     * @param resources the resources to add
     * @returns Promise
     */
    addDefaultResources(resources: string[]): Promise<any>;
    /**
     * Update the default Project
     * @param projectOptions the options for the Project
     * @returns Promise
     */
    updateDefault(projectOptions: UpdateProjectOptions): Promise<any>;
    /**
     * Patch the default Project
     * @param projectOptions the options for the Project
     * @returns Promise
     */
    patchDefault(projectOptions: UpdateProjectOptions): Promise<any>;
}
