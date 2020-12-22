**[do-wrapper](../README.md)**

> [Globals](../globals.md) / ["modules/droplets"](../modules/_modules_droplets_.md) / Droplets

# Class: Droplets

## Hierarchy

* [BaseModule](_modules_base_module_.basemodule.md)

  ↳ **Droplets**

## Index

### Constructors

* [constructor](_modules_droplets_.droplets.md#constructor)

### Methods

* [create](_modules_droplets_.droplets.md#create)
* [deleteById](_modules_droplets_.droplets.md#deletebyid)
* [deleteByTag](_modules_droplets_.droplets.md#deletebytag)
* [getAction](_modules_droplets_.droplets.md#getaction)
* [getActions](_modules_droplets_.droplets.md#getactions)
* [getAll](_modules_droplets_.droplets.md#getall)
* [getBackups](_modules_droplets_.droplets.md#getbackups)
* [getById](_modules_droplets_.droplets.md#getbyid)
* [getKernels](_modules_droplets_.droplets.md#getkernels)
* [getNeighbors](_modules_droplets_.droplets.md#getneighbors)
* [getSnapshots](_modules_droplets_.droplets.md#getsnapshots)
* [getUpgrades](_modules_droplets_.droplets.md#getupgrades)
* [requestAction](_modules_droplets_.droplets.md#requestaction)
* [requestActionByTag](_modules_droplets_.droplets.md#requestactionbytag)

## Constructors

### constructor

\+ **new Droplets**(`pageSize`: number, `requestHelper`: [RequestHelper](_request_helper_.requesthelper.md)): [Droplets](_modules_droplets_.droplets.md)

*Overrides [BaseModule](_modules_base_module_.basemodule.md).[constructor](_modules_base_module_.basemodule.md#constructor)*

*Defined in [modules/droplets.ts:11](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/droplets.ts#L11)*

#### Parameters:

Name | Type |
------ | ------ |
`pageSize` | number |
`requestHelper` | [RequestHelper](_request_helper_.requesthelper.md) |

**Returns:** [Droplets](_modules_droplets_.droplets.md)

## Methods

### create

▸ **create**(`options`: DropletCreationRequest): Promise<any\>

*Defined in [modules/droplets.ts:131](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/droplets.ts#L131)*

Create a new Droplet

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`options` | DropletCreationRequest | the options for the new Droplet |

**Returns:** Promise<any\>

Promise

___

### deleteById

▸ **deleteById**(`dropletId`: string): Promise<any\>

*Defined in [modules/droplets.ts:155](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/droplets.ts#L155)*

Delete a Droplet by its identifier

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`dropletId` | string | the identifier of the Droplet |

**Returns:** Promise<any\>

Promise

___

### deleteByTag

▸ **deleteByTag**(`tagName`: string): Promise<any\>

*Defined in [modules/droplets.ts:167](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/droplets.ts#L167)*

Delete all Droplets with a given Tag

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`tagName` | string | the Tag to delete Droplets for |

**Returns:** Promise<any\>

Promise

___

### getAction

▸ **getAction**(`dropletId`: string, `actionId`: string): Promise<any\>

*Defined in [modules/droplets.ts:235](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/droplets.ts#L235)*

Get the details of an Action on a Droplet

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`dropletId` | string | the identifier of the Droplet |
`actionId` | string | the identifier of the Action |

**Returns:** Promise<any\>

Promise

___

### getActions

▸ **getActions**(`dropletId`: string, `tagName`: string, `includeAll?`: boolean, `page?`: number, `pageSize?`: number): Promise<any\>

*Defined in [modules/droplets.ts:113](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/droplets.ts#L113)*

Get all Actions for a Droplet

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`dropletId` | string | - | the identifier of the Droplet |
`tagName` | string | - | - |
`includeAll` | boolean | false | - |
`page` | number | 1 | - |
`pageSize` | number | this.pageSize | - |

**Returns:** Promise<any\>

Promise

___

### getAll

▸ **getAll**(`tagName`: string, `includeAll?`: boolean, `page?`: number, `pageSize?`: number): Promise<any\>

*Defined in [modules/droplets.ts:25](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/droplets.ts#L25)*

Get all Droplets

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`tagName` | string | - |
`includeAll` | boolean | false |
`page` | number | 1 |
`pageSize` | number | this.pageSize |

**Returns:** Promise<any\>

Promise

___

### getBackups

▸ **getBackups**(`dropletId`: string, `tagName`: string, `includeAll?`: boolean, `page?`: number, `pageSize?`: number): Promise<any\>

*Defined in [modules/droplets.ts:91](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/droplets.ts#L91)*

Get all Backups for a Droplet

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`dropletId` | string | - | the identifier of the Droplet |
`tagName` | string | - | - |
`includeAll` | boolean | false | - |
`page` | number | 1 | - |
`pageSize` | number | this.pageSize | - |

**Returns:** Promise<any\>

Promise

___

### getById

▸ **getById**(`dropletId`: string): Promise<any\>

*Defined in [modules/droplets.ts:144](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/droplets.ts#L144)*

Get a Droplet by its identifier

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`dropletId` | string | the identifier of the Droplet |

**Returns:** Promise<any\>

Promise

___

### getKernels

▸ **getKernels**(`dropletId`: string, `tagName`: string, `includeAll?`: boolean, `page?`: number, `pageSize?`: number): Promise<any\>

*Defined in [modules/droplets.ts:47](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/droplets.ts#L47)*

Get all Kernels for a Droplet

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`dropletId` | string | - | the identifier of the Droplet |
`tagName` | string | - | - |
`includeAll` | boolean | false | - |
`page` | number | 1 | - |
`pageSize` | number | this.pageSize | - |

**Returns:** Promise<any\>

Promise

___

### getNeighbors

▸ **getNeighbors**(`dropletId`: string): Promise<any\>

*Defined in [modules/droplets.ts:182](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/droplets.ts#L182)*

Get the neighbors of a Droplet by its identifier

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`dropletId` | string | the identifier of the Droplet |

**Returns:** Promise<any\>

Promise

___

### getSnapshots

▸ **getSnapshots**(`dropletId`: string, `tagName`: string, `includeAll?`: boolean, `page?`: number, `pageSize?`: number): Promise<any\>

*Defined in [modules/droplets.ts:69](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/droplets.ts#L69)*

Get all Snapshots for a Droplet

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`dropletId` | string | - | the identifier of the Droplet |
`tagName` | string | - | - |
`includeAll` | boolean | false | - |
`page` | number | 1 | - |
`pageSize` | number | this.pageSize | - |

**Returns:** Promise<any\>

Promise

___

### getUpgrades

▸ **getUpgrades**(): Promise<any\>

*Defined in [modules/droplets.ts:192](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/droplets.ts#L192)*

Get Droplet Upgrades

**Returns:** Promise<any\>

Promise

___

### requestAction

▸ **requestAction**(`dropletId`: string, `action`: any): Promise<any\>

*Defined in [modules/droplets.ts:204](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/droplets.ts#L204)*

Request an Action on a Droplet

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`dropletId` | string | the identifier of the Droplet |
`action` | any | the Action to request |

**Returns:** Promise<any\>

Promise

___

### requestActionByTag

▸ **requestActionByTag**(`tagName`: string, `action`: any): Promise<any\>

*Defined in [modules/droplets.ts:218](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/droplets.ts#L218)*

Request an Action on all Droplets with a given Tag

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`tagName` | string | the Tag name to filter Droplets with |
`action` | any | the Action to request |

**Returns:** Promise<any\>

Promise
