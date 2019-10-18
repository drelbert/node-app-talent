import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Course } from '../course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {

  courses: Course[] = [];
  private courseSub: Subscription;

  constructor(public courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getCourses();
    this.courseSub = this.courseService.getCourseUpdateListener()
       .subscribe((course: Course[]) => {
       this.courses = course;
    });
  }

  ngOnDestroy() {
    this.courseSub.unsubscribe();
  }
}
