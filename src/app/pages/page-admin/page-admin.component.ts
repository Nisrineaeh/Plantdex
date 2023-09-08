import { Component } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent {

  plantsToDisplay!: Plant[];
  plantsCategorie!: string[];
  allPlant: Plant[] = [];
  filteredPlant: Plant[] = [];
  userInput!: string;
  categoriesChecked!: string[];

  constructor(private plantService: PlantService) { }




  ngOnInit() {
    this.plantService.getPlants().subscribe({
      next: (response) => {
        this.allPlant = [...response];
        this.plantsToDisplay = [...response];
        this.plantsCategorie = [...new Set(this.plantsToDisplay.map((plant) => plant.categorie))];
        this.filteredPlant = [...this.plantsToDisplay];
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des plantes :", err);
      }
    });
  }


  aLecouteDeLaRecherche(resultUserSearch: string) {
    // console.log(resultUserSearch);
    // this.plantsToDisplay = this.allPlant.filter((plant) => plant.nom.toLowerCase().includes(this.userInput.toLowerCase()))
    this.userInput = resultUserSearch;
    this.onUserInteractionFiltre()
  }

  onUserInteractionFiltre() {
    this.plantsToDisplay = [...this.allPlant];
    if (this.userInput) {
      this.plantsToDisplay = this.plantsToDisplay.filter((plant) => plant.nom.toLowerCase().includes(this.userInput.toLocaleLowerCase()))
    }
    if (this.categoriesChecked) {
      this.plantsToDisplay = this.plantsToDisplay.filter((plant) => this.categoriesChecked.includes(plant.categorie))
    }
  }
}
