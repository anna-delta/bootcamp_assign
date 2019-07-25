import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { BmanViewComponent } from './bman-view/bman-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserDetailsComponent,
    CategoryDetailsComponent,
    AdminViewComponent,
    BmanViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
