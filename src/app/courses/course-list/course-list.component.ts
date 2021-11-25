import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from './../../services/courses.service';
import { Course } from './../../models/courses';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  courseName:string;
  categoryName:string;
  courseList: Course[] = [];
  constructor(
    private courseService: CoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.courseList=this.courseService.getCourses();
    this.courseService.getCourses().subscribe((courses)=>{
      this.courseList = courses;
    })
  
  }
  viewDetail(courseItem) {
    this.router.navigate(['/course-detail'], { state: courseItem });
  }
}
