import { Component, HostListener, OnInit } from '@angular/core';
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
export class DetailHeaderComponent implements OnInit {
  isMenuOpen = false;
  isHeaderHidden = false;
  currentLangIsGerman = false;
  private lastScrollY = 0;

  constructor(public i18n: TranslationService) {}

  ngOnInit() {
    this.lastScrollY = window.scrollY;
    this.currentLangIsGerman = this.i18n.getCurrentLang() === 'de';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.scrollY;

    if (currentScroll > this.lastScrollY && currentScroll > 80) {
      this.isHeaderHidden = true;
    } else {
      this.isHeaderHidden = false;
    }

    this.lastScrollY = currentScroll;
  }

  toggleLanguage(event: Event) {
    const c = event.target as HTMLInputElement;
    this.i18n.setLanguage(c.checked ? 'de' : 'en');
    this.currentLangIsGerman = c.checked;
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => (this.isMenuOpen = false), 300);
  }
}