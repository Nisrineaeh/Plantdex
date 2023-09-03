import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-tab-admin',
  templateUrl: './tab-admin.component.html',
  styleUrls: ['./tab-admin.component.css']
})
export class TabAdminComponent {
  @Input() adminPlant!: Plant;

  plantsToDisplay!: Plant[];

  constructor(private plantService: PlantService, private activateRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.plantService.getPlants().subscribe({
      next: (response) => {
        this.plantsToDisplay = [...response.data]
        console.log(this.plantsToDisplay)
      }, error: (error) => {
        console.log('Erreur lors de la recup des plantes:', error)
      }
    }
    )
  }

  onDelete() {
    const id = +this.adminPlant.id!
    // const idPlant = this.activateRoute.snapshot.params['id'];
    // console.log(idPlant, 'mon cul sur la commode')
    // console.log(typeof id)
    if (confirm(`Voulez-vous vraiment supprimer la plante ${this.adminPlant.nom}?`)) {
      this.plantService.deletePlant(id).subscribe({
        next: (response) => {
          console.log(response)
          alert('Vous avez bien supprimer votre plante ! :D')
        }, error: (error) => {
          console.error('Erreur lors de la supp', error)
        }


      })
      this.plantService.getPlants;

      console.log('delete envoyé !')
      console.log(typeof this.adminPlant.id)
    };
  }
}