import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  isYellow = false;
  stickerSrc = 'assets/img/pulltopeel.png';

  constructor(public i18n: TranslationService) {}

  toggleSticker(): void {
    this.isYellow = !this.isYellow;
    this.stickerSrc = this.isYellow
      ? 'assets/img/gelbsticker.png'
      : 'assets/img/pulltopeel.png';
  }
}
