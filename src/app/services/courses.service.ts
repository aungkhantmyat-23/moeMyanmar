import { courseUrl } from './../config/api';
import { HttpClient } from '@angular/common/http';
import { Course } from './../models/courses';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(courseUrl);
  }
}
