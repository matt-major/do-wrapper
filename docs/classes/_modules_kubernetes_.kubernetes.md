**[do-wrapper](../README.md)**

> [Globals](../globals.md) / ["modules/kubernetes"](../modules/_modules_kubernetes_.md) / Kubernetes

# Class: Kubernetes

## Hierarchy

* [BaseModule](_modules_base_module_.basemodule.md)

  ↳ **Kubernetes**

## Index

### Constructors

* [constructor](_modules_kubernetes_.kubernetes.md#constructor)

### Methods

* [addNodePool](_modules_kubernetes_.kubernetes.md#addnodepool)
* [create](_modules_kubernetes_.kubernetes.md#create)
* [delete](_modules_kubernetes_.kubernetes.md#delete)
* [deleteNodePool](_modules_kubernetes_.kubernetes.md#deletenodepool)
* [getAvailability](_modules_kubernetes_.kubernetes.md#getavailability)
* [getById](_modules_kubernetes_.kubernetes.md#getbyid)
* [getClusters](_modules_kubernetes_.kubernetes.md#getclusters)
* [getKubeconfig](_modules_kubernetes_.kubernetes.md#getkubeconfig)
* [getNodePoolById](_modules_kubernetes_.kubernetes.md#getnodepoolbyid)
* [getNodePools](_modules_kubernetes_.kubernetes.md#getnodepools)
* [recycleNodePool](_modules_kubernetes_.kubernetes.md#recyclenodepool)
* [updateNodePool](_modules_kubernetes_.kubernetes.md#updatenodepool)

## Constructors

### constructor

\+ **new Kubernetes**(`pageSize`: number, `requestHelper`: [RequestHelper](_request_helper_.requesthelper.md)): [Kubernetes](_modules_kubernetes_.kubernetes.md)

*Overrides [BaseModule](_modules_base_module_.basemodule.md).[constructor](_modules_base_module_.basemodule.md#constructor)*

*Defined in [modules/kubernetes.ts:11](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/kubernetes.ts#L11)*

#### Parameters:

Name | Type |
------ | ------ |
`pageSize` | number |
`requestHelper` | [RequestHelper](_request_helper_.requesthelper.md) |

**Returns:** [Kubernetes](_modules_kubernetes_.kubernetes.md)

## Methods

### addNodePool

▸ **addNodePool**(`clusterId`: string, `nodePool`: ClusterNodePool): Promise<any\>

*Defined in [modules/kubernetes.ts:131](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/kubernetes.ts#L131)*

Add a Node Pool to a Kubernetes Cluster

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`clusterId` | string | the identifier of the Cluster |
`nodePool` | ClusterNodePool | the Node Pool configuration options |

**Returns:** Promise<any\>

Promise

___

### create

▸ **create**(`options`: NewClusterRequest): Promise<any\>

*Defined in [modules/kubernetes.ts:51](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/kubernetes.ts#L51)*

Create a new Kubernetes Cluster

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`options` | NewClusterRequest | the options for the new Kubernetes Cluster |

**Returns:** Promise<any\>

Promise

___

### delete

▸ **delete**(`clusterId`: string): Promise<any\>

*Defined in [modules/kubernetes.ts:86](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/kubernetes.ts#L86)*

Delete a Kubernetes Cluster by its identifier

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`clusterId` | string | the identifier of the Cluster |

**Returns:** Promise<any\>

Promise

___

### deleteNodePool

▸ **deleteNodePool**(`clusterId`: string, `nodePoolId`: string): Promise<any\>

*Defined in [modules/kubernetes.ts:160](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/kubernetes.ts#L160)*

Delete a Node Pool for a Kubernetes Cluster

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`clusterId` | string | the identifier of the Cluster |
`nodePoolId` | string | the identifier of the Node Pool |

**Returns:** Promise<any\>

Promise

___

### getAvailability

▸ **getAvailability**(): Promise<any\>

*Defined in [modules/kubernetes.ts:21](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/kubernetes.ts#L21)*

Get the Kubernetes Feature Availability

**Returns:** Promise<any\>

Promise

___

### getById

▸ **getById**(`clusterId`: string): Promise<any\>

*Defined in [modules/kubernetes.ts:64](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/kubernetes.ts#L64)*

Get a Kubernetes Cluster by its identifier

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`clusterId` | string | the identifier of the Cluster |

**Returns:** Promise<any\>

Promise

___

### getClusters

▸ **getClusters**(`includeAll?`: boolean, `page?`: number, `pageSize?`: number): Promise<any\>

*Defined in [modules/kubernetes.ts:34](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/kubernetes.ts#L34)*

Get all Kubernetes Clusters

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`includeAll` | boolean | false |
`page` | number | 1 |
`pageSize` | number | this.pageSize |

**Returns:** Promise<any\>

Promise

___

### getKubeconfig

▸ **getKubeconfig**(`clusterId`: string): Promise<any\>

*Defined in [modules/kubernetes.ts:75](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/kubernetes.ts#L75)*

Get the kubeconfig for a  Kubernetes Cluster

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`clusterId` | string | the identifier of the Cluster |

**Returns:** Promise<any\>

Promise

___

### getNodePoolById

▸ **getNodePoolById**(`clusterId`: string, `nodePoolId`: string): Promise<any\>

*Defined in [modules/kubernetes.ts:119](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/kubernetes.ts#L119)*

Get a specific Node Pool for a Kubernetes Cluster

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`clusterId` | string | the identifier of the Cluster |
`nodePoolId` | string | the identifier of the Node Pool |

**Returns:** Promise<any\>

Promise

___

### getNodePools

▸ **getNodePools**(`clusterId`: string, `includeAll?`: boolean, `page?`: number, `pageSize?`: number): Promise<any\>

*Defined in [modules/kubernetes.ts:101](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/kubernetes.ts#L101)*

Get the Node Pools for a Kubernetes Cluster

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`clusterId` | string | - | the Cluster identifier |
`includeAll` | boolean | false | - |
`page` | number | 1 | - |
`pageSize` | number | this.pageSize | - |

**Returns:** Promise<any\>

Promise

___

### recycleNodePool

▸ **recycleNodePool**(`clusterId`: string, `nodePoolId`: string): Promise<any\>

*Defined in [modules/kubernetes.ts:173](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/kubernetes.ts#L173)*

Recycle a Node Pool on a Cluster

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`clusterId` | string | the identifier of the Cluster |
`nodePoolId` | string | the identifier of the Node Pool |

**Returns:** Promise<any\>

Promise

___

### updateNodePool

▸ **updateNodePool**(`clusterId`: string, `nodePoolId`: string, `nodePoolOptions`: ClusterNodePoolUpdateOptions): Promise<any\>

*Defined in [modules/kubernetes.ts:146](https://github.com/matt-major/do-wrapper/blob/ace756c/src/modules/kubernetes.ts#L146)*

Update a specific Node Pool for a Kubernetes Cluster

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`clusterId` | string | the identifier of the Cluster |
`nodePoolId` | string | the identifier of the Node Pool |
`nodePoolOptions` | ClusterNodePoolUpdateOptions | the Node Pool options |

**Returns:** Promise<any\>

Promise
