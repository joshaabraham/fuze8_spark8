import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DataModule } from '../../../app/Modules/data/data.module';

// const routes = [
//     {
//         path     : 'pages',
//         component: PagesComponent
//     },
//     {
//         path : '',
//         loadChildren : './main/pages/pages.module#AuthenticationModule'
//     }
// ];


@NgModule({
    imports: [
        PagesRoutingModule,
        // AdministrationModule,
        // ChatModule,
        // CompetitionsModule,
        // EquipeModule,
        // EvenementModule,
        // GeolocalisationModule,
        // InscriptionModule,
        // InvitationModule,
        // JoueurModule,
        // NouvellesSportNatureModule,
        // PaiementModule,
        // ProfessionelModule,
        // PubliciteModule,
        // RechercheModule,
        // RecommandationModule,
        // SocieteModule,
        // SportModule,
     
    ],
    declarations: [PagesComponent],
    providers: []
})
export class PagesModule
{

}
