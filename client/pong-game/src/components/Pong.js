import React, { useEffect, useState } from 'react';
import socket from './socket'; 
import PlayerList from './PlayerList';
import Chat from './Chat';


const Pong = () => {
  const [players, setPlayers] = useState({});
  const [messages, setMessages] = useState('');


  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected to Client');
    });
    }, []);

  useEffect(() => {
      socket.on('PlayersRefresh', (players) => {
        setPlayers(players);
      });
      }, [players]);

  useEffect(() => {
    socket.on('ReceiveMessage', (receiveMessage) => {
      setMessages(messages + '\n\n' + receiveMessage);
      });
  },[messages])
  

  const sendMessage = (message) => {
	  socket.emit('SendMessage', message);
  };


	return (
		<div style ={{display: 'flex', flexDirection: 'row'}}>
			
			<PlayerList players = {players}/>
			<Chat sendMessage = {sendMessage} messages={messages}/>
			
		</div>
	);
}

export default Pong;
