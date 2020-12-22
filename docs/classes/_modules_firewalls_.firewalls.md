**[do-wrapper](../README.md)**

> [Globals](../globals.md) / ["modules/firewalls"](../modules/_modules_firewalls_.md) / Firewalls

# Class: Firewalls

## Hierarchy

* [BaseModule](_modules_base_module_.basemodule.md)

  ↳ **Firewalls**

## Index

### Constructors

* [constructor](_modules_firewalls_.firewalls.md#constructor)

### Methods

* [addDroplets](_modules_firewalls_.firewalls.md#adddroplets)
* [addRules](_modules_firewalls_.firewalls.md#addrules)
* [addTags](_modules_firewalls_.firewalls.md#addtags)
* [create](_modules_firewalls_.firewalls.md#create)
* [delete](_modules_firewalls_.firewalls.md#delete)
* [getAll](_modules_firewalls_.firewalls.md#getall)
* [getById](_modules_firewalls_.firewalls.md#getbyid)
* [removeDroplets](_modules_firewalls_.firewalls.md#removedroplets)
* [removeRules](_modules_firewalls_.firewalls.md#removerules)
* [removeTags](_modules_firewalls_.firewalls.md#removetags)
* [update](_modules_firewalls_.firewalls.md#update)

## Constructors

### constructor

\+ **new Firewalls**(`pageSize`: number, `requestHelper`: [RequestHelper](_request_helper_.requesthelper.md)): [Firewalls](_modules_firewalls_.firewalls.md)

*Overrides [BaseModule](_modules_base_module_.basemodule.md).[constructor](_modules_base_module_.basemodule.md#constructor)*

*Defined in [modules/firewalls.ts:12](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/firewalls.ts#L12)*

#### Parameters:

Name | Type |
------ | ------ |
`pageSize` | number |
`requestHelper` | [RequestHelper](_request_helper_.requesthelper.md) |

**Returns:** [Firewalls](_modules_firewalls_.firewalls.md)

## Methods

### addDroplets

▸ **addDroplets**(`firewallId`: string, `dropletIds`: string[]): Promise<any\>

*Defined in [modules/firewalls.ts:84](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/firewalls.ts#L84)*

Add Droplets to an existing Firewall

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`firewallId` | string | the identifier of the Firewall to add the Droplets to |
`dropletIds` | string[] | the identifiers of the Droplets |

**Returns:** Promise<any\>

Promise

___

### addRules

▸ **addRules**(`firewallId`: string, `options`: any): Promise<any\>

*Defined in [modules/firewalls.ts:148](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/firewalls.ts#L148)*

Add Rules to an existing Firewall

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`firewallId` | string | the identifier of the Firewall to add the Rules to |
`options` | any | the Rules to add |

**Returns:** Promise<any\>

Promise

___

### addTags

▸ **addTags**(`firewallId`: string, `tags`: string[]): Promise<any\>

*Defined in [modules/firewalls.ts:116](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/firewalls.ts#L116)*

Add Tags to an existing Firewall

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`firewallId` | string | the identifier of the Firewall to add the Tags to |
`tags` | string[] | the Tags to add |

**Returns:** Promise<any\>

Promise

___

### create

▸ **create**(`options`: FirewallChangeRequest): Promise<any\>

*Defined in [modules/firewalls.ts:23](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/firewalls.ts#L23)*

Create a new Firewall

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`options` | FirewallChangeRequest | the options for the new Firewall |

**Returns:** Promise<any\>

Promise

___

### delete

▸ **delete**(`firewallId`: string): Promise<any\>

*Defined in [modules/firewalls.ts:36](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/firewalls.ts#L36)*

Delete a Firewall by its identifier

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`firewallId` | string | the identifier of the Firewall to delete |

**Returns:** Promise<any\>

Promise

___

### getAll

▸ **getAll**(): Promise<any\>

*Defined in [modules/firewalls.ts:58](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/firewalls.ts#L58)*

Retrieve all firewalls

**Returns:** Promise<any\>

Promise

___

### getById

▸ **getById**(`firewallId`: string): Promise<any\>

*Defined in [modules/firewalls.ts:48](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/firewalls.ts#L48)*

Retrieve a Firewall using its identifier

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`firewallId` | string | the identifier of the Firewall to retrieve |

**Returns:** Promise<any\>

Promise

___

### removeDroplets

▸ **removeDroplets**(`firewallId`: string, `dropletIds`: string[]): Promise<any\>

*Defined in [modules/firewalls.ts:100](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/firewalls.ts#L100)*

Remove Droplets from an existing Firewall

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`firewallId` | string | the identifier of the Firewall to remove the Droplets from |
`dropletIds` | string[] | the identifiers of the Droplets |

**Returns:** Promise<any\>

Promise

___

### removeRules

▸ **removeRules**(`firewallId`: string, `options`: any): Promise<any\>

*Defined in [modules/firewalls.ts:162](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/firewalls.ts#L162)*

Remove Rules from an existing Firewall

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`firewallId` | string | the identifier of the Firewall to remove the Rules from |
`options` | any | the Rules to remove |

**Returns:** Promise<any\>

Promise

___

### removeTags

▸ **removeTags**(`firewallId`: string, `tags`: string[]): Promise<any\>

*Defined in [modules/firewalls.ts:132](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/firewalls.ts#L132)*

Remove Tags from an existing Firewall

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`firewallId` | string | the identifier of the Firewall to remove the Tags from |
`tags` | string[] | the Tags to remove |

**Returns:** Promise<any\>

Promise

___

### update

▸ **update**(`firewallId`: string, `options`: FirewallChangeRequest): Promise<any\>

*Defined in [modules/firewalls.ts:70](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/firewalls.ts#L70)*

Update a Firewall using its identifier

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`firewallId` | string | the identifier of the Firewall to update |
`options` | FirewallChangeRequest | the Firewall details |

**Returns:** Promise<any\>

Promise
