import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsCoursesComponent } from './about-us-courses.component';

describe('AboutUsCoursesComponent', () => {
  let component: AboutUsCoursesComponent;
  let fixture: ComponentFixture<AboutUsCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
