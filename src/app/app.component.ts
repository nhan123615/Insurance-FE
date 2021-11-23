import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
declare global {
  interface Window {
    grecaptcha: any
  }
}
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'body[root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  // constructor(private translationService: TranslationService) {
  //   // register translations
  //   this.translationService.loadTranslations(
  //     enLang,
  //     chLang,
  //     esLang,
  //     jpLang,
  //     deLang,
  //     frLang
  //   );
  // }
  loading = true;
  constructor(
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {
    this.router.events.subscribe((e: RouterEvent) => {
      this.navigationInterceptor(e);
    });
  }
  // // Shows and hides the loading spinner during RouterEvent changes

  navigationInterceptor = (event: RouterEvent) => {
    let TIME_OUT = 500;
    if (event instanceof NavigationStart) {
      this.loading = true;
    } else {
      setTimeout(() => {
        this.loading = false;
        this.cdRef.detectChanges();
      }, TIME_OUT);
    }
  };

  ngOnInit() {
    $.getScript('../assets/user/js/custom/javaScript.js');
  }
}
