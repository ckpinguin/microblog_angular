import { Component } from '@angular/core';

@Component({
  selector: 'ck-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  blogEntries = [ 'one', 'two', 'three' ];
}
