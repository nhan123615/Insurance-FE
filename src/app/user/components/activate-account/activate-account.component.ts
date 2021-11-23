import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CredentialService } from 'src/app/services/credential.service';
import { APP_CONST } from '../../../constants';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ActivateAccountComponent implements OnInit {
  loading = false;
  isDisabled = true;
  credential = {
    token: '',
    activationCode: '',
    requestType: ''
  }
  formRequest: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private credentialService: CredentialService,
    private toastr: ToastrService,
    private cd : ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      let token = params['token'];
      let activationCode = params['activation-code'];
      let requestType = params['type'];
      if (token && activationCode && requestType) {
        this.credential = {
          token,
          activationCode,
          requestType
        }

        if (this.credential.requestType === APP_CONST.REQUEST_ACTIVATE_ACCOUNT) {
          this.verifyActivateAccount();
        } else if (this.credential.requestType === APP_CONST.REQUEST_FORGOT_PASSWORD) {
          this.verifyTokenAndActivationCode();
          this.initForm();
        }
      } else {
        this.toastr.error('Invalid Request');
        this.router.navigate(['login'])
      }
    });
  }

  initForm() {
    this.formRequest = this.formBuilder.group({
      password: '',
    });
  }


  onSubmit() {
    this.loading = true;
    let email = atob(this.credential.token);
    const { password } = this.formRequest.value;
    let activationCode = this.credential.activationCode;
    let resetPasswordAccount = {
      email,
      activationCode,
      password
    }
    this.credentialService.resetPassword(resetPasswordAccount).then(data => {
      this.loading = false;
      this.cd.detectChanges();
      if (data.hasOwnProperty('error')) {
        this.toastr.error(data.error.detail);
      } else {
        this.toastr.success('Reset Password success');
      }
    })
    this.router.navigate(['login']);
  }


  verifyTokenAndActivationCode() {
    this.loading = true;
    let email = atob(this.credential.token);
    let activationCode = this.credential.activationCode;
    let verifyAccount = {
      email,
      activationCode
    }
    this.credentialService.verifyActivationCodeAndEmail(verifyAccount).then(data => {
      this.loading = false;
      this.cd.detectChanges();
      if (data.hasOwnProperty('error')) {
        this.toastr.error(data.error.detail);
        this.router.navigate(['login']);
      } else {
        if (data.email == email && data.activationCode == this.credential.activationCode) {
          return true;
        }
        this.toastr.error('Invalid Link');
        this.router.navigate(['login']);
      }
    })
  }


  verifyActivateAccount() {
    this.loading = true;
    let email = atob(this.credential.token);
    let activationCode = this.credential.activationCode;
    let activateAccount = {
      email,
      activationCode
    }
    this.credentialService.activateAccount(activateAccount).then(data => {
      this.loading = false;
      this.cd.detectChanges();
      if (data.hasOwnProperty('error')) {
        this.toastr.error(data.error.detail);
      } else {
        this.toastr.success('Activate account success');
      }
      this.router.navigate(['login']);
    })
  }
}
