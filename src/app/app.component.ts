import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name = ''
  state = false;

  resetName(){
    this.name = '';
  }

  checkName(){
    if (this.name === ''){
      this.state = true
      return this.state
    }
  }


}
