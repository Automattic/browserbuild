
# Browserbuild

## The simple solution to Node.JS/browser interoperatibility

Browserbuild solves the same problem everyone wants to solve: how do I make a
module interoperable between the server and client?

It takes 3 easy steps

### Step 1: write for Node

**world.js**
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
$ browserbuild world .
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
