// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-dirname@esm/index.mjs";var r=t.isPrimitive,i=s,n=e.REGEXP;var m=function(t){if(!r(t))throw new TypeError(i("invalid argument. Path must be a string. Value: `%s`.",t));return n.exec(t)[1]};export{m as default};
//# sourceMappingURL=index.mjs.map
