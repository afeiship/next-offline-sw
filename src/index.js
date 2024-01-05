import nx from '@jswork/next';

const NAV = global.navigator;
const runtime = require('offline-plugin/runtime');
const DEFAULT_OPTIONS = {
  onUpdateReady: function () {
    console.warn(
      'SW Event:',
      'You need to call `nx.OfflineSw.applyUpdate` to update resource when [onUpdated].'
    );
  }
};

const NxOfflineSw = nx.declare('nx.OfflineSw', {
  statics: {
    runtime: runtime,
    disabled: function () {
      return global.__SW_DISABLED__;
    },
    install: function (inOptions) {
      if (this.disabled()) return;
      const options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
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
      const self = this;
      const delay = inDelay || 300;
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

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = NxOfflineSw;
}

export default NxOfflineSw;
