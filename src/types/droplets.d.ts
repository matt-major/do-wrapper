export interface DropletCreationRequest {
    name: string;
    region: string;
    size: string;
    image: string | number;
    ssh_keys?: Array<string | number>;
    backups?: boolean;
    ipv6?: boolean,
    monitoring?: boolean;
    tags?: string[];
    user_data?: any;
    vpc_uuid?: string;
    with_droplet_agent?: boolean;
}
