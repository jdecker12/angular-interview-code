import { Component } from '@angular/core';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
   //// properties ////
   username!: string;
   password!: string;
 
   validUserName: string = 'Jeremy';
   validPassword: string = "P@ssword";
   
   ///loginForm!: ElementRef;
   @ViewChild('loginForm', { static: true }) loginForm!: NgForm;
  constructor() {}

  login(): void {
    if (this.loginForm.valid) {
      /// compare user input with valid validUserName and validPassword for sucess or failed login
    }
   }
}


