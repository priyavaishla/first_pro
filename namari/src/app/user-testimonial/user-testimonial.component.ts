import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-user-testimonial',
  templateUrl: './user-testimonial.component.html',
  styleUrls: ['./user-testimonial.component.css']
})
export class UserTestimonialComponent implements OnInit {
@Input() userTest :any;
  constructor() { }

  ngOnInit() {
  }

}
