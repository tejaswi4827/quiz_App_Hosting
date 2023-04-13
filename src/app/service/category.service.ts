import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public categories() {
    return this.http.get(environment.baseUrl + "/category/allCategory");
  }
  public addCategory(formData: any) {
    return this.http.post(environment.baseUrl + "/category/", formData);
  }
}
