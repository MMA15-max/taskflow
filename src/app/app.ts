import { Component } from '@angular/core';
import { HomePage } from './home-page/home-page';
import { About } from './about/about';
import { Header } from './header/header';
import { TaskList } from './task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [HomePage, About, Header, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}