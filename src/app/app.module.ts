import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddairlinesComponent } from './modules/addairlines/addairlines.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,


 ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
have used multiple modules(Lazy-Loading Approach)
1.default.module.ts
2.shared.module.ts*/
