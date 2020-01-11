export interface LoadBalancerCreationOptions {
    name: string;
    region: string;
    forwarding_rules: LoadBalancerForwardingRule[];
    health_check: LoadBalancerHealthcheck;
    sticky_sessions: LoadBalancerStickySessions;
    droplet_ids: string[];
    tag?: string;
}

export interface LoadBalancerForwardingRule {
    entry_protocol: string;
    entry_port: number;
    target_protocol: string;
    target_port: number;
    certificate_id: string;
    tls_passthrough: boolean;
}

export interface LoadBalancerHealthcheck {
    protocol: string;
    port: number;
    path: string;
    check_interval_seconds: number;
    response_timeout_seconds: number;
    healthy_threshold: number;
    unhealthy_threshold: number;
}

export interface LoadBalancerStickySessions {
    type: string;
}
