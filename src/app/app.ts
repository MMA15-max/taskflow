import { Component } from '@angular/core';
import { HomePage } from './home-page/home-page';
import { About } from './about/about';
import { Header } from './header/header';
import { TaskList } from './task-list/task-list';
import { SignalTasks } from './signal-tasks/signal-tasks';


@Component({
  selector: 'app-root',
  imports: [HomePage, About, Header, TaskList,SignalTasks],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}