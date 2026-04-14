// import { LegajoDetailComponent } from './pages/legajo-detail/legajo-detail.component';
// import { Routes } from '@angular/router';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { AboutComponent } from './pages/about/about.component';

// export const routes: Routes = [
//     {
//         path: 'legajos',
//         component: DashboardComponent,
//     },
//     {
//         path: '',
//         redirectTo: 'legajos',
//         pathMatch: 'full'

//     },
//     {
//         path:'legajos/:id',
//         component: LegajoDetailComponent,
//     }
//     // {
//     //     path:'about',
//     //     component: AboutComponent,
//     // },
    
// ];

// import { Routes } from '@angular/router';
// import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

// export const routes: Routes = [

//   {
//     path: '',
//     component: MainLayoutComponent,
//     children: [
//       { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

//       {
//         path: 'dashboard',
//         loadComponent: () =>
//           import('./pages/dashboard/dashboard.component')
//             .then(m => m.DashboardComponent)
//       },

//       {
//         path: 'legajos',
//         loadComponent: () =>
//           import('./pages/legajo-detail/legajo-detail.component')
//             .then(m => m.LegajoDetailComponent)
//       },
//     ]
//   },

// ];

import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [

  // 🔐 AUTH (sin layout principal)
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/auth/login/login.component')
        .then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/auth/register/register.component')
        .then(m => m.RegisterComponent)
  },
  {
    path: 'recovery-password',
    loadComponent: () =>
      import('./pages/auth/recovery-password/recovery-password.component')
        .then(m => m.RecoveryPasswordComponent)
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/auth/profile/profile.component')
        .then(m => m.ProfileComponent)
  },
  
  // 🧱 APP PRINCIPAL
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'legajos', pathMatch: 'full' },

      {
        path: 'legajos',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component')
            .then(m => m.DashboardComponent)
      }
    ]
  },

  //
  {
  path: '**',
  redirectTo: 'login'
  }
];