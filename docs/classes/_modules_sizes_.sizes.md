**[do-wrapper](../README.md)**

> [Globals](../globals.md) / ["modules/sizes"](../modules/_modules_sizes_.md) / Sizes

# Class: Sizes

## Hierarchy

* [BaseModule](_modules_base_module_.basemodule.md)

  ↳ **Sizes**

## Index

### Constructors

* [constructor](_modules_sizes_.sizes.md#constructor)

### Methods

* [get](_modules_sizes_.sizes.md#get)

## Constructors

### constructor

\+ **new Sizes**(`pageSize`: number, `requestHelper`: [RequestHelper](_request_helper_.requesthelper.md)): [Sizes](_modules_sizes_.sizes.md)

*Overrides [BaseModule](_modules_base_module_.basemodule.md).[constructor](_modules_base_module_.basemodule.md#constructor)*

*Defined in [modules/sizes.ts:5](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/sizes.ts#L5)*

#### Parameters:

Name | Type |
------ | ------ |
`pageSize` | number |
`requestHelper` | [RequestHelper](_request_helper_.requesthelper.md) |

**Returns:** [Sizes](_modules_sizes_.sizes.md)

## Methods

### get

▸ **get**(`tagName`: string, `includeAll?`: boolean, `page?`: number, `pageSize?`: number): Promise<any\>

*Defined in [modules/sizes.ts:19](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/sizes.ts#L19)*

Get all Size configurations

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`tagName` | string | - |
`includeAll` | boolean | false |
`page` | number | 1 |
`pageSize` | number | this.pageSize |

**Returns:** Promise<any\>

Promise
