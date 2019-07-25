import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { BmanViewComponent } from './bman-view/bman-view.component';

const routes: Routes = [
  {path : 'login', component : SignUpComponent},
  {path : 'display', component :  UserDetailsComponent},
  {path : 'admin', component :  AdminViewComponent},
  {path : 'bMan', component :  BmanViewComponent},
  {path : '', redirectTo : '/login', pathMatch :'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
