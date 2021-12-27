import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './profil/profil.component';
import { SelecteurComponent } from './selecteur/selecteur.component';
import { EtiquetteComponent } from './etiquette/etiquette.component';

@NgModule({
  declarations: [ProfilComponent, SelecteurComponent, EtiquetteComponent],
  imports: [
    CommonModule
  ]
})
export class JoueurModule { }
