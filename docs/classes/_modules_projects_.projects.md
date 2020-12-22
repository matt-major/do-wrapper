**[do-wrapper](../README.md)**

> [Globals](../globals.md) / ["modules/projects"](../modules/_modules_projects_.md) / Projects

# Class: Projects

## Hierarchy

* [BaseModule](_modules_base_module_.basemodule.md)

  ↳ **Projects**

## Index

### Constructors

* [constructor](_modules_projects_.projects.md#constructor)

### Methods

* [addDefaultResources](_modules_projects_.projects.md#adddefaultresources)
* [addResources](_modules_projects_.projects.md#addresources)
* [create](_modules_projects_.projects.md#create)
* [getAll](_modules_projects_.projects.md#getall)
* [getById](_modules_projects_.projects.md#getbyid)
* [getDefault](_modules_projects_.projects.md#getdefault)
* [getDefaultResources](_modules_projects_.projects.md#getdefaultresources)
* [getResources](_modules_projects_.projects.md#getresources)
* [patch](_modules_projects_.projects.md#patch)
* [patchDefault](_modules_projects_.projects.md#patchdefault)
* [update](_modules_projects_.projects.md#update)
* [updateDefault](_modules_projects_.projects.md#updatedefault)

## Constructors

### constructor

\+ **new Projects**(`pageSize`: number, `requestHelper`: [RequestHelper](_request_helper_.requesthelper.md)): [Projects](_modules_projects_.projects.md)

*Overrides [BaseModule](_modules_base_module_.basemodule.md).[constructor](_modules_base_module_.basemodule.md#constructor)*

*Defined in [modules/projects.ts:11](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/projects.ts#L11)*

#### Parameters:

Name | Type |
------ | ------ |
`pageSize` | number |
`requestHelper` | [RequestHelper](_request_helper_.requesthelper.md) |

**Returns:** [Projects](_modules_projects_.projects.md)

## Methods

### addDefaultResources

▸ **addDefaultResources**(`resources`: string[]): Promise<any\>

*Defined in [modules/projects.ts:140](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/projects.ts#L140)*

Add resources to the default Project

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`resources` | string[] | the resources to add |

**Returns:** Promise<any\>

Promise

___

### addResources

▸ **addResources**(`projectId`: string, `resources`: string[]): Promise<any\>

*Defined in [modules/projects.ts:105](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/projects.ts#L105)*

Add resources to a Project using its identifier

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | the identifier of the Project |
`resources` | string[] | the resources to add to the Project |

**Returns:** Promise<any\>

Promise

___

### create

▸ **create**(`projectOptions`: CreateProjectOptions): Promise<any\>

*Defined in [modules/projects.ts:41](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/projects.ts#L41)*

Create a new Project

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectOptions` | CreateProjectOptions | the options for the Project |

**Returns:** Promise<any\>

Promise

___

### getAll

▸ **getAll**(`includeAll?`: boolean, `page?`: number, `pageSize?`: number): Promise<any\>

*Defined in [modules/projects.ts:24](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/projects.ts#L24)*

Get all Projects

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`includeAll` | boolean | false |
`page` | number | 1 |
`pageSize` | number | this.pageSize |

**Returns:** Promise<any\>

Promise

___

### getById

▸ **getById**(`projectId`: string): Promise<any\>

*Defined in [modules/projects.ts:54](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/projects.ts#L54)*

Get a Project using its identifier

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | the identifier of the Project |

**Returns:** Promise<any\>

Promise

___

### getDefault

▸ **getDefault**(): Promise<any\>

*Defined in [modules/projects.ts:119](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/projects.ts#L119)*

Get the default Project

**Returns:** Promise<any\>

Promise

___

### getDefaultResources

▸ **getDefaultResources**(): Promise<any\>

*Defined in [modules/projects.ts:129](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/projects.ts#L129)*

Get the resources of the default Project

**Returns:** Promise<any\>

Promise

___

### getResources

▸ **getResources**(`projectId`: string): Promise<any\>

*Defined in [modules/projects.ts:93](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/projects.ts#L93)*

Get the resources for a Project using its identifier

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | the identifier of the Project |

**Returns:** Promise<any\>

Promise

___

### patch

▸ **patch**(`projectId`: string, `projectOptions`: UpdateProjectOptions): Promise<any\>

*Defined in [modules/projects.ts:80](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/projects.ts#L80)*

Patch a Project

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | the identifier of the Project |
`projectOptions` | UpdateProjectOptions | the options for the Project |

**Returns:** Promise<any\>

Promise

___

### patchDefault

▸ **patchDefault**(`projectOptions`: UpdateProjectOptions): Promise<any\>

*Defined in [modules/projects.ts:168](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/projects.ts#L168)*

Patch the default Project

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectOptions` | UpdateProjectOptions | the options for the Project |

**Returns:** Promise<any\>

Promise

___

### update

▸ **update**(`projectId`: string, `projectOptions`: UpdateProjectOptions): Promise<any\>

*Defined in [modules/projects.ts:66](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/projects.ts#L66)*

Update a Project

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | the identifier of the Project |
`projectOptions` | UpdateProjectOptions | the options for the Project |

**Returns:** Promise<any\>

Promise

___

### updateDefault

▸ **updateDefault**(`projectOptions`: UpdateProjectOptions): Promise<any\>

*Defined in [modules/projects.ts:155](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/projects.ts#L155)*

Update the default Project

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectOptions` | UpdateProjectOptions | the options for the Project |

**Returns:** Promise<any\>

Promise
