import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InlineSVGModule } from 'ng-inline-svg';
import { ClipboardModule } from 'ngx-clipboard';
import { ToastrModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { AdminModule } from './admin/admin.module';
import { AuthService } from './admin/modules/auth';
import { FakeAPIService } from './admin/_fake';
import { LayoutModule } from './admin/_metronic/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutCustomerModule } from './customer/components/layout';
import { CustomerModule } from './customer/customer.module';
import { CredentialService } from './services/credential.service';
import { CustomerGuard } from './services/guard/customer.guard';
import { HttpObservablesService } from './services/http-method/http-observables.service';
import { InsuranceTypeService } from "./services/insurance-type.service";
import { MessageService } from "./services/message.service";
import { PolicyService } from './services/policy.service';
import { SubscriptionService } from "./services/subscription.service";
import { PreloaderComponent } from './user/elements/preloader/preloader.component';
import { UserModule } from './user/user.module';

function appInitializer(authService: AuthService) {
  return () => {
    return new Promise((resolve) => {
      authService.getUserByToken().subscribe().add(resolve);
    });
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    ClipboardModule,
    // #fake-start#
    environment.isMockEnabled
      ? HttpClientInMemoryWebApiModule.forRoot(FakeAPIService, {
        passThruUnknownUrl: true,
        dataEncapsulation: false,
      })
      : [],
    // #fake-end#
    InlineSVGModule.forRoot(),
    NgbModule,
    CustomerModule,
    UserModule,
    AdminModule,
    //ngx toast
    ToastrModule.forRoot({
      disableTimeOut: false,
      timeOut: 3000,
      tapToDismiss: true,
      preventDuplicates: true,
      includeTitleDuplicates: true,
      newestOnTop: true,
      progressBar: true,
      progressAnimation: 'decreasing',
      easing: 'ease-in',
      easeTime: 300,
    }), // ToastrModule added

  ],
  exports: [],
  providers: [
    HttpObservablesService,
    InsuranceTypeService,
    CredentialService,
    MessageService,
    PolicyService,
    SubscriptionService,
    CustomerGuard,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      multi: true,
      deps: [AuthService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
