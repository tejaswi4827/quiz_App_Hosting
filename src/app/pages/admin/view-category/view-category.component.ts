import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  categories: any = [
    {
      categoryId: '',
      categoryTitle: '',
      description: ''
    },

  ];
  constructor(private category: CategoryService, private snack: MatSnackBar) { }
  ngOnInit(): void {
    this.category.categories().subscribe((response: any) => {
      this.categories = response;

    }, (error) => {
      this.snack.open("Something went wrong from server side", '', {
        duration: 3000,

      });

    })
  }


}
