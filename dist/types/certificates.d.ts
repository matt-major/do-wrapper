export interface CertificatesCreateRequest {
    name: string;
    type: string;
    private_key?: string;
    leaf_certificate?: string;
    certificate_chain?: string;
    dns_names?: string[];
}
