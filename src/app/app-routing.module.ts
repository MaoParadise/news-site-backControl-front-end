import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NewSettingsComponent } from './components/new-settings/new-settings.component';
import { ApprovedSettingsComponent } from './components/approved-settings/approved-settings.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { TestComponent } from './components/testing/test/test.component';
import { AuthGuard } from './guards/auth.guard';
import { OutstandingComponent } from './components/outstand-settings/outstanding/outstanding.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'newSettings/:option',
    component: NewSettingsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'outSettings',
    component: OutstandingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'approvedSettings',
    component: ApprovedSettingsComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'test',
    component: TestComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
