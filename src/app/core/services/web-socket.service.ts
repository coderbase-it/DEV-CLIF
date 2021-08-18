import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  constructor(private socket: Socket) {}

  subContactCreate() {
    return this.socket.fromEvent('contact:create');
  }

  sendFormFilling() {
    this.socket.emit('filling-form');
  }

  getOthersFillingForm() {
    return this.socket.fromEvent('other-filling-form');
  }
}
