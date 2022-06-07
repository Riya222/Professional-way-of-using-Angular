import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth-service.service';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: any =  FormGroup;

  constructor(private authServide: AuthServiceService, public router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    });
  }

  loginProcess(){
    if (this.formGroup.valid){
      console.log(this.formGroup.value);
      if (this.formGroup.value['email'] == 'Dayal' && this.formGroup.value['password'] == 'riya'){
        console.log("success");
        this.router.navigate(['dashboard']);
      }
      else {
        console.log("failed");
      }
    }
  }

}
