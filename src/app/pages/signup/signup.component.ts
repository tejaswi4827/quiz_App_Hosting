import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServiceService } from 'src/app/service/user-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private userservice: UserServiceService, private snack: MatSnackBar) { }
  public user = {
    userName: '',
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    phone: ''
  };
  registerFormSubmit() {

    if (this.user.userName == '' || this.user.userName == null) {
      this.snack.open("username field is required", '', {
        duration: 3000,

      });
      return;
    }
    if (this.user.email == '' || this.user.email == null) {
      this.snack.open("email field is required", '', {
        duration: 3000,

      });
      return;
    }
    if (this.user.firstName == '' || this.user.firstName == null) {
      this.snack.open("first name field is required", '', {
        duration: 3000,

      });
      return;
    }
    if (this.user.phone == '' || this.user.phone == null) {
      this.snack.open("phone number is required", '', {
        duration: 3000,

      });
      return;
    }
    if (this.user.password == '' || this.user.password == null) {
      this.snack.open("password is required", '', {
        duration: 3000,

      });
      return;
    }
    this.userservice.saveUser(this.user).subscribe((response) => {
      Swal.fire({
        icon: 'success',
        title: 'User Registeration !!!',
        text: 'Successfully registered !!!',

      })
      // nullify all the value after register from form
      this.user.email = '';
      this.user.firstName = '';
      this.user.lastName = '';
      this.user.password = '';
      this.user.phone = '';
      this.user.userName = '';
    }, (error) => {
      this.snack.open("Username already present in database  !!!", '', {
        duration: 3000
      });
    }
    );

  }
  resetData() {
    this.user.email = '';
    this.user.firstName = '';
    this.user.lastName = '';
    this.user.password = '';
    this.user.phone = '';
    this.user.userName = '';
  }

}
