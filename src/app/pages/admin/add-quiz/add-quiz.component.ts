import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizServiceService } from 'src/app/service/quizService/quiz-service.service';
import { CategoryService } from 'src/app/service/category.service';
import { ViewCategoryComponent } from '../view-category/view-category.component';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  formData = {
    quizTitle: '',
    description: '',

    maxMarks: '',
    numberOfQuestion: '',
    activeStatus: false,
    category: {
      categoryId: '',
    },
  }


  categories: any = [];
  constructor(private quiz: QuizServiceService, private snack: MatSnackBar, private category: CategoryService) { }
  ngOnInit(): void {
    this.category.categories().subscribe((response: any) => {
      this.categories = response;

    }, (error) => {
      this.snack.open("Something went wrong from server side", '', {
        duration: 3000,

      });

    })
  }

  addQuiz() {
    if (this.formData.quizTitle.trim() == '' || this.formData.quizTitle == null) {
      this.snack.open("title field is required", '', {
        duration: 3000,

      });
      return;
    }
    console.log(this.formData);
    this.quiz.addQuizes(this.formData).subscribe((result) => {

      this.snack.open("Quiz added successfully!!!", '', {
        duration: 3000,

      });
    }, (error) => {
      console.log(error);
      this.snack.open("Something went wrong!!!", '', {
        duration: 3000,

      });
    })
  }

}
