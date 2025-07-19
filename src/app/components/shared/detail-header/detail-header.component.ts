import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../../../translation.service';

@Component({
  selector: 'app-detail-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detail-header.component.html',
  styleUrls: ['./detail-header.component.scss']
})
export class DetailHeaderComponent {
  isMenuOpen = false;
  constructor(public i18n: TranslationService) {}

  toggleLanguage(event: Event) {
    const c = event.target as HTMLInputElement;
    this.i18n.setLanguage(c.checked ? 'de' : 'en');
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => (this.isMenuOpen = false), 300);
  }
}
