import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HearderComponent } from './hearder/hearder.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { UserService } from './user.service';
import { User } from './user';
import { Tasks } from './tasks';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterComponent } from './register/register.component';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { AuthenticationService } from './authentication.service';
import { TaskService } from './task.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TasksComponent } from './tasks/tasks.component';

const appRoutes: Routes = [
 { path: '', 
   component: HomeComponent },
   { path: 'register', 
   component: RegisterComponent },
   { path: 'dashboard', 
   component: DashboardComponent },
   { path: 'login', 
   component: LoginFormComponent },
   { path: 'new_task', 
   component: TasksComponent },
   { path: '**', 
   component: PageNotFoundComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HearderComponent,
    FooterComponent,
    DashboardComponent,
    HomeComponent,
    PageNotFoundComponentComponent,
    LoginFormComponent,
    RegisterComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, User, CookieService, AuthenticationService, TaskService, Tasks],
  bootstrap: [AppComponent]
})
export class AppModule { }
