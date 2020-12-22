**[do-wrapper](../README.md)**

> [Globals](../globals.md) / ["modules/volumes"](../modules/_modules_volumes_.md) / Volumes

# Class: Volumes

## Hierarchy

* [BaseModule](_modules_base_module_.basemodule.md)

  ↳ **Volumes**

## Index

### Constructors

* [constructor](_modules_volumes_.volumes.md#constructor)

### Methods

* [create](_modules_volumes_.volumes.md#create)
* [createSnapshot](_modules_volumes_.volumes.md#createsnapshot)
* [deleteById](_modules_volumes_.volumes.md#deletebyid)
* [deleteByNameAndRegion](_modules_volumes_.volumes.md#deletebynameandregion)
* [getAll](_modules_volumes_.volumes.md#getall)
* [getById](_modules_volumes_.volumes.md#getbyid)
* [getByNameAndRegion](_modules_volumes_.volumes.md#getbynameandregion)
* [getSnapshots](_modules_volumes_.volumes.md#getsnapshots)
* [requestAction](_modules_volumes_.volumes.md#requestaction)

## Constructors

### constructor

\+ **new Volumes**(`pageSize`: number, `requestHelper`: [RequestHelper](_request_helper_.requesthelper.md)): [Volumes](_modules_volumes_.volumes.md)

*Overrides [BaseModule](_modules_base_module_.basemodule.md).[constructor](_modules_base_module_.basemodule.md#constructor)*

*Defined in [modules/volumes.ts:11](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/volumes.ts#L11)*

#### Parameters:

Name | Type |
------ | ------ |
`pageSize` | number |
`requestHelper` | [RequestHelper](_request_helper_.requesthelper.md) |

**Returns:** [Volumes](_modules_volumes_.volumes.md)

## Methods

### create

▸ **create**(`options`: VolumeCreationOptions): Promise<any\>

*Defined in [modules/volumes.ts:36](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/volumes.ts#L36)*

Create a new Block Storage Volume

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`options` | VolumeCreationOptions | the options to create the new Block Storage Volume |

**Returns:** Promise<any\>

Promise

___

### createSnapshot

▸ **createSnapshot**(`volumeId`: string, `options`: VolumeSnapshopCreationOptions): Promise<any\>

*Defined in [modules/volumes.ts:131](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/volumes.ts#L131)*

Create a new snapshot for a Block Storage Volume

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`volumeId` | string | the identifier of the Block Storage Volume |
`options` | VolumeSnapshopCreationOptions | the options to create the snapshot |

**Returns:** Promise<any\>

Promise

___

### deleteById

▸ **deleteById**(`volumeId`: string): Promise<any\>

*Defined in [modules/volumes.ts:76](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/volumes.ts#L76)*

Delete a Block Storage Volume using its identifier

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`volumeId` | string | the identifier of the Block Storage Volume |

**Returns:** Promise<any\>

Promise

___

### deleteByNameAndRegion

▸ **deleteByNameAndRegion**(`volumeName`: string, `region`: string): Promise<any\>

*Defined in [modules/volumes.ts:89](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/volumes.ts#L89)*

Delete a Block Storage Volume using its name and region

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`volumeName` | string | the name of the Block Storage Volume |
`region` | string | the region of the Block Storage Volume |

**Returns:** Promise<any\>

Promise

___

### getAll

▸ **getAll**(`region`: string): Promise<any\>

*Defined in [modules/volumes.ts:22](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/volumes.ts#L22)*

Get all Volumes

#### Parameters:

Name | Type |
------ | ------ |
`region` | string |

**Returns:** Promise<any\>

Promise

___

### getById

▸ **getById**(`volumeId`: string): Promise<any\>

*Defined in [modules/volumes.ts:49](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/volumes.ts#L49)*

Get a Block Storage Volume using its identifier

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`volumeId` | string | the identifier of the Block Storage Volume |

**Returns:** Promise<any\>

Promise

___

### getByNameAndRegion

▸ **getByNameAndRegion**(`volumeName`: string, `region`: string): Promise<any\>

*Defined in [modules/volumes.ts:61](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/volumes.ts#L61)*

Get a Block Storage Volume using its name and region

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`volumeName` | string | the name of the Block Storage Volume |
`region` | string | the region of the Block Storage Volume |

**Returns:** Promise<any\>

Promise

___

### getSnapshots

▸ **getSnapshots**(`volumeId`: string): Promise<any\>

*Defined in [modules/volumes.ts:119](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/volumes.ts#L119)*

Get the snapshots for a specific Block Storage Volume

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`volumeId` | string | the identifier of the Block Storage Volume |

**Returns:** Promise<any\>

Promise

___

### requestAction

▸ **requestAction**(`volumeId`: string, `action`: any): Promise<any\>

*Defined in [modules/volumes.ts:106](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/volumes.ts#L106)*

Request an action against a specific Block Storage Volume

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`volumeId` | string | the identifier of the Block Storage Volume |
`action` | any | the action details to request |

**Returns:** Promise<any\>

Promise
