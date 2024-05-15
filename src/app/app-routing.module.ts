import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'forget-password', component:ForgetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
