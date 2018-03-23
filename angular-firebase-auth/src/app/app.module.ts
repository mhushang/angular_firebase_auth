import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './services/auth.service';
import { routes } from './app.routes';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyBWYmQB3r1xuCJFby-tdTt2oe-0VTIWKg4',
  authDomain: 'angular-firebase-auth-18f74.firebaseapp.com',
  databaseURL: 'https://angular-firebase-auth-18f74.firebaseio.com',
  projectId: 'angular-firebase-auth-18f74',
  storageBucket: 'angular-firebase-auth-18f74.appspot.com',
  messagingSenderId: '14419129149'
};

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
