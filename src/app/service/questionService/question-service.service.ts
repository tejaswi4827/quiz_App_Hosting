import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor(private http: HttpClient) { }
  public getQuestionsOfQuiz(quizId: Number) {
    return this.http.get(`${environment.baseUrl}/question/quiz/${quizId}`);

  }

  public addQuestion(question: any) {
    return this.http.post(`${environment.baseUrl}/question/`, question);
  }

  public deleteQuestion(quesId: Number) {
    return this.http.delete(`${environment.baseUrl}/question/${quesId}`)
  }

  //get all questions of quiz id

  public getQuestionOfQuizTest(quizId: Number) {
    return this.http.get(`${environment.baseUrl}/question/quiz/${quizId}`);
  }

  public evaluateQuiz(quizDetails: any) {
    return this.http.post(`${environment.baseUrl}/question/eval`, quizDetails);
  }
}
