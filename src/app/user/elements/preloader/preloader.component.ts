import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'preloader',
    templateUrl: './preloader.component.html',
    styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        // this.loadScript();
    }

    loadScript() {
        // -- :: Loading Page
        $(window).on('load', function () {
            $('#loading').fadeOut(1000);
            $('html').css('overflow-y', 'visible');
        });
        // ----------------------------------
    }

}
