# is-pm2

[![NPM downloads][downloads-image]][downloads-url]
[![Travis build status][travis-image]][travis-url]
[![Appveyor build status][appveyor-image]][appveyor-url]
[![Coveralls coverage status][coveralls-image]][coveralls-url]
[![JavaScript Style Guide][javascript-standard-image]][javascript-standard-url]

> Detect if your code is running under PM2.

## Install

```
$ npm install --save is-pm2
```

## Usage

```js
const isPm2 = require('is-pm2');

isPm2('unicorns');
//=> 'unicorns & rainbows & sindresorhus'
```

## API

### isPm2(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.

## License

MIT © [Leo Lozach](https://github.com/Leelow)

[npm-version-image]: https://img.shields.io/v/is-pm2.svg
[npm-version-url]: https://www.npmjs.com/package/is-pm2
[downloads-image]: https://img.shields.io/npm/dt/is-pm2.svg?maxAge=3600
[downloads-url]: https://www.npmjs.com/package/is-pm2
[appveyor-image]: https://ci.appveyor.com/api/projects/status/github/Leelow/is-pm2?svg=true&branch=master
[appveyor-url]: https://ci.appveyor.com/project/Leelow/is-pm2
[travis-image]: https://travis-ci.org/Leelow/is-pm2.svg?branch=master
[travis-url]: https://travis-ci.org/Leelow/is-pm2
[coveralls-image]: https://coveralls.io/repos/github/Leelow/is-pm2/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/Leelow/is-pm2?branch=master
[javascript-standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[javascript-standard-url]: http://standardjs.com/