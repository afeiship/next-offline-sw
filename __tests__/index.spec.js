(function() {
  var nx = require('@feizheng/next-js-core2');
  var NxOfflineSw = require('../src/next-offline-sw');

  describe('NxOfflineSw.methods', function() {
    test('init', function() {
      var data = {
        key: 1,
        value: 2
      };
      expect(!!data).toBe(true);
    });
  });
})();
