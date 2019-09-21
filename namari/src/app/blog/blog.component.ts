import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog
  constructor(private blogData:ConfigService) { }

  ngOnInit() {
    this.blog = this.blogData.getConfigurationData().blog;
  }

}
