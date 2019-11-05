var expect = require('chai').expect;
var index = require('./index');

describe('names', function () {
  describe('all', function () {
    it('should be an array', function () {
      expect(index.all).to.satisfy(isArrayOfStings);
      function isArrayOfStings(array){
        return array.every(function (item) {
          return typeof item === 'string';
        });
      }
    });
  });
});