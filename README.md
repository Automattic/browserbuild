
# Browserbuild

## The simple solution to Node.JS/browser interoperatibility

Browserbuild solves the same problem everyone wants to solve: how do I make a
module interoperable between the server and client?

It takes 3 easy steps

### Step 1: write for Node

```js
/**
 * Module dependencies.
 */

var a = require('./b')

/**
 * Module exports.
 */

exports.hello = function () { };
```

### Step 2: build for browser

```bash
$ browserbuild world.js
# outputs dist/world.js
```

### Step 3: use

On the server-side:

```js
require('./world').hello();
```

On the client side:

```html
<script src="/js/world.js"></script>
<script>
  world.hello();
</script>
```

## Features

- Write code like you would write for Node.JS. 
  - No wrappers
  - No `undefined` type checking for `module` or `window`.
- No new patterns
  - No AMD, no `require.async`, no CommonJS transport proposals.
  - Doesn't depend on `require` implementations on the client.
  - It exposes your module as a single global, like `jQuery`, `io`, `_`. Just
    like everyone is used to.
- No code bloat.
  - The conversion for the browser only adds a few lines of code.
  - No trouble debugging.

## Credits

- `require` functions by [Jonah Fox](https://github.com/weepy), with
  modifications by TJ Holowaychuk &lt;tj@learnboost.com&gt;
- inspired by `browserify`

## License 

(The MIT License)

Copyright (c) 2011 Guillermo Rauch &lt;guillermo@learnboost.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
