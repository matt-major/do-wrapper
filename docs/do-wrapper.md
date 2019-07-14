## Functions

<dl>
<dt><a href="#account">account([callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get Account Information
Info <a href="https://developers.digitalocean.com/documentation/v2/#account">account</a></p>
</dd>
<dt><a href="#accountGetActions">accountGetActions(query, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get Account Actions
Info <a href="https://developers.digitalocean.com/documentation/v2/#list-all-actions">list-all-actions</a></p>
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
<dt><a href="#cdnEndpointCreate">cdnEndpointCreate(origin, ttl, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Create a new CDN endpoint
Info: <a href="https://developers.digitalocean.com/documentation/v2/#create-a-new-cdn-endpoint">create-a-new-cdn-endpoint</a></p>
</dd>
<dt><a href="#cdnEndpointGet">cdnEndpointGet(endpointId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get information about an existing CDN endpoint
Info: <a href="https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-cdn-endpoint">retrieve-an-existing-cdn-endpoint</a></p>
</dd>
<dt><a href="#cdnEndpointGetAll">cdnEndpointGetAll(query, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get a list of CDN endpoints
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-all-cdn-endpoints">list-all-cdn-endpoints</a></p>
</dd>
<dt><a href="#cdnEndpointUpdate">cdnEndpointUpdate(endpointId, ttl, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Update an existing endpoint
Info: <a href="https://developers.digitalocean.com/documentation/v2/#update-an-existing-cdn-endpoint">update-an-existing-cdn-endpoint</a></p>
</dd>
<dt><a href="#cdnEndpointDelete">cdnEndpointDelete(endpointId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Delete a specific CDN endpoint
Info: <a href="https://developers.digitalocean.com/documentation/v2/#delete-a-cdn-endpoint">delete-a-cdn-endpoint</a></p>
</dd>
<dt><a href="#cdnEndpointPurgeCache">cdnEndpointPurgeCache(endpointId, files, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Purge cached content from a CDN endpoint
Info: <a href="https://developers.digitalocean.com/documentation/v2/#purge-the-cache-for-an-existing-cdn-endpoint">purge-the-cache-for-an-existing-cdn-endpoint</a></p>
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
Info: <a href="https://developers.digitalocean.com/documentation/v2/#create-a-new-floating-ip-reserved-to-a-region">create-a-new-floating-ip-reserved-to-a-region</a></p>
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
<dt><a href="#certificates">certificates([query], [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get All Certificates
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-all-certificates">certificates</a></p>
</dd>
<dt><a href="#certificatesCreate">certificatesCreate(certificateData, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Create A Certificate
Info: <a href="https://developers.digitalocean.com/documentation/v2/#create-a-new-certificate">certificates-create-new</a></p>
</dd>
<dt><a href="#certificatesGetById">certificatesGetById([callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get Certificate By Id
Info: <a href="https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-certificate">certificates-get-by-id</a></p>
</dd>
<dt><a href="#certificatesDeleteById">certificatesDeleteById([callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Delete Certificate By Id
Info: <a href="https://developers.digitalocean.com/documentation/v2/#delete-a-certificate">certificates-delete-by-id</a></p>
</dd>
<dt><a href="#databases">databases([query], [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get All Database clusters
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-all-database-clusters">list-all-database-clusters</a></p>
</dd>
<dt><a href="#databasesCreate">databasesCreate([clusterData], [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Create a database cluster
Info: <a href="https://developers.digitalocean.com/documentation/v2/#create-a-new-database-cluster">create-a-new-database-cluster</a></p>
</dd>
<dt><a href="#databasesGet">databasesGet([clusterId], callback)</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Retrieve an existing Database cluster
Info: <a href="https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-database-cluster">retrieve-an-existing-database-cluster</a></p>
</dd>
<dt><a href="#databasesResize">databasesResize(clusterId, configuration, callback)</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Resize a database cluster
Info: <a href="https://developers.digitalocean.com/documentation/v2/#resize-a-database-cluster">resize-a-database-cluster</a></p>
</dd>
<dt><a href="#databasesMigrate">databasesMigrate(clusterId, region, callback)</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Migrate a database cluster to a new region
Info: <a href="https://developers.digitalocean.com/documentation/v2/#migrate-a-database-cluster-to-a-new-region">migrate-a-database-cluster-to-a-new-region</a></p>
</dd>
<dt><a href="#databasesMaintenance">databasesMaintenance(clusterId, configuration, callback)</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Cofigure a database cluster&#39;s maintenance window
Info: <a href="https://developers.digitalocean.com/documentation/v2/#configure-a-database-cluster-s-maintenance-window">configure-a-database-cluster-s-maintenance-window</a></p>
</dd>
<dt><a href="#databasesGetBackups">databasesGetBackups(clusterId, callback)</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>List all of the available backups of a database cluster
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-backups-for-a-database-cluster">list-backups-for-a-database-cluster</a></p>
</dd>
<dt><a href="#databasesRestore">databasesRestore(configuration, callback)</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Create a new database cluster based on backup of an existing cluster
Info: <a href="https://developers.digitalocean.com/documentation/v2/#restore-from-a-database-cluster-backup">restore-from-a-database-cluster-backup</a></p>
</dd>
<dt><a href="#databasesDelete">databasesDelete(clusterId, callback)</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Destroy a database cluster
Info: <a href="https://developers.digitalocean.com/documentation/v2/#destroy-a-database-cluster">destroy-a-database-cluster</a></p>
</dd>
<dt><a href="#databasesCreateReplica">databasesCreateReplica(clusterId, configuration, callback)</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Create a read-only replica of the database
Info: <a href="https://developers.digitalocean.com/documentation/v2/#create-a-read-only-replica">create-a-read-only-replica</a></p>
</dd>
<dt><a href="#databasesGetReplica">databasesGetReplica(clusterId, replicaName, callback)</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Retrieve an existing read-only replica
Info: <a href="https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-read-only-replica">retrieve-an-existing-read-only-replica</a></p>
</dd>
<dt><a href="#databasesReplicaGetAll">databasesReplicaGetAll(clusterId, callback)</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>List all of the read-only replicas associated with a database cluster
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-all-read-only-replicas">list-all-read-only-replicas</a></p>
</dd>
<dt><a href="#databasesDeleteReplica">databasesDeleteReplica(clusterId, replicaName, callback)</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Destroy a specific read-only replica
Info: <a href="https://developers.digitalocean.com/documentation/v2/#destroy-a-read-only-replica">destroy-a-read-only-replica</a></p>
</dd>
<dt><a href="#databasesCreateUser">databasesCreateUser(clusterId, username, callback)</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Add a database user
Info: <a href="https://developers.digitalocean.com/documentation/v2/#add-a-database-user">add-a-database-user</a></p>
</dd>
<dt><a href="#databasesGetUser">databasesGetUser(clusterId, username, callback)</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get information about an existing database user
Info: <a href="https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-database-user">retrieve-an-existing-database-user</a></p>
</dd>
<dt><a href="#databasesUsersGetAll">databasesUsersGetAll(clusterId, callback)</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>List all the users of a database cluster
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-all-database-users">list-all-database-users</a></p>
</dd>
<dt><a href="#databasesDeleteUser">databasesDeleteUser(clusterId, username, callback)</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Remove a database user
Info: <a href="https://developers.digitalocean.com/documentation/v2/#remove-a-database-user">remove-a-database-user</a></p>
</dd>
<dt><a href="#databasesCreateDB">databasesCreateDB(clusterId, databaseName, callback)</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Add a new database to an existing cluster
Info: <a href="https://developers.digitalocean.com/documentation/v2/#add-a-new-database">add-a-new-database</a></p>
</dd>
<dt><a href="#databasesGetDB">databasesGetDB(clusterId, databaseName, callback)</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get information about an existing database cluster
Info: <a href="https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-database">retrieve-an-existing-database</a></p>
</dd>
<dt><a href="#databasesDeleteDB">databasesDeleteDB(clusterId, databaseName, callback)</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Delete a specific database
Info: <a href="https://developers.digitalocean.com/documentation/v2/#delete-a-database">delete-a-database</a></p>
</dd>
<dt><a href="#databasesDBGetAll">databasesDBGetAll(clusterId, callback)</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>List all of the databases in a cluster
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-all-databases">list-all-databases</a></p>
</dd>
<dt><a href="#databasesCreatePool">databasesCreatePool(clusterId, configuration, callback)</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Add a new connection pool
Info: <a href="https://developers.digitalocean.com/documentation/v2/#add-a-new-connection-pool">add-a-new-connection-pool</a></p>
</dd>
<dt><a href="#databasesPoolGetAll">databasesPoolGetAll(clusterId, callback)</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>List all of the connection pools
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-all-connection-pools">list-all-connection-pools</a></p>
</dd>
<dt><a href="#databasesGetPool">databasesGetPool(clusterId, poolName, callback)</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get information about an existing connection pool
Info: <a href="https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-connection-pool"> retrieve-an-existing-connection-pool</a></p>
</dd>
<dt><a href="#databasesDeletePool">databasesDeletePool(clusterId, poolName, callback)</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Delete a specific connection pool
Info: <a href="https://developers.digitalocean.com/documentation/v2/#delete-a-connection-pool">delete-a-connection-pool</a></p>
</dd>
<dt><a href="#kubernetes">kubernetes([query], [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get All Kubernetes Clusters
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-all-kubernetes-clusters">kubernetes-get-clusters</a></p>
</dd>
<dt><a href="#kubernetesCreateCluster">kubernetesCreateCluster(clusterData, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Create a Kubernetes Cluster
Info: <a href="https://developers.digitalocean.com/documentation/v2/#create-a-new-kubernetes-cluster">kubernetes-create-cluster</a></p>
</dd>
<dt><a href="#kubernetesClusterGet">kubernetesClusterGet(clusterId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get A Single Kubernetes Cluster
Info: <a href="https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-kubernetes-cluster">kubernetes-cluster-get-by-id</a></p>
</dd>
<dt><a href="#kubernetesClusterDelete">kubernetesClusterDelete(clusterId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Delete a Kubernetes Cluster
Info: <a href="https://developers.digitalocean.com/documentation/v2/#delete-a-kubernetes-cluster">kubernetes-cluster-delete</a></p>
</dd>
<dt><a href="#kubernetesClusterGetConfig">kubernetesClusterGetConfig(clusterId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get the kubeconfig for a Cluster
Info: <a href="https://developers.digitalocean.com/documentation/v2/#retrieve-the-kubeconfig-for-a-kubernetes-cluster">kubernetes-cluster-get-config</a></p>
</dd>
<dt><a href="#kubernetesNodePools">kubernetesNodePools(clusterId, [query], [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get the NodePools for a Cluster
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-all-node-pools-in-a-kubernetes-clusters">kubernetes-get-node-pools</a></p>
</dd>
<dt><a href="#kubernetesNodePoolGet">kubernetesNodePoolGet(clusterId, nodePoolId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get a NodePool on a Cluster by Id
Info: <a href="https://developers.digitalocean.com/documentation/v2/#retrieve-a-node-pool-for-a-kubernetes-cluster">kubernetes-cluster-get-nodepool-by-id</a></p>
</dd>
<dt><a href="#kubernetesNodePoolAdd">kubernetesNodePoolAdd(clusterId, nodePoolId, nodePoolConfiguration, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Add a NodePool on a Cluster
Info: <a href="https://developers.digitalocean.com/documentation/v2/#add-a-node-pool-to-a-kubernetes-cluster">kubernetes-cluster-add-node-pool</a></p>
</dd>
<dt><a href="#kubernetesNodePoolUpdate">kubernetesNodePoolUpdate(clusterId, nodePoolId, nodePoolConfiguration, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Update a NodePool on a Cluster
Info: <a href="https://developers.digitalocean.com/documentation/v2/#update-a-node-pool-in-a-kubernetes-cluster">kubernetes-cluster-update-node-pool</a></p>
</dd>
<dt><a href="#kubernetesNodePoolDelete">kubernetesNodePoolDelete(clusterId, nodePoolId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Delete a NodePool from a Cluster
Info: <a href="https://developers.digitalocean.com/documentation/v2/#delete-a-node-pool-in-a-kubernetes-cluster">kubernetes-cluster-delete-node-pool</a></p>
</dd>
<dt><a href="#kubernetesNodesRecycle">kubernetesNodesRecycle(clusterId, nodePoolId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Recycle the NodePool of a Kubernetes Cluster
Info: <a href="https://developers.digitalocean.com/documentation/v2/#recycle-nodes-in-a-kubernetes-cluster">kubernetes-cluster-recycle</a></p>
</dd>
<dt><a href="#kubernetesAvailability">kubernetesAvailability([callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get Kubernetes availability
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-available-regions--node-sizes--and-versions-of-kubernetes">kubernetes-get-availability</a></p>
</dd>
<dt><a href="#projects">projects([query], [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get All Projects
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-all-projects">projects</a></p>
</dd>
<dt><a href="#projectsCreate">projectsCreate(projectData, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Create a Project
Info: <a href="https://developers.digitalocean.com/documentation/v2/#create-a-project">projects-create</a></p>
</dd>
<dt><a href="#projectsUpdate">projectsUpdate(projectId, projectData, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Update A Project
Info: <a href="https://developers.digitalocean.com/documentation/v2/#update-a-project">projects-update</a></p>
</dd>
<dt><a href="#projectsPatch">projectsPatch(projectId, projectData, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Patch A Project
Info: <a href="https://developers.digitalocean.com/documentation/v2/#patch-a-project">projects-patch</a></p>
</dd>
<dt><a href="#projectsGet">projectsGet(projectId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get A Project
Info: <a href="https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-project">projects-get-by-id</a></p>
</dd>
<dt><a href="#projectsGetResources">projectsGetResources(projectId, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get Project Resources
Info: <a href="https://developers.digitalocean.com/documentation/v2/#list-all-resources">list-all-resources</a></p>
</dd>
<dt><a href="#projectsGetDefault">projectsGetDefault([callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Get The Default Project
Info: <a href="https://developers.digitalocean.com/documentation/v2/#retrieve-the-default-project">projects-get-default</a></p>
</dd>
<dt><a href="#projectsUpdateDefault">projectsUpdateDefault(projectData, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Update The Default Project
Info: <a href="https://developers.digitalocean.com/documentation/v2/#update-the-default-project">projects-default-update</a></p>
</dd>
<dt><a href="#projectsPatchDefault">projectsPatchDefault(projectData, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Patch The Default Project
Info: <a href="https://developers.digitalocean.com/documentation/v2/#patch-the-default-project">projects-default-patch</a></p>
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
Info [list-all-actions](https://developers.digitalocean.com/documentation/v2/#list-all-actions)

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

<a name="cdnEndpointCreate"></a>

## cdnEndpointCreate(origin, ttl, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Create a new CDN endpoint
Info: [create-a-new-cdn-endpoint](https://developers.digitalocean.com/documentation/v2/#create-a-new-cdn-endpoint)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| origin | <code>string</code> | The origin server address (FQDN) which provides the content for the CDN |
| ttl | <code>number</code> | The amount of time (seconds) the content is cached by the CDN's edge servers. Defaults to 3600 (one hour) |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="cdnEndpointGet"></a>

## cdnEndpointGet(endpointId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get information about an existing CDN endpoint
Info: [retrieve-an-existing-cdn-endpoint](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-cdn-endpoint)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| endpointId | <code>string</code> | The id of an existing CDN endpoint |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="cdnEndpointGetAll"></a>

## cdnEndpointGetAll(query, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get a list of CDN endpoints
Info: [list-all-cdn-endpoints](https://developers.digitalocean.com/documentation/v2/#list-all-cdn-endpoints)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>Object</code> | Query Options |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="cdnEndpointUpdate"></a>

## cdnEndpointUpdate(endpointId, ttl, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Update an existing endpoint
Info: [update-an-existing-cdn-endpoint](https://developers.digitalocean.com/documentation/v2/#update-an-existing-cdn-endpoint)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| endpointId | <code>string</code> | The id of an existing CDN endpoint |
| ttl | <code>number</code> | The amount of time (seconds) the content is cached by the CDN's edge servers. |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="cdnEndpointDelete"></a>

## cdnEndpointDelete(endpointId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Delete a specific CDN endpoint
Info: [delete-a-cdn-endpoint](https://developers.digitalocean.com/documentation/v2/#delete-a-cdn-endpoint)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| endpointId | <code>string</code> | The id of an existing CDN endpoint |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="cdnEndpointPurgeCache"></a>

## cdnEndpointPurgeCache(endpointId, files, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Purge cached content from a CDN endpoint
Info: [purge-the-cache-for-an-existing-cdn-endpoint](https://developers.digitalocean.com/documentation/v2/#purge-the-cache-for-an-existing-cdn-endpoint)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| endpointId | <code>string</code> | The id of an existing CDN endpoint |
| files | <code>Array</code> | An array of strings containing the path to the content to be purged from the CDN cache |
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
Info: [create-a-new-floating-ip-reserved-to-a-region](https://developers.digitalocean.com/documentation/v2/#create-a-new-floating-ip-reserved-to-a-region)

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

<a name="certificates"></a>

## certificates([query], [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get All Certificates
Info: [certificates](https://developers.digitalocean.com/documentation/v2/#list-all-certificates)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| [query] | <code>object</code> | Optional query parameters |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="certificatesCreate"></a>

## certificatesCreate(certificateData, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Create A Certificate
Info: [certificates-create-new](https://developers.digitalocean.com/documentation/v2/#create-a-new-certificate)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| certificateData | <code>object</code> | Certificate Creation Data |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="certificatesGetById"></a>

## certificatesGetById([callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get Certificate By Id
Info: [certificates-get-by-id](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-certificate)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="certificatesDeleteById"></a>

## certificatesDeleteById([callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Delete Certificate By Id
Info: [certificates-delete-by-id](https://developers.digitalocean.com/documentation/v2/#delete-a-certificate)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="databases"></a>

## databases([query], [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get All Database clusters
Info: [list-all-database-clusters](https://developers.digitalocean.com/documentation/v2/#list-all-database-clusters)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| [query] | <code>object</code> | Optional query parameters |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="databasesCreate"></a>

## databasesCreate([clusterData], [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Create a database cluster
Info: [create-a-new-database-cluster](https://developers.digitalocean.com/documentation/v2/#create-a-new-database-cluster)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| [clusterData] | <code>object</code> | Database cluster creation data |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="databasesGet"></a>

## databasesGet([clusterId], callback) ⇒ <code>Promise</code> \| <code>undefined</code>
Retrieve an existing Database cluster
Info: [retrieve-an-existing-database-cluster](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-database-cluster)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| [clusterId] | <code>string</code> | The database cluster ID |
| callback | <code>\*</code> | Optional function to execute on completion |

<a name="databasesResize"></a>

## databasesResize(clusterId, configuration, callback) ⇒ <code>Promise</code> \| <code>undefined</code>
Resize a database cluster
Info: [resize-a-database-cluster](https://developers.digitalocean.com/documentation/v2/#resize-a-database-cluster)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | The database cluster ID |
| configuration | <code>Object</code> | The configuration required to resize the cluster |
| callback | <code>\*</code> | Optional function to execute on completion |

<a name="databasesMigrate"></a>

## databasesMigrate(clusterId, region, callback) ⇒ <code>Promise</code> \| <code>undefined</code>
Migrate a database cluster to a new region
Info: [migrate-a-database-cluster-to-a-new-region](https://developers.digitalocean.com/documentation/v2/#migrate-a-database-cluster-to-a-new-region)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | The database cluster ID |
| region | <code>string</code> | The slug identifier for the region |
| callback | <code>\*</code> | Optional function to execute on completion |

<a name="databasesMaintenance"></a>

## databasesMaintenance(clusterId, configuration, callback) ⇒ <code>Promise</code> \| <code>undefined</code>
Cofigure a database cluster's maintenance window
Info: [configure-a-database-cluster-s-maintenance-window](https://developers.digitalocean.com/documentation/v2/#configure-a-database-cluster-s-maintenance-window)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | The database cluster ID |
| configuration | <code>Object</code> | The configuration required to perform maintenance |
| callback | <code>\*</code> | Optional function to execute on completion |

<a name="databasesGetBackups"></a>

## databasesGetBackups(clusterId, callback) ⇒ <code>Promise</code> \| <code>undefined</code>
List all of the available backups of a database cluster
Info: [list-backups-for-a-database-cluster](https://developers.digitalocean.com/documentation/v2/#list-backups-for-a-database-cluster)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | The databases cluster ID |
| callback | <code>\*</code> | Optional function to execute on completion |

<a name="databasesRestore"></a>

## databasesRestore(configuration, callback) ⇒ <code>Promise</code> \| <code>undefined</code>
Create a new database cluster based on backup of an existing cluster
Info: [restore-from-a-database-cluster-backup](https://developers.digitalocean.com/documentation/v2/#restore-from-a-database-cluster-backup)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| configuration | <code>Object</code> | The configuration required to restore a database cluster |
| callback | <code>\*</code> | Optional function to execute on completion |

<a name="databasesDelete"></a>

## databasesDelete(clusterId, callback) ⇒ <code>Promise</code> \| <code>undefined</code>
Destroy a database cluster
Info: [destroy-a-database-cluster](https://developers.digitalocean.com/documentation/v2/#destroy-a-database-cluster)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | The database cluster ID |
| callback | <code>\*</code> | Optional function to execute on completion |

<a name="databasesCreateReplica"></a>

## databasesCreateReplica(clusterId, configuration, callback) ⇒ <code>Promise</code> \| <code>undefined</code>
Create a read-only replica of the database
Info: [create-a-read-only-replica](https://developers.digitalocean.com/documentation/v2/#create-a-read-only-replica)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | The database cluster ID |
| configuration | <code>Object</code> | The configuration to create a replica |
| callback | <code>\*</code> | Optional function to execute on completion |

<a name="databasesGetReplica"></a>

## databasesGetReplica(clusterId, replicaName, callback) ⇒ <code>Promise</code> \| <code>undefined</code>
Retrieve an existing read-only replica
Info: [retrieve-an-existing-read-only-replica](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-read-only-replica)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | The database cluster ID |
| replicaName | <code>string</code> | The existing database replica name |
| callback | <code>\*</code> | Optional function to execute on completion |

<a name="databasesReplicaGetAll"></a>

## databasesReplicaGetAll(clusterId, callback) ⇒ <code>Promise</code> \| <code>undefined</code>
List all of the read-only replicas associated with a database cluster
Info: [list-all-read-only-replicas](https://developers.digitalocean.com/documentation/v2/#list-all-read-only-replicas)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | The database cluster ID |
| callback | <code>\*</code> | Optional function to execute on completion |

<a name="databasesDeleteReplica"></a>

## databasesDeleteReplica(clusterId, replicaName, callback) ⇒ <code>Promise</code> \| <code>undefined</code>
Destroy a specific read-only replica
Info: [destroy-a-read-only-replica](https://developers.digitalocean.com/documentation/v2/#destroy-a-read-only-replica)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | The database cluster ID |
| replicaName | <code>string</code> | The existing database replica name |
| callback | <code>\*</code> | Optional function to execute on completion |

<a name="databasesCreateUser"></a>

## databasesCreateUser(clusterId, username, callback) ⇒ <code>Promise</code> \| <code>undefined</code>
Add a database user
Info: [add-a-database-user](https://developers.digitalocean.com/documentation/v2/#add-a-database-user)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | The database cluster ID |
| username | <code>string</code> | The name to give the database user |
| callback | <code>\*</code> | Optional function to execute on completion |

<a name="databasesGetUser"></a>

## databasesGetUser(clusterId, username, callback) ⇒ <code>Promise</code> \| <code>undefined</code>
Get information about an existing database user
Info: [retrieve-an-existing-database-user](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-database-user)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | The database cluster ID |
| username | <code>string</code> | The name of the database user |
| callback | <code>\*</code> | Optional function to execute on completion |

<a name="databasesUsersGetAll"></a>

## databasesUsersGetAll(clusterId, callback) ⇒ <code>Promise</code> \| <code>undefined</code>
List all the users of a database cluster
Info: [list-all-database-users](https://developers.digitalocean.com/documentation/v2/#list-all-database-users)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | The database cluster ID |
| callback | <code>\*</code> | Optional function to execute on completion |

<a name="databasesDeleteUser"></a>

## databasesDeleteUser(clusterId, username, callback) ⇒ <code>Promise</code> \| <code>undefined</code>
Remove a database user
Info: [remove-a-database-user](https://developers.digitalocean.com/documentation/v2/#remove-a-database-user)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | The database cluster ID |
| username | <code>string</code> | The name of the database user |
| callback | <code>\*</code> | Optional function to execute on completion |

<a name="databasesCreateDB"></a>

## databasesCreateDB(clusterId, databaseName, callback) ⇒ <code>Promise</code> \| <code>undefined</code>
Add a new database to an existing cluster
Info: [add-a-new-database](https://developers.digitalocean.com/documentation/v2/#add-a-new-database)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | The database cluster ID |
| databaseName | <code>string</code> | The name to give the database |
| callback | <code>\*</code> | Optional function to execute on completion |

<a name="databasesGetDB"></a>

## databasesGetDB(clusterId, databaseName, callback) ⇒ <code>Promise</code> \| <code>undefined</code>
Get information about an existing database cluster
Info: [retrieve-an-existing-database](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-database)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | The database cluster ID |
| databaseName | <code>string</code> | The name of the database |
| callback | <code>\*</code> | Optional function to execute on completion |

<a name="databasesDeleteDB"></a>

## databasesDeleteDB(clusterId, databaseName, callback) ⇒ <code>Promise</code> \| <code>undefined</code>
Delete a specific database
Info: [delete-a-database](https://developers.digitalocean.com/documentation/v2/#delete-a-database)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | The database cluster ID |
| databaseName | <code>string</code> | The name of the database |
| callback | <code>\*</code> | Optional function to execute on completion |

<a name="databasesDBGetAll"></a>

## databasesDBGetAll(clusterId, callback) ⇒ <code>Promise</code> \| <code>undefined</code>
List all of the databases in a cluster
Info: [list-all-databases](https://developers.digitalocean.com/documentation/v2/#list-all-databases)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | The database cluster ID |
| callback | <code>\*</code> | Optional function to execute on completion |

<a name="databasesCreatePool"></a>

## databasesCreatePool(clusterId, configuration, callback) ⇒ <code>Promise</code> \| <code>undefined</code>
Add a new connection pool
Info: [add-a-new-connection-pool](https://developers.digitalocean.com/documentation/v2/#add-a-new-connection-pool)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | The database cluster ID |
| configuration | <code>Object</code> | The configuration for a new connection pool |
| callback | <code>\*</code> | Optional function to execute on completion |

<a name="databasesPoolGetAll"></a>

## databasesPoolGetAll(clusterId, callback) ⇒ <code>Promise</code> \| <code>undefined</code>
List all of the connection pools
Info: [list-all-connection-pools](https://developers.digitalocean.com/documentation/v2/#list-all-connection-pools)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | The database cluster ID |
| callback | <code>\*</code> | Optional function to execute on completion |

<a name="databasesGetPool"></a>

## databasesGetPool(clusterId, poolName, callback) ⇒ <code>Promise</code> \| <code>undefined</code>
Get information about an existing connection pool
Info: [ retrieve-an-existing-connection-pool](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-connection-pool)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | The database cluster ID |
| poolName | <code>string</code> | The name of the pool |
| callback | <code>\*</code> | Optional function to execute on completion |

<a name="databasesDeletePool"></a>

## databasesDeletePool(clusterId, poolName, callback) ⇒ <code>Promise</code> \| <code>undefined</code>
Delete a specific connection pool
Info: [delete-a-connection-pool](https://developers.digitalocean.com/documentation/v2/#delete-a-connection-pool)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | The database cluster ID |
| poolName | <code>string</code> | The name of the pool |
| callback | <code>\*</code> | Optional function to execute on completion |

<a name="kubernetes"></a>

## kubernetes([query], [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get All Kubernetes Clusters
Info: [kubernetes-get-clusters](https://developers.digitalocean.com/documentation/v2/#list-all-kubernetes-clusters)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| [query] | <code>object</code> | Optional query parameters |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="kubernetesCreateCluster"></a>

## kubernetesCreateCluster(clusterData, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Create a Kubernetes Cluster
Info: [kubernetes-create-cluster](https://developers.digitalocean.com/documentation/v2/#create-a-new-kubernetes-cluster)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterData | <code>object</code> | Cluster creation data |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="kubernetesClusterGet"></a>

## kubernetesClusterGet(clusterId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get A Single Kubernetes Cluster
Info: [kubernetes-cluster-get-by-id](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-kubernetes-cluster)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | Id of the Cluster to get |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="kubernetesClusterDelete"></a>

## kubernetesClusterDelete(clusterId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Delete a Kubernetes Cluster
Info: [kubernetes-cluster-delete](https://developers.digitalocean.com/documentation/v2/#delete-a-kubernetes-cluster)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | Id of the Cluster to delete |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="kubernetesClusterGetConfig"></a>

## kubernetesClusterGetConfig(clusterId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get the kubeconfig for a Cluster
Info: [kubernetes-cluster-get-config](https://developers.digitalocean.com/documentation/v2/#retrieve-the-kubeconfig-for-a-kubernetes-cluster)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | Id of the Cluster to get the Kubeconfig for |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="kubernetesNodePools"></a>

## kubernetesNodePools(clusterId, [query], [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get the NodePools for a Cluster
Info: [kubernetes-get-node-pools](https://developers.digitalocean.com/documentation/v2/#list-all-node-pools-in-a-kubernetes-clusters)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | The Id of the Cluster |
| [query] | <code>object</code> | Optional query parameters |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="kubernetesNodePoolGet"></a>

## kubernetesNodePoolGet(clusterId, nodePoolId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get a NodePool on a Cluster by Id
Info: [kubernetes-cluster-get-nodepool-by-id](https://developers.digitalocean.com/documentation/v2/#retrieve-a-node-pool-for-a-kubernetes-cluster)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | Id of the Cluster |
| nodePoolId | <code>string</code> | Id of the NodePool to retrieve |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="kubernetesNodePoolAdd"></a>

## kubernetesNodePoolAdd(clusterId, nodePoolId, nodePoolConfiguration, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Add a NodePool on a Cluster
Info: [kubernetes-cluster-add-node-pool](https://developers.digitalocean.com/documentation/v2/#add-a-node-pool-to-a-kubernetes-cluster)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | Id of the Cluster |
| nodePoolId | <code>string</code> | Id of the NodePool to delete |
| nodePoolConfiguration | <code>object</code> | The NodePool creation data |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="kubernetesNodePoolUpdate"></a>

## kubernetesNodePoolUpdate(clusterId, nodePoolId, nodePoolConfiguration, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Update a NodePool on a Cluster
Info: [kubernetes-cluster-update-node-pool](https://developers.digitalocean.com/documentation/v2/#update-a-node-pool-in-a-kubernetes-cluster)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | Id of the Cluster |
| nodePoolId | <code>string</code> | Id of the NodePool to delete |
| nodePoolConfiguration | <code>object</code> | The update data |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="kubernetesNodePoolDelete"></a>

## kubernetesNodePoolDelete(clusterId, nodePoolId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Delete a NodePool from a Cluster
Info: [kubernetes-cluster-delete-node-pool](https://developers.digitalocean.com/documentation/v2/#delete-a-node-pool-in-a-kubernetes-cluster)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | Id of the Cluster |
| nodePoolId | <code>string</code> | Id of the NodePool to delete |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="kubernetesNodesRecycle"></a>

## kubernetesNodesRecycle(clusterId, nodePoolId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Recycle the NodePool of a Kubernetes Cluster
Info: [kubernetes-cluster-recycle](https://developers.digitalocean.com/documentation/v2/#recycle-nodes-in-a-kubernetes-cluster)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| clusterId | <code>string</code> | Id of the Cluster to cycle |
| nodePoolId | <code>string</code> | Id of the NodePool to cycle |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="kubernetesAvailability"></a>

## kubernetesAvailability([callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get Kubernetes availability
Info: [kubernetes-get-availability](https://developers.digitalocean.com/documentation/v2/#list-available-regions--node-sizes--and-versions-of-kubernetes)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="projects"></a>

## projects([query], [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get All Projects
Info: [projects](https://developers.digitalocean.com/documentation/v2/#list-all-projects)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| [query] | <code>object</code> | Optional query parameters |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="projectsCreate"></a>

## projectsCreate(projectData, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Create a Project
Info: [projects-create](https://developers.digitalocean.com/documentation/v2/#create-a-project)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| projectData | <code>object</code> | Project creation data |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="projectsUpdate"></a>

## projectsUpdate(projectId, projectData, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Update A Project
Info: [projects-update](https://developers.digitalocean.com/documentation/v2/#update-a-project)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| projectId | <code>string</code> | The Project Id to get |
| projectData | <code>object</code> | The Update Data |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="projectsPatch"></a>

## projectsPatch(projectId, projectData, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Patch A Project
Info: [projects-patch](https://developers.digitalocean.com/documentation/v2/#patch-a-project)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| projectId | <code>string</code> | The Project Id to get |
| projectData | <code>object</code> | The Patch Data |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="projectsGet"></a>

## projectsGet(projectId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get A Project
Info: [projects-get-by-id](https://developers.digitalocean.com/documentation/v2/#retrieve-an-existing-project)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| projectId | <code>string</code> | The Project Id to get |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="projectsGetResources"></a>

## projectsGetResources(projectId, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get Project Resources
Info: [list-all-resources](https://developers.digitalocean.com/documentation/v2/#list-all-resources)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| projectId | <code>string</code> | The Project Id to get |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="projectsGetDefault"></a>

## projectsGetDefault([callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Get The Default Project
Info: [projects-get-default](https://developers.digitalocean.com/documentation/v2/#retrieve-the-default-project)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="projectsUpdateDefault"></a>

## projectsUpdateDefault(projectData, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Update The Default Project
Info: [projects-default-update](https://developers.digitalocean.com/documentation/v2/#update-the-default-project)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| projectData | <code>object</code> | The Update Data |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="projectsPatchDefault"></a>

## projectsPatchDefault(projectData, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Patch The Default Project
Info: [projects-default-patch](https://developers.digitalocean.com/documentation/v2/#patch-the-default-project)

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if [callback] is not defined  

| Param | Type | Description |
| --- | --- | --- |
| projectData | <code>object</code> | The Patch Data |
| [callback] | <code>\*</code> | Optional function to execute on completion |

