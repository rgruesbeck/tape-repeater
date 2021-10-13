# tape-repeater
Stream [tape](https://github.com/substack/tape) to the terminal from anywhere.

## example
Setup `tape-repeater` as the TAP reporter in your browser code.
```js
var test = require('tape');
var repeater = require('tape-repeater');

repeater(test);

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

### print output in console
set `options.log` to `true`
```js
// require...

repeater(test, { log: true });
```

### test/listen remotely
change the listener URL to an ip address you want to listen from.
```js
// require...

repeater(test, { ip: '198.168.1.2' });
```

start listener on machine @ 198.168.1.2
```sh
tape-repeater
```

## API
```js 
repeater(test, {options})
```
* `options` is an object with the following optional properties:
  + `ip: 'localhost'` ip address of the listener or your own server.
  + `port: '9090'` port of the listener.
  + `log: false` if repeater should also log tape output to the console.
