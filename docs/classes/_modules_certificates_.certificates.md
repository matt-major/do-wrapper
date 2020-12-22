**[do-wrapper](../README.md)**

> [Globals](../globals.md) / ["modules/certificates"](../modules/_modules_certificates_.md) / Certificates

# Class: Certificates

## Hierarchy

* [BaseModule](_modules_base_module_.basemodule.md)

  ↳ **Certificates**

## Index

### Constructors

* [constructor](_modules_certificates_.certificates.md#constructor)

### Methods

* [create](_modules_certificates_.certificates.md#create)
* [delete](_modules_certificates_.certificates.md#delete)
* [getAll](_modules_certificates_.certificates.md#getall)
* [getById](_modules_certificates_.certificates.md#getbyid)

## Constructors

### constructor

\+ **new Certificates**(`pageSize`: number, `requestHelper`: [RequestHelper](_request_helper_.requesthelper.md)): [Certificates](_modules_certificates_.certificates.md)

*Overrides [BaseModule](_modules_base_module_.basemodule.md).[constructor](_modules_base_module_.basemodule.md#constructor)*

*Defined in [modules/certificates.ts:11](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/certificates.ts#L11)*

#### Parameters:

Name | Type |
------ | ------ |
`pageSize` | number |
`requestHelper` | [RequestHelper](_request_helper_.requesthelper.md) |

**Returns:** [Certificates](_modules_certificates_.certificates.md)

## Methods

### create

▸ **create**(`options`: CertificatesCreateRequest): Promise<any\>

*Defined in [modules/certificates.ts:43](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/certificates.ts#L43)*

Create a new Certificate

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`options` | CertificatesCreateRequest | the options for the Certificate |

**Returns:** Promise<any\>

Promise

___

### delete

▸ **delete**(`certificateId`: string): Promise<any\>

*Defined in [modules/certificates.ts:67](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/certificates.ts#L67)*

Delete a Certificate

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`certificateId` | string | the identifier of the Certificate |

**Returns:** Promise<any\>

Promise

___

### getAll

▸ **getAll**(`tagName`: string, `includeAll?`: boolean, `page?`: number, `pageSize?`: number): Promise<any\>

*Defined in [modules/certificates.ts:25](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/certificates.ts#L25)*

Get all Certificates

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

▸ **getById**(`certificateId`: string): Promise<any\>

*Defined in [modules/certificates.ts:56](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/certificates.ts#L56)*

Get a Certificate

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`certificateId` | string | the identifier of the Certificate |

**Returns:** Promise<any\>

Promise
