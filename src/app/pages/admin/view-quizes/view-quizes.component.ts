import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizServiceService } from 'src/app/service/quizService/quiz-service.service';
import swal from 'sweetalert2/dist/sweetalert2.js';

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
        this.quizzes.title = 'Not available';
      
      }
      this.quizzes = quizResult;



    },
      (error) => {
        console.log(error);
        this.snack.open("Something went wrong from server side", '', {
          duration: 3000,

        });
      })
  }
  // deleting quiz based on quiz id taken from ui

  deleteQuiz(quizId: Number) {
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

        this.quiz.deleteQuizes(quizId).subscribe((result) => {

          // delete quiz card without refreshing page we used filter of angular ,,  from all quiz we are deleting who id is not there 
          this.quizzes = this.quizzes.filter((quizz: any) => quizz.quizId != quizId);
          swal.fire(
            'Deleted!',
            'Your quizz has been deleted.',
            'success'
          )
        },
          (error) => {
            swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',

            })
          }
        )

      }
    })



  }


}
