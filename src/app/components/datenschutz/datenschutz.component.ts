import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { TranslationService } from '../../translation.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-datenschutz',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './datenschutz.component.html',
  styleUrls: ['./datenschutz.component.scss']
})
export class DatenschutzComponent {
  constructor(public i18n: TranslationService, private location: Location) {}

  goBack(): void {
    this.location.back();
  }

  getList(key: string): string[] {
    const val = this.i18n.get(key);
    return Array.isArray(val) ? val : [];
  }
}
