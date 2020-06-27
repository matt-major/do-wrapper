export interface DomainCreateRequest {
    name: string;
    ip_address: string;
}

export interface DomainRecordRequestOptions {
    type: string;
    name: string;
    data: string;
    priority?: number;
    port?: number;
    ttl: number;
    weight?: number;
    flags?: number;
    tag: string;
}
