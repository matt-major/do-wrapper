export interface AccountGetResponse {
    droplet_limit: number;
    floating_ip_limit: number;
    volume_limit: number;
    email: string;
    uuid: string;
    email_verified: boolean;
    status: string;
    status_message: string;
}
