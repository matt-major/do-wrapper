**[do-wrapper](../README.md)**

> [Globals](../globals.md) / ["modules/keys"](../modules/_modules_keys_.md) / Keys

# Class: Keys

## Hierarchy

* [BaseModule](_modules_base_module_.basemodule.md)

  ↳ **Keys**

## Index

### Constructors

* [constructor](_modules_keys_.keys.md#constructor)

### Methods

* [add](_modules_keys_.keys.md#add)
* [delete](_modules_keys_.keys.md#delete)
* [getAll](_modules_keys_.keys.md#getall)
* [getByFingerprint](_modules_keys_.keys.md#getbyfingerprint)
* [getById](_modules_keys_.keys.md#getbyid)
* [rename](_modules_keys_.keys.md#rename)

## Constructors

### constructor

\+ **new Keys**(`pageSize`: number, `requestHelper`: [RequestHelper](_request_helper_.requesthelper.md)): [Keys](_modules_keys_.keys.md)

*Overrides [BaseModule](_modules_base_module_.basemodule.md).[constructor](_modules_base_module_.basemodule.md#constructor)*

*Defined in [modules/keys.ts:11](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/keys.ts#L11)*

#### Parameters:

Name | Type |
------ | ------ |
`pageSize` | number |
`requestHelper` | [RequestHelper](_request_helper_.requesthelper.md) |

**Returns:** [Keys](_modules_keys_.keys.md)

## Methods

### add

▸ **add**(`addKeyRequest`: AddKeyRequest): Promise<any\>

*Defined in [modules/keys.ts:65](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/keys.ts#L65)*

Add a new SSH Key to an account

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`addKeyRequest` | AddKeyRequest | the configuration of the SSH Key |

**Returns:** Promise<any\>

Promise

___

### delete

▸ **delete**(`identifier`: string): Promise<any\>

*Defined in [modules/keys.ts:98](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/keys.ts#L98)*

Delete an SSH Key

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`identifier` | string | the ID or Fingerprint of the SSH Key you wish to delete |

**Returns:** Promise<any\>

Promise

___

### getAll

▸ **getAll**(`tagName`: string, `includeAll?`: boolean, `page?`: number, `pageSize?`: number): Promise<any\>

*Defined in [modules/keys.ts:25](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/keys.ts#L25)*

Get all SSH Keys

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

### getByFingerprint

▸ **getByFingerprint**(`fingerprint`: string): Promise<any\>

*Defined in [modules/keys.ts:54](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/keys.ts#L54)*

Get a specific SSH Key using its fingerprint

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`fingerprint` | string | the fingerprint of the SSH Key to retrieve |

**Returns:** Promise<any\>

Promise

___

### getById

▸ **getById**(`keyId`: number): Promise<any\>

*Defined in [modules/keys.ts:43](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/keys.ts#L43)*

Get a specific SSH Key using its identifier

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`keyId` | number | the identifier of the SSH Key |

**Returns:** Promise<any\>

Promise

___

### rename

▸ **rename**(`identifier`: string, `newName`: string): Promise<any\>

*Defined in [modules/keys.ts:81](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/keys.ts#L81)*

Rename an SSH Key

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`identifier` | string | the ID or Fingerprint of the SSH Key to rename |
`newName` | string | the new name to set on the SSH Key |

**Returns:** Promise<any\>

Promise
