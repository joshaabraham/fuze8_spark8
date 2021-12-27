import { NgModule } from '@angular/core';

import { VerticalLayout1Module } from 'app/layout/vertical/layout-1/layout-1.module';
import { VerticalLayout2Module } from 'app/layout/vertical/layout-2/layout-2.module';
import { VerticalLayout3Module } from 'app/layout/vertical/layout-3/layout-3.module';

import { HorizontalLayout1Module } from 'app/layout/horizontal/layout-1/layout-1.module';
import { InvitationCardComponent } from './components/invitation-card/invitation-card.component';
import { CommentBlockComponent } from './components/comment-block/comment-block.component';
import { MainConteneurComponent } from './components/main-conteneur/main-conteneur.component';
import { FlagAlertComponent } from './components/flag-alert/flag-alert.component';
import { SportSearchBlockComponent } from './components/sport-search-block/sport-search-block.component';
import { DialogConteneurComponent } from './components/dialog-conteneur/dialog-conteneur.component';

@NgModule({
    imports: [
        VerticalLayout1Module,
        VerticalLayout2Module,
        VerticalLayout3Module,

        HorizontalLayout1Module
    ],
    exports: [
        VerticalLayout1Module,
        VerticalLayout2Module,
        VerticalLayout3Module,

        HorizontalLayout1Module
    ],
    declarations: [InvitationCardComponent, CommentBlockComponent, MainConteneurComponent, FlagAlertComponent, SportSearchBlockComponent, DialogConteneurComponent]
})
export class LayoutModule
{
}
