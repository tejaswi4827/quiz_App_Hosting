import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  allCategory: any;
  constructor(private category: CategoryService, private snack: MatSnackBar) { }
  ngOnInit(): void {
    this.category.categories().subscribe((result) => {
      this.allCategory = result;
    }, (error) => {
      this.snack.open("Error in loading category from server!!!", '', {
        duration: 3000,

      });
    })
  }

}
