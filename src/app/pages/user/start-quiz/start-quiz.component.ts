import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { QuestionServiceService } from 'src/app/service/questionService/question-service.service';
import { QuizServiceService } from 'src/app/service/quizService/quiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {

  quizId: Number = 0;
  allQuestions: any;
  quizResult: any;
  isSubmitted: any = false;
  timer: any;
  constructor(private route: ActivatedRoute, private snack: MatSnackBar, private login: LoginService, private questionService: QuestionServiceService, private locationst: LocationStrategy) { }
  ngOnInit(): void {
    this.preventBackButton();
    this.quizId = this.route.snapshot.params['quizId'];
    //calling load wala method to load question after clicking on start button
    this.getQuestionOfQuizz();



  }

  public getQuestionOfQuizz() {

    this.questionService.getQuestionOfQuizTest(this.quizId).subscribe((data) => {
      this.allQuestions = data;
      // this.allQuestions.forEach((element: any) => {
      //   //adding extra variable to store all the answers of questions
      //   element['givenAnswer'] = '';
      // });
      //console.log(this.allQuestions);
      // setting total time of quiz
    
      if(this.allQuestions.length>0){
      this.timer = this.allQuestions.length * 2 * 60;
      this.startTimer();}
      // console.log(data);
    }, (error) => {
      this.snack.open("Error in loading questions from server!!!", '', {
        duration: 3000,

      });
    })
  }
  startTimer() {
    let t = window.setInterval(() => {
      if (this.timer <= 0) {
        //  this.submitQuiz();
        //dont give sweet alert if timers less than 0
        this.evaluateQuiz();
        clearInterval(t);
      }
      else {
        this.timer--;
      }
    }, 1000);
  }

  // get formatted time

  getFormattedTime() {
    let hh = Math.floor(this.timer / (60 * 60));
    let mm = Math.floor((this.timer % 3600) / 60);
    let ss = this.timer - mm * 60;
    return `${hh} hr : ${mm} min :${ss} sec`;

  }
  preventBackButton() {
    history.pushState(null, location.href);
    this.locationst.onPopState(() => {
      history.pushState(null, location.href);
    });
  }


  submitQuiz() {
    Swal.fire({
      title: 'Do you want to submit the Quiz?',

      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Submit Quiz'
    }).then((result) => {
      if (result.isConfirmed) {
        // this.redirect.navigate(['/start-quiz/'+this.quizId])
        //call backend server 
        this.evaluateQuiz();

      }
    })
  }
  //evaluate quiz marks by calling api
  
  evaluateQuiz() {
    this.questionService.evaluateQuiz(this.allQuestions).subscribe((data) => {
    //  console.log(data);
      this.quizResult = data;
      this.isSubmitted = true;
    },
      (error) => {

        this.snack.open("Error in loading results from server!!!", '', {
          duration: 3000,

        });
      }
    )
  }

  userName:any = this.login.getUser();
  printPage() {
    window.print();
  }

}
