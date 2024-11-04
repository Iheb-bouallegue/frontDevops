import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Universite } from 'src/app/models/universite';
import { UniversiteService } from 'src/app/services/universite.service';

@Component({
  selector: 'app-universite-list',
  templateUrl: './universite-list.component.html',
  styleUrls: ['./universite-list.component.css']
})
export class UniversiteListComponent implements OnInit {
  universite: Universite = {
    idUniversite: null,
    nomUniversite: '',
    adresse: '',
    foyer: null
  };
  universites: Universite[] = [];
  isEditing: boolean = false;

  constructor(private universiteService: UniversiteService, private router: Router) {}

  ngOnInit(): void {
    this.universiteService.getUniversites().subscribe((data) => {
      this.universites = data;
    });
  }

  deleteUniversite(idUniversite: number): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette université ?")) {
      this.universiteService.deleteUniversite(idUniversite).subscribe(() => {
        this.universites = this.universites.filter(u => u.idUniversite !== idUniversite);
      }, error => {
        console.error('Erreur lors de la suppression :', error);
      });
    }
  }

  editUniversite(universite: Universite): void {
    this.isEditing = true;
    this.universite = { ...universite }; // Clone pour éviter les modifications directes
  }

  onUpdate(): void {
    if (this.universite.idUniversite) {
      this.universiteService.updateUniversite(this.universite).subscribe(
        (response) => {
          // Met à jour la liste sans recharger
          const index = this.universites.findIndex(u => u.idUniversite === this.universite.idUniversite);
          if (index > -1) {
            this.universites[index] = response;
          }
          this.isEditing = false;
          this.universite = { idUniversite: null, nomUniversite: '', adresse: '', foyer: null };
        },
        (error) => {
          console.error('Erreur lors de la mise à jour :', error);
        }
      );
    }
  }

  cancelEdit(): void {
    this.isEditing = false;
    this.universite = { idUniversite: null, nomUniversite: '', adresse: '', foyer: null };
  }

  onSubmit(): void {
    this.universiteService.addUniversite(this.universite).subscribe(
      (response) => {
        this.universites.push(response);
        this.universite = { idUniversite: null, nomUniversite: '', adresse: '', foyer: null };
      },
      (error) => {
        console.error('Erreur lors de l\'ajout :', error);
      }
    );
  }
}
