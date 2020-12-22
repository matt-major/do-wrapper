**[do-wrapper](../README.md)**

> [Globals](../globals.md) / ["modules/domains"](../modules/_modules_domains_.md) / Domains

# Class: Domains

## Hierarchy

* [BaseModule](_modules_base_module_.basemodule.md)

  ↳ **Domains**

## Index

### Constructors

* [constructor](_modules_domains_.domains.md#constructor)

### Methods

* [create](_modules_domains_.domains.md#create)
* [createRecord](_modules_domains_.domains.md#createrecord)
* [delete](_modules_domains_.domains.md#delete)
* [deleteRecord](_modules_domains_.domains.md#deleterecord)
* [getAll](_modules_domains_.domains.md#getall)
* [getAllRecords](_modules_domains_.domains.md#getallrecords)
* [getByName](_modules_domains_.domains.md#getbyname)
* [getRecord](_modules_domains_.domains.md#getrecord)
* [updateRecord](_modules_domains_.domains.md#updaterecord)

## Constructors

### constructor

\+ **new Domains**(`pageSize`: number, `requestHelper`: [RequestHelper](_request_helper_.requesthelper.md)): [Domains](_modules_domains_.domains.md)

*Overrides [BaseModule](_modules_base_module_.basemodule.md).[constructor](_modules_base_module_.basemodule.md#constructor)*

*Defined in [modules/domains.ts:11](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/domains.ts#L11)*

#### Parameters:

Name | Type |
------ | ------ |
`pageSize` | number |
`requestHelper` | [RequestHelper](_request_helper_.requesthelper.md) |

**Returns:** [Domains](_modules_domains_.domains.md)

## Methods

### create

▸ **create**(`options`: DomainCreateRequest): Promise<any\>

*Defined in [modules/domains.ts:43](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/domains.ts#L43)*

Create a new Domain

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`options` | DomainCreateRequest | the options for the new Domain |

**Returns:** Promise<any\>

Promise

___

### createRecord

▸ **createRecord**(`domainName`: string, `options`: DomainRecordRequestOptions): Promise<any\>

*Defined in [modules/domains.ts:102](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/domains.ts#L102)*

Add a new Record to a Domain

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`domainName` | string | the name of the Domain to add it to |
`options` | DomainRecordRequestOptions | the Domain Record options |

**Returns:** Promise<any\>

Promise

___

### delete

▸ **delete**(`domainName`: string): Promise<any\>

*Defined in [modules/domains.ts:67](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/domains.ts#L67)*

Delete a Domain

**`params`** domainName the name of the Domain to delete

#### Parameters:

Name | Type |
------ | ------ |
`domainName` | string |

**Returns:** Promise<any\>

Promise

___

### deleteRecord

▸ **deleteRecord**(`domainName`: string, `recordId`: string): Promise<any\>

*Defined in [modules/domains.ts:128](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/domains.ts#L128)*

Delete a Domain Record

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`domainName` | string | the name of the Domain to retrieve it from |
`recordId` | string | the Record identifier to retrieve |

**Returns:** Promise<any\>

Promise

___

### getAll

▸ **getAll**(`tagName`: string, `includeAll?`: boolean, `page?`: number, `pageSize?`: number): Promise<any\>

*Defined in [modules/domains.ts:25](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/domains.ts#L25)*

Get all Domains

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

### getAllRecords

▸ **getAllRecords**(`domainName`: string, `tagName`: string, `includeAll?`: boolean, `page?`: number, `pageSize?`: number): Promise<any\>

*Defined in [modules/domains.ts:83](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/domains.ts#L83)*

Get all Domain Records

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`domainName` | string | - | the Domain to get the records for |
`tagName` | string | - | - |
`includeAll` | boolean | false | - |
`page` | number | 1 | - |
`pageSize` | number | this.pageSize | - |

**Returns:** Promise<any\>

Promise

___

### getByName

▸ **getByName**(`domainName`: string): Promise<any\>

*Defined in [modules/domains.ts:56](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/domains.ts#L56)*

Get a Domain

**`params`** domainName the name of the Domain to retrieve

#### Parameters:

Name | Type |
------ | ------ |
`domainName` | string |

**Returns:** Promise<any\>

Promise

___

### getRecord

▸ **getRecord**(`domainName`: string, `recordId`: string): Promise<any\>

*Defined in [modules/domains.ts:116](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/domains.ts#L116)*

Get a Domain Record

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`domainName` | string | the name of the Domain to retrieve it from |
`recordId` | string | the Record identifier to retrieve |

**Returns:** Promise<any\>

Promise

___

### updateRecord

▸ **updateRecord**(`domainName`: string, `recordId`: string, `options`: DomainRecordRequestOptions): Promise<any\>

*Defined in [modules/domains.ts:142](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/domains.ts#L142)*

Update a Domain Record

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`domainName` | string | the name of the Domain to update |
`recordId` | string | the Record identifier to update |
`options` | DomainRecordRequestOptions | the update options |

**Returns:** Promise<any\>

Promise
