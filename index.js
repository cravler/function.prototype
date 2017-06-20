'use strict';

var co = require('co');
var utilPromisify = require('util.promisify');

function shimFunctionPrototype (name, fn) {
    if (!Function.prototype[name]) {
        Function.prototype[name] = fn;
    }
}

function isGenerator (fn) {
    return (fn instanceof (function * () {}).constructor);
}
isGenerator.shim = function shim (name) {
    shimFunctionPrototype(name || 'isGenerator', function () {
        return isGenerator(this);
    });
};

function promisify (fn) {
    if (isGenerator(fn)) {
        return co.wrap(fn);
    }
    return utilPromisify(fn);
}
promisify.shim = function shim (name) {
    shimFunctionPrototype(name || 'promisify', function () {
        return promisify(this);
    });
};

module.exports = {
    isGenerator: isGenerator,
    promisify: promisify
};
