var assert = require('assert');
describe('Array1', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});



var should = require('should');
describe('Array2', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      [1,2,3].indexOf(5).should.eql(-1);
      [1,2,3].indexOf(0).should.eql(-1);
    });
  });
});