import { Component } from '@angular/core';

/* component decorator  */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', /* component template file */
  styleUrls: ['./app.component.scss']  /* component style */ 
})

/* component logic */
export class AppComponent {
  title = 'Angular 8 - ex01 - is not woring';
}
