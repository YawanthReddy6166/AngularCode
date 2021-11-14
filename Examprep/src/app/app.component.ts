import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Examprep';
  numSequence(n: number): Array<number> {
    return Array(n);
  }
}
