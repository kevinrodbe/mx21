import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hey';
  hero= 'El hero';
  heros = [
    {
      id: 1,
      name: 'pepe'
    },
    {
      id: 2,
      name: 'pepe'
    },
    {
      id: 3,
      name: 'pepe'
    }
  ];
  isActive: true;
}
