import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isContactFormOpen = false;
  email: string = '';
  message: string = '';

  constructor(private http: HttpClient) {}

  showContactForm() {
    this.isContactFormOpen = true;
  }

  sendMessage() {
    // Create a message object with email and message
    const messageData = {
      email: this.email,
      message: this.message
    };

    // Make a POST request to your back-end API to send the message
    this.http.post('your-backend-api-url/send-message', messageData).subscribe(
      (response) => {
       
        console.log('Message sent:', response);
        this.closeContactForm();
      },
      (error) => {
        
        console.error('Error sending message:', error);
      }
    );
  }

  closeContactForm() {
    this.isContactFormOpen = false;
    this.email = ''; 
    this.message = ''; 
  } 
}
