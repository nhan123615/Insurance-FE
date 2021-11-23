import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit
} from '@angular/core';
import {
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent, NavigationStart,
  Router
} from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, AfterViewInit {
  observer;
  loading = false;
  constructor(
    private elRef: ElementRef,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {
    // this.router.events.subscribe((e: RouterEvent) => {
    //   this.navigationInterceptor(e);
    // });
  }
  // // Shows and hides the loading spinner during RouterEvent changes

  // navigationInterceptor = (event: RouterEvent) => {
  //   let TIME_OUT = 500;
  //   if (event instanceof NavigationStart) {
  //     this.loading = true;
  //   } else {
  //     setTimeout(() => {
  //       this.loading = false;
  //       this.cdRef.detectChanges();
  //     }, TIME_OUT);
  //   }
  // };

  ngOnInit() {
    $.getScript('../../assets/user/js/custom/javaScript.js');//Add path to your custom js file
  }

  ngAfterViewInit() {
    this.observer = new MutationObserver((mutations) => {
      console.log('Dom change detected...');
      console.log(this.loading);
      $.getScript('../../assets/user/js/custom/javaScript.js'); //Add path to your custom js file
    });
    var config = { attributes: true, childList: true, characterData: true };

    this.observer.observe(this.elRef.nativeElement, config);
  }
}
