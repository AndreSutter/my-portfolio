import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { TranslationService } from '../translation.service';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';


@Component({
  standalone: true,
  selector: 'app-legal-notice',
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent {
  constructor(private location: Location, public i18n: TranslationService) {}

  goBack(): void {
    this.location.back();
  }
}
