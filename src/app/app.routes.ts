import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Admin } from './admin/admin';
import { Login } from './login/login';
import { Dashboard2 } from './dashboard2/dashboard2';
import { Dashboard3 } from './dashboard3/dashboard3';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'admin', component: Admin },
  { path: 'dashboard', component: Dashboard },
  { path: 'login', component: Login },
  { path: 'dashboard2', component: Dashboard2 },
  { path: 'dashboard3', component: Dashboard3 },
];
