import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import io from "socket.io-client";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public message: Subject<string> = new Subject();
  public message$ = this.message.asObservable();
  socket = io(environment.websocketUrl);


  constructor() {
    this.socket.on('xxx', (message: any) => {
      this.message.next(message);
    });
  }

  send(message: string) {
    this.socket.emit('message', { message });
  }
}
