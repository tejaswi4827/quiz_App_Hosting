import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuizServiceService } from 'src/app/service/quizService/quiz-service.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {
  constructor(private route: ActivatedRoute, private quiz: QuizServiceService, private snack: MatSnackBar) { }
  catId: Number = 0;
  allQuiz: any;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.catId = params['catId'];
      if (this.catId == 0) {
        // load all the quiz
        this.quiz.getActiveQuiz().subscribe((data) => {
          this.allQuiz = data;
        }, (error) => {
          this.snack.open("Error in loading quizzes from server!!!", '', {
            duration: 3000,

          });

        })
      }
      else {
        // load specific quiz according to quiz id
        console.log(this.catId);
        this.quiz.getQuizOfCategory(this.catId).subscribe((data) => {

          this.allQuiz = data;
        }, (error) => {
          this.snack.open("Error in loading quizzes from server!!!", '', {
            duration: 3000,

          });
        })
      }
    })

  }
}
