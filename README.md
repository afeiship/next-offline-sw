# next-offline-sw
> Offline plugin for service worker runtime helper.

## install
```bash
npm install -S @feizheng/next-offline-sw
```

## apis
| api         | params  | description                                                           |
| ----------- | ------- | --------------------------------------------------------------------- |
| disabled    |         | You can implement it in your project(default: window.__SW_DISABLED__) |
| install     | options | Install with sevice worker                                            |
| uninstall   | -       | Remove all sevice worker                                              |
| update      | -       | ApplyUpdate & delay refresh                                           |
| applyUpdate | -       | Apply new resource                                                    |
| refresh     | -       | Global.reload                                                         |


## usage
```js
import NxOfflineSw from '@feizheng/next-offline-sw';

// code goes here:
NxOfflineSw.install();
```

## resources
- https://github.com/NekR/offline-plugin/blob/master/docs/updates.md
- https://stackoverflow.com/questions/33704791/how-do-i-uninstall-a-service-worker
