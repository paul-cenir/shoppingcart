import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-order-detail',
    templateUrl: './order-detail.component.html',
    styleUrls: ['../../../../assets/less/components/order-detail/comp-order-detail.less']
})
export class OrderDetailComponent implements OnInit {
    @Input() tableData: any;
    @Output() triggerClick = new EventEmitter();

    constructor(private ConfigService: ConfigService, private Router: Router) {
    }

    ngOnInit() {
    }

    clickEvent() {
        this.triggerClick.emit();
    }
}
