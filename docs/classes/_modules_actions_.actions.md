**[do-wrapper](../README.md)**

> [Globals](../globals.md) / ["modules/actions"](../modules/_modules_actions_.md) / Actions

# Class: Actions

## Hierarchy

* [BaseModule](_modules_base_module_.basemodule.md)

  ↳ **Actions**

## Index

### Constructors

* [constructor](_modules_actions_.actions.md#constructor)

### Methods

* [get](_modules_actions_.actions.md#get)
* [getById](_modules_actions_.actions.md#getbyid)

## Constructors

### constructor

\+ **new Actions**(`pageSize`: number, `requestHelper`: [RequestHelper](_request_helper_.requesthelper.md)): [Actions](_modules_actions_.actions.md)

*Overrides [BaseModule](_modules_base_module_.basemodule.md).[constructor](_modules_base_module_.basemodule.md#constructor)*

*Defined in [modules/actions.ts:5](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/actions.ts#L5)*

#### Parameters:

Name | Type |
------ | ------ |
`pageSize` | number |
`requestHelper` | [RequestHelper](_request_helper_.requesthelper.md) |

**Returns:** [Actions](_modules_actions_.actions.md)

## Methods

### get

▸ **get**(`tagName`: string, `includeAll?`: boolean, `page?`: number, `pageSize?`: number): Promise<any\>

*Defined in [modules/actions.ts:19](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/actions.ts#L19)*

Get all Actions

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`tagName` | string | - | filter to only return actions with a given tag |
`includeAll` | boolean | false | - |
`page` | number | 1 | - |
`pageSize` | number | this.pageSize | - |

**Returns:** Promise<any\>

Promise

___

### getById

▸ **getById**(`actionId`: number): Promise<any\>

*Defined in [modules/actions.ts:37](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/actions.ts#L37)*

Get a specific Action using its identifier

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`actionId` | number | the identifier of the Action |

**Returns:** Promise<any\>

Promise
