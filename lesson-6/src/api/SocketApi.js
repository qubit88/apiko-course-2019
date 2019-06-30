import socket from 'socket.io-client';

class SocketApi {
  init(token) {
    this.socket = socket('http://localhost:3000', {
      query: {
        token,
      },
      transports: ['websocket'],
    });
  }

  handleMessages(handler) {
    this.socket.on('message', (message) => {
      handler(JSON.parse(message));
    });
  }
}

export default new SocketApi();
