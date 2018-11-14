import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isUserLoggedIn;
  public email; 
  public user;

  constructor() {
  this.isUserLoggedIn = false;

   }

   setUserLoggedIn(){
   this.isUserLoggedIn = true;
   this.email = 'Khulu';
   }

    getUserLoggedIn(){
    return this.isUserLoggedIn;
   }

   setUserData(data){
   this.user = data;
   }  

   getUserData(){
    return this.user;
   }
}