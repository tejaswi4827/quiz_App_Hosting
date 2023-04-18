import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionServiceService } from 'src/app/service/questionService/question-service.service';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  public Editor = ClassicEditor;
  quizId: Number = 0;
  quizTitle: any;
  questionDetails: any = {
    quizes: {

    },
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
  }
  ress: any;
  constructor(private route: ActivatedRoute, private snack: MatSnackBar, private questionService: QuestionServiceService, private redirection: Router) { }
  ngOnInit(): void {

    this.quizId = this.route.snapshot.params['quizId'];
    this.quizTitle = this.route.snapshot.params['quizTitle'];

    this.questionDetails.quizes['quizId'] = this.quizId

  }

  public addQues() {
    // validations

    this.questionService.addQuestion(this.questionDetails).subscribe((result) => {

      // this.questionDetails = null;

      this.snack.open("Question added successfully!!!", '', {
        duration: 3000,

      });
      this.questionDetails.content = '';
      this.questionDetails.option1 = '';
      this.questionDetails.option2 = '';
      this.questionDetails.option3 = '';
      this.questionDetails.option4 = '';


    },
      (error) => {

        this.snack.open("Something went wrong!!!", '', {
          duration: 3000,

        });
      })
  }

}
