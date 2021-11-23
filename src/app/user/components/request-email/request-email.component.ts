import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CredentialService } from 'src/app/services/credential.service';
import { APP_CONST } from '../../../constants';

@Component({
  selector: 'app-request-email',
  templateUrl: './request-email.component.html',
  styleUrls: ['./request-email.component.scss']
})
export class RequestEmailComponent implements OnInit {
  requestType: string = '';
  isDisabled = true;
  loading = false;
  formRequest: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private credentialService: CredentialService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.initRequestType();
    this.initForm();
  }


  initForm() {
    this.formRequest = this.formBuilder.group({
      email: '',
    });
  }

  initRequestType() {
    this.activatedRoute.params.subscribe(param => {
      let type = param['type'];
      if (type) {
        this.requestType = type;
      } else {
        this.toastr.error('Invalid Request');
        this.router.navigate(['login']);
      }
    })
  }

  onRequest() {
    const { email } = this.formRequest.value;
    if (this.requestType === APP_CONST.REQUEST_FORGOT_PASSWORD) {
      this.resetPasswordRequest(email);
    } else if (APP_CONST.REQUEST_ACTIVATE_ACCOUNT) {
      this.activateRequest(email);
    }

  }

  showResponse(event) {
    console.warn(event)
    if (event.response) {
      this.isDisabled = false;
    }
  }
  activateRequest(email: string) {
    this.loading = true;
    this.credentialService.activateRequest({ email }).then(data => {
      this.loading = false;
      if (data.hasOwnProperty('error')) {
        this.toastr.error(data.error.detail)
      } else {
        this.toastr.success('Email has sent to your account');
      }
      this.isDisabled = true;
      window.grecaptcha.reset()
      this.router.navigate(['login'])
    })
  }

  resetPasswordRequest(email: string) {
    this.loading = true;
    this.credentialService.resetPasswordRequest({ email }).then(data => {
      this.loading = false;
      if (data.hasOwnProperty('error')) {
        this.toastr.error(data.error.detail)
      } else {
        this.toastr.success('Email has sent to your account');
      }
      this.isDisabled = true;
      window.grecaptcha.reset()
      this.router.navigate(['login'])
    })
  }




}
