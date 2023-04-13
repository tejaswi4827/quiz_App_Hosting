import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private login: LoginService, private snack: MatSnackBar, private route: Router) { }
  ngOnInit(): void {

  }
  public userLoginDetails = {
    userName: '',
    password: ''
  };
  loginFormSubmit() {

    if (this.userLoginDetails.userName.trim() == '' || this.userLoginDetails.userName == null) {
      this.snack.open("username field is required", '', {
        duration: 3000,

      });
      return;
    }

    if (this.userLoginDetails.password.trim() == '' || this.userLoginDetails.password == null) {
      this.snack.open("password field is required", '', {
        duration: 3000,

      });
      return;
    }
    // request server to generate token passing login data to login service inside service package
    this.login.generateToken(this.userLoginDetails).subscribe((response: any) => {
      console.log(response)
      //login setting up token in local storage 
      this.login.loginUser(response.token);
      this.login.getCurrentUser().subscribe((user: any) => {
        this.login.setUser(user);
        // redirect if it is admin then admin dashboard or else user dashboard
        if (this.login.getUserRole() == 'ADMIN') {
          //  window.location.href = '/admin'
          this.route.navigate(['admin'])
          this.login.loginStatusSubject.next(true);
        }
        else if (this.login.getUserRole() == 'Normal') {
          // normal user dashboard
          // window.location.href = '/user-dashboard'
          this.route.navigate(['user-dashboard'])
          this.login.loginStatusSubject.next(true);
        }
        else {
          this.login.LogOut();
        }

      })


    }, (error) => {

      this.snack.open("Something went wrong", '', {
        duration: 3000,

      });
    })
  }
}
