var socket = io.connect('http://localhost:3000');

socket.on('connect', function (data) {
    socket.emit('join', 'Client connected');

    socket.on('vann', function (msg) {
        document.getElementById('message')
            .appendChild(document.createTextNode(JSON.stringify(msg)));
    });
});