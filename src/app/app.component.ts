import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BHAVANI';

  menuVariable:boolean = false;
  openMenu(){
    this.menuVariable =! this.menuVariable;
  }
}
