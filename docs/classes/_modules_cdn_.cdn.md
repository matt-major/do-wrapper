**[do-wrapper](../README.md)**

> [Globals](../globals.md) / ["modules/cdn"](../modules/_modules_cdn_.md) / CDN

# Class: CDN

## Hierarchy

* [BaseModule](_modules_base_module_.basemodule.md)

  ↳ **CDN**

## Index

### Constructors

* [constructor](_modules_cdn_.cdn.md#constructor)

### Methods

* [createEndpoint](_modules_cdn_.cdn.md#createendpoint)
* [deleteEndpoint](_modules_cdn_.cdn.md#deleteendpoint)
* [getAllEndpoints](_modules_cdn_.cdn.md#getallendpoints)
* [getEndpointById](_modules_cdn_.cdn.md#getendpointbyid)
* [purgeEndpointCache](_modules_cdn_.cdn.md#purgeendpointcache)
* [updateEndpointTtl](_modules_cdn_.cdn.md#updateendpointttl)

## Constructors

### constructor

\+ **new CDN**(`pageSize`: number, `requestHelper`: [RequestHelper](_request_helper_.requesthelper.md)): [CDN](_modules_cdn_.cdn.md)

*Overrides [BaseModule](_modules_base_module_.basemodule.md).[constructor](_modules_base_module_.basemodule.md#constructor)*

*Defined in [modules/cdn.ts:6](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/cdn.ts#L6)*

#### Parameters:

Name | Type |
------ | ------ |
`pageSize` | number |
`requestHelper` | [RequestHelper](_request_helper_.requesthelper.md) |

**Returns:** [CDN](_modules_cdn_.cdn.md)

## Methods

### createEndpoint

▸ **createEndpoint**(`origin`: string, `ttl`: number): Promise<any\>

*Defined in [modules/cdn.ts:52](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/cdn.ts#L52)*

Create a new CDN Endpoint

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`origin` | string | The origin server address (FQDN) which provides the content for the CDN |
`ttl` | number | The amount of time (seconds) the content is cached by the CDN's edge servers. Defaults to 3600 (one hour) |

**Returns:** Promise<any\>

Promise

___

### deleteEndpoint

▸ **deleteEndpoint**(`endpointId`: string): Promise<any\>

*Defined in [modules/cdn.ts:85](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/cdn.ts#L85)*

Delete an existing CDN Endpoint

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`endpointId` | string | the identifier of the CDN Endpoint you wish to update  |

**Returns:** Promise<any\>

___

### getAllEndpoints

▸ **getAllEndpoints**(`tagName`: string, `includeAll?`: boolean, `page?`: number, `pageSize?`: number): Promise<any\>

*Defined in [modules/cdn.ts:20](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/cdn.ts#L20)*

Get all CDN Endpoints

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`tagName` | string | - | filter to only return CDN Endpoints with a given tag |
`includeAll` | boolean | false | - |
`page` | number | 1 | - |
`pageSize` | number | this.pageSize | - |

**Returns:** Promise<any\>

Promise

___

### getEndpointById

▸ **getEndpointById**(`endpointId`: string): Promise<any\>

*Defined in [modules/cdn.ts:39](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/cdn.ts#L39)*

Get a CDN Endpoint via its Id

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`endpointId` | string | the identifier of the endpoint to retrieve |

**Returns:** Promise<any\>

Promise

___

### purgeEndpointCache

▸ **purgeEndpointCache**(`endpointId`: string, `fileNames`: string[]): Promise<any\>

*Defined in [modules/cdn.ts:99](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/cdn.ts#L99)*

Purge cached content from an existing CDN Endpoint

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`endpointId` | string | the identifier of the CDN Endpoint to purge the cache on |
`fileNames` | string[] | an array of path strings to clear purge from the cache |

**Returns:** Promise<any\>

Promise

___

### updateEndpointTtl

▸ **updateEndpointTtl**(`endpointId`: string, `ttl`: number): Promise<any\>

*Defined in [modules/cdn.ts:70](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/cdn.ts#L70)*

Update the TTL of an existing CDN Endpoint

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`endpointId` | string | the identifier of the CDN Endpoint you wish to update |
`ttl` | number | the amount of time (seconds) the content is cached by the CDN's edge servers |

**Returns:** Promise<any\>

Promise
