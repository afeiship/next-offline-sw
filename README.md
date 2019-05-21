# next-offline-sw
> Offline plugin for service worker runtime helper.

## install
```bash
npm install -S afeiship/next-offline-sw --registry=https://registry.npm.taobao.org
```

## apis
| api       | params  | description                |
| --------- | ------- | -------------------------- |
| install   | options | Install with sevice worker |
| uninstall | -       | Remove all sevice worker   |

## usage
```js
import NxOfflineSw from 'next-offline-sw';

// code goes here:
NxOfflineSw.install();
```

## resources
- https://github.com/NekR/offline-plugin/blob/master/docs/updates.md
- https://stackoverflow.com/questions/33704791/how-do-i-uninstall-a-service-worker
