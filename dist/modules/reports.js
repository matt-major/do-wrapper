"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_module_1 = require("./base-module");
var Reports = /** @class */ (function (_super) {
    __extends(Reports, _super);
    function Reports(pageSize, requestHelper) {
        var _this = _super.call(this, pageSize, requestHelper) || this;
        _this.basePath = 'reports';
        return _this;
    }
    /**
     * Get the Droplet neighbors report
     * @returns Promise
     */
    Reports.prototype.getDropletNeighbors = function () {
        return this._execute({
            actionPath: this.basePath + "/droplet_neighbors_ids",
        });
    };
    return Reports;
}(base_module_1.BaseModule));
exports.default = Reports;
