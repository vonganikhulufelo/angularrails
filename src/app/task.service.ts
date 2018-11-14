import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
 


    newtask(title: string, description: string, duedate: string) {
        return this.http.post<any>('http://localhost:3000/tasks', { title: title, description: description, duedate: duedate })
            .map(task => {
                // login successful if there's a jwt token in the response
                if (task) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(task));
                }

                return task;
            });
    }
}
