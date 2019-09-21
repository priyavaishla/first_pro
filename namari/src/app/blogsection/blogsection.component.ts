import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-blogsection',
  templateUrl: './blogsection.component.html',
  styleUrls: ['./blogsection.component.css']
})
export class BlogsectionComponent implements OnInit {
  @Input() blockSection:any;
  constructor() { }

  ngOnInit() {
  }

}
