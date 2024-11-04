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
  universites: Universite[] = [];
  constructor(private universiteService: UniversiteService, private router: Router) {}
  ngOnInit(): void {
    this.universiteService.getUniversites().subscribe((data) => {
      this.universites = data;
      console.log(data);
    });
  

  }
  deleteUniversite(idUniversite: number): void {
    console.log('ID de l\'université à supprimer:', idUniversite); // Ajoutez cette ligne pour déboguer
    if (confirm("Êtes-vous sûr de vouloir supprimer cette université ?")) {
      this.universiteService.deleteUniversite(idUniversite).subscribe(() => {
        this.universites = this.universites.filter(u => u.idUniversite !== idUniversite);
      }, error => {
        console.error('Erreur lors de la suppression :', error);
      });
    }
  }
  updateUniversite(universite: Universite): void {
    // Redirige vers un formulaire de mise à jour
    this.router.navigate(['/update-universite', universite.idUniversite]);
  }

}
