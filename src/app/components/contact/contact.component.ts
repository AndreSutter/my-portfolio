import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router'; 
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], 
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: '',
    privacyAccepted: false
  };

  mailTest = false;

  // ✅ Erfolgsmeldung anzeigen
  showSuccessMessage: boolean = false;

  post = {
    endPoint: 'https://andre-sutter.ch/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
      },
      responseType: 'text' as const
    }
  };

  constructor(private http: HttpClient, public i18n: TranslationService) {}

  onSubmit(form: NgForm) {
    if (form.submitted && form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: (response) => {
            console.log('✅ Mail sent successfully:', response);
            this.showSuccessMessage = true;
            setTimeout(() => this.showSuccessMessage = false, 6000);
            form.resetForm();
          },
          error: (error) => {
            console.error('❌ Sending failed:', error);
          },
          complete: () => console.info('📤 Send post complete'),
        });
    } else if (form.submitted && form.valid && this.mailTest) {
      console.log('🧪 Test mode – no real send:', this.contactData);
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 7000);
      form.resetForm();
    }
  }
}
