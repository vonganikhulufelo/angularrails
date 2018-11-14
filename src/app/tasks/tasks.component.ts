import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router  } from '@angular/router';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

model1: any = {};
model: any = {};
loading = false;

  constructor(private router:Router, private http:Http, taskService:TaskService,private authenticationService:AuthenticationService) { }

  ngOnInit() {
  }

  newtask() {
        this.loading = true;
        this.authenticationService.newtask(this.model.title, this.model.description, this.model.duedate)
            .subscribe(
                data => {
                    this.router.navigate(['dashboard']);
                    
                },
                error => {
                    this.loading = false;
                    console.log(error.error);
                });
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
