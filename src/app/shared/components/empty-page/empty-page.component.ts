import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-empty-page',
    templateUrl: './empty-page.component.html',
    styleUrls: ['../../../../assets/css_min/page-empty/page-empty.min.css']
})
export class EmptyPageComponent implements OnInit {
    @Input() message: any;
    @Input() icon: any;
    @Output() triggerClick = new EventEmitter();
    constructor() { }

    ngOnInit() {
    }

    clickEvent() {
        this.triggerClick.emit();
    }

}
