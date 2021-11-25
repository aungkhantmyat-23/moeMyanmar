import { Router, ActivatedRoute } from '@angular/router';
import { Book } from './../../models/books';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
})
export class BookItemComponent implements OnInit {
  @Input()
  bookItem!: Book;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
