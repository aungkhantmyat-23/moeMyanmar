import { Router, ActivatedRoute } from '@angular/router';
import { Blog } from './../../models/blog';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {
  @Input()
  blogItem!: Blog;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

}
