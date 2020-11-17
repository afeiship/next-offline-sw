(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next-js-core2');
  var NAV = global.navigator;
  var runtime = require('offline-plugin/runtime');
  var DEFAULT_OPTIONS = {
    onUpdateReady: function () {
      console.warn(
        'SW Event:',
        'You need to call `nx.OfflineSw.applyUpdate` to update resource when [onUpdated].'
      );
    }
  };

  var NxOfflineSw = nx.declare('nx.OfflineSw', {
    statics: {
      runtime: runtime,
      disabled: function () {
        return global.__SW_DISABLED__;
      },
      install: function (inOptions) {
        if (this.disabled()) return;
        var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
        runtime.install(options);
      },
      uninstall: function () {
        NAV.serviceWorker.getRegistrations().then(function (registrations) {
          registrations.forEach(function (registration) {
            registration.unregister();
          });
        });
      },
      update: function (inDelay) {
        var self = this;
        var delay = inDelay || 300;
        this.applyUpdate();
        setTimeout(function () {
          self.refresh();
        }, delay);
      },
      refresh: function () {
        global.location.reload();
      },
      applyUpdate: function () {
        runtime.applyUpdate();
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxOfflineSw;
  }
})();
