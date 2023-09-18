import { io } from 'socket.io-client';

const socket = io('http://localhost:4000', {
  extraHeaders: {
    "header": "ul0hC9#g5ppd&48p",
  },
});

export default socket;
