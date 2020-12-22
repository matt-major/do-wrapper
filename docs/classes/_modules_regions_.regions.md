**[do-wrapper](../README.md)**

> [Globals](../globals.md) / ["modules/regions"](../modules/_modules_regions_.md) / Regions

# Class: Regions

## Hierarchy

* [BaseModule](_modules_base_module_.basemodule.md)

  ↳ **Regions**

## Index

### Constructors

* [constructor](_modules_regions_.regions.md#constructor)

### Methods

* [getAll](_modules_regions_.regions.md#getall)

## Constructors

### constructor

\+ **new Regions**(`pageSize`: number, `requestHelper`: [RequestHelper](_request_helper_.requesthelper.md)): [Regions](_modules_regions_.regions.md)

*Overrides [BaseModule](_modules_base_module_.basemodule.md).[constructor](_modules_base_module_.basemodule.md#constructor)*

*Defined in [modules/regions.ts:5](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/regions.ts#L5)*

#### Parameters:

Name | Type |
------ | ------ |
`pageSize` | number |
`requestHelper` | [RequestHelper](_request_helper_.requesthelper.md) |

**Returns:** [Regions](_modules_regions_.regions.md)

## Methods

### getAll

▸ **getAll**(`tagName`: string, `includeAll?`: boolean, `page?`: number, `pageSize?`: number): Promise<any\>

*Defined in [modules/regions.ts:19](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/regions.ts#L19)*

Get all Regions

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`tagName` | string | - |
`includeAll` | boolean | false |
`page` | number | 1 |
`pageSize` | number | this.pageSize |

**Returns:** Promise<any\>

Promise
