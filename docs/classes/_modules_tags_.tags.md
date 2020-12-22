**[do-wrapper](../README.md)**

> [Globals](../globals.md) / ["modules/tags"](../modules/_modules_tags_.md) / Tags

# Class: Tags

## Hierarchy

* [BaseModule](_modules_base_module_.basemodule.md)

  ↳ **Tags**

## Index

### Constructors

* [constructor](_modules_tags_.tags.md#constructor)

### Methods

* [addResources](_modules_tags_.tags.md#addresources)
* [create](_modules_tags_.tags.md#create)
* [delete](_modules_tags_.tags.md#delete)
* [getAll](_modules_tags_.tags.md#getall)
* [getByName](_modules_tags_.tags.md#getbyname)
* [removeResources](_modules_tags_.tags.md#removeresources)

## Constructors

### constructor

\+ **new Tags**(`pageSize`: number, `requestHelper`: [RequestHelper](_request_helper_.requesthelper.md)): [Tags](_modules_tags_.tags.md)

*Overrides [BaseModule](_modules_base_module_.basemodule.md).[constructor](_modules_base_module_.basemodule.md#constructor)*

*Defined in [modules/tags.ts:11](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/tags.ts#L11)*

#### Parameters:

Name | Type |
------ | ------ |
`pageSize` | number |
`requestHelper` | [RequestHelper](_request_helper_.requesthelper.md) |

**Returns:** [Tags](_modules_tags_.tags.md)

## Methods

### addResources

▸ **addResources**(`tagName`: string, `resources`: TagAddResourceOption[]): Promise<any\>

*Defined in [modules/tags.ts:82](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/tags.ts#L82)*

Add Resources to an existing Tag

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`tagName` | string | the Tag to add them to |
`resources` | TagAddResourceOption[] | the Resources to add |

**Returns:** Promise<any\>

Promise

___

### create

▸ **create**(`tagName`: string): Promise<any\>

*Defined in [modules/tags.ts:43](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/tags.ts#L43)*

Create a new Tag

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`tagName` | string | the Tag to create |

**Returns:** Promise<any\>

Promise

___

### delete

▸ **delete**(`tagName`: string): Promise<any\>

*Defined in [modules/tags.ts:69](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/tags.ts#L69)*

Delete a Tag

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`tagName` | string | the Tag to delete |

**Returns:** Promise<any\>

Promise

___

### getAll

▸ **getAll**(`tagName`: string, `includeAll?`: boolean, `page?`: number, `pageSize?`: number): Promise<any\>

*Defined in [modules/tags.ts:25](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/tags.ts#L25)*

Get all Tags

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`tagName` | string | - | filter to only return Tags with a given tag |
`includeAll` | boolean | false | - |
`page` | number | 1 | - |
`pageSize` | number | this.pageSize | - |

**Returns:** Promise<any\>

Promise

___

### getByName

▸ **getByName**(`tagName`: string): Promise<any\>

*Defined in [modules/tags.ts:58](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/tags.ts#L58)*

Get a Tag

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`tagName` | string | the Tag to retrieve |

**Returns:** Promise<any\>

Promise

___

### removeResources

▸ **removeResources**(`tagName`: string, `resources`: TagAddResourceOption[]): Promise<any\>

*Defined in [modules/tags.ts:96](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/tags.ts#L96)*

Remove Resources from an existing Tag

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`tagName` | string | the Tag to remove them from |
`resources` | TagAddResourceOption[] | the Resources to remove |

**Returns:** Promise<any\>

Promise
