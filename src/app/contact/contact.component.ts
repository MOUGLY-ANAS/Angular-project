import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactForm: FormGroup;
  showAlertMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }

  get emailControl() {
    return this.contactForm.get('email')!;
  }

  get messageControl() {
    return this.contactForm.get('message')!;
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const email = this.emailControl.value;
      const message = this.messageControl.value;

      
      this.contactService.submitContactForm({ email, message }).subscribe(
        (response) => {
          console.log('Message sent successfully:', response);
          this.contactForm.reset();
          this.showAlertMessage = 'Message sent successfully!';
          this.showAlert();
        },
        (error) => {
          console.error('Error sending message:', error);
        }
      );
    }
  }

  showAlert() {
    window.alert('The message has been sent successfully.');
   
  }
}
