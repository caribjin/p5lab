var express = require('express');
var socket = require('socket.io');

var app = express();
var server = app.listen(3000, function() {
  console.log('Server is running on 3000 port...');
});

app.use(express.static('public'));

var io = socket(server);

io.sockets.on('connection', function(socket) {
  socket.on('draw', function(data) {
    socket.broadcast.emit('draw', data);
  });
});
