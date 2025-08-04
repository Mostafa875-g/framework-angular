import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home').then((m) => m.Home),
    title: 'Start Framework'
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about').then((m) => m.About),
    title: 'About - Start Framework'
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact').then((m) => m.Contact),
    title: 'Contact - Start Framework'
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./components/portfolio/portfolio').then((m) => m.Portfolio),
    title: 'Portfolio - Start Framework'
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/notfound/notfound').then((m) => m.Notfound),
    title: 'Not Found Page'
  }
];
