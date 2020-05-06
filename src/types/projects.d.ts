export interface CreateProjectOptions {
    name: string;
    description: string;
    purpose: string;
    environment: string;
}

export interface UpdateProjectOptions {
    name: string;
    description: string;
    purpose: string;
    environment: string;
    is_default: boolean;
}

export interface PatchProjectOptions {
    name?: string;
    description?: string;
    purpose?: string;
    environment?: string;
    is_default?: boolean;
}
