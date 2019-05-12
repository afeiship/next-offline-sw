(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var runtime = require('offline-plugin/runtime');
  var DEFAULT_OPTIONS = {
    onUpdateReady: function() {
      console.log('SW Event:', 'onUpdateReady');
      runtime.applyUpdate();
    }
  };

  var NxOfflineSw = nx.declare('nx.OfflineSw', {
    statics: {
      install: function(inOptions) {
        var options = nx.mix(DEFAULT_OPTIONS, inOptions);
        runtime.install(options);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxOfflineSw;
  }
})();
