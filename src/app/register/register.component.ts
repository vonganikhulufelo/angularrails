import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
 import { Router  } from '@angular/router';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router, private userService:UserService,private http:Http) { }

  ngOnInit() {
  }


registerUser(e){
  e.preventDefault();
   var name = e.target.elements[0].value;
   var password_confirmation = e.target.elements[1].value;
   var email = e.target.elements[2].value;
   var password = e.target.elements[3].value;
   let headers = new Headers({'Content-Type': 'application/json'});
   let options = new RequestOptions({headers: headers})
let body = JSON.stringify({ name, password_confirmation, email, password });
    return this.http.post('http://localhost:3000/users', body, options)
      .subscribe(
        data => {
          this.router.navigate(['login']);
        },
        error => {
          console.log(error.errors);
        }
      )
  }
}
