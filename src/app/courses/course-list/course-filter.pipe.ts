import { Course } from './../../models/courses';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseFilter',
})
export class CourseFilter implements PipeTransform {
  transform(value: Course[], name: string, category: string) {
    let temp = value;
    if (name) {
      temp = temp.filter((course) => course.name.toLowerCase());
    }
    if (category) {
      temp = temp.filter((course) => course.category == category);
    }
    return temp;
  }
}
