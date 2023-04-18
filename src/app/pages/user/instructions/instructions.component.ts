import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizServiceService } from 'src/app/service/quizService/quiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  quizId: Number = 0;
  quizData: any;
  constructor(private route: ActivatedRoute, private snack: MatSnackBar, private quizService: QuizServiceService,private redirect:Router) { }

  ngOnInit(): void {

    this.quizId = this.route.snapshot.params['quizId'];
    this.quizService.getQuizById(this.quizId).subscribe((data) => {

      this.quizData = data;
    }, (error) => {
      this.snack.open("Error in loading quizzes question from server!!!", '', {
        duration: 3000,

      });
    })
  }

  public startQuiz(){
    Swal.fire({
      title: 'Do you want to start the Quiz?',
     
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'START'
    }).then((result) => {
      if (result.isConfirmed) {
        this.redirect.navigate(['/start-quiz/'+this.quizId])
      }
    })
  }
}
