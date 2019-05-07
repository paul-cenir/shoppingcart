import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/shared-module/services/job.service';

@Component({
    selector: 'app-job-order',
    templateUrl: './job-order.component.html',
    styleUrls: ['./job-order.component.less']
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
                this.jobData =  result['data']['jobData'];
                this.jobTableData = [];
                this.jobTableData['bodyData'] = result['data']['jobItemData'];
                this.jobTableData['footerData'] = this.jobData;
                this.jobTableData['footerData']['buttonText'] = 'Continue Shopping';
            });
    }

    shopping() {
        this.Router.navigateByUrl('/homepage');
    }
}
