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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var base_module_1 = require("./base-module");
var common_1 = require("../common");
var Projects = /** @class */ (function (_super) {
    __extends(Projects, _super);
    function Projects(pageSize, requestHelper) {
        var _this = _super.call(this, pageSize, requestHelper) || this;
        _this.basePath = 'projects';
        _this.baseOptions = {
            actionPath: "" + _this.basePath,
        };
        return _this;
    }
    /**
     * Get all Projects
     * @param [includeAll] return all Projects, paginated (optional)
     * @param [page] the specific page of Projects to return (optional)
     * @param [pageSize] the number of Projects to return per page (optional)
     * @returns Promise
     */
    Projects.prototype.getAll = function (includeAll, page, pageSize) {
        if (includeAll === void 0) { includeAll = false; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.pageSize; }
        var requestOptions = this._getBasePaginatedRequestOptions(__assign(__assign({}, this.baseOptions), { key: 'projects', pageSize: pageSize, page: page, includeAll: includeAll }));
        return this._execute(requestOptions);
    };
    /**
     * Create a new Project
     * @param projectOptions the options for the Project
     * @returns Promise
     */
    Projects.prototype.create = function (projectOptions) {
        return this._execute(__assign(__assign({}, this.baseOptions), { method: common_1.HttpMethods.POST, body: projectOptions }));
    };
    /**
     * Get a Project using its identifier
     * @param projectId the identifier of the Project
     * @returns Promise
     */
    Projects.prototype.getById = function (projectId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(projectId),
        });
    };
    /**
     * Update a Project
     * @param projectId the identifier of the Project
     * @param projectOptions the options for the Project
     * @returns Promise
     */
    Projects.prototype.update = function (projectId, projectOptions) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(projectId),
            method: common_1.HttpMethods.PUT,
            body: projectOptions,
        });
    };
    /**
     * Patch a Project
     * @param projectId the identifier of the Project
     * @param projectOptions the options for the Project
     * @returns Promise
     */
    Projects.prototype.patch = function (projectId, projectOptions) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(projectId),
            method: common_1.HttpMethods.PATCH,
            body: projectOptions,
        });
    };
    /**
     * Get the resources for a Project using its identifier
     * @param projectId the identifier of the Project
     * @returns Promise
     */
    Projects.prototype.getResources = function (projectId) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(projectId) + "/resources",
        });
    };
    /**
     * Add resources to a Project using its identifier
     * @param projectId the identifier of the Project
     * @param resources the resources to add to the Project
     * @returns Promise
     */
    Projects.prototype.addResources = function (projectId, resources) {
        return this._execute({
            actionPath: this.basePath + "/" + encodeURIComponent(projectId) + "/resources",
            method: common_1.HttpMethods.POST,
            body: {
                resources: resources,
            },
        });
    };
    /**
     * Get the default Project
     * @returns Promise
     */
    Projects.prototype.getDefault = function () {
        return this._execute({
            actionPath: this.basePath + "/default",
        });
    };
    /**
     * Get the resources of the default Project
     * @returns Promise
     */
    Projects.prototype.getDefaultResources = function () {
        return this._execute({
            actionPath: this.basePath + "/default/resources",
        });
    };
    /**
     * Add resources to the default Project
     * @param resources the resources to add
     * @returns Promise
     */
    Projects.prototype.addDefaultResources = function (resources) {
        return this._execute({
            actionPath: this.basePath + "/default/resources",
            method: common_1.HttpMethods.POST,
            body: {
                resources: resources,
            },
        });
    };
    /**
     * Update the default Project
     * @param projectOptions the options for the Project
     * @returns Promise
     */
    Projects.prototype.updateDefault = function (projectOptions) {
        return this._execute({
            actionPath: this.basePath + "/default",
            method: common_1.HttpMethods.PUT,
            body: projectOptions,
        });
    };
    /**
     * Patch the default Project
     * @param projectOptions the options for the Project
     * @returns Promise
     */
    Projects.prototype.patchDefault = function (projectOptions) {
        return this._execute({
            actionPath: this.basePath + "/default",
            method: common_1.HttpMethods.PATCH,
            body: projectOptions,
        });
    };
    return Projects;
}(base_module_1.BaseModule));
exports.default = Projects;
