import { Component, OnInit, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PROJECTS, Project } from '../../../projects.data';
import { RouterModule } from '@angular/router';
import { DetailHeaderComponent } from '../../shared/detail-header/detail-header.component';
import { TranslationService } from '../../../translation.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, DetailHeaderComponent],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project!: Project;
  nextProjectSlug!: string;

  private readonly order = ['join', 'sharkie', 'pokedex'];

  private readonly i18nService = inject(TranslationService);
  readonly i18n = toSignal(this.i18nService.lang$);
  readonly t = computed(() => {
    this.i18n();
    return this.i18nService.get.bind(this.i18nService);
  });

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(pm => {
      const slug = pm.get('slug') ?? '';
      this.setProject(slug);
    });
  }

  private setProject(slug: string): void {
    this.project = PROJECTS.find(p => p.slug === slug)!;
    const i = this.order.indexOf(slug);
    this.nextProjectSlug = this.order[(i + 1) % this.order.length];
  }
}
