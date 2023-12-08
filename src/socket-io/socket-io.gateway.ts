import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
// import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { SocketIoService } from './socket-io.service';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: { origin: '*' } })
export class SocketIoGateway implements OnGatewayConnection {
  // constructor(private readonly socketIoService: SocketIoService) {}

  private activeSessions = 0;

  

  handleConnection(client: Socket) {
    
    this.activeSessions++;
    console.log(this.activeSessions);
    this.emitActiveSessions(client);
  }

  handleDisconnect(client: Socket) {
    this.activeSessions--;
    this.emitActiveSessions(client);
  }

  private emitActiveSessions(client: Socket) {
    client.emit('active_sessions', this.activeSessions);
  }
}
