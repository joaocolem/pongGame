import React, { useEffect, useState, useContext } from 'react';
import socket from './socket'; 
import PlayerList from './PlayerList';
import Chat from './Chat';
import { GameContext } from '../context/GameContext';



const Pong = () => {
  const [players, setPlayers] = useState({});
  const [messages, setMessages] = useState('');
  const context = useContext(GameContext);
  const playerInfo = socket.id;



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
      setMessages(messages   + receiveMessage + '\n\n');
      });
  },[messages])
  


  const sendMessage = (message) => {
	  socket.emit('SendMessage', message);
  };


	return (

    <>
      {context}
      <div style ={{display: 'flex', flexDirection: 'row'}}>

        <PlayerList players = {players}/>
        <Chat sendMessage = {sendMessage} messages={messages} userName = {playerInfo.substring(0,5)}/>
        
      </div>
      Seu userName: {playerInfo.substring(0,5)}
      
    </>
	);
}

export default Pong;
