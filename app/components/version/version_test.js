'use strict';

describe('formula.version module', function() {
  beforeEach(module('formula.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
