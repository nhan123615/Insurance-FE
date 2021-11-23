import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    loadScript() {
        // -- :: Footer
        // Language Menu
        $('#lang-btn').on('click', function () {
            $('footer .copyright .language-menu .menu').toggleClass('show');
        });
        $(document).mouseup(function (e:any) {
            var container = $("footer .copyright .language-menu .menu");

            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                container.removeClass('show');
            }
        });
    }

}
