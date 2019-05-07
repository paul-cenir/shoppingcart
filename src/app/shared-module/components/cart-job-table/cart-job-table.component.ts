import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cart-job-table',
    templateUrl: './cart-job-table.component.html',
    styleUrls: ['./cart-job-table.component.less']
})
export class CartJobTableComponent implements OnInit {
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
