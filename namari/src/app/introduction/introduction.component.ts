import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
intro
  constructor(private introData : ConfigService) { }

  ngOnInit() {
    this.intro = this.introData.getConfigurationData().about;
  }

}
