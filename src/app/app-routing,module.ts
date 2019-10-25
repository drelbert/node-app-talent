import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminCoursesComponent } from './admin/admin-courses/admin-courses.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'create', component: AdminCoursesComponent },
  { path: 'edit/:courseId', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
