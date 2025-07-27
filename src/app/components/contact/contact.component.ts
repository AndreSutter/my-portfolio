import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../../translation.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactData = {
    name: '',
    email: '',
    message: '',
    privacyAccepted: false
  };

  showSuccessMessage = false;
  isMobile = false;
  mailTest = false;

  post = {
    endPoint: 'https://andre-sutter.ch/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: { 'Content-Type': 'text/plain' },
      responseType: 'text' as const
    }
  };

  constructor(private http: HttpClient, public i18n: TranslationService) {}

  ngOnInit(): void {
    this.updateIsMobile();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateIsMobile();
  }

  private updateIsMobile(): void {
    this.isMobile = window.innerWidth <= 768;
  }

onSubmit(form: NgForm): void {
  // 🧹 Name aufräumen
  this.contactData.name = this.contactData.name.trim().replace(/\s+/g, ' ');

  if (form.submitted && form.valid && !this.mailTest) {
    this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
      .subscribe({
        next: () => this.handleSuccess(form),
        error: (err) => console.error('❌ Sending failed:', err),
        complete: () => console.info('📤 Send post complete')
      });
  } else if (form.submitted && form.valid && this.mailTest) {
    console.log('🧪 Test mode – no real send:', this.contactData);
    this.handleSuccess(form, 7000);
  }
}


  private handleSuccess(form: NgForm, timeout: number = 6000): void {
    this.showSuccessMessage = true;
    setTimeout(() => {
      this.showSuccessMessage = false;
      form.resetForm();
    }, timeout);
  }
}
