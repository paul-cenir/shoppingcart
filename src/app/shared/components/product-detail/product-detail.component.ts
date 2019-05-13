import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
  @Input() product: any;
  constructor(  private ConfigService: ConfigService) { }

  ngOnInit() {
  }

}
