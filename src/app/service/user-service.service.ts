import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development'
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }
  url = environment.baseUrl + "/user/"
  saveUser(userDetails: any) {
  return  this.http.post(this.url, userDetails);
  }

  generateTokenUrl = environment.baseUrl+"/generate-token";
  generateToken(loginDetails:any)
  {
    return this.http.post(this.generateTokenUrl,loginDetails);
  }
}
