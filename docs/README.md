**[do-wrapper](README.md)**

> [Globals](globals.md)

# do-wrapper

A Node.js wrapper for the Digital Ocean v2 API

[![Build Status](https://travis-ci.org/matt-major/do-wrapper.svg?branch=master)](https://travis-ci.org/matt-major/do-wrapper)
[![Dependencies](https://david-dm.org/matt-major/do-wrapper.svg)](https://www.npmjs.com/package/do-wrapper)
[![Downloads](https://img.shields.io/npm/dm/do-wrapper.svg)](https://www.npmjs.com/package/do-wrapper)
[![Known Vulnerabilities](https://snyk.io/test/github/matt-major/do-wrapper/badge.svg?targetFile=package.json)](https://snyk.io/test/github/matt-major/do-wrapper?targetFile=package.json)

## Install

`do-wrapper` is available on the `npm` repository and as such, can be installed with `npm`.

To install `do-wrapper` and add it to your `package.json`, use the following command:

```sh
$ npm install --save do-wrapper
```

## Usage

In order to use the library, you'll first need to provision a `Personal Access Token` for your Digital Ocean account.

Once you've got a `Personal Access Token`, make a note of this somewhere safe, as you won't be able to view it again.

In your project, initialise a new instance of the Digital Ocean wrapper:

```js
const DigitalOcean = require("do-wrapper").default;
// oe
import DigitalOcean from "do-wrapper";

const instance = new DigitalOcean('{personal_access_token}');
```

Once you've created an instance, you can use it to access the many groups of features provided by the wrapper, like so:

```js
instance.account.get()
    .then(data => console.log(data))
    .catch(err => console.error(err));
```
**Note:** you can view the data behind the error by accessing `err.response`, this is provided by the underlying request library

The available features are:

* `account`
* `actions`
* `cdn`
* `certificates`
* `databases`
* `domains`
* `droplets`
* `firewalls`
* `floatingIPs`
* `images`
* `keys`
* `kubernetes`
* `loadBalancers`
* `projects`
* `regions`
* `reports`
* `sizes`
* `snapshots`
* `tags`
* `volumes`

## License

The MIT License (MIT)

Copyright (c) 2020 Matt Major

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
