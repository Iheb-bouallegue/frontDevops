import { Component } from '@angular/core';
import { UniversiteService } from '../../services/universite.service';
import { Universite } from 'src/app/models/universite';


@Component({
  selector: 'app-universite-add',
  templateUrl: './universite-add.component.html',
})
export class UniversiteAddComponent {
  universite: Universite = {
    idUniversite: null, // Si nécessaire, sinon omettez-le
    nomUniversite: '',
    adresse: '',
    foyer: null // Ajustez selon le modèle
  };

  constructor(private universiteService: UniversiteService) {}

  onSubmit(): void {
    this.universiteService.addUniversite(this.universite).subscribe(
      (response) => {
        console.log('Université ajoutée:', response);
        // Ajouter une action, comme rediriger l'utilisateur ou afficher un message de succès
      },
      (error) => {
        console.error('Erreur lors de l\'ajout:', error);
      }
    );
  }
}
