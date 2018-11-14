import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
   
 

  constructor(private http:Http){
 
  }



logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

}
