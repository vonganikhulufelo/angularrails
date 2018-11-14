import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.css']
})
export class HearderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['/']);
    }
}
