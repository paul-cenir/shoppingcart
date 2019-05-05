import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
    selector: 'app-cart-job-table',
    templateUrl: './cart-job-table.component.html',
    styleUrls: ['./cart-job-table.component.less']
})
export class CartJobTableComponent implements OnInit {
    @Input() tableData: any;
    constructor(private ConfigService: ConfigService) {
    }
    ngOnInit() {
    }

}
