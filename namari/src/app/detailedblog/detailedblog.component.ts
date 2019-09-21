import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detailedblog',
  templateUrl: './detailedblog.component.html',
  styleUrls: ['./detailedblog.component.css']
})
export class DetailedblogComponent implements OnInit {
detailedBlog
id
getcustomer
  constructor(private detailbog : ConfigService, private route: ActivatedRoute ,private loc : Location) { }

  ngOnInit() {
    this.detailedBlog = this.detailbog.getConfigurationData().blog;
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.getcustomer = this.detailedBlog.blogSection[this.id-1];
  }
getback(){
  this.loc.back();
}
}
