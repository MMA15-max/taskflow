import { Component } from '@angular/core';
import { HomePage } from './home-page/home-page';
import { About } from './about/about';

@Component({
  selector: 'app-root',
  imports: [HomePage, About],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}