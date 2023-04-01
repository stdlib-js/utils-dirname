<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# dirname

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a [directory name][dirname].



<section class="usage">

## Usage

```javascript
import dirname from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-dirname@deno/mod.js';
```

#### dirname( path )

Returns a [directory name][dirname].

```javascript
var dir = dirname( './foo/bar/index.js' );
// returns './foo/bar'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var statSync = require( 'fs' ).statSync;
var path = require( 'path' );
var readDir = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/fs-read-dir' ).sync;
import dirname from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-dirname@deno/mod.js';

var files;
var fpath;
var base;
var stat;
var dir;
var i;

base = path.resolve( __dirname, '..' );
files = readDir( base );

for ( i = 0; i < files.length; i++ ) {
    fpath = path.join( base, files[ i ] );
    stat = statSync( fpath );
    if ( !stat.isDirectory() ) {
        dir = dirname( fpath );
        console.log( '%s --> %s', fpath, dir );
    }
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-extname`][@stdlib/utils/extname]</span><span class="delimiter">: </span><span class="description">return a filename extension.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-dirname.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-dirname

[test-image]: https://github.com/stdlib-js/utils-dirname/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-dirname/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-dirname/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-dirname?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-dirname.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-dirname/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-dirname/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-dirname/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-dirname/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-dirname/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-dirname/main/LICENSE

[dirname]: https://en.wikipedia.org/wiki/Dirname

<!-- <related-links> -->

[@stdlib/utils/extname]: https://github.com/stdlib-js/utils-extname/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
