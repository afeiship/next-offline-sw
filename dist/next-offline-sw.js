/*!
 * name: next-offline-sw
 * url: https://github.com/afeiship/next-offline-sw
 * version: 1.0.0
 * date: 2019-06-20T07:50:50.962Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var NAV = global.navigator;
  var runtime = require('offline-plugin/runtime');
  var DEFAULT_OPTIONS = {
    onUpdateReady: function() {
      console.warn(
        'SW Event:',
        'You need to call `nx.OfflineSw.applyUpdate` to update resource when [onUpdated].'
      );
    }
  };

  var NxOfflineSw = nx.declare('nx.OfflineSw', {
    statics: {
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
      update: function() {
        var self = this;
        return new Promise(function(resolve) {
          self.applyUpdate(function() {
            setTimeout(function() {
              self.refresh();
            }, 1000);
          });
        });
      },
      refresh: function() {
        global.location.reload();
      },
      applyUpdate: function() {
        runtime.applyUpdate();
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxOfflineSw;
  }
})();

//# sourceMappingURL=next-offline-sw.js.map
