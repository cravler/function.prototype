'use strict';

var fpt = require('./index');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var assert = chai.assert;

describe('function.prototype', function () {

    it('isGenerator', function () {
        assert.equal(fpt.isGenerator(function * () {}), true);
        assert.equal(fpt.isGenerator(function () {}), false);
    });

    it('promisify', function () {
        return Promise.all([
            assert.eventually.equal(fpt.promisify(function * (key) { return key }).call(null, 'key'), 'key'),
            assert.eventually.equal(fpt.promisify(function (key, cb) { cb(null, key) }).call(null, 'key'), 'key')
        ]);
    });

});
