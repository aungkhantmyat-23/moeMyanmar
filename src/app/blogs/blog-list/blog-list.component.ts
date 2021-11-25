import { ActivatedRoute, Router } from '@angular/router';
import { BlogsService } from './../../services/blogs.service';
import { Blog } from './../../models/blog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  blogList: Blog[] = [];
  constructor(
    private blogService: BlogsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.blogList=this.blogService.getBlogs();
  }
}
