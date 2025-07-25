import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-datenschutz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './datenschutz.component.html',
  styleUrls: ['./datenschutz.component.scss']
})
export class DatenschutzComponent {
  constructor(private location: Location, public i18n: TranslationService) {}

  goBack(): void {
    this.location.back();
  }

  getList(key: string): string[] {
    const val = this.i18n.get(key);
    return Array.isArray(val) ? val : [];
  }
}
