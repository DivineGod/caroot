# caroot

Replaces a caret with the root path (closest package.json)

# Usage

```javascript

var caroot = require('caroot');

// assume we are 2 levels deeper than package.json

caroot('^foo', __dirname);

// returns '../../foo'

```
