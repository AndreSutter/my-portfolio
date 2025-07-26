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
  private lastScrollY = 0;

  constructor(public i18n: TranslationService) {}

  ngOnInit() {
    this.lastScrollY = window.scrollY;
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
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => (this.isMenuOpen = false), 300);
  }
}
