import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminCoursesComponent } from './admin/admin-courses/admin-courses.component';
import { CoursesComponent } from './admin/courses/courses.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'courses', component: CoursesComponent }

  // { path: 'edit/:courseId', component: AdminCoursesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
