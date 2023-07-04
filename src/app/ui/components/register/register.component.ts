import { MessageType, Position } from './../../../services/common/alertify/alertify.service';
import { UserService } from './../../../services/common/models/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Create_User } from 'src/app/contracts/user/create-user';
import { User } from 'src/app/entities/user';
import { AlertifyOptions, AlertifyService } from 'src/app/services/common/alertify/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private userService:UserService,private alertifyService:AlertifyService) {}
  
  frm:FormGroup;
  ngOnInit(): void {
    this.frm = this.formBuilder.group({
      nameSurName: ["",[Validators.required,Validators.maxLength(100),Validators.minLength(3)]],
      userName: ["",[Validators.required,Validators.maxLength(100),Validators.minLength(3)]],
      email: ["",[Validators.required,Validators.maxLength(200),Validators.email]],
      password: ["",[Validators.required]],
      passwordConfirm: ["",[Validators.required]],
    });
  }

  get component(){
    return this.frm.controls;
  }
  submitted:boolean=false;

  async onSubmit(user: User) {
    this.submitted=true;
    if(this.frm.invalid)
    return;
    console.log(user);
    
    const result:Create_User=await this.userService.create(user);
    console.log(result);
    
    if(result.succeeded)
    {
      this.alertifyService.message(result.message +" Kayıt işlemi yapıldı!",{
        messageType:MessageType.Success,
        position:Position.BottomRight});
    }else{
      this.alertifyService.message(result.message+" Kayıt işlemi sırasında hata ile karşılasıldı!",
      {
        messageType:MessageType.Error,
        position:Position.BottomRight
      })
    }
  }
}
