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
