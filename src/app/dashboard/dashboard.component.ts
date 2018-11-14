import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Http, Response, Headers } from '@angular/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   public currentUser : any;
   public data : any;
   private apiUrl = 'http://localhost:3000/tasks/' + JSON.parse(localStorage.getItem('currentUser')).id;
  constructor(private userService:UserService,private http:Http) { 
  this.getTasks();
  this.getTaskData();
  }

  ngOnInit() {
  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  getTasks(){
  return this.http.get(this.apiUrl).map((res: Response) => res.json())
  }

  getTaskData(){
  this.getTasks().subscribe(data => {
  this.data = data;
  })
  }

}
