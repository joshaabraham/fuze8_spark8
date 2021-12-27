import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {PagesComponent } from '../pages/pages.component'

/***
 * Ici sont les pages qui doivent être affichées en dehors du cadre de l'application.
 * Les pags statics, les pages de login, d'erreur, de maintenance, les pages de résumé de facture etc ...
 */

const routes = [
  {
      path        : 'dashboards/analytics',
      loadChildren: './dashboards/analytics/analytics.module#AnalyticsDashboardModule'
  },
  {
      path        : 'dashboards/project',
      loadChildren: './dashboards/project/project.module#ProjectDashboardModule'
  },
  {
      path        : 'mail',
      loadChildren: './mail/mail.module#MailModule'
  },
  {
      path        : 'mail-ngrx',
      loadChildren: './mail-ngrx/mail.module#MailNgrxModule'
  },
  {
      path        : 'chat',
      loadChildren: './chat/chat.module#ChatModule'
  },
  {
      path        : 'calendar',
      loadChildren: './calendar/calendar.module#CalendarModule'
  },
  {
      path        : 'e-commerce',
      loadChildren: './e-commerce/e-commerce.module#EcommerceModule'
  },
  {
      path        : 'academy',
      loadChildren: './academy/academy.module#AcademyModule'
  },
  {
      path        : 'todo',
      loadChildren: './todo/todo.module#TodoModule'
  },
  {
      path        : 'file-manager',
      loadChildren: './file-manager/file-manager.module#FileManagerModule'
  },
  {
      path        : 'contacts',
      loadChildren: './contacts/contacts.module#ContactsModule'
  },
  {
      path        : 'scrumboard',
      loadChildren: './scrumboard/scrumboard.module#ScrumboardModule'
  }
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule {
}
