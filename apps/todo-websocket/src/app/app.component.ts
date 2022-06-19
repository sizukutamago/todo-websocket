import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import io, { Socket } from 'socket.io-client';

@Component({
  selector: 'todo-websocket-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todo = ['test'];

  inProgress = ['test'];

  done = ['test4', 'test5'];

  todoTextarea = '';

  socket: any = {};

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  onEnter() {
    const todo = this.todoTextarea.trim();
    if (todo) {
      this.todo.push(todo);
      this.socket.emit('message', { message: todo });
    }
    this.todoTextarea = '';
  }

  ngOnInit() {
    this.socket = io('http://localhost:3333');

    this.socket.on('connect', () => {
      console.log(`connected to: ${this.socket.id}`);
    });

    this.socket.on('xxx', (message: any) => {
      console.log(message);
      if (message.socketId !== this.socket.id) {
        this.todo.push(message.message);
      }
    });
  }
}
