import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-pricing-block',
  templateUrl: './pricing-block.component.html',
  styleUrls: ['./pricing-block.component.css']
})
export class PricingBlockComponent implements OnInit {
@Input() pricingBlock:any;
  constructor() { }

  ngOnInit() {
  }

}
