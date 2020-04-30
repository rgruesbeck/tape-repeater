var websocket = require('websocket-stream');

function repeater(tape, url) {
    var wss = websocket(url);
    var ts = tape.createStream({ objectMode: false });

    // handle tap data
    ts.on('data', function(data) {
        // send test to server
        wss.write(data);

        // print test in console
        print(data);
    })
}

function print(line) {
    if (/^ok/.test(line)) {
        console.log(`%c${line}`, `color:green`);
    } else if (/^not ok/.test(line)) {
        console.log(`%c${line}`, `color:red`);
    } else {
        console.log(`%c${line}`, `color:black`);
    }
}

module.exports = repeater;