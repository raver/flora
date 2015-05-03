/**
 * Created by yu on 5/3/15.
 */

var should = require("should");
var assert = require("assert");
var threeSeconds = require("seconds");

describe('Test Framework', function () {
    it("should have mocha installed and running", function () {
        assert.equal(true, true);
    })
    it("should have should library installed and for fluent testing", function () {
        true.should.eql(true);
    })
})