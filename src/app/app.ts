import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";
import { Navbar } from "./components/navbar/navbar";
import { Notfound } from "./components/notfound/notfound";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app2');
}
