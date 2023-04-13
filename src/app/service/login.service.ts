import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development'
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // creating eventlistener for send notify in nav bar ts file
  public loginStatusSubject = new Subject<boolean>();
  constructor(private http: HttpClient) { }

  generateTokenUrl = environment.baseUrl + "/generate-token";
  generateToken(loginDetails: any) {
    return this.http.post(this.generateTokenUrl, loginDetails);
  }

  //login user : set token in local storage
  public loginUser(token: any) {
    localStorage.setItem('token', token);
   
    return true;
  }

  // check if user is logged in or not

  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    }
    return true;
  }
  //logout : remove token from local storage
  public LogOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //get token 
  public getToken() {
    return localStorage.getItem('token');
  }

  //set user details

  public setUser(user: any) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  // get user

  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    }
    else {
      this.LogOut();
      return null;
    }
  }

  //get user role

  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }

  // get current user  which is logged in
  /**
   * getCurrentUser
   */
  public getCurrentUser() {
    return this.http.get(environment.baseUrl + "/current-user");
  }
}
