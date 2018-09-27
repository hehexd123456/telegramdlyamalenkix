const express = require('express');
const http = require('http')
const mongoose = require('mongoose');
const socketIO = require('socket.io');
const cors = require('cors');

const { uri } = require('./config');
const auth = require('./routes/auth');
const users = require('./routes/users');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', auth);
app.use('/api/users', users);

mongoose.connect(uri, { useNewUrlParser: true })
	.then(() => console.log('cheeki breeki'))
	.catch(err => {
		console.log(err);
		// handle errors
	})

const server = http.createServer(app)
const io = socketIO(server);
const port = process.env.PORT || 3001;

const room1 = [];
const room2 = [];
const room3 = [];

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('room', (room) => {
    socket.join(room);
    console.log(`user joined ${room}`);
  });
  socket.on('leave', (room) => {
    socket.leave(room);
    console.log(`user left ${room}`)
  })
  // io.sockets.emit('join', socket.id);

  socket.on('send message', (text) => {
    console.log(`User sent you a message: ${text.text}`)
    console.log(text.room);
    io.to(text.room).emit('receive message', text.text)
  })

  socket.on('disconnect', () => {
    io.sockets.emit('leave', socket.id)
    console.log('user disconnected');
  })
})

server.listen(port, () => {
  console.log(`listening on port ${port}...`);
})