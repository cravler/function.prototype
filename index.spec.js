'use strict';

var fpt = require('./index');
var assert = require('chai').assert;

describe('function.prototype', function () {

    it('isGenerator', function () {
        assert.equal(fpt.isGenerator(function * () {}), true);
        assert.equal(fpt.isGenerator(function () {}), false);
    });

    it('promisify', function () {
        fpt.promisify(function * (key) { return key }).call(null, 'key').then(function(err, key) {
            assert.equal(null == err, true);
            assert.equal('key' == key, true);
        });

        fpt.promisify(function (key, cb) { cb(null, key) }).call(null, 'key').then(function(err, key) {
            assert.equal(null == err, true);
            assert.equal('key' == key, true);
        });
    });

});