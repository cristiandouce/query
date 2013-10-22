
# query

  X-Browser DOM element query supported by [sizzle](https://github.com/cristiandouce/sizzle)

## Installation

  Install with [component(1)](http://component.io):

    $ component install cristiandouce/query

## API

```
var o = require('query');

// Query single elements
var container = o('#container'); // 'div#container'

var firstItem = o('ul li'); // 'ul li'

// Query all matching elements
var fullItems = o.all('ul li'); // ['ul li', 'ul li', ...]
```

## License

  MIT
