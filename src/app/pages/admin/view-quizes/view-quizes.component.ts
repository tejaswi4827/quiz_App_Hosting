import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizServiceService } from 'src/app/service/quizService/quiz-service.service';

@Component({
  selector: 'app-view-quizes',
  templateUrl: './view-quizes.component.html',
  styleUrls: ['./view-quizes.component.css']
})
export class ViewQuizesComponent implements OnInit {
  quizzes: any = [{

    quizTitle: '',
    categoryTitle: '',
    description: '',
    maxMarks: '',
    numberOfQuestion: '',
    category: {
      categoryTitle: '',
    },
  },
  ]
  constructor(private quiz: QuizServiceService, private snack: MatSnackBar) { }
  ngOnInit(): void {
    this.quiz.fetchQuizes().subscribe((quizResult) => {
      if (this.quizzes.title == null) {
        this.quizzes.title = 'Not available'
      }
      this.quizzes = quizResult;



    },
      (error) => {
        this.snack.open("Something went wrong from server side", '', {
          duration: 3000,

        });
      })
  }




}
