import type { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadComponent: () => import('./pages/welcome/welcome.component').then((c) => c.WelcomeComponent) },
  { path: 'settings', loadComponent: () => import('./pages/settings/settings.component').then((c) => c.SettingsComponent) },

  { path: '404', loadComponent: () => import('./pages/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent) },
  { path: '**', redirectTo: '/404' },
];
