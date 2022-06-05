import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'todo-websocket-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todo = [
    'test',
    'test2',
    'test2',
    'test2',
    'test2',
    'test2',
    'test2',
    'test2',
    'test2',
    'test2',
  ];

  inProgress = [
    'test',
    'test2',
    'test2',
    'test2',
    'test2',
    'test2',
    'test2',
    'test2',
    'test2',
    'test2',
  ];

  done = ['test4', 'test5'];

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
}
