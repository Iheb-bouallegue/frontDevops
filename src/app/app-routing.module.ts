import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversiteListComponent } from './components/universite-list/universite-list.component';
import { UniversiteAddComponent } from './components/universite-add/universite-add.component';
import {  UpdateUniversiteComponentComponent } from './components/update-universite-component/update-universite-component.component';

const routes: Routes = [
  { path: 'universites', component: UniversiteListComponent },
  { path: 'ajouter-universite', component: UniversiteAddComponent },
  { path: 'update-universite/:id', component: UpdateUniversiteComponentComponent },
  { path: '', redirectTo: '/universites', pathMatch: 'full' }, // Redirection par défaut
  { path: '**', redirectTo: '/universites' } // Gestion des chemins non définis
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
