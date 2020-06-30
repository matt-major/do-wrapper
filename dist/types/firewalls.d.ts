export interface FirewallChangeRequest {
    name: string;
    inbound_rules: FirewallInboundRule[];
    outbound_rules: FirewallOutboundRule[];
    droplet_ids: number[];
    tags?: string[];
}

export interface FirewallInboundRule {
    protocol: string;
    ports: string;
    sources: FirewallInboundRuleSource;
}

export interface FirewallInboundRuleSource {
    load_balancer_uids?: string[];
    tags?: string[];
    addresses?: string[];
    droplet_ids: number[];
}

export interface FirewallOutboundRule {
    protocol: string;
    ports: string;
    destinations: FirewallOutboundRuleDestination;
}

export interface FirewallOutboundRuleDestination {
    addresses: string[];
}
