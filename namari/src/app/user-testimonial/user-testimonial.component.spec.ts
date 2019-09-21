import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTestimonialComponent } from './user-testimonial.component';

describe('UserTestimonialComponent', () => {
  let component: UserTestimonialComponent;
  let fixture: ComponentFixture<UserTestimonialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTestimonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
