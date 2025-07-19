import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DetailHeaderComponent } from '../../shared/detail-header/detail-header.component';
import { TranslationService } from '../../../translation.service';

@Component({
  selector: 'app-join-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, DetailHeaderComponent],
  templateUrl: './join-detail.component.html',
  styleUrls: ['./join-detail.component.scss']
})
export class JoinDetailComponent {
  nextProjectSlug = 'sharkie';

  constructor(public i18n: TranslationService) {}
}
