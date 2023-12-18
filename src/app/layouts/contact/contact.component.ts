import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  isLoading = false;
  contactForm!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder,) {

  }
  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.contactForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required, Validators.pattern(/^(^\+251|^251|^0)?9\d{8}$/)]],
      content: [null, Validators.required],
    });
  }

  submitForm() {

    this.checkInput();
    if (this.contactForm.valid) {

      this.contactForm.reset();
    }
  }

  checkInput() {
    for (const i in this.contactForm.controls) {
      this.contactForm.controls[i].markAsDirty();
      this.contactForm.controls[i].updateValueAndValidity();
    }
  }
}
