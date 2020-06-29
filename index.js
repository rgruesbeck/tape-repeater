var websocket = require('websocket-stream');

function repeater(tape, opts) {
    var ip = opts.ip || 'localhost';
    var port = opts.port || '8080';
    var url = `ws://${ip}:${port}`;
    var shouldLog = /true/.test(`${opts.log}`);

    var wss = websocket(url);
    var ts = tape.createStream({ objectMode: false });

    // handle tap data
    ts.on('data', function(data) {
        // send test to server
        wss.write(data);

        // print test in console
        if (shouldLog) {
            log(data);
        }
    })
}

function log(line) {
    if (/^ok/.test(line)) {
        console.log(`%c${line}`, `color:green`);
    } else if (/^not ok/.test(line)) {
        console.log(`%c${line}`, `color:red`);
    } else {
        console.log(`%c${line}`, `color:black`);
    }
}

module.exports = repeater;