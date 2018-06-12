import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { SignUpComponent } from './sign-up.component';




@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterModule
  ],
  providers: []
})
export class SignUpModule { }
