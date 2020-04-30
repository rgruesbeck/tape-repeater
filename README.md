# tape-repeater
Stream [tape](https://github.com/substack/tape) output back to the terminal.

## example
Setup `tape-repeater` as the TAP reporter in your browser code.
```js
var test = require('tape');
var repeater = require('tape-repeater');

var listener = 'ws://localhost:8080';
repeater(test, listener);

// tests...
```

Start the listener.
```sh
tape-repeater
```

## usage

### pipe output to a [TAP reporter](https://github.com/substack/tape#pretty-reporters)
pipe the output of `tap-repeater` to a pretty reporter.
```sh
tap-repeater | tap-difflet
```

### test/listen remotely
change the listener URL to an ip address you want to listen from.
```js
// require...

var listener = 'ws://198.168.1.2:8080';
repeater(test, listener);
```

start listener on machine @ 198.168.1.2
```sh
tape-repeater
```

