# caroot

Replaces a caret with the root path (closest package.json)

# Usage

caroot(caretedPath, currentPath[, rootSubDirectory])

```javascript

var caroot = require('caroot');

// assume we are 2 levels deeper than package.json

caroot('^foo', __dirname);

// returns '../../foo'


// also takes an optional root sub directory

caroot('^foo', __dirname, './scripts');

// returns '../foo'

```
