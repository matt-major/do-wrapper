export interface NewClusterRequest {
    name: string;
    region: string;
    version: string;
    auto_upgrade: boolean;
    tags: string[];
    maintenance_policy: ClusterMaintenancePolicy;
    node_pools: ClusterNodePool[];
}

export interface ClusterNodePool {
    size: string;
    name: string;
    count: number;
    tags: string;
    auto_scale: boolean;
    min_nodes: string;
    max_nodes: string;
}

export interface ClusterNodePoolUpdateOptions {
    name: string;
    count: number;
    tags: string;
    auto_scale: boolean;
    min_nodes: string;
    max_nodes: string;
}

export interface ClusterMaintenancePolicy {
    start_time: string;
    day: string;
}
