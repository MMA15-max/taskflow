
import { Component, input, output } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css'
})
export class TaskCard {

  task = input.required<Task>();

  completed = output<number>();

  markDone() {
    this.completed.emit(this.task().id);
  }
}
