#!/usr/bin/env node

'use-strict'

var os = require('os');
var websocket = require('websocket-stream');
var wss = websocket.createServer({ port: 8080 }, handleStream);

var interfaces = os.networkInterfaces();

// guess ip address
var ip = interfaces['en0'][1]

console.log(`listeing at ${ip.address}:${wss.options.port}`);

// handle down stream
function handleStream(stream, request) {
    stream.on('data', function(data) {
        console.log(data.toString());
    })
}