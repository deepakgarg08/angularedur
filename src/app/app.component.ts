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

  myparacontent = 'life is glorious gift, embrace whatever you have. If its easy then anyone can do it. life is glorious gift, embrace whatever you have. If its easy then anyone can do it'
  resetName(){
    this.name = '';
  }

  checkName(){
    if (this.name === ''){
      this.state = true
      return this.state
    }
  }
  //toggle para
  toggleState = true
  counter = 0;
  togglePara(){

    this.toggleState = !this.toggleState
    this.counter++
  }
  changeStyle(){
    if (this.counter === 5){
      return 'blue'
    }
  }

}
