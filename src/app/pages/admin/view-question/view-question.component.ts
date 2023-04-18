import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionServiceService } from 'src/app/service/questionService/question-service.service';
import swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit {
  getQuizId: Number = 0;
  getQuizTitle: String = "";
  questions: any = [];
  constructor(private route: ActivatedRoute, private qustionService: QuestionServiceService, private snack: MatSnackBar) { }
  ngOnInit(): void {

    // getting quiz id and title from url  using acivated route
    this.getQuizId = this.route.snapshot.params['quizId'];
    this.getQuizTitle = this.route.snapshot.params['quizTitle'];
    this.qustionService.getQuestionsOfQuiz(this.getQuizId).subscribe((result) => {
      this.questions = result;
      console.log(this.questions);
    }, (error) => {
      console.log(error);
      this.snack.open("Something went wrong!!!", '', {
        duration: 3000,

      });
    })

  }
  quesId: Number = 0;
  deleteQues(quesId: Number) {
    swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.qustionService.deleteQuestion(this.quesId).subscribe((result) => {

          // once delete api fixed then have to filter the deleted item to ui and show
          swal.fire(
            'Deleted!',
            'Your question has been deleted.',
            'success'
          )
        }, (error) => {
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',

          })
        })
      }
    })
  }

}
