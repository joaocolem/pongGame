import React, { useEffect } from 'react';
import { io } from 'socket.io-client'

const Pong = () => {
	useEffect(() => {
		const socket = io('http://localhost:4000', {
			extraHeaders: {
				"header": "ul0hC9#g5ppd&48p",
			},
		});

		socket.on('connect', () => {
			console.log('connected to Client');
		});
	}, []);

	const players = {
		player1: {
			name: 'Player 1',
		},
		player2: {
			name: 'Player 2',
		},
	};

	return (
		<div>
			{
				Object.keys(players)
				.map(
					(key) => (<div>{players[key].name}</div>)
				)
			}
		</div>
	);
}

export default Pong;
