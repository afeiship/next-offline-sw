/*!
 * name: next-offline-sw
 * url: https://github.com/afeiship/next-offline-sw
 * version: 1.0.0
 * date: 2019-06-20T07:18:02.735Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var NAV = global.navigator;
  var runtime = require('offline-plugin/runtime');
  var DEFAULT_OPTIONS = {
    onUpdateReady: function() {
      nx.OfflineSw.updated = false;
      console.warn(
        'SW Event:',
        'You need to call `nx.OfflineSw.applyUpdate` to update resource when [onUpdated].'
      );
    }
  };

  var NxOfflineSw = nx.declare('nx.OfflineSw', {
    statics: {
      updated: false,
      runtime: runtime,
      install: function(inOptions) {
        var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
        runtime.install(options);
      },
      uninstall: function() {
        NAV.serviceWorker.getRegistrations().then(function(registrations) {
          registrations.forEach(function(registration) {
            registration.unregister();
          });
        });
      },
      refresh: function() {
        global.location.reload();
      },
      applyUpdate: function(inCallback) {
        runtime.applyUpdate();
        this.updated = true;
        inCallback();
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxOfflineSw;
  }
})();

//# sourceMappingURL=next-offline-sw.js.map
