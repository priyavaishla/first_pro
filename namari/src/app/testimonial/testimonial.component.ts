import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
testimonial
  constructor(private testData :ConfigService) { }

  ngOnInit() {
    this.testimonial = this.testData.getConfigurationData().testimonials;
  }

}
