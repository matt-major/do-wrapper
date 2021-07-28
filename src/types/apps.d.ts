export interface createAppRequest {
    name: string;
    region?: string;
    domains?:[object];
    services?:[object];
    static_sites?:[object];
    jobs?:[object];
    workers?:[object];
    databases?:[object];
}

export interface createAppDeploymentRequest {
     forceBuild?: boolean;
}



