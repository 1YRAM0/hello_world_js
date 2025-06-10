import { LabeledStatement } from './../../node_modules/@types/estree/index.d';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Ariel Yepez';
  protected subtitel = 'Angular Developer';
}
