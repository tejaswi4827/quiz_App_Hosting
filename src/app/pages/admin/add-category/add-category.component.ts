import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  constructor(private catService: CategoryService, private snack: MatSnackBar) { }
  ngOnInit(): void {

  }
  formData = {
    categoryTitle: '',
    description: '',
  }

  public postCategoryData() {
    if (this.formData.categoryTitle.trim() == '' || this.formData.categoryTitle == null) {
      this.snack.open("title field is required", '', {
        duration: 3000,

      });
      return;


    }
    this.catService.addCategory(this.formData).subscribe((result) => {
      this.snack.open("Category added successfully!!!", '', {
        duration: 3000,

      });
      this.formData.categoryTitle = '';
      this.formData.description = '';
    },
      (error) => {

        this.snack.open("Server side error", '', {
          duration: 3000,

        });
      })
  }

}
