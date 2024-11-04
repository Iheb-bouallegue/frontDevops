import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from 'src/app/models/universite';
import { UniversiteService } from 'src/app/services/universite.service';

@Component({
  selector: 'app-update-universite-component',
  templateUrl: './update-universite-component.component.html',
  styleUrls: ['./update-universite-component.component.css']
})
export class UpdateUniversiteComponentComponent {
  universite!: Universite;

  constructor(
    private universiteService: UniversiteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.universiteService.getUniversite(id).subscribe(
      (data) => {
        this.universite = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération de l\'université', error);
      }
    );
  }

  onUpdate(): void {
    this.universiteService.updateUniversite(this.universite).subscribe(
      () => {
        alert('Université mise à jour avec succès !');
        this.router.navigate(['/universite-list']); // Redirection vers la liste des universités
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de l\'université', error);
      }
    );
  }

}
