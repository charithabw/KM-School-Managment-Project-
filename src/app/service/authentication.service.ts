import { Injectable } from '@angular/core';
import { signinData } from '../model/signinData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public mockUser = new signinData('teacher@gmail.com', '123');
  public isAuthenticaed = false;

  constructor() { }

  authenticate(signindata : signinData ): boolean{
    if(this.checkCredential(signindata)){
      this.isAuthenticaed = true;
      return true;
    }
    this.isAuthenticaed = false;
    return false; 
  }

  private checkCredential(signindata: signinData):boolean{
    return this.checkEmail(signindata.getEmail()) && this.checkPassword(signindata.getPassword());
  }
  private checkEmail(email: string): boolean{
    return email === this.mockUser.getEmail();
  }
  private checkPassword(password:string):boolean{
    return password === this.mockUser.getPassword();
  }
}
