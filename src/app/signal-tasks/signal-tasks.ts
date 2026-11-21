import { Component, signal, computed, effect } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskCard } from '../task-card/task-card';
	
@Component({
  selector: 'app-signal-tasks',
  imports: [TaskCard],
  templateUrl: './signal-tasks.html',
  styleUrl: './signal-tasks.css'
})
export class SignalTasks {

  tasks = signal<Task[]>([
    { id: 1, title: 'Lire Angular', completed: false },
    { id: 2, title: 'Installer CLI', completed: true },
    { id: 3, title: 'Créer TaskFlow', completed: false }
  ]);

  newTitle = signal('');

  availableTasks = computed(() =>
    this.tasks().filter(task => !task.completed)
  );

  emptyTasks = computed(() =>
    this.availableTasks().length === 0
  );

  all = computed(() => this.tasks().length);

  private nextId = 4;

  constructor() {
    effect(() => {
      console.log('Tâches disponibles :', this.availableTasks());
    });
  }

  addTask() {
    const title = this.newTitle().trim();

    if (title === '') return;

    this.tasks.update(tasks => [
      ...tasks,
      { id: this.nextId++, title: title, completed: false }
    ]);

    this.newTitle.set('');
  }

  completeTask(id: number) {
    this.tasks.update(tasks =>
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: true }
          : task
      )
    );
  }

  clear() {
    this.tasks.set([]);
  }
}

