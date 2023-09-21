import React, { useState, useRef, useEffect } from 'react';

const Chat = (props) => {
  const [messageToSend, setMessageToSend, userName] = useState('');
  const messagesRef = useRef(null);

  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [props.messages]);

  const handleSendMessage = () => {
    if (messageToSend.trim() !== '') {
      props.sendMessage(messageToSend);
      setMessageToSend('');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div
        ref={messagesRef}
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '10px',
          border: '1px solid #ccc',
          minHeight: '200px',
          maxHeight: '200px',
          minWidth: '400px',
          maxWidth: '400px'
        }}
      >
        <div style={{ whiteSpace: 'pre-wrap' }}>{props.messages}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
        <input
          type="text"
          value={messageToSend}
          onChange={(e) => setMessageToSend(e.target.value)}
          style={{ flex: 1, marginRight: '10px', padding: '5px' }}
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
}

export default Chat;
