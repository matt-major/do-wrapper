## Functions

<dl>
<dt><a href="#account">account([callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get Account Information
Info <a href="https://developers.digitalocean.com/documentation/v2/#account">account</a></p>
</dd>
<dt><a href="#accountGetActions">accountGetActions(query, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get Account Actions</p>
</dd>
<dt><a href="#accountGetAction">accountGetAction(actionId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get Action Information for Account
Info: <a href="https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-action">retrieve-an-existing-action</a></p>
</dd>
<dt><a href="#accountGetKeys">accountGetKeys(query, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>List all SSH Keys
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-all-keys">list-all-keys</a></p>
</dd>
<dt><a href="#accountAddKey">accountAddKey(configuration, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Add a new SSH Key
Info: <a href="https://developers.digitalocean.com/documentation/v2/#create-a-new-key">create-a-new-key</a></p>
</dd>
<dt><a href="#accountGetKeyById">accountGetKeyById(keyId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get an SSH Key via its Id
Info: <a href="https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-key">retrieve-an-existing-key</a></p>
</dd>
<dt><a href="#accountGetKeyByFingerprint">accountGetKeyByFingerprint(fingerprint, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get an SSH Key via its Fingerprint
Info: <a href="https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-key">retrieve-an-existing-key</a></p>
</dd>
<dt><a href="#accountRenameKey">accountRenameKey(keyIdentity, keyName, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Rename a SSH Key
Info: <a href="https://developers.digitalocean.com/documentation/v2/#update-a-key">update-a-key</a></p>
</dd>
<dt><a href="#accountDeleteKey">accountDeleteKey(keyIdentity, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Delete a SSH Key
Info: <a href="https://developers.digitalocean.com/documentation/v2/#destroy-a-key">destroy-a-key</a></p>
</dd>
<dt><a href="#dropletsGetAll">dropletsGetAll(query, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get a list of Droplets
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-all-droplets">list-all-droplets</a></p>
</dd>
<dt><a href="#dropletsGetKernels">dropletsGetKernels(dropletId, query, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get a list of Kernels available for a Droplet
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-all-available-kernels-for-a-droplet">list-all-available-kernels-for-a-droplet</a></p>
</dd>
<dt><a href="#dropletsGetSnapshots">dropletsGetSnapshots(dropletId, query, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get a list of Snapshots for a Droplet
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-snapshots-for-a-droplet">retrieve-snapshots-for-a-droplet</a></p>
</dd>
<dt><a href="#dropletsGetBackups">dropletsGetBackups(dropletId, query, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get a list of Backups for a Droplet
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-backups-for-a-droplet">list-backups-for-a-droplet</a></p>
</dd>
<dt><a href="#dropletsGetActions">dropletsGetActions(dropletId, query, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get a list of Actions for a Droplet
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-actions-for-a-droplet">list-actions-for-a-droplet</a></p>
</dd>
<dt><a href="#dropletsCreate">dropletsCreate(configuration, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Create a New Droplet
Info: <a href="https://developers.digitalocean.com/documentation/v2/#create-a-new-droplet">create-a-new-droplet</a></p>
</dd>
<dt><a href="#dropletsGetById">dropletsGetById(dropletId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get a Droplet by Id
Info: <a href="https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-droplet-by-id">retrieve-an-existing-droplet-by-id</a></p>
</dd>
<dt><a href="#dropletsDelete">dropletsDelete(dropletId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Delete a Droplet
Info: <a href="https://developers.digitalocean.com/documentation/v2/#delete-a-droplet">delete-a-droplet</a></p>
</dd>
<dt><a href="#dropletsGetNeighbors">dropletsGetNeighbors(dropletId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get a list of Droplet Neighbors
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-neighbors-for-a-droplet">list-neighbors-for-a-droplet</a></p>
</dd>
<dt><a href="#dropletsGetNeighborsReport">dropletsGetNeighborsReport([callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get a report of Droplets sharing the same hardware
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-all-droplet-neighbors">list-all-droplet-neighbors</a></p>
</dd>
<dt><a href="#dropletsGetUpgrades">dropletsGetUpgrades([callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get a list of scheduled Droplet Upgrades
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-droplet-upgrades">list-droplet-upgrades</a></p>
</dd>
<dt><a href="#dropletsRequestAction">dropletsRequestAction(dropletId, action, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Request an Action on a Droplet
Info: <a href="https://developers.digitalocean.com/documentation/v2/#droplet-actions">droplet-actions</a></p>
</dd>
<dt><a href="#dropletsGetAction">dropletsGetAction(dropletId, actionId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get an Action for a Droplet
Info: <a href="https://developers.digitalocean.com/documentation/v2/#retrieve-a-droplet-action">retrieve-a-droplet-action</a></p>
</dd>
<dt><a href="#domainsGetAll">domainsGetAll(query, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get all Domains
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-all-domains">list-all-domains</a></p>
</dd>
<dt><a href="#domainsCreate">domainsCreate(name, ip, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Add a new Domain
Info: <a href="https://developers.digitalocean.com/documentation/v2/#create-a-new-domain">create-a-new-domain</a></p>
</dd>
<dt><a href="#domainsGet">domainsGet(name, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get a Domain
Info: <a href="https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-domain">retrieve-an-existing-domain</a></p>
</dd>
<dt><a href="#domainsDelete">domainsDelete(name, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Delete a Domain
Info: <a href="https://developers.digitalocean.com/documentation/v2/#delete-a-domain">delete-a-domain</a></p>
</dd>
<dt><a href="#domainRecordsGetAll">domainRecordsGetAll(name, query, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get all Domain Records for a Domain
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-all-domain-records">list-all-domain-records</a></p>
</dd>
<dt><a href="#domainRecordsCreate">domainRecordsCreate(name, configuration, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Create a new Domain Record on a Domain
Info: <a href="https://developers.digitalocean.com/documentation/v2/#create-a-new-domain-record">create-a-new-domain-record</a></p>
</dd>
<dt><a href="#domainRecordsGet">domainRecordsGet(name, domainRecordId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get a single Domain Record
Info: <a href="https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-domain-record">retrieve-an-existing-domain-record</a></p>
</dd>
<dt><a href="#domainRecordsUpdate">domainRecordsUpdate(name, domainRecordId, configuration, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Update a Domain Record
Info: <a href="https://developers.digitalocean.com/documentation/v2/#update-a-domain-record">update-a-domain-record</a></p>
</dd>
<dt><a href="#domainRecordsDelete">domainRecordsDelete(name, domainRecordId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Delete a Domain Record
Info: <a href="https://developers.digitalocean.com/documentation/v2/#delete-a-domain-record">delete-a-domain-record</a></p>
</dd>
<dt><a href="#regionsGetAll">regionsGetAll(query, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get all Regions
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-all-regions">list-all-regions</a></p>
</dd>
<dt><a href="#sizesGetAll">sizesGetAll(query, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get all Droplet sizes
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-all-sizes">list-all-sizes</a></p>
</dd>
<dt><a href="#imagesGetAll">imagesGetAll(query, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get all Images
Include type=[distribution,application] or private=true in the query object to limit results.
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-all-images">list-all-images</a></p>
</dd>
<dt><a href="#imagesGetById">imagesGetById(imageId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get an Image using its Id
Info: <a href="https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-by-id">retrieve-an-existing-image-by-id</a></p>
</dd>
<dt><a href="#imagesGetBySlug">imagesGetBySlug(slug, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get an Image using its Slug
Info: <a href="https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-by-slug">retrieve-an-existing-image-by-slug</a></p>
</dd>
<dt><a href="#imagesGetActions">imagesGetActions(imageId, query, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get all Actions for an Image
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-all-actions-for-an-image">list-all-actions-for-an-image</a></p>
</dd>
<dt><a href="#imagesUpdate">imagesUpdate(imageId, name, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Update the name of an Image
Info: <a href="https://developers.digitalocean.com/documentation/v2/#update-an-image">update-an-image</a></p>
</dd>
<dt><a href="#imagesDelete">imagesDelete(imageId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Delete an Image
Info: <a href="https://developers.digitalocean.com/documentation/v2/#delete-an-image">delete-an-image</a></p>
</dd>
<dt><a href="#imagesRequestAction">imagesRequestAction(imageId, action, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Request an Action on an Image
Info: <a href="https://developers.digitalocean.com/documentation/v2/#image-actions">image-actions</a></p>
</dd>
<dt><a href="#imagesGetAction">imagesGetAction(imageId, actionId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get the status of an Action
Info: <a href="https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-action">retrieve-an-existing-image-action</a></p>
</dd>
<dt><a href="#floatingIpsGetAll">floatingIpsGetAll(query, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get all Floating IPs
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-all-floating-ips">list-all-floating-ips</a></p>
</dd>
<dt><a href="#floatingIpsAssignDroplet">floatingIpsAssignDroplet(dropletId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Create and assign a Floating IP to a specific droplet.
Info: <a href="https://developers.digitalocean.com/documentation/v2/#create-a-new-floating-ip-assigned-to-a-droplet">create-a-new-floating-ip-assigned-to-a-droplet</a></p>
</dd>
<dt><a href="#floatingIpsAssignRegion">floatingIpsAssignRegion(region, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Create and assign a Floating IP to a region.
Info: <a href="https://developers.digitalocean.com/documentation/v2/#create-a-new-floating-ip-reserved-to-a-region">create-a-new-floating-ip-assigned-to-a-droplet</a></p>
</dd>
<dt><a href="#floatingIpsGet">floatingIpsGet(ipAddress, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Retrieve an existing Floating IP
Info: <a href="https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-floating-ip">retrieve-an-existing-floating-ip</a></p>
</dd>
<dt><a href="#floatingIpsDelete">floatingIpsDelete(ipAddress, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Delete a Floating IP
Info: <a href="https://developers.digitalocean.com/documentation/v2/#delete-a-floating-ips">delete-a-floating-ips</a></p>
</dd>
<dt><a href="#floatingIpsRequestAction">floatingIpsRequestAction(ipAddress, action, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Request an action on a Floating IP
Info: <a href="https://developers.digitalocean.com/documentation/v2/#floating-ip-actions">floating-ip-actions</a></p>
</dd>
<dt><a href="#floatingIpsGetActions">floatingIpsGetActions(ipAddress, query, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>List all actions for a Floating IP
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-all-actions-for-a-floating-ip">list-all-actions-for-a-floating-ip</a></p>
</dd>
<dt><a href="#floatingIpsGetAction">floatingIpsGetAction(ipAddress, actionId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Retrieve an existing Floating IP action
Info: <a href="https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-floating-ip-action">retrieve-an-existing-floating-ip-action</a></p>
</dd>
<dt><a href="#tagsCreate">tagsCreate(name, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Add a new Tag
Info: <a href="https://developers.digitalocean.com/documentation/v2/tagging-preview/#create-a-new-tag">create-a-new-tag</a></p>
</dd>
<dt><a href="#tagsDelete">tagsDelete(name, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Delete a Tag
Info: <a href="https://developers.digitalocean.com/documentation/v2/tagging-preview/#delete-a-tag">delete-a-tag</a></p>
</dd>
<dt><a href="#tagsGet">tagsGet(name, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get a Tag
Info: <a href="https://developers.digitalocean.com/documentation/v2/tagging-preview/#retrieve-a-tag">retrieve-a-tag</a></p>
</dd>
<dt><a href="#tagsGetAll">tagsGetAll(query, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get all Tags
Info: <a href="https://developers.digitalocean.com/documentation/v2/tagging-preview/#list-all-tags">list-all-tags</a></p>
</dd>
<dt><a href="#tagsAddResources">tagsAddResources(name, configuration, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Tag resources
Info: <a href="https://developers.digitalocean.com/documentation/v2/tagging-preview/#tag-a-resource">tag-a-resource</a></p>
</dd>
<dt><a href="#tagsDeleteResource">tagsDeleteResource(name, configuration, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Untag a resource
Info: <a href="https://developers.digitalocean.com/documentation/v2/tagging-preview/#untag-a-resource">untag-a-resource</a></p>
</dd>
<dt><a href="#tagsGetDroplets">tagsGetDroplets(name, query, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get Droplets by Tag</p>
<p>Info: <a href="https://developers.digitalocean.com/documentation/v2/tagging-preview/#listing-droplets-by-tag">listing-droplets-by-tag</a></p>
</dd>
<dt><a href="#tagsDeleteDroplets">tagsDeleteDroplets(name, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Delete Droplets by Tag</p>
<p>Info: <a href="https://developers.digitalocean.com/documentation/v2/tagging-preview/#deleting-droplets-by-tag">deleting-droplets-by-tag</a></p>
</dd>
<dt><a href="#tagsRequestAction">tagsRequestAction(name, action, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Request an Action on a tag&#39;s Droplets
Info: <a href="https://developers.digitalocean.com/documentation/v2/tagging-preview/#acting-on-tagged-droplets">acting-on-tagged-droplets</a></p>
</dd>
<dt><a href="#volumes">volumes([region], [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>List all of the Block Storage Volumes available on your account
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-all-block-storage-volumes">list-all-block-storage-volumes</a></p>
</dd>
<dt><a href="#volumesCreate">volumesCreate(volume, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Create a new Block Storage Volume in a particular region
Info: <a href="https://developers.digitalocean.com/documentation/v2/#create-a-new-block-storage-volume">create-a-new-block-storage-volume</a></p>
</dd>
<dt><a href="#volumesGetById">volumesGetById(driveId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Show information about a Block Storage Volume based on its ID
Info: <a href="https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-block-storage-volume">retrieve-an-existing-block-storage-volume</a></p>
</dd>
<dt><a href="#volumesGetByName">volumesGetByName(name, region, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Show information about a Block Storage Volume based on its Name and Region
Info: <a href="https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-block-storage-volume-by-name">retrieve-an-existing-block-storage-volume-by-name</a></p>
</dd>
<dt><a href="#volumesDeleteById">volumesDeleteById(driveId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Delete a Block Storage Volume based on its ID
Info: <a href="https://developers.digitalocean.com/documentation/v2/#delete-a-block-storage-volume">delete-a-block-storage-volume</a></p>
</dd>
<dt><a href="#volumesDeleteByName">volumesDeleteByName(name, region, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Delete a Block Storage Volume based on its Name and Region
Info: <a href="https://developers.digitalocean.com/documentation/v2/#delete-a-block-storage-volume-by-name">delete-a-block-storage-volume-by-name</a></p>
</dd>
<dt><a href="#volumesRequestAction">volumesRequestAction(volumeId, action, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Request an Action on a Volume
Info: <a href="https://developers.digitalocean.com/documentation/v2/#block-storage-actions">block-storage-actions</a></p>
</dd>
<dt><a href="#loadBalancersCreate">loadBalancersCreate(data, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Create a new Load Balancer
Info: <a href="https://developers.digitalocean.com/documentation/v2/#create-a-new-load-balancer">load-balancer-create</a></p>
</dd>
<dt><a href="#loadBalancersGetById">loadBalancersGetById(loadBalancerId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get an existing Load Balancer using its Id
Info: <a href="https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-load-balancer">load-balancer-get-by-id</a></p>
</dd>
<dt><a href="#loadBalancers">loadBalancers([callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get a list of existing Load Balancers
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-all-load-balancers">load-balancers-get-all</a></p>
</dd>
<dt><a href="#loadBalancersUpdateById">loadBalancersUpdateById(loadBalancerId, data, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Update an existing Load Balancer using its Id
Info: <a href="https://developers.digitalocean.com/documentation/v2/#update-a-load-balancer">load-balancers-update</a></p>
</dd>
<dt><a href="#loadBalancersDelete">loadBalancersDelete(loadBalancerId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Delete an existing Load Balancer using its Id
Info: <a href="https://developers.digitalocean.com/documentation/v2/#delete-a-load-balancer">load-balancers-delete</a></p>
</dd>
<dt><a href="#loadBalancersAddDroplets">loadBalancersAddDroplets(loadBalancerId, dropletIds, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Add Droplets to an existing Load Balancer using its Id
Info: <a href="https://developers.digitalocean.com/documentation/v2/#add-droplets-to-a-load-balancer">load-balancers-add-droplets</a></p>
</dd>
<dt><a href="#loadBalancersRemoveDroplets">loadBalancersRemoveDroplets(loadBalancerId, dropletIds, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Remove Droplets from an existing Load Balancer using its Id
Info: <a href="https://developers.digitalocean.com/documentation/v2/#remove-droplets-from-a-load-balancer">load-balancers-remove-droplets</a></p>
</dd>
<dt><a href="#loadBalancersAddForwardingRule">loadBalancersAddForwardingRule(loadBalancerId, forwardingRules, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Add a Forwarding Rule to an existing Load Balancer using its Id
Info: <a href="https://developers.digitalocean.com/documentation/v2/#add-forwarding-rules-to-a-load-balancer">load-balancers-add-forwarding-rule</a></p>
</dd>
<dt><a href="#loadBalancersRemoveForwardingRule">loadBalancersRemoveForwardingRule(loadBalancerId, forwardingRules, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Remove a Forwarding Rule to an existing Load Balancer using its Id
Info: <a href="https://developers.digitalocean.com/documentation/v2/#add-forwarding-rules-to-a-load-balancer">load-balancers-add-forwarding-rule</a></p>
</dd>
<dt><a href="#firewallsCreate">firewallsCreate(firewallData, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Create a new Firewall
Info: <a href="https://developers.digitalocean.com/documentation/v2/#create-a-new-firewall">firewall-create-new</a></p>
</dd>
<dt><a href="#firewallsGetById">firewallsGetById(firewallId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Retrieve an existing Firewall using its Id
Info: <a href="https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-firewall">firewall-get-by-id</a></p>
</dd>
<dt><a href="#firewalls">firewalls([callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Retrieve a list of Firewalls
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-all-firewalls">firealls-get-all</a></p>
</dd>
<dt><a href="#firewallsUpdateById">firewallsUpdateById(firewallId, firewallData, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Update a Firewall using its Id
Info: <a href="https://developers.digitalocean.com/documentation/v2/#update-a-firewall">firewalls-update-by-id</a></p>
</dd>
<dt><a href="#firewallsDeleteById">firewallsDeleteById(firewallId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Delete a Firewall using its Id
Info: <a href="https://developers.digitalocean.com/documentation/v2/#delete-a-firewall">firewalls-delete-by-id</a></p>
</dd>
<dt><a href="#firewallsAddDroplets">firewallsAddDroplets(firewallId, dropletIds, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Add Droplets to an existing Firewall
Info: <a href="https://developers.digitalocean.com/documentation/v2/#add-droplets-to-a-firewall">firewalls-add-droplets</a></p>
</dd>
<dt><a href="#firewallsRemoveDroplets">firewallsRemoveDroplets(firewallId, dropletIds, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Remove Droplets from an existing Firewall
Info: <a href="https://developers.digitalocean.com/documentation/v2/#remove-droplets-from-a-firewall">firewalls-remove-droplets</a></p>
</dd>
<dt><a href="#firewallsAddTags">firewallsAddTags(firewallId, tags, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Add Tags to an existing Firewall
Info: <a href="https://developers.digitalocean.com/documentation/v2/#add-tags-to-a-firewall">firealls-add-tags</a></p>
</dd>
<dt><a href="#firewallsRemoveTags">firewallsRemoveTags(firewallId, tags, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Remove Tags from an existing Firewall
Info: <a href="https://developers.digitalocean.com/documentation/v2/#remove-tags-from-a-firewall">firewalls-remove-tags</a></p>
</dd>
<dt><a href="#firewallsAddRules">firewallsAddRules(firewallId, rules, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Add Rules to an existing Firewall
Info: <a href="https://developers.digitalocean.com/documentation/v2/#add-rules-to-a-firewall">firewalls-add-rules</a></p>
</dd>
<dt><a href="#firewallsRemoveRules">firewallsRemoveRules(firewallId, rules, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Remove Rules from an existing Firewall
Info: <a href="https://developers.digitalocean.com/documentation/v2/#remove-rules-from-a-firewall">firewalls-remove-rules</a></p>
</dd>
<dt><a href="#snapshots">snapshots([callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>List all snapshots
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-all-snapshots">list-all-snapshots</a></p>
</dd>
<dt><a href="#snapshotsDroplets">snapshotsDroplets([callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>List all Droplet snapshots
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-all-droplet-snapshots">list-all-droplet-snapshots</a></p>
</dd>
<dt><a href="#snapshotsVolumes">snapshotsVolumes([callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>List all Volume snapshots
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-all-volume-snapshots">list-all-volume-snapshots</a></p>
</dd>
<dt><a href="#snapshotsGetById">snapshotsGetById(snapshotId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Retrieve an existing snapshot by id
Info: <a href="https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-snapshot-by-id">retrieve-an-existing-snapshot-by-id</a></p>
</dd>
<dt><a href="#snapshotsDeleteById">snapshotsDeleteById(snapshotId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Delete a snapshot
Info: <a href="https://developers.digitalocean.com/documentation/v2/#delete-a-snapshot">delete-a-snapshot</a></p>
</dd>
</dl>

<a name="account"></a>

## account([callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get Account Information
Info [account](https://developers.digitalocean.com/documentation/v2/#account)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="accountGetActions"></a>

## accountGetActions(query, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get Account Actions

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>Object</code> | Query Options |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="accountGetAction"></a>

## accountGetAction(actionId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get Action Information for Account
Info: [retrieve-an-existing-action](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-action)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| actionId | <code>number</code> | The Id of the Action |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="accountGetKeys"></a>

## accountGetKeys(query, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
List all SSH Keys
Info: [list-all-keys](https://developers.digitalocean.com/documentation/v2/#list-all-keys)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>Object</code> | Query Options |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="accountAddKey"></a>

## accountAddKey(configuration, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Add a new SSH Key
Info: [create-a-new-key](https://developers.digitalocean.com/documentation/v2/#create-a-new-key)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| configuration | <code>\*</code> | Information required to create SSH Key | {name: ?, public_key: ?} |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="accountGetKeyById"></a>

## accountGetKeyById(keyId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get an SSH Key via its Id
Info: [retrieve-an-existing-key](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-key)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| keyId | <code>number</code> | The Id of the Key |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="accountGetKeyByFingerprint"></a>

## accountGetKeyByFingerprint(fingerprint, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get an SSH Key via its Fingerprint
Info: [retrieve-an-existing-key](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-key)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| fingerprint | <code>string</code> | The Fingerprint of the Key |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="accountRenameKey"></a>

## accountRenameKey(keyIdentity, keyName, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Rename a SSH Key
Info: [update-a-key](https://developers.digitalocean.com/documentation/v2/#update-a-key)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| keyIdentity | <code>\*</code> | The Id or Fingerprint of the SSH Key |
| keyName | <code>string</code> | What to rename the SSH Key to |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="accountDeleteKey"></a>

## accountDeleteKey(keyIdentity, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Delete a SSH Key
Info: [destroy-a-key](https://developers.digitalocean.com/documentation/v2/#destroy-a-key)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| keyIdentity | <code>\*</code> | The Id or Fingerprint of the SSH Key |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="dropletsGetAll"></a>

## dropletsGetAll(query, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get a list of Droplets
Info: [list-all-droplets](https://developers.digitalocean.com/documentation/v2/#list-all-droplets)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>Object</code> | Query Options |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="dropletsGetKernels"></a>

## dropletsGetKernels(dropletId, query, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get a list of Kernels available for a Droplet
Info: [list-all-available-kernels-for-a-droplet](https://developers.digitalocean.com/documentation/v2/#list-all-available-kernels-for-a-droplet)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| dropletId | <code>number</code> | The Id of the Droplet |
| query | <code>Object</code> | Query Options |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="dropletsGetSnapshots"></a>

## dropletsGetSnapshots(dropletId, query, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get a list of Snapshots for a Droplet
Info: [retrieve-snapshots-for-a-droplet](https://developers.digitalocean.com/documentation/v2/#list-snapshots-for-a-droplet)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| dropletId | <code>number</code> | The Id of the Droplet |
| query | <code>Object</code> | Query Options |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="dropletsGetBackups"></a>

## dropletsGetBackups(dropletId, query, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get a list of Backups for a Droplet
Info: [list-backups-for-a-droplet](https://developers.digitalocean.com/documentation/v2/#list-backups-for-a-droplet)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| dropletId | <code>number</code> | The Id of the Droplet |
| query | <code>Object</code> | Query Options |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="dropletsGetActions"></a>

## dropletsGetActions(dropletId, query, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get a list of Actions for a Droplet
Info: [list-actions-for-a-droplet](https://developers.digitalocean.com/documentation/v2/#list-actions-for-a-droplet)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| dropletId | <code>number</code> | The Id of the Droplet |
| query | <code>Object</code> | Query Options |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="dropletsCreate"></a>

## dropletsCreate(configuration, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Create a New Droplet
Info: [create-a-new-droplet](https://developers.digitalocean.com/documentation/v2/#create-a-new-droplet)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| configuration | <code>\*</code> | Creation parameters, see info for more details. |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="dropletsGetById"></a>

## dropletsGetById(dropletId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get a Droplet by Id
Info: [retrieve-an-existing-droplet-by-id](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-droplet-by-id)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| dropletId | <code>number</code> | The Id of the Droplet |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="dropletsDelete"></a>

## dropletsDelete(dropletId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Delete a Droplet
Info: [delete-a-droplet](https://developers.digitalocean.com/documentation/v2/#delete-a-droplet)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| dropletId | <code>number</code> | The Id of the Droplet |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="dropletsGetNeighbors"></a>

## dropletsGetNeighbors(dropletId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get a list of Droplet Neighbors
Info: [list-neighbors-for-a-droplet](https://developers.digitalocean.com/documentation/v2/#list-neighbors-for-a-droplet)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| dropletId | <code>number</code> | The Id of the Droplet |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="dropletsGetNeighborsReport"></a>

## dropletsGetNeighborsReport([callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get a report of Droplets sharing the same hardware
Info: [list-all-droplet-neighbors](https://developers.digitalocean.com/documentation/v2/#list-all-droplet-neighbors)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="dropletsGetUpgrades"></a>

## dropletsGetUpgrades([callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get a list of scheduled Droplet Upgrades
Info: [list-droplet-upgrades](https://developers.digitalocean.com/documentation/v2/#list-droplet-upgrades)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="dropletsRequestAction"></a>

## dropletsRequestAction(dropletId, action, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Request an Action on a Droplet
Info: [droplet-actions](https://developers.digitalocean.com/documentation/v2/#droplet-actions)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| dropletId | <code>number</code> | The Id of the Droplet |
| action | <code>\*</code> | Action Object |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="dropletsGetAction"></a>

## dropletsGetAction(dropletId, actionId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get an Action for a Droplet
Info: [retrieve-a-droplet-action](https://developers.digitalocean.com/documentation/v2/#retrieve-a-droplet-action)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| dropletId | <code>number</code> | The Id of the Droplet |
| actionId | <code>number</code> | The Id of the Action |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="domainsGetAll"></a>

## domainsGetAll(query, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get all Domains
Info: [list-all-domains](https://developers.digitalocean.com/documentation/v2/#list-all-domains)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>Object</code> | Query Options |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="domainsCreate"></a>

## domainsCreate(name, ip, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Add a new Domain
Info: [create-a-new-domain](https://developers.digitalocean.com/documentation/v2/#create-a-new-domain)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Domain Name |
| ip | <code>string</code> | The Ip of the Droplet |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="domainsGet"></a>

## domainsGet(name, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get a Domain
Info: [retrieve-an-existing-domain](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-domain)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The Domain Name |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="domainsDelete"></a>

## domainsDelete(name, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Delete a Domain
Info: [delete-a-domain](https://developers.digitalocean.com/documentation/v2/#delete-a-domain)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The Domain Name |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="domainRecordsGetAll"></a>

## domainRecordsGetAll(name, query, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get all Domain Records for a Domain
Info: [list-all-domain-records](https://developers.digitalocean.com/documentation/v2/#list-all-domain-records)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The Domain Name |
| query | <code>Object</code> | Query Options |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="domainRecordsCreate"></a>

## domainRecordsCreate(name, configuration, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Create a new Domain Record on a Domain
Info: [create-a-new-domain-record](https://developers.digitalocean.com/documentation/v2/#create-a-new-domain-record)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The Domain Name |
| configuration | <code>\*</code> | Data required to create the Domain Record |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="domainRecordsGet"></a>

## domainRecordsGet(name, domainRecordId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get a single Domain Record
Info: [retrieve-an-existing-domain-record](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-domain-record)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The Domain Name |
| domainRecordId | <code>number</code> | The Id of the Domain Record |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="domainRecordsUpdate"></a>

## domainRecordsUpdate(name, domainRecordId, configuration, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Update a Domain Record
Info: [update-a-domain-record](https://developers.digitalocean.com/documentation/v2/#update-a-domain-record)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The Domain Name |
| domainRecordId | <code>number</code> | The Id of the Domain Record |
| configuration | <code>\*</code> | Data required to update the Domain Record |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="domainRecordsDelete"></a>

## domainRecordsDelete(name, domainRecordId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Delete a Domain Record
Info: [delete-a-domain-record](https://developers.digitalocean.com/documentation/v2/#delete-a-domain-record)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The Domain Name |
| domainRecordId | <code>number</code> | The Id of the Domain Record |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="regionsGetAll"></a>

## regionsGetAll(query, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get all Regions
Info: [list-all-regions](https://developers.digitalocean.com/documentation/v2/#list-all-regions)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>Object</code> | Query Options |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="sizesGetAll"></a>

## sizesGetAll(query, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get all Droplet sizes
Info: [list-all-sizes](https://developers.digitalocean.com/documentation/v2/#list-all-sizes)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>Object</code> | Query Options |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="imagesGetAll"></a>

## imagesGetAll(query, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get all Images
Include type=[distribution,application] or private=true in the query object to limit results.
Info: [list-all-images](https://developers.digitalocean.com/documentation/v2/#list-all-images)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>Object</code> | Query Options |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="imagesGetById"></a>

## imagesGetById(imageId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get an Image using its Id
Info: [retrieve-an-existing-image-by-id](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-by-id)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| imageId | <code>number</code> | The Id of the Image |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="imagesGetBySlug"></a>

## imagesGetBySlug(slug, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get an Image using its Slug
Info: [retrieve-an-existing-image-by-slug](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-by-slug)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| slug | <code>string</code> | The Slug of the Image |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="imagesGetActions"></a>

## imagesGetActions(imageId, query, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get all Actions for an Image
Info: [list-all-actions-for-an-image](https://developers.digitalocean.com/documentation/v2/#list-all-actions-for-an-image)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| imageId | <code>number</code> | The Id of the Image |
| query | <code>Object</code> | Query Options |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="imagesUpdate"></a>

## imagesUpdate(imageId, name, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Update the name of an Image
Info: [update-an-image](https://developers.digitalocean.com/documentation/v2/#update-an-image)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| imageId | <code>number</code> | The Id of the Image |
| name | <code>string</code> | The Name to update the Image to |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="imagesDelete"></a>

## imagesDelete(imageId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Delete an Image
Info: [delete-an-image](https://developers.digitalocean.com/documentation/v2/#delete-an-image)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| imageId | <code>number</code> | The Id of the Image |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="imagesRequestAction"></a>

## imagesRequestAction(imageId, action, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Request an Action on an Image
Info: [image-actions](https://developers.digitalocean.com/documentation/v2/#image-actions)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| imageId | <code>number</code> | The Id of the Image |
| action | <code>\*</code> | Action Options |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="imagesGetAction"></a>

## imagesGetAction(imageId, actionId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get the status of an Action
Info: [retrieve-an-existing-image-action](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-image-action)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| imageId | <code>number</code> | The Id of the Image |
| actionId | <code>number</code> | The Id of the Action |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="floatingIpsGetAll"></a>

## floatingIpsGetAll(query, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get all Floating IPs
Info: [list-all-floating-ips](https://developers.digitalocean.com/documentation/v2/#list-all-floating-ips)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>Object</code> | Query Options |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="floatingIpsAssignDroplet"></a>

## floatingIpsAssignDroplet(dropletId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Create and assign a Floating IP to a specific droplet.
Info: [create-a-new-floating-ip-assigned-to-a-droplet](https://developers.digitalocean.com/documentation/v2/#create-a-new-floating-ip-assigned-to-a-droplet)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| dropletId | <code>number</code> | The ID of Droplet that the Floating IP will be assigned to. |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="floatingIpsAssignRegion"></a>

## floatingIpsAssignRegion(region, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Create and assign a Floating IP to a region.
Info: [create-a-new-floating-ip-assigned-to-a-droplet](https://developers.digitalocean.com/documentation/v2/#create-a-new-floating-ip-assigned-to-a-droplet)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| region | <code>string</code> | The slug identifier for the region the Floating IP will be reserved to. |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="floatingIpsGet"></a>

## floatingIpsGet(ipAddress, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Retrieve an existing Floating IP
Info: [retrieve-an-existing-floating-ip](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-floating-ip)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| ipAddress | <code>string</code> | Floating IP address. |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="floatingIpsDelete"></a>

## floatingIpsDelete(ipAddress, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Delete a Floating IP
Info: [delete-a-floating-ips](https://developers.digitalocean.com/documentation/v2/#delete-a-floating-ips)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| ipAddress | <code>string</code> | Floating IP address |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="floatingIpsRequestAction"></a>

## floatingIpsRequestAction(ipAddress, action, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Request an action on a Floating IP
Info: [floating-ip-actions](https://developers.digitalocean.com/documentation/v2/#floating-ip-actions)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| ipAddress | <code>string</code> | Floating IP address |
| action | <code>\*</code> | Action options |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="floatingIpsGetActions"></a>

## floatingIpsGetActions(ipAddress, query, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
List all actions for a Floating IP
Info: [list-all-actions-for-a-floating-ip](https://developers.digitalocean.com/documentation/v2/#list-all-actions-for-a-floating-ip)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| ipAddress | <code>string</code> | Floating IP address |
| query | <code>Object</code> | Query Options |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="floatingIpsGetAction"></a>

## floatingIpsGetAction(ipAddress, actionId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Retrieve an existing Floating IP action
Info: [retrieve-an-existing-floating-ip-action](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-floating-ip-action)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| ipAddress | <code>string</code> | Floating IP address |
| actionId | <code>number</code> | The Id of the action |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="tagsCreate"></a>

## tagsCreate(name, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Add a new Tag
Info: [create-a-new-tag](https://developers.digitalocean.com/documentation/v2/tagging-preview/#create-a-new-tag)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Tag Name |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="tagsDelete"></a>

## tagsDelete(name, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Delete a Tag
Info: [delete-a-tag](https://developers.digitalocean.com/documentation/v2/tagging-preview/#delete-a-tag)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Tag Name |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="tagsGet"></a>

## tagsGet(name, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get a Tag
Info: [retrieve-a-tag](https://developers.digitalocean.com/documentation/v2/tagging-preview/#retrieve-a-tag)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The Tag Name |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="tagsGetAll"></a>

## tagsGetAll(query, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get all Tags
Info: [list-all-tags](https://developers.digitalocean.com/documentation/v2/tagging-preview/#list-all-tags)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>Object</code> | Query Options |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="tagsAddResources"></a>

## tagsAddResources(name, configuration, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Tag resources
Info: [tag-a-resource](https://developers.digitalocean.com/documentation/v2/tagging-preview/#tag-a-resource)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The Tag Name |
| configuration | <code>\*</code> | Array of objects which identify the resources to tag |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="tagsDeleteResource"></a>

## tagsDeleteResource(name, configuration, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Untag a resource
Info: [untag-a-resource](https://developers.digitalocean.com/documentation/v2/tagging-preview/#untag-a-resource)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The Tag Name |
| configuration | <code>\*</code> | Array of objects which identify the resources to untag |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="tagsGetDroplets"></a>

## tagsGetDroplets(name, query, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get Droplets by Tag

Info: [listing-droplets-by-tag](https://developers.digitalocean.com/documentation/v2/tagging-preview/#listing-droplets-by-tag)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The Tag Name |
| query | <code>Object</code> | Query Options |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="tagsDeleteDroplets"></a>

## tagsDeleteDroplets(name, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Delete Droplets by Tag

Info: [deleting-droplets-by-tag](https://developers.digitalocean.com/documentation/v2/tagging-preview/#deleting-droplets-by-tag)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The Tag Name |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="tagsRequestAction"></a>

## tagsRequestAction(name, action, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Request an Action on a tag's Droplets
Info: [acting-on-tagged-droplets](https://developers.digitalocean.com/documentation/v2/tagging-preview/#acting-on-tagged-droplets)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The Tag Name |
| action | <code>\*</code> | Action Object |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="volumes"></a>

## volumes([region], [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
List all of the Block Storage Volumes available on your account
Info: [list-all-block-storage-volumes](https://developers.digitalocean.com/documentation/v2/#list-all-block-storage-volumes)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| [region] | <code>string</code> | Optional Region Name Filter |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="volumesCreate"></a>

## volumesCreate(volume, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Create a new Block Storage Volume in a particular region
Info: [create-a-new-block-storage-volume](https://developers.digitalocean.com/documentation/v2/#create-a-new-block-storage-volume)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| volume | <code>Object</code> | Volume configuration to create |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="volumesGetById"></a>

## volumesGetById(driveId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Show information about a Block Storage Volume based on its ID
Info: [retrieve-an-existing-block-storage-volume](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-block-storage-volume)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| driveId | <code>string</code> | ID of the Volume Drive |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="volumesGetByName"></a>

## volumesGetByName(name, region, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Show information about a Block Storage Volume based on its Name and Region
Info: [retrieve-an-existing-block-storage-volume-by-name](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-block-storage-volume-by-name)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the Block Storage Volume |
| region | <code>string</code> | Region of the Block Storage Volume |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="volumesDeleteById"></a>

## volumesDeleteById(driveId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Delete a Block Storage Volume based on its ID
Info: [delete-a-block-storage-volume](https://developers.digitalocean.com/documentation/v2/#delete-a-block-storage-volume)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| driveId | <code>string</code> | ID of the Block Storage Volume Drive |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="volumesDeleteByName"></a>

## volumesDeleteByName(name, region, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Delete a Block Storage Volume based on its Name and Region
Info: [delete-a-block-storage-volume-by-name](https://developers.digitalocean.com/documentation/v2/#delete-a-block-storage-volume-by-name)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the Block Storage Volume |
| region | <code>string</code> | Region of the Block Storage Volume |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="volumesRequestAction"></a>

## volumesRequestAction(volumeId, action, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Request an Action on a Volume
Info: [block-storage-actions](https://developers.digitalocean.com/documentation/v2/#block-storage-actions)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| volumeId | <code>number</code> | The Id of the Volume |
| action | <code>\*</code> | Action Object |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="loadBalancersCreate"></a>

## loadBalancersCreate(data, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Create a new Load Balancer
Info: [load-balancer-create](https://developers.digitalocean.com/documentation/v2/#create-a-new-load-balancer)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Load Balancer configuration data |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="loadBalancersGetById"></a>

## loadBalancersGetById(loadBalancerId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get an existing Load Balancer using its Id
Info: [load-balancer-get-by-id](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-load-balancer)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| loadBalancerId | <code>string</code> | The Id of the Load Balancer |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="loadBalancers"></a>

## loadBalancers([callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get a list of existing Load Balancers
Info: [load-balancers-get-all](https://developers.digitalocean.com/documentation/v2/#list-all-load-balancers)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="loadBalancersUpdateById"></a>

## loadBalancersUpdateById(loadBalancerId, data, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Update an existing Load Balancer using its Id
Info: [load-balancers-update](https://developers.digitalocean.com/documentation/v2/#update-a-load-balancer)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| loadBalancerId | <code>string</code> | The Id of the Load Balancer |
| data | <code>Object</code> | Load Balancer configuration data |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="loadBalancersDelete"></a>

## loadBalancersDelete(loadBalancerId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Delete an existing Load Balancer using its Id
Info: [load-balancers-delete](https://developers.digitalocean.com/documentation/v2/#delete-a-load-balancer)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| loadBalancerId | <code>string</code> | The Id of the Load Balancer |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="loadBalancersAddDroplets"></a>

## loadBalancersAddDroplets(loadBalancerId, dropletIds, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Add Droplets to an existing Load Balancer using its Id
Info: [load-balancers-add-droplets](https://developers.digitalocean.com/documentation/v2/#add-droplets-to-a-load-balancer)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| loadBalancerId | <code>string</code> | The Id of the Load Balancer |
| dropletIds | <code>Array</code> | The Droplet Ids |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="loadBalancersRemoveDroplets"></a>

## loadBalancersRemoveDroplets(loadBalancerId, dropletIds, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Remove Droplets from an existing Load Balancer using its Id
Info: [load-balancers-remove-droplets](https://developers.digitalocean.com/documentation/v2/#remove-droplets-from-a-load-balancer)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| loadBalancerId | <code>string</code> | The Id of the Load Balancer |
| dropletIds | <code>Array</code> | The Droplet Ids |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="loadBalancersAddForwardingRule"></a>

## loadBalancersAddForwardingRule(loadBalancerId, forwardingRules, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Add a Forwarding Rule to an existing Load Balancer using its Id
Info: [load-balancers-add-forwarding-rule](https://developers.digitalocean.com/documentation/v2/#add-forwarding-rules-to-a-load-balancer)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| loadBalancerId | <code>string</code> | The Id of the Load Balancer |
| forwardingRules | <code>Object</code> | The Forwarding Rule objects to add to the Load Balancer |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="loadBalancersRemoveForwardingRule"></a>

## loadBalancersRemoveForwardingRule(loadBalancerId, forwardingRules, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Remove a Forwarding Rule to an existing Load Balancer using its Id
Info: [load-balancers-add-forwarding-rule](https://developers.digitalocean.com/documentation/v2/#add-forwarding-rules-to-a-load-balancer)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| loadBalancerId | <code>string</code> | The Id of the Load Balancer |
| forwardingRules | <code>Object</code> | The Forwarding Rule objects to remove from the Load Balancer |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="firewallsCreate"></a>

## firewallsCreate(firewallData, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Create a new Firewall
Info: [firewall-create-new](https://developers.digitalocean.com/documentation/v2/#create-a-new-firewall)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| firewallData | <code>Object</code> |  |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="firewallsGetById"></a>

## firewallsGetById(firewallId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Retrieve an existing Firewall using its Id
Info: [firewall-get-by-id](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-firewall)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| firewallId | <code>string</code> | The Id of the Firewall to retrieve |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="firewalls"></a>

## firewalls([callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Retrieve a list of Firewalls
Info: [firealls-get-all](https://developers.digitalocean.com/documentation/v2/#list-all-firewalls)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="firewallsUpdateById"></a>

## firewallsUpdateById(firewallId, firewallData, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Update a Firewall using its Id
Info: [firewalls-update-by-id](https://developers.digitalocean.com/documentation/v2/#update-a-firewall)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| firewallId | <code>string</code> | The Id of the Firewall |
| firewallData | <code>Object</code> | The Firewall update data |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="firewallsDeleteById"></a>

## firewallsDeleteById(firewallId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Delete a Firewall using its Id
Info: [firewalls-delete-by-id](https://developers.digitalocean.com/documentation/v2/#delete-a-firewall)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| firewallId | <code>string</code> | The Id of the Firewall |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="firewallsAddDroplets"></a>

## firewallsAddDroplets(firewallId, dropletIds, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Add Droplets to an existing Firewall
Info: [firewalls-add-droplets](https://developers.digitalocean.com/documentation/v2/#add-droplets-to-a-firewall)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| firewallId | <code>string</code> | The Id of the Firewall |
| dropletIds | <code>Array.&lt;number&gt;</code> | The Droplet Ids |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="firewallsRemoveDroplets"></a>

## firewallsRemoveDroplets(firewallId, dropletIds, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Remove Droplets from an existing Firewall
Info: [firewalls-remove-droplets](https://developers.digitalocean.com/documentation/v2/#remove-droplets-from-a-firewall)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| firewallId | <code>string</code> | The Id of the Firewall |
| dropletIds | <code>Array.&lt;number&gt;</code> | The Droplet Ids |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="firewallsAddTags"></a>

## firewallsAddTags(firewallId, tags, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Add Tags to an existing Firewall
Info: [firealls-add-tags](https://developers.digitalocean.com/documentation/v2/#add-tags-to-a-firewall)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| firewallId | <code>string</code> | The Id of the Firewall |
| tags | <code>Array.&lt;string&gt;</code> | The Tags to add to the Firewall |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="firewallsRemoveTags"></a>

## firewallsRemoveTags(firewallId, tags, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Remove Tags from an existing Firewall
Info: [firewalls-remove-tags](https://developers.digitalocean.com/documentation/v2/#remove-tags-from-a-firewall)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| firewallId | <code>string</code> | The Id of the Firewall |
| tags | <code>Array.&lt;string&gt;</code> | The Tags to remove from the Firewall |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="firewallsAddRules"></a>

## firewallsAddRules(firewallId, rules, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Add Rules to an existing Firewall
Info: [firewalls-add-rules](https://developers.digitalocean.com/documentation/v2/#add-rules-to-a-firewall)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| firewallId | <code>string</code> | The Id of the Firewall |
| rules | <code>object</code> | The Rules to add to the Firewall |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="firewallsRemoveRules"></a>

## firewallsRemoveRules(firewallId, rules, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Remove Rules from an existing Firewall
Info: [firewalls-remove-rules](https://developers.digitalocean.com/documentation/v2/#remove-rules-from-a-firewall)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| firewallId | <code>string</code> | The Id of the Firewall |
| rules | <code>object</code> | The Rules to remove from the Firewall |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="snapshots"></a>

## snapshots([callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
List all snapshots
Info: [list-all-snapshots](https://developers.digitalocean.com/documentation/v2/#list-all-snapshots)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="snapshotsDroplets"></a>

## snapshotsDroplets([callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
List all Droplet snapshots
Info: [list-all-droplet-snapshots](https://developers.digitalocean.com/documentation/v2/#list-all-droplet-snapshots)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="snapshotsVolumes"></a>

## snapshotsVolumes([callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
List all Volume snapshots
Info: [list-all-volume-snapshots](https://developers.digitalocean.com/documentation/v2/#list-all-volume-snapshots)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="snapshotsGetById"></a>

## snapshotsGetById(snapshotId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Retrieve an existing snapshot by id
Info: [retrieve-an-existing-snapshot-by-id](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-snapshot-by-id)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| snapshotId | <code>string</code> | The Id of the Snapshot |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="snapshotsDeleteById"></a>

## snapshotsDeleteById(snapshotId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Delete a snapshot
Info: [delete-a-snapshot](https://developers.digitalocean.com/documentation/v2/#delete-a-snapshot)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| snapshotId | <code>string</code> | The Id of the Snapshot |
| [callback] | <code>\*</code> | Optional function to execute on completion |

