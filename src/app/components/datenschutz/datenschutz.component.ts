import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-datenschutz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './datenschutz.component.html',
  styleUrls: ['./datenschutz.component.scss']
})
export class DatenschutzComponent {
  constructor(private router: Router, public i18n: TranslationService) {}

  goBack(): void {
    this.router.navigate(['/contact']);
  }

  getList(key: string): string[] {
    const val = this.i18n.get(key);
    return Array.isArray(val) ? val : [];
  }
}
