import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todos';

  // # Constructor + SetTimeout Function
  // timeout = 4000; // time is in ms
  // constructor() {
  //   setTimeout(() => {
  //     this.title = 'Suraj Dalvi';
  //   }, this.timeout);
  // }
}
