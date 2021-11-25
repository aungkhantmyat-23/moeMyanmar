import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { AccountPageComponent } from './account-page/account-page.component';

import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  {path:'course-list',component:CourseListComponent},
  { path: 'course-detail', component: CourseDetailComponent },
  {
    path: 'account-page',
    component: AccountPageComponent,
  },
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'course-list',component:CourseListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
