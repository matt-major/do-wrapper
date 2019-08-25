import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";

export default class FloatingIPs extends BaseModule {
    constructor(requestHelper: RequestHelper) {
        super(requestHelper);
    }
}
