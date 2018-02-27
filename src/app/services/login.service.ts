import {Injectable} from '@angular/core';

@Injectable()
export class LoginService {

  constructor() {
  }
  //login service logic
  login(user,pass){
    return (user == "admin" && pass=="admin")?true:false;
  }

}
