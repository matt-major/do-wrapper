export interface VolumeCreationOptions {
    size_gigabytes: number;
    name: string;
    description: string;
    region: string;
}

export interface VolumeSnapshopCreationOptions {
    name: string;
    tags?: string[];
}
