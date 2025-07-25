import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './components/navbar/navbar';
import {Footer} from './components/footer/footer';
import {Shredsection} from './components/shared/shredsection/shredsection';
import {Home} from './components/home/home';
import {Portfolio} from './components/portfolio/portfolio';
import {About} from './components/about/about';
import {Contact} from './components/contact/contact';
import {SharedInfo} from './components/shared/shared-info/shared-info';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, RouterOutlet, SharedInfo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Assignment1');
}
