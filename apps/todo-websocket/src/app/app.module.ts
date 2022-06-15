import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoColumnComponent } from './todo-column/todo-column.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, TodoColumnComponent],
  imports: [BrowserModule, HttpClientModule, DragDropModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
