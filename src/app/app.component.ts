import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Buscador', url: 'buscador', icon: 'search' },
    { title: 'SI', url: '/folder/si', icon: 'hourglass' },
    { title: 'PUEDES', url: '/folder/puedes', icon: 'alert' },
    { title: 'IMAGINARLO', url: '/folder/imaginarlo', icon: 'sparkles' },
    { title: 'PUEDES', url: '/folder/puedes', icon: 'lock-open' },
    { title: 'PROGRAMARLO', url: '/folder/programarlo', icon: 'terminal' },
  ];
  public labels = ['Estos', 'Son', 'Los', 'Labels', 'de', 'Prueba'];
  constructor() {}
}
