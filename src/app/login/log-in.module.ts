import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { LogInComponent } from './log-in.component';


@NgModule({
  declarations: [
    LogInComponent
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: []
})
export class LogInModule { }
