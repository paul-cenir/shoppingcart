import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-site-image',
  templateUrl: './site-image.component.html',
  styleUrls: ['./site-image.component.less']
})
export class SiteImageComponent implements OnInit {
  @Input() imgSrc: any;
  @Input() alt: any;
  constructor() { }

  ngOnInit() {
  }

}
