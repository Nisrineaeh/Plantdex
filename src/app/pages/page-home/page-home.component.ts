import { Component, OnInit, ViewChild } from '@angular/core';
import { PlantService } from 'src/app/services/plant.service';
import { Plant } from 'src/app/models/plant';


@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  plantsToDisplay!: Plant[];
  plantsCategorie!: string[];
  allPlant: Plant[]=[];
  filteredPlant : Plant[] = [];
  userInput!: string;
  categoriesChecked!: string[];

    constructor(private plantService : PlantService){}


    ngOnInit(){
      this.plantService.getPlants().subscribe({
        next: (response) => {
          this.allPlant = [...response.data];
          this.plantsToDisplay = [...response.data];
          this.plantsCategorie = [...new Set(this.plantsToDisplay.map((plant) => plant.categorie))];
          this.filteredPlant = [...this.plantsToDisplay];
        },
        error: (err) => {
          console.error("Erreur lors de la récupération des plantes :", err);
        },
        complete: () => {
          console.log("Récupération des plantes terminée.");
        }
      });


    }
      aLecouteDeLenfant(categoryChild: string[]) {
        console.log('categoryChild', categoryChild)
        // this.plantsToDisplay = this.allPlant.filter((plant)=> categoryChild.includes(plant.categorie))
        // this.result = [...this.plantsToDisplay];
        this.categoriesChecked = categoryChild;
        this.onUserInteractionFiltre()
    }

      aLecouteDeLaRecherche(resultUserSearch : string){
        // console.log(resultUserSearch);
        // this.plantsToDisplay = this.allPlant.filter((plant) => plant.nom.toLowerCase().includes(this.userInput.toLowerCase()))
        this.userInput = resultUserSearch;
        this.onUserInteractionFiltre()
    }

      onUserInteractionFiltre() {
        this.plantsToDisplay = [...this.allPlant];
        if(this.userInput){
          this.plantsToDisplay = this.plantsToDisplay.filter((plant)=> plant.nom.toLowerCase().includes(this.userInput.toLocaleLowerCase()))}
        if(this.categoriesChecked){
          this.plantsToDisplay = this.plantsToDisplay.filter((plant) => this.categoriesChecked.includes(plant.categorie))
        }
    }

    onSortByAlpha(){
      this.plantsToDisplay.sort((a,b) => a.nom.localeCompare(b.nom));
    }

    onSortByWater(){
      this.plantsToDisplay.sort((a,b) => a.arrosage - b.arrosage);
    }

    onSortBySun(){

      this.plantsToDisplay.sort((a, b) => b.soleil.localeCompare(a.soleil));
    }
  }
