const express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.set('port', (process.env.PORT || 3000))

app.use(express.static('public'))

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html')
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
