import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
banner;
  constructor(private bannerData : ConfigService) { }

  ngOnInit() {
    this.banner = this.bannerData.getConfigurationData().banner;
  }

}
