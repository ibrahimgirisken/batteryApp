import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  
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

  onSubmit(data: any) {
    this.submitted=true;
    if(this.frm.invalid)
    return;
  }
}
