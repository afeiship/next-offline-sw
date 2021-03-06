# next-offline-sw
> Offline plugin for service worker runtime helper.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-offline-sw
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
import NxOfflineSw from '@jswork/next-offline-sw';

// code goes here:
NxOfflineSw.install();
```

## resources
- https://github.com/NekR/offline-plugin/blob/master/docs/updates.md
- https://stackoverflow.com/questions/33704791/how-do-i-uninstall-a-service-worker
## license
Code released under [the MIT license](https://github.com/afeiship/next-offline-sw/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-offline-sw
[version-url]: https://npmjs.org/package/@jswork/next-offline-sw

[license-image]: https://img.shields.io/npm/l/@jswork/next-offline-sw
[license-url]: https://github.com/afeiship/next-offline-sw/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-offline-sw
[size-url]: https://github.com/afeiship/next-offline-sw/blob/master/dist/next-offline-sw.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-offline-sw
[download-url]: https://www.npmjs.com/package/@jswork/next-offline-sw
