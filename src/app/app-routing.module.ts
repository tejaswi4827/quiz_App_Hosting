import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './service/admin.guard';
import { NormalGuard } from './service/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminwelcomeComponent } from './pages/adminwelcome/adminwelcome.component';
import { ViewCategoryComponent } from './pages/admin/view-category/view-category.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizesComponent } from './pages/admin/view-quizes/view-quizes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuestionComponent } from './pages/admin/view-question/view-question.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { LoadQuizComponent } from './pages/user/user-dashboard/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartQuizComponent } from './pages/user/start-quiz/start-quiz.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: DashboardComponent,

    canActivate: [AdminGuard],
    children: [{
      path: '',
      component: AdminwelcomeComponent,
    }, {
      path: 'profile',
      component: ProfileComponent,
    },
    {
      path: 'view-categories',
      component: ViewCategoryComponent,
    },
    {
      path: 'add-categories',
      component: AddCategoryComponent,
    },
    {
      path: 'quizes',
      component: ViewQuizesComponent,
    },
    {
      path: 'add-quiz',
      component: AddQuizComponent,
    },
    {
      path: 'update-quiz/:quizId',
      component: UpdateQuizComponent,
    },
    {
      path: 'view-question/:quizId/:quizTitle',
      component: ViewQuestionComponent,
    },
    {
      path: 'add-question/:quizId/:quizTitle',
      component: AddQuestionComponent,
    }]
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,

    canActivate: [NormalGuard],
    children: [{
      path: ':catId',
      component: LoadQuizComponent,
    },
    {
      path: 'instruction/:quizId',
      component: InstructionsComponent,
    },
    
    ]
  },
  {
    path: 'start-quiz/:quizId',
    component: StartQuizComponent,
    canActivate: [NormalGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
