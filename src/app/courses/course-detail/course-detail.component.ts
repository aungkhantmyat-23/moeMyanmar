import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from './../../services/courses.service';
import { Course } from './../../models/courses';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements OnInit {
  courseItem: Course;
  courseList: Course[] = [];
  constructor(
    private courseService: CoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.courseList=this.courseService.getCourses();
    // this.courseService.getCourses().subscribe((courses)=>{
    //   this.courseList = courses;
    // })
    this.courseItem=history.state;
    console.log(history.state);
  }
  viewDetail(courseItem) {
    this.router.navigate(['/course-detail'], { state: courseItem });
  }
  
}
