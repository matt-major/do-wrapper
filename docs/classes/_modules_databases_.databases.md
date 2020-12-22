**[do-wrapper](../README.md)**

> [Globals](../globals.md) / ["modules/databases"](../modules/_modules_databases_.md) / Databases

# Class: Databases

## Hierarchy

* [BaseModule](_modules_base_module_.basemodule.md)

  ↳ **Databases**

## Index

### Constructors

* [constructor](_modules_databases_.databases.md#constructor)

### Methods

* [addPool](_modules_databases_.databases.md#addpool)
* [createCluster](_modules_databases_.databases.md#createcluster)
* [createUser](_modules_databases_.databases.md#createuser)
* [deletePool](_modules_databases_.databases.md#deletepool)
* [deleteUser](_modules_databases_.databases.md#deleteuser)
* [getAllClusters](_modules_databases_.databases.md#getallclusters)
* [getAllPools](_modules_databases_.databases.md#getallpools)
* [getAllUsers](_modules_databases_.databases.md#getallusers)
* [getClusterById](_modules_databases_.databases.md#getclusterbyid)
* [getPool](_modules_databases_.databases.md#getpool)
* [getUser](_modules_databases_.databases.md#getuser)
* [resizeCluster](_modules_databases_.databases.md#resizecluster)

## Constructors

### constructor

\+ **new Databases**(`pageSize`: number, `requestHelper`: [RequestHelper](_request_helper_.requesthelper.md)): [Databases](_modules_databases_.databases.md)

*Overrides [BaseModule](_modules_base_module_.basemodule.md).[constructor](_modules_base_module_.basemodule.md#constructor)*

*Defined in [modules/databases.ts:7](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/databases.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`pageSize` | number |
`requestHelper` | [RequestHelper](_request_helper_.requesthelper.md) |

**Returns:** [Databases](_modules_databases_.databases.md)

## Methods

### addPool

▸ **addPool**(`clusterId`: string, `poolOptions`: AddPoolRequestOptions): Promise<any\>

*Defined in [modules/databases.ts:126](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/databases.ts#L126)*

Get all Pools for a Cluster

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`clusterId` | string | the identifier of the Cluster |
`poolOptions` | AddPoolRequestOptions | the Pool options |

**Returns:** Promise<any\>

Promise

___

### createCluster

▸ **createCluster**(`clusterOptions`: DatabaseCreateClusterRequest): Promise<any\>

*Defined in [modules/databases.ts:39](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/databases.ts#L39)*

Create a new Database Cluster

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`clusterOptions` | DatabaseCreateClusterRequest | the options for the Database Cluster |

**Returns:** Promise<any\>

Promise

___

### createUser

▸ **createUser**(`clusterId`: string, `username`: string): Promise<any\>

*Defined in [modules/databases.ts:77](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/databases.ts#L77)*

Create a new User on an existing Database Cluster

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`clusterId` | string | the identifier of the Database Cluster |
`username` | string | the name of the User to create |

**Returns:** Promise<any\>

Promise

___

### deletePool

▸ **deletePool**(`clusterId`: string, `poolName`: string): Promise<any\>

*Defined in [modules/databases.ts:163](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/databases.ts#L163)*

Delete a Pool from an existing Cluster

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`clusterId` | string | the identifier of the Cluster |
`poolName` | string | the name of the Pool |

**Returns:** Promise<any\>

Promise

___

### deleteUser

▸ **deleteUser**(`clusterId`: string, `username`: string): Promise<any\>

*Defined in [modules/databases.ts:92](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/databases.ts#L92)*

Delete a User from a Database Cluster

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`clusterId` | string | the identifier of the Database Cluster |
`username` | string | the username of the User to delete  |

**Returns:** Promise<any\>

___

### getAllClusters

▸ **getAllClusters**(`tagName`: string, `includeAll?`: boolean, `page?`: number, `pageSize?`: number): Promise<any\>

*Defined in [modules/databases.ts:21](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/databases.ts#L21)*

Get all Database Clusters

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

### getAllPools

▸ **getAllPools**(`clusterId`: string): Promise<any\>

*Defined in [modules/databases.ts:139](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/databases.ts#L139)*

Get all Pools for a Cluster

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`clusterId` | string | the identifier of the Cluster |

**Returns:** Promise<any\>

Promise

___

### getAllUsers

▸ **getAllUsers**(`clusterId`: string): Promise<any\>

*Defined in [modules/databases.ts:114](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/databases.ts#L114)*

Retrieve a list of all the Users for a given Database Cluster

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`clusterId` | string | the identifier of the Database Cluster  |

**Returns:** Promise<any\>

___

### getClusterById

▸ **getClusterById**(`clusterId`: string): Promise<any\>

*Defined in [modules/databases.ts:52](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/databases.ts#L52)*

Retrieve a single Database Cluster using its identifier

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`clusterId` | string | the identifier of the Database Cluster to retrieve |

**Returns:** Promise<any\>

Promise

___

### getPool

▸ **getPool**(`clusterId`: string, `poolName`: string): Promise<any\>

*Defined in [modules/databases.ts:151](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/databases.ts#L151)*

Get a Pool for an existing Cluster

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`clusterId` | string | the identifier of the Cluster |
`poolName` | string | the name of the Pool |

**Returns:** Promise<any\>

Promise

___

### getUser

▸ **getUser**(`clusterId`: string, `username`: string): Promise<any\>

*Defined in [modules/databases.ts:104](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/databases.ts#L104)*

Retrieve a single User for a Database Cluster

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`clusterId` | string | the identifier of the Database Cluster |
`username` | string | the username of the User to retrieve  |

**Returns:** Promise<any\>

___

### resizeCluster

▸ **resizeCluster**(`clusterId`: string, `configuration`: DatabaseResizeClusterRequest): Promise<any\>

*Defined in [modules/databases.ts:63](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/databases.ts#L63)*

Resize an existing Database Cluster

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`clusterId` | string | the identifier of the Database Cluster to resize |
`configuration` | DatabaseResizeClusterRequest | the resizing configuration  |

**Returns:** Promise<any\>
