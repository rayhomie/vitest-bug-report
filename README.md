# 1

```bash
npm i
```

# 2

```bash
npm run test
```

# 3 appear bug Error

when `"vitest": "~1.5.0"`, an error occurs :

```bash
SyntaxError: Named export 'render' not found. The requested module './node_modules/preact-render-to-string/dist/index.js' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from './node_modules/preact-render-to-string/dist/index.js';
const { render: serverRender } = pkg;
```

when `"vitest": "~1.4.0"`, Program runs normally :
