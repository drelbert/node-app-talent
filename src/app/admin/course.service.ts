import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Course } from './course.model';

@Injectable({providedIn: 'root'})
export class CourseService {
  private courses: Course[] = [];
  private coursesUpdated = new Subject<Course[]>();

  constructor(private http: HttpClient) {}

  getCourses() {
    this.http
      .get<{ message: string; courses: Course[] }>(
        'http://localhost:3000/api/courses'
      )
      .subscribe(courseData => {
        this.courses = courseData.courses;
        this.coursesUpdated.next([...this.courses]);
      });
  }

  getCourseUpdateListener() {
    return this.coursesUpdated.asObservable();
  }

  addCourse(title: string, description: string, courseCode: string, date: string) {
    const course: Course = {  title, description, courseCode, date };
    this.http
      .post<{ message: string }>('http://localhost:3000/api/courses', course)
      .subscribe(responseData => {
        console.log(responseData.message);
        this.courses.push(course);
        this.coursesUpdated.next([...this.courses]);
      });

  }
}
