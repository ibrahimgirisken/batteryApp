import { UserService } from './../../../services/common/models/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private userService:UserService){}  

 async login(userNameOrEmail:string,password:string)
  {
    await this.userService.login(userNameOrEmail,password);
  }
}
