import RequestHelper from "../request-helper";
import { BaseModule } from "./base-module";

export default class Firewalls extends BaseModule {
    constructor(requestHelper: RequestHelper) {
        super(requestHelper);
    }
}
