import { Course } from './../../models/courses';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
})
export class CourseItemComponent implements OnInit {
  @Input()
  courseItem: Course;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
  viewDetail(courseItem) {
    this.router.navigate(['/course-detail'], { state: courseItem });
  }
}
