/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var dirname = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof dirname, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a path argument which is not a string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		null,
		NaN,
		true,
		undefined,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws error when provided '+values[i] );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			dirname( value );
		};
	}
});

tape( 'the function returns a directory name', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		'/index.js',
		'foo/bar/home.html',
		'.gitignore',
		'./.travis.yml',
		'/foo/bar/README.md'
	];

	expected = [
		'/',
		'foo/bar',
		'',
		'.',
		'/foo/bar'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( dirname( values[ i ] ), expected[ i ], values[ i ] );
	}
	t.end();
});
