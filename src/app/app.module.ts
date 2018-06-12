import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { appRoutes } from './app.routes';

import { LogInModule } from './login/log-in.module';
import { SignUpModule } from './signup/sign-up.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    ),

    LogInModule,
    SignUpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
