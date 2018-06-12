import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LogInComponent } from './login/log-in.component';

export const appRoutes: Routes = [
  { path: '', component: LogInComponent, pathMatch: 'full' },
  { path: 'log-in', component: LogInComponent, pathMatch: 'full'  },
  { path: '**', component: LogInComponent },
];
