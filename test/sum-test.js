const sum = require('../sum.js');
const {expect,assert} = require('chai');

// Reference http://chaijs.com/ for questions

describe ('Sum', function() {

    it ('Should be a function', function() {
      expect(sum).to.be.a('function','sum is not a function');
      assert.isFunction(sum, 'sum is not a function');
    });

    it('Should return 0 if no arguments are passed in.', function() {
      expect(sum()).to.equal(0);
      assert.equal(sum(),0);
    });

    it('Shoud return the sum of two paramaters.', function() {
      expect(sum(1,2)).to.equal(3);
    });

    it('Should properly deal with a negative parameter.', function() {
      expect(sum(2,-5)).to.equal(-3);
    });

    it('Should sum floating point numbers.', function() {
      expect(sum(3.14, 5.63)).to.equal(8.77);
    });

    it('Should handle an array of numbers as an input.', function() {
      expect(sum([1,2,3,4])).to.equal(10);
    });
});
