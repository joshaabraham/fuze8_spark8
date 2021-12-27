import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// import { PageNotFoundComponent } from './pages';
import { } from '../app/main/pages/pages.component'


const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./main/pages/authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: 'pages', loadChildren: () => import('./main/pages/pages.module').then(m => m.PagesModule) },
  { path: 'apps', loadChildren: () => import('./main/apps/apps.module').then(m => m.AppsModule) },
 // { path: '**', component: PageNotFoundComponent }
];


// const appRoutes: Routes = [
//     {   
//         path         : '' , 
//         loadChildren : './main/pages/pages.module#AuthenticationModule'},
//     {   
//         path         : 'pages' , 
//         loadChildren : './main/pages/pages.module#PagesModule'},
        
//     {
//         path         : '**',
//         redirectTo   : 'apps/dashboards/analytics'},
//     {   
//         path        : 'sample',
//         loadChildren  : './main/sample/sample.module#SampleModule'
//     }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
