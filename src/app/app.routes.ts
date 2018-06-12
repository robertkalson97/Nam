import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { LogInComponent } from './login/log-in.component';
import { SignUpComponent } from './signup/sign-up.component';

export const appRoutes: Routes = [
  { path: '', component: LogInComponent, pathMatch: 'full' },
  { path: 'log-in', component: LogInComponent, pathMatch: 'full'  },
  { path: 'sign-up', component: SignUpComponent, pathMatch: 'full'  },
  { path: '**', component: LogInComponent },
];
