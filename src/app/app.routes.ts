import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JoinDetailComponent } from './components/projects/join-detail/join-detail.component';
import { ProjectDetailComponent } from './components/projects/project-detail/project-detail.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/join', component: JoinDetailComponent },
  { path: 'projects/:slug', component: ProjectDetailComponent },
  {
    path: 'impressum',
    loadComponent: () =>
      import('./legal-notice/legal-notice.component').then(
        m => m.LegalNoticeComponent
      )
  }
];

