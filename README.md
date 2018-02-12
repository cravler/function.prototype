# function.prototype

Function prototype extensions

## Install

This package depends on [Node.js](http://nodejs.org/).

```sh
$ npm install function.prototype
```

## Usage

### isGenerator

```js
var fpt = require('function.prototype');

fpt.isGenerator(function * () {}); // true
fpt.isGenerator(function () {}); // false

// or

fpt.isGenerator.shim();

function * () {}.isGenerator(); // true
function () {}.isGenerator(); // false
```

### promisify

```js
var fpt = require('function.prototype');

fpt.promisify(function * (key) { return key }).call(null, 'key').then(function(key) {}, function(err) {});
fpt.promisify(function (key, cb) { cb(null, key) }).call(null, 'key').then(function(key) {}, function(err) {});

// or

fpt.promisify.shim();

function * (key) { return key }.promisify().call(null, 'key').then(function(key) {}, function(err) {});
function (key, cb) { cb(null, key) }.promisify().call(null, 'key').then(function(key) {}, function(err) {});
```

## License

This software is under the MIT license. See the complete license in:

```
LICENSE
```