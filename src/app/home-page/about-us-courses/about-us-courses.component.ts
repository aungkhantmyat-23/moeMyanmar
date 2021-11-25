import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from './../../services/courses.service';
import { Course } from './../../models/courses';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us-courses',
  templateUrl: './about-us-courses.component.html',
  styleUrls: ['./about-us-courses.component.css'],
})
export class AboutUsCoursesComponent implements OnInit {
  courseList: Course[] = [];
  constructor(
    private courseService: CoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.courseList = this.courseService.getCourses();
    // this.courseService.getCourses().subscribe((courses)=>{
    //   this.courseList = courses;
    // })
  }
}
