import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(
    public i18n: TranslationService,
    public router: Router
  ) {}

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => (this.isMenuOpen = false), 300);
  }

  toggleLanguage(evt: Event) {
    const c = evt.target as HTMLInputElement;
    this.i18n.setLanguage(c.checked ? 'de' : 'en');
  }

  goHome() {
    this.router.navigate(['/']);
  }
}

