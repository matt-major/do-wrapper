**[do-wrapper](../README.md)**

> [Globals](../globals.md) / ["modules/floating-ip"](../modules/_modules_floating_ip_.md) / FloatingIPs

# Class: FloatingIPs

## Hierarchy

* [BaseModule](_modules_base_module_.basemodule.md)

  ↳ **FloatingIPs**

## Index

### Constructors

* [constructor](_modules_floating_ip_.floatingips.md#constructor)

### Methods

* [assignDroplet](_modules_floating_ip_.floatingips.md#assigndroplet)
* [assignRegion](_modules_floating_ip_.floatingips.md#assignregion)
* [deleteByIp](_modules_floating_ip_.floatingips.md#deletebyip)
* [getAction](_modules_floating_ip_.floatingips.md#getaction)
* [getAll](_modules_floating_ip_.floatingips.md#getall)
* [getAllActions](_modules_floating_ip_.floatingips.md#getallactions)
* [getByIp](_modules_floating_ip_.floatingips.md#getbyip)
* [requestAction](_modules_floating_ip_.floatingips.md#requestaction)

## Constructors

### constructor

\+ **new FloatingIPs**(`pageSize`: number, `requestHelper`: [RequestHelper](_request_helper_.requesthelper.md)): [FloatingIPs](_modules_floating_ip_.floatingips.md)

*Overrides [BaseModule](_modules_base_module_.basemodule.md).[constructor](_modules_base_module_.basemodule.md#constructor)*

*Defined in [modules/floating-ip.ts:10](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/floating-ip.ts#L10)*

#### Parameters:

Name | Type |
------ | ------ |
`pageSize` | number |
`requestHelper` | [RequestHelper](_request_helper_.requesthelper.md) |

**Returns:** [FloatingIPs](_modules_floating_ip_.floatingips.md)

## Methods

### assignDroplet

▸ **assignDroplet**(`dropletId`: string): Promise<any\>

*Defined in [modules/floating-ip.ts:42](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/floating-ip.ts#L42)*

Assign a Droplet

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`dropletId` | string | the identifier of the Droplet |

**Returns:** Promise<any\>

Promise

___

### assignRegion

▸ **assignRegion**(`region`: string): Promise<any\>

*Defined in [modules/floating-ip.ts:57](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/floating-ip.ts#L57)*

Assign a Region

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`region` | string | the region to assign |

**Returns:** Promise<any\>

Promise

___

### deleteByIp

▸ **deleteByIp**(`ipAddress`: string): Promise<any\>

*Defined in [modules/floating-ip.ts:83](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/floating-ip.ts#L83)*

Delete a Floating IP

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`ipAddress` | string | the Floating IP to delete |

**Returns:** Promise<any\>

Promise

___

### getAction

▸ **getAction**(`ipAddress`: string, `actionId`: string): Promise<any\>

*Defined in [modules/floating-ip.ts:110](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/floating-ip.ts#L110)*

Retrieve an action from a Floating IP

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`ipAddress` | string | the Floating IP to retrieve |
`actionId` | string | the action to retrieve |

**Returns:** Promise<any\>

Promise

___

### getAll

▸ **getAll**(`tagName`: string, `includeAll?`: boolean, `page?`: number, `pageSize?`: number): Promise<any\>

*Defined in [modules/floating-ip.ts:24](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/floating-ip.ts#L24)*

Get all Floating IPs

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

### getAllActions

▸ **getAllActions**(`ipAddress`: string, `tagName`: string, `includeAll?`: boolean, `page?`: number, `pageSize?`: number): Promise<any\>

*Defined in [modules/floating-ip.ts:125](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/floating-ip.ts#L125)*

Get all Actions for a Floating IP

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`ipAddress` | string | - | the Floating IP to retrieve actions for |
`tagName` | string | - | - |
`includeAll` | boolean | false | - |
`page` | number | 1 | - |
`pageSize` | number | this.pageSize | - |

**Returns:** Promise<any\>

Promise

___

### getByIp

▸ **getByIp**(`ipAddress`: string): Promise<any\>

*Defined in [modules/floating-ip.ts:72](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/floating-ip.ts#L72)*

Get a Floating IP

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`ipAddress` | string | the Floating IP to retrieve |

**Returns:** Promise<any\>

Promise

___

### requestAction

▸ **requestAction**(`ipAddress`: string, `action`: string): Promise<any\>

*Defined in [modules/floating-ip.ts:96](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/floating-ip.ts#L96)*

Request an action on a Floating IP

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`ipAddress` | string | the Floating IP to request against |
`action` | string | the action to request |

**Returns:** Promise<any\>

Promise
