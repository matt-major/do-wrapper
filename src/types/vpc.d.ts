export interface createVpcRequest {
    name: string;
    description?: string;
    region: string;
    ip_range?: string;
}

export interface updateVpcRequest {
    name: string;
    description?: string;
    default?: boolean;
}