import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from './../../services/books.service';
import { Book } from './../../models/books';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  bookList: Book[] = [];
  constructor(
    private bookService: BooksService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bookList = this.bookService.getBooks();
  }
}
