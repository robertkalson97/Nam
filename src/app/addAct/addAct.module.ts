import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';

import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';


import { AddActComponent } from './addAct.component';


@NgModule({
  declarations: [
    AddActComponent
  ],
  imports: [
    RouterModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
  ]
})
export class AddActModule { }
