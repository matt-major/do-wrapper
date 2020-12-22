**[do-wrapper](../README.md)**

> [Globals](../globals.md) / ["modules/snapshots"](../modules/_modules_snapshots_.md) / Snapshots

# Class: Snapshots

## Hierarchy

* [BaseModule](_modules_base_module_.basemodule.md)

  ↳ **Snapshots**

## Index

### Constructors

* [constructor](_modules_snapshots_.snapshots.md#constructor)

### Methods

* [deleteById](_modules_snapshots_.snapshots.md#deletebyid)
* [get](_modules_snapshots_.snapshots.md#get)
* [getById](_modules_snapshots_.snapshots.md#getbyid)
* [getForDroplets](_modules_snapshots_.snapshots.md#getfordroplets)
* [getForVolumes](_modules_snapshots_.snapshots.md#getforvolumes)

## Constructors

### constructor

\+ **new Snapshots**(`pageSize`: number, `requestHelper`: [RequestHelper](_request_helper_.requesthelper.md)): [Snapshots](_modules_snapshots_.snapshots.md)

*Overrides [BaseModule](_modules_base_module_.basemodule.md).[constructor](_modules_base_module_.basemodule.md#constructor)*

*Defined in [modules/snapshots.ts:11](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/snapshots.ts#L11)*

#### Parameters:

Name | Type |
------ | ------ |
`pageSize` | number |
`requestHelper` | [RequestHelper](_request_helper_.requesthelper.md) |

**Returns:** [Snapshots](_modules_snapshots_.snapshots.md)

## Methods

### deleteById

▸ **deleteById**(`snapshotId`: string): Promise<any\>

*Defined in [modules/snapshots.ts:99](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/snapshots.ts#L99)*

Delete a Snapshot

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`snapshotId` | string | the identifier of the Snapshot to delete |

**Returns:** Promise<any\>

Promise

___

### get

▸ **get**(`tagName`: string, `includeAll?`: boolean, `page?`: number, `pageSize?`: number): Promise<any\>

*Defined in [modules/snapshots.ts:25](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/snapshots.ts#L25)*

Get all Snapshots, regardless of type

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

### getById

▸ **getById**(`snapshotId`: string): Promise<any\>

*Defined in [modules/snapshots.ts:42](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/snapshots.ts#L42)*

Get a Snapshot using its identifier

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`snapshotId` | string | the identifier of the Snapshot to retrieve |

**Returns:** Promise<any\>

Promise

___

### getForDroplets

▸ **getForDroplets**(`tagName`: string, `includeAll?`: boolean, `page?`: number, `pageSize?`: number): Promise<any\>

*Defined in [modules/snapshots.ts:79](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/snapshots.ts#L79)*

Get all Snapshots, only for Droplets

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

### getForVolumes

▸ **getForVolumes**(`tagName`: string, `includeAll?`: boolean, `page?`: number, `pageSize?`: number): Promise<any\>

*Defined in [modules/snapshots.ts:56](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/snapshots.ts#L56)*

Get all Snapshots, only for Volumes

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`tagName` | string | - |
`includeAll` | boolean | false |
`page` | number | 1 |
`pageSize` | number | this.pageSize |

**Returns:** Promise<any\>

Promise
