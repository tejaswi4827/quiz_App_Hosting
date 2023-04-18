import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { QuizServiceService } from 'src/app/service/quizService/quiz-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {
  constructor(private route: ActivatedRoute, private quiz: QuizServiceService, private redirection: Router, private category: CategoryService, private snack: MatSnackBar) { }
  quizId: Number = 0;
  quizDetails: any;
  categories: any;
  ngOnInit(): void {
    // get the quiz id after clicking on update button to this class
    this.quizId = this.route.snapshot.params['quizId'];
    // getting the quiz details using id then this details will be auto populated in ui 
    this.quiz.getQuizById(this.quizId).subscribe((success: any) => {
      this.quizDetails = success;
      console.log(this.quizDetails);
    }, (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',

      })
    })
    this.category.categories().subscribe((data) => {
      this.categories = data;
    }, (errors) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',

      })
    })
  }
  // get the quiz by Id

  updateQuiz() {
    if (this.quizDetails.quizTitle.trim() == '' || this.quizDetails.quizTitle == null) {
      this.snack.open("title field is required", '', {
        duration: 3000,

      });
      return;
    }

    this.quiz.updateQuiz(this.quizDetails).subscribe((result) => {

      this.quizDetails = null;

      this.snack.open("Quiz updated successfully!!!", '', {
        duration: 3000,

      });
      this.redirection.navigate(['/admin/quizes']);
    }, (error) => {
      console.log(this.quizDetails);
      console.log(error);

      this.snack.open("Something went wrong!!!", '', {
        duration: 3000,

      });
    })
  }

}

