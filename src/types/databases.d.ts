export interface DatabaseCreateClusterRequest {
    name: string;
    engine: string;
    version: string;
    region: string;
    size: string;
    num_nodes: number;
    tags: string[]
}

export interface DatabaseResizeClusterRequest {
    size: string;
    num_nodes: number;
}

export interface AddPoolRequestOptions {
    name: string;
    mode: string;
    size: number;
    db: string;
    user: string;
}
