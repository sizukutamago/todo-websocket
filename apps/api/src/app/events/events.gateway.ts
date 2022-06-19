import {
  ConnectedSocket,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({
  cors: {
    origin: '*',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  },
})
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  private logger: Logger = new Logger('EventsGateway');

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): void {
    this.logger.log({ ...payload, socketId: client.id });
    this.server.emit('xxx', { ...payload, socketId: client.id });
  }

  afterInit() {
    this.logger.log('initialize...');
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(@ConnectedSocket() client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
}
