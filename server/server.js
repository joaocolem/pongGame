import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const sockets = new Server(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
		allowedHeaders: ["header"],
	}
});
const port = 4000;

sockets.on('connection', (socket) => {
	console.log(`${socket.id} connected to server`);
});

app.get('/', (req, res) => res.send('Hello World'));

server.listen(port, () => console.log(`Listening port: ${port}`));
