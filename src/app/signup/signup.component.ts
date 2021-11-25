import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: [''],
      phone: [''],
      email: [''],
      password: [''],
    });
  }
  signUp() {
    this.http
      .post<any>('http://localhost:3000/user', this.signupForm.value)
      .subscribe(
        (result) => {
          alert('Signup Sueecssful');
          this.signupForm.reset();
          this.router.navigate(['login']);
        },
        (err) => {
          alert('Something went wrong');
        }
      );
  }
}
