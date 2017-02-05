const express = require('express')

var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackDevConfig = require('./webpack.dev.config')

const bundler = webpack(webpackDevConfig)

app.set('port', (process.env.PORT || 3000))

app.use(express.static('public'))
app.use(express.static('dist'))

app.use(webpackMiddleware(bundler))

app.get('*', function(request, response) {
    response.sendFile(__dirname + '/public/index.html')
})

io.on('connection', function(socket) {
    console.log('user connected with a socket')
    socket.on('disconnect', function() {
        console.log('user disconnected')
    })
})

http.listen(app.get('port'), function() {
    console.log('server listening on port', app.get('port'))
})
