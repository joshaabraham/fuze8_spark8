import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {PagesComponent } from '../pages/pages.component'

/***
 * Ici sont les pages qui doivent être affichées en dehors du cadre de l'application.
 * Les pags statics, les pages de login, d'erreur, de maintenance, les pages de résumé de facture etc ...
 */

const routes: Routes = [
 // { path: '', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
    { path: 'login', redirectTo: '/auth/login', pathMatch: 'full'},
    { path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
 // { path: '**', component: PageNotFoundComponent },
  // { path: '', component: PagesComponent,
  //   children:[
  //     {path: '', redirectTo: 'pages', pathMatch: 'full'},
  //     {path: 'sport', redirectTo: 'sport', pathMatch: 'full'},
  //     { path: 'chat', loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)},
  //     { path: 'contacts', loadChildren: () => import('../apps/contacts/contacts.module').then(m => m.ContactsModule)},
  //     { path: 'academy', loadChildren: () => import('../apps/academy/academy.module').then(m => m.AcademyModule)},
  //   ]},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
