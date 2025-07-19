import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { TranslationService } from '../translation.service';

@Component({
  standalone: true,
  selector: 'app-legal-notice',
  imports: [CommonModule],
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent {
  readonly i18n = inject(TranslationService);

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
