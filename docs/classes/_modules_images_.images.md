**[do-wrapper](../README.md)**

> [Globals](../globals.md) / ["modules/images"](../modules/_modules_images_.md) / Images

# Class: Images

## Hierarchy

* [BaseModule](_modules_base_module_.basemodule.md)

  ↳ **Images**

## Index

### Constructors

* [constructor](_modules_images_.images.md#constructor)

### Methods

* [deleteById](_modules_images_.images.md#deletebyid)
* [getActionById](_modules_images_.images.md#getactionbyid)
* [getActions](_modules_images_.images.md#getactions)
* [getAll](_modules_images_.images.md#getall)
* [getByIdOrSlug](_modules_images_.images.md#getbyidorslug)
* [rename](_modules_images_.images.md#rename)
* [requestAction](_modules_images_.images.md#requestaction)

## Constructors

### constructor

\+ **new Images**(`pageSize`: number, `requestHelper`: [RequestHelper](_request_helper_.requesthelper.md)): [Images](_modules_images_.images.md)

*Overrides [BaseModule](_modules_base_module_.basemodule.md).[constructor](_modules_base_module_.basemodule.md#constructor)*

*Defined in [modules/images.ts:10](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/images.ts#L10)*

#### Parameters:

Name | Type |
------ | ------ |
`pageSize` | number |
`requestHelper` | [RequestHelper](_request_helper_.requesthelper.md) |

**Returns:** [Images](_modules_images_.images.md)

## Methods

### deleteById

▸ **deleteById**(`imageId`: string): Promise<any\>

*Defined in [modules/images.ts:53](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/images.ts#L53)*

Delete an Image using its identifier

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`imageId` | string | the identifier of the Image |

**Returns:** Promise<any\>

Promise

___

### getActionById

▸ **getActionById**(`imageId`: string, `actionId`: string): Promise<any\>

*Defined in [modules/images.ts:102](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/images.ts#L102)*

Get the details of an Action for an Image

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`imageId` | string | the identifier of the Image |
`actionId` | string | the identifier of the Action |

**Returns:** Promise<any\>

Promise

___

### getActions

▸ **getActions**(`imageId`: string, `includeAll?`: boolean, `page?`: number, `pageSize?`: number): Promise<any\>

*Defined in [modules/images.ts:84](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/images.ts#L84)*

Get all actions for an Image

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`imageId` | string | - | the identifier of the Image to retrieve actions for |
`includeAll` | boolean | false | - |
`page` | number | 1 | - |
`pageSize` | number | this.pageSize | - |

**Returns:** Promise<any\>

Promise

___

### getAll

▸ **getAll**(`tagName`: string, `includeAll?`: boolean, `page?`: number, `pageSize?`: number): Promise<any\>

*Defined in [modules/images.ts:24](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/images.ts#L24)*

Get all Images

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

### getByIdOrSlug

▸ **getByIdOrSlug**(`imageIdOrSlug`: string): Promise<any\>

*Defined in [modules/images.ts:42](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/images.ts#L42)*

Get an Image using its identifier or slug

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`imageIdOrSlug` | string | the identifier or slug of the Image |

**Returns:** Promise<any\>

Promise

___

### rename

▸ **rename**(`imageId`: string, `newName`: string): Promise<any\>

*Defined in [modules/images.ts:66](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/images.ts#L66)*

Rename an Image

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`imageId` | string | the identifier of the Image |
`newName` | string | the new name to use |

**Returns:** Promise<any\>

Promise

___

### requestAction

▸ **requestAction**(`imageId`: string, `action`: any): Promise<any\>

*Defined in [modules/images.ts:114](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/images.ts#L114)*

Request an Action on an Image

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`imageId` | string | the identifier of the Image |
`action` | any | the Action to request on the Image |

**Returns:** Promise<any\>

Promise
