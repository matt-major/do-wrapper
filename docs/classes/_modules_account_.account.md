**[do-wrapper](../README.md)**

> [Globals](../globals.md) / ["modules/account"](../modules/_modules_account_.md) / Account

# Class: Account

## Hierarchy

* [BaseModule](_modules_base_module_.basemodule.md)

  ↳ **Account**

## Index

### Constructors

* [constructor](_modules_account_.account.md#constructor)

### Methods

* [get](_modules_account_.account.md#get)

## Constructors

### constructor

\+ **new Account**(`pageSize`: number, `requestHelper`: [RequestHelper](_request_helper_.requesthelper.md)): [Account](_modules_account_.account.md)

*Overrides [BaseModule](_modules_base_module_.basemodule.md).[constructor](_modules_base_module_.basemodule.md#constructor)*

*Defined in [modules/account.ts:7](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/account.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`pageSize` | number |
`requestHelper` | [RequestHelper](_request_helper_.requesthelper.md) |

**Returns:** [Account](_modules_account_.account.md)

## Methods

### get

▸ **get**(): Promise<any\>

*Defined in [modules/account.ts:17](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/account.ts#L17)*

Get the account information for the token

**Returns:** Promise<any\>

Promise of the request
