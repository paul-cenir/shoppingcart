import { JobService } from 'src/app/job-order/job-order/job.service';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-job-order',
    templateUrl: './job-order.component.html',
    styleUrls: ['../../../assets/css_min/flow-checkout/flow-checkout.min.css'
        , '../../../assets/css_min/flow-checkout/flow-checkout-mobile.min.css'],
    encapsulation: ViewEncapsulation.None
})

export class JobOrderComponent implements OnInit {
    @Input() jobTableData: any;
    jobId = +this.ActivatedRoute.snapshot.paramMap.get('id');
    jobData: any;

    constructor(
        private Router: Router,
        private JobService: JobService,
        private ActivatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.getJob();
    }

    getJob(): void {
        this.JobService.getJob(this.jobId)
            .subscribe(result => {
                this.jobData = result['data']['jobData'];
                this.jobTableData = [];
                this.jobTableData['bodyData'] = result['data']['jobItemData'];
                this.jobTableData['footerData'] = this.jobData;
                this.jobTableData['footerData']['buttonText'] = 'Continue Shopping';
            }, error => {
                this.Router.navigateByUrl('/404');
            });
    }

    goToshop() {
        this.Router.navigateByUrl('/homepage');
    }
}
