import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-intro-block',
  templateUrl: './intro-block.component.html',
  styleUrls: ['./intro-block.component.css']
})
export class IntroBlockComponent implements OnInit {
@Input() introblock :any;
  constructor() { }

  ngOnInit() {
  }

}
