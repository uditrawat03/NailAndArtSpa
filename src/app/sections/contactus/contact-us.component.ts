import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-contactus-section',
    templateUrl: './contact-us.component.html'
})
export class ContactusComponent implements OnInit{

    contactUsForm: FormGroup
    contactSuccessMessage: string;
    contactErrorMessage: string;
    year: string

    ngOnInit(){
        this.year = new Date().getFullYear().toString();
        this.contactUsForm = new FormGroup({
            'name': new FormControl(null, Validators.required),
            'email': new FormControl(null, Validators.required),
            'subject': new FormControl(null, Validators.required),
            'description': new FormControl(null, Validators.required),
        })
    }

    onSubmit(){
        const value = this.contactUsForm.value;

        console.log(value);
    }
}