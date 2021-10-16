import { Component } from '@angular/core';

@Component ({
  selector: 'app-todo',
  templateUrl: './app.todo.html',
  styleUrls: [
    '../assets/bootstrap.min.css'
  ]
})

export class ToDoComponent {
  task!: string;
  tasks: [] = [];

  onClick() {
    this.tasks.push({name: this.task});
    this.task = '';
  }
}