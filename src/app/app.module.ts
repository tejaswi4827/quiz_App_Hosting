import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthInterceptorProvider } from './service/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { AdminwelcomeComponent } from './pages/adminwelcome/adminwelcome.component';
import {MatTableModule} from '@angular/material/table';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewCategoryComponent } from './pages/admin/view-category/view-category.component';
import { ViewQuizesComponent } from './pages/admin/view-quizes/view-quizes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuestionComponent } from './pages/admin/view-question/view-question.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { SidebarComponent as UserSideBar } from './pages/user/user-dashboard/sidebar/sidebar.component';
import { LoadQuizComponent } from './pages/user/user-dashboard/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartQuizComponent } from './pages/user/start-quiz/start-quiz.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderModule ,NgxUiLoaderHttpModule} from "ngx-ui-loader";
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    AdminwelcomeComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    ViewQuizesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuestionComponent,
    AddQuestionComponent,
    UserSideBar,
    LoadQuizComponent,
    InstructionsComponent,
    StartQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NgxUiLoaderModule,NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
    }),CKEditorModule,
    BrowserAnimationsModule,MatListModule,MatProgressSpinnerModule,MatSlideToggleModule,MatSelectModule,MatTableModule, MatButtonModule, MatIconModule,MatCardModule, MatInputModule, MatFormFieldModule,MatToolbarModule, FormsModule, HttpClientModule, MatSnackBarModule
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
