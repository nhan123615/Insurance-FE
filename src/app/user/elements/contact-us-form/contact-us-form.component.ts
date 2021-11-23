import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
    selector: 'contact-us-form',
    templateUrl: './contact-us-form.component.html',
    styleUrls: ['./contact-us-form.component.css']
})
export class ContactUsFormComponent implements OnInit {
    contactForm : FormGroup
    loading = false;
    constructor(
        private formBuilder: FormBuilder,
        private toastr: ToastrService,
        private customerService : CustomerService,
        private cd : ChangeDetectorRef
        ) {
    
    }

    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            firstname:'',
            lastname:'',
            email:'',    
            country:'',
            amount:'',
            message:''
        });
    }

    sendFeedback() {
        this.loading= true;
        let contactMsg : any = this.contactForm.value;
        console.log(contactMsg);
        this.customerService.sendContact(contactMsg).then(
            res=> {
                this.loading = false;
                this.cd.detectChanges();
                if(res.msg = 'Success') {
                    this.toastr.success("Sent");
                }
                else {
                    this.toastr.error("Failed");
                }
            },
            error => {
                console.log(error);
            }
        )
        
    }

}
