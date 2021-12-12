export interface DropletCreationRequest {
    name: string;
    region: string;
    size: string;
    image: string;
    ssh_keys: number[];
    backups: boolean;
    ipv6: boolean;
    /** @deprecated */
    private_networking?: boolean;
    vpc_uuid?: string;
    user_data: any;
    monitoring: boolean;
    volumes: string[];
    tags: string[];
}
