import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path : '/login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path : '/register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)},
  { path : '/forgot-password', loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)},
  { path : '/reset-password', loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule)},
  { path : '/lock', loadChildren: () => import('./lock/lock.module').then(m => m.LockModule)},
  { path : '/mail-confirm', loadChildren: () => import('./mail-confirm/mail-confirm.module').then(m => m.MailConfirmModule)}
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {
}
