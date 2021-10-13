#!/usr/bin/env node

'use-strict'

var IP = process.env.IP || '127.0.0.1';
var PORT = process.env.PORT || 9090;

var websocket = require('websocket-stream');
var wss = websocket.createServer({ port: PORT }, handleStream);

function handleStream(stream, request) {
    stream.on('data', function(data) {
        console.log(data.toString());
    })
}

console.log(`listeing at ${IP}:${PORT}`);
