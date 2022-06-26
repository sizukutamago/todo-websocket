import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {MessageService} from "./services/message.service";
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

  constructor(private messageService: MessageService) {}

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
      this.messageService.send(todo);
    }
    this.todoTextarea = '';
  }

  ngOnInit() {
    this.messageService.message.subscribe((message: any) => {
      this.todo.push(message.message);
      console.log(message);
    });
  }
}
