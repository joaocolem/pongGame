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

const game = {
	players: {},
};


const port = 4000;

sockets.on('connection', (socket) => {
	console.log(`${socket.id} connected to server`);
	
	
	const name = 'Player_' + socket.id.substring(0,5)
	game.players[socket.id] = { name };
	refreshPlayers();


	socket.on('disconnect', () =>{
		delete game.players[socket.id];
		refreshPlayers();
	});

	socket.on('SendMessage', (message) =>{
		const player = game.players[socket.id];
		sockets.emit('ReceiveMessage', `${player.name}: ${message}`)
	});

});

const refreshPlayers = () =>{
	sockets.emit('PlayersRefresh', game.players);
}

app.get('/', (req, res) => res.send('Hello World'));

server.listen(port, () => console.log(`Listening port: ${port}`));
