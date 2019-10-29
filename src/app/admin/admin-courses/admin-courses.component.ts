import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { CourseService } from '../course.service';
import { Course } from '../course.model';


@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.scss']
})
export class AdminCoursesComponent {

  enteredTitle = '';
  enteredDescription = '';
  enteredCourseCode = '';
  enteredDate = '';


  constructor(
    public courseService: CourseService) { }


  onAddCourse(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.courseService.addCourse(
      form.value.title,
      form.value.courseId,
      form.value.description,
      form.value.date);
    form.resetForm();
    }
  }


