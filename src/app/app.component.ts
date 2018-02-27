import { Component } from '@angular/core';
import {LoginService} from "./services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = "my name";
  title = 'app';
  constructor(private myLogin:LoginService){
    var first = this.myLogin.login('admin','admin');
    var second = this.myLogin.login('admin','admin2');

   /* console.log(first,second);*/
    console.error(this.name);
  }
  show(){
    console.log(this.name);
  }
}
