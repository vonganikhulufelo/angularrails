import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service';
 import { Router  } from '@angular/router';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  userData : any;
  model: any = {};
  loading = false;
  constructor(private router:Router, private userService:UserService,private http:Http,private cookieService:CookieService,private authenticationService:AuthenticationService) { }

  ngOnInit() {
  }

  loginUser(e){
  e.preventDefault();
   var email = e.target.elements[0].value;
   var password = e.target.elements[1].value;
   let headers = new Headers({'Content-Type': 'application/json'});
   let options = new RequestOptions({headers: headers})
let body = JSON.stringify({ email, password });
    return this.http.post('http://localhost:3000/sessions', body, options)
      .map(
        data => {
            this.userData = data;
            localStorage.setItem('currentUser', JSON.stringify({userData: this.userData}) );
            let ahr = JSON.parse(localStorage.getItem('currentUser'));
            alert(this.userData.text());
          this.router.navigate(['dashboard']);
        },
        error => {
          alert(error.error.text());
        }
      );
  }

   login() {
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate(['dashboard']);
                    console.log(data.user);
                    localStorage.setItem('currentUser', JSON.stringify(data.user) );
                },
                error => {
                    this.loading = false;
                    console.log(error.error);
                });
    }

  

}


