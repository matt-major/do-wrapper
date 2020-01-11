import { ActionRegion } from "./regions";

export interface ActionEntry {
    id: number;
    status: string;
    type: string;
    started_at: string;
    completed_at: string;
    resource_id: number;
    resource_type: string;
    region: ActionRegion;
    region_slug: string;
}
