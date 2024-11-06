import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./content/input-form/input-form.page').then(
            (m) => m.InputFormPage
          ),
      },
      {
        path: 'input-form',
        loadComponent: () =>
          import('./content/input-form/input-form.page').then(
            (m) => m.InputFormPage
          ),
      },
      {
        path: 'results',
        loadComponent: () =>
          import('./content/results/results.page').then((m) => m.ResultsPage),
      },
      {
        path: 'history',
        loadComponent: () =>
          import('./content/history/history.page').then((m) => m.HistoryPage),
      },
      {
        path: 'report',
        loadComponent: () =>
          import('./content/report/report.page').then((m) => m.ReportPage),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./content/about/about.page').then((m) => m.AboutPage),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
  {
    path: 'report',
    loadComponent: () => import('./content/report/report.page').then( m => m.ReportPage)
  },
  {
    path: 'about',
    loadComponent: () => import('./content/about/about.page').then( m => m.AboutPage)
  },
];
