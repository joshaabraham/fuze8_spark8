import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { ContentComponent } from 'app/layout/components/content/content.component';
import { ThreeColMainContentComponent } from './three-col-main-content/three-col-main-content.component';
import { ContainerColLeftComponent } from './ThreeColMainContent/container-col-left/container-col-left.component';
import { ContColLeftComponent } from './ThreeColMainContent/cont-col-left/cont-col-left.component';
import { ContColMiddleComponent } from './ThreeColMainContent/cont-col-middle/cont-col-middle.component';
import { ContColRightComponent } from './ThreeColMainContent/cont-col-right/cont-col-right.component';

@NgModule({
    declarations: [
        ContentComponent,
        ThreeColMainContentComponent,
        ContainerColLeftComponent,
        ContColLeftComponent,
        ContColMiddleComponent,
        ContColRightComponent
    ],
    imports     : [
        RouterModule,
        FuseSharedModule
    ],
    exports     : [
        ContentComponent
    ]
})
export class ContentModule
{
}
