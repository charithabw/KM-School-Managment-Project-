import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { signinData } from '../model/signinData';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  flag:boolean = true;
  successMessage:string ="";
  loginForm!: FormGroup; 
  regForm!:FormGroup

  constructor(private fb: FormBuilder, private router: Router, private authenticationService : AuthenticationService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      password:['',[Validators.required]]
    })
  }

  apply(value:string){
    this.flag = value == "login"?true : false;
  }

  login(){
    const iEmail = this.loginForm.get('email')?.value;
    const iPassword = this.loginForm.get('password')?.value;

    const signindata = new signinData(iEmail, iPassword);
    this.authenticationService.authenticate(signindata);
    

    if (iEmail === 'teacher@gmail.com' && iPassword === "1234"){      
      this.authenticationService.isAuthenticaed = true;
      this.successMessage="Successfully Loggined In..."
      this.router.navigate(['/home']);
    }else{
      this.successMessage="Not Authorized..."
    }
    
  }

  register(){
    this.successMessage = "Successfully Registered..."
    this.router.navigate(['/home']);
    // console.log(this.regForm)
  }

}
