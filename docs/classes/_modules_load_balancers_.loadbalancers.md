**[do-wrapper](../README.md)**

> [Globals](../globals.md) / ["modules/load-balancers"](../modules/_modules_load_balancers_.md) / LoadBalancers

# Class: LoadBalancers

## Hierarchy

* [BaseModule](_modules_base_module_.basemodule.md)

  ↳ **LoadBalancers**

## Index

### Constructors

* [constructor](_modules_load_balancers_.loadbalancers.md#constructor)

### Methods

* [addDroplets](_modules_load_balancers_.loadbalancers.md#adddroplets)
* [addForwardingRules](_modules_load_balancers_.loadbalancers.md#addforwardingrules)
* [create](_modules_load_balancers_.loadbalancers.md#create)
* [delete](_modules_load_balancers_.loadbalancers.md#delete)
* [getAll](_modules_load_balancers_.loadbalancers.md#getall)
* [getById](_modules_load_balancers_.loadbalancers.md#getbyid)
* [removeDroplets](_modules_load_balancers_.loadbalancers.md#removedroplets)
* [removeForwardingRules](_modules_load_balancers_.loadbalancers.md#removeforwardingrules)
* [update](_modules_load_balancers_.loadbalancers.md#update)

## Constructors

### constructor

\+ **new LoadBalancers**(`pageSize`: number, `requestHelper`: [RequestHelper](_request_helper_.requesthelper.md)): [LoadBalancers](_modules_load_balancers_.loadbalancers.md)

*Overrides [BaseModule](_modules_base_module_.basemodule.md).[constructor](_modules_base_module_.basemodule.md#constructor)*

*Defined in [modules/load-balancers.ts:11](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/load-balancers.ts#L11)*

#### Parameters:

Name | Type |
------ | ------ |
`pageSize` | number |
`requestHelper` | [RequestHelper](_request_helper_.requesthelper.md) |

**Returns:** [LoadBalancers](_modules_load_balancers_.loadbalancers.md)

## Methods

### addDroplets

▸ **addDroplets**(`loadBalancerId`: string, `dropletIds`: string[]): Promise<any\>

*Defined in [modules/load-balancers.ts:83](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/load-balancers.ts#L83)*

Add Droplets to a Load Balancer

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`loadBalancerId` | string | the identifier of the Load Balancer |
`dropletIds` | string[] | the identifiers of the Droplets to add |

**Returns:** Promise<any\>

Promise

___

### addForwardingRules

▸ **addForwardingRules**(`loadBalancerId`: string, `rules`: any[]): Promise<any\>

*Defined in [modules/load-balancers.ts:115](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/load-balancers.ts#L115)*

Add Forwarding Rules to a Load Balancer

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`loadBalancerId` | string | the identifier of the Load Balancer |
`rules` | any[] | the Forwarding Rules to add |

**Returns:** Promise<any\>

Promise

___

### create

▸ **create**(`options`: LoadBalancerCreationOptions): Promise<any\>

*Defined in [modules/load-balancers.ts:22](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/load-balancers.ts#L22)*

Create a new Load Balancer

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`options` | LoadBalancerCreationOptions | the options for the Load Balancer |

**Returns:** Promise<any\>

Promise

___

### delete

▸ **delete**(`loadBalancerId`: string): Promise<any\>

*Defined in [modules/load-balancers.ts:70](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/load-balancers.ts#L70)*

Delete a Load Balancer

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`loadBalancerId` | string | the identifier of the Load Balancer |

**Returns:** Promise<any\>

Promise

___

### getAll

▸ **getAll**(): Promise<any\>

*Defined in [modules/load-balancers.ts:34](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/load-balancers.ts#L34)*

Get all Load Balancers

**Returns:** Promise<any\>

Promise

___

### getById

▸ **getById**(`loadBalancerId`: string): Promise<any\>

*Defined in [modules/load-balancers.ts:45](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/load-balancers.ts#L45)*

Get a Load Balancer using its identifier

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`loadBalancerId` | string | the identifier of the Load Balancer |

**Returns:** Promise<any\>

Promise

___

### removeDroplets

▸ **removeDroplets**(`loadBalancerId`: string, `dropletIds`: string[]): Promise<any\>

*Defined in [modules/load-balancers.ts:99](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/load-balancers.ts#L99)*

Remove Droplets from a Load Balancer

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`loadBalancerId` | string | the identifier of the Load Balancer |
`dropletIds` | string[] | the identifiers of the Droplets to remove |

**Returns:** Promise<any\>

Promise

___

### removeForwardingRules

▸ **removeForwardingRules**(`loadBalancerId`: string, `rules`: any[]): Promise<any\>

*Defined in [modules/load-balancers.ts:131](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/load-balancers.ts#L131)*

Remove Forwarding Rules from a Load Balancer

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`loadBalancerId` | string | the identifier of the Load Balancer |
`rules` | any[] | the Forwarding Rules to remove |

**Returns:** Promise<any\>

Promise

___

### update

▸ **update**(`loadBalancerId`: string, `options`: any): Promise<any\>

*Defined in [modules/load-balancers.ts:57](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/load-balancers.ts#L57)*

Update a Load Balancer

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`loadBalancerId` | string | the identifier of the Load Balancer |
`options` | any | the options to update the Load Balancer |

**Returns:** Promise<any\>

Promise
