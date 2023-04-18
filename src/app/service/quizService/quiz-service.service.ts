import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  constructor(private http: HttpClient) { }

  public fetchQuizes() {
    return this.http.get(environment.baseUrl + "/quiz/getAllQuiz");
  }
  public addQuizes(quizData: any) {
    return this.http.post(environment.baseUrl + "/quiz/", quizData)
  }
  public deleteQuizes(quizId: Number) {
    return this.http.delete(`${environment.baseUrl}/quiz/${quizId}`);
  }
  public getQuizById(quizId: Number) {
    return this.http.get(`${environment.baseUrl}/quiz/${quizId}`);
  }

  // update quiz

  public updateQuiz(quiz: any) {
    return this.http.put(`${environment.baseUrl}/quiz/updateQuiz`, quiz);
  }

  //get quizzes of category and active status

  public getQuizOfCategory(catId: any) {
    return this.http.get(`${environment.baseUrl}/quiz/category/active/${catId}`);
  }

  // get all quiz of active status

  public getActiveQuiz() {
    return this.http.get(`${environment.baseUrl}/quiz/active`);
  }


}
