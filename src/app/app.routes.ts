import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'select-calculation-type', // Define a rota padrão inicial para a página select-calculation-type
    pathMatch: 'full',
  },
  {
    path: 'select-calculation-type', // Página inicial do conteúdo
    loadComponent: () =>
      import(
        './content/select-calculation-type/select-calculation-type.page'
      ).then((m) => m.SelectCalculationTypePage),
  },
  {
    path: '',
    children: [
      {
        path: 'header',
        loadComponent: () =>
          import('./content/header/header.page').then((m) => m.HeaderPage),
      },
      {
        path: 'sidebar',
        loadComponent: () =>
          import('./content/sidebar/sidebar.page').then((m) => m.SidebarPage),
      },
      {
        path: 'input-form',
        loadComponent: () =>
          import('./content/input-form/input-form.page').then(
            (m) => m.InputFormPage
          ),
      },
      {
        path: 'input-fields',
        loadComponent: () =>
          import('./content/input-form/input-fields/input-fields.page').then(
            (m) => m.InputFieldsPage
          ),
      },
      {
        path: 'submit-button',
        loadComponent: () =>
          import('./content/input-form/submit-button/submit-button.page').then(
            (m) => m.SubmitButtonPage
          ),
      },
      {
        path: 'results',
        loadComponent: () =>
          import('./content/results/results.page').then((m) => m.ResultsPage),
      },
      {
        path: 'result-table',
        loadComponent: () =>
          import('./content/results/result-table/result-table.page').then(
            (m) => m.ResultTablePage
          ),
      },
      {
        path: 'graph-display',
        loadComponent: () =>
          import('./content/results/graph-display/graph-display.page').then(
            (m) => m.GraphDisplayPage
          ),
      },
      {
        path: 'feedback',
        loadComponent: () =>
          import('./content/feedback/feedback.page').then(
            (m) => m.FeedbackPage
          ),
      },
      {
        path: 'loading-indicator',
        loadComponent: () =>
          import('./content/loading-indicator/loading-indicator.page').then(
            (m) => m.LoadingIndicatorPage
          ),
      },
      {
        path: 'error-notification',
        loadComponent: () =>
          import('./content/error-notification/error-notification.page').then(
            (m) => m.ErrorNotificationPage
          ),
      },
      {
        path: 'history',
        loadComponent: () =>
          import('./content/history/history.page').then((m) => m.HistoryPage),
      },
      {
        path: 'select-sub-type',
        loadComponent: () =>
          import('./content/select-sub-type/select-sub-type.page').then(
            (m) => m.SelectSubTypePage
          ),
      },
    ],
  },
];
