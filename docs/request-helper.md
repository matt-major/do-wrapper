## Functions

<dl>
<dt><a href="#request">request(options, [callback])</a> ⇒ <code>Promise</code> | <code>undefined</code></dt>
<dd><p>Check the required Request &amp; Trigger</p>
</dd>
<dt><a href="#submitRequest">submitRequest(options, callback)</a></dt>
<dd><p>Submit the Request</p>
</dd>
<dt><a href="#isSuccessfulRequest">isSuccessfulRequest(statusCode)</a> ⇒ <code>boolean</code></dt>
<dd><p>Validate the Response Status Code</p>
</dd>
<dt><a href="#getAllPages">getAllPages(key, options, callback)</a></dt>
<dd><p>Get All Pages</p>
</dd>
<dt><a href="#getRemainingPages">getRemainingPages(options, first, last, callback)</a></dt>
<dd><p>Get the Remaining Pages</p>
</dd>
<dt><a href="#requestBuilder">requestBuilder(options)</a> ⇒ <code>*</code></dt>
<dd><p>Build Options for Request</p>
</dd>
</dl>

<a name="request"></a>

## request(options, [callback]) ⇒ <code>Promise</code> \| <code>undefined</code>
Check the required Request & Trigger

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>undefined</code> - - Returns a promise if callback is not defined  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>\*</code> | Request Options |
| [callback] | <code>\*</code> | Optional function to execute on completion |

<a name="submitRequest"></a>

## submitRequest(options, callback)
Submit the Request

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>\*</code> | Request Options Object |
| callback | <code>\*</code> | Function to execute on completion |

<a name="isSuccessfulRequest"></a>

## isSuccessfulRequest(statusCode) ⇒ <code>boolean</code>
Validate the Response Status Code

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| statusCode | <code>number</code> | The Status Code |

<a name="getAllPages"></a>

## getAllPages(key, options, callback)
Get All Pages

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Type of Item |
| options | <code>\*</code> | Request Options |
| callback | <code>\*</code> | Function to execute on completion |

<a name="getRemainingPages"></a>

## getRemainingPages(options, first, last, callback)
Get the Remaining Pages

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>\*</code> | Request Options |
| first | <code>number</code> | The first page to retrieve |
| last | <code>number</code> | The last page to retrieve |
| callback | <code>\*</code> | Function to execute on completion |

<a name="requestBuilder"></a>

## requestBuilder(options) ⇒ <code>\*</code>
Build Options for Request

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>\*</code> | Options Object |

