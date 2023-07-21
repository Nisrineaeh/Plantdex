import { Component, OnInit } from '@angular/core';
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
  result! : Plant[];

  
  

    constructor(private plantService : PlantService){}

    ngOnInit(){
      this.plantService.getPlants().subscribe((data)=>{
        // console.log(data);
        this.allPlant = [...data]
        this.plantsToDisplay = [...data];
        this.plantsCategorie = [...new Set(this.plantsToDisplay.map((plant)=> plant.categorie))]
        console.log(this.plantsCategorie);
        this.filteredPlant = [...this.plantsToDisplay];

      });
    }
      aLecouteDeLenfant(categoryChild: string[]) {
        console.log('categoryChild', categoryChild)
        this.plantsToDisplay = this.allPlant.filter((plant)=> categoryChild.includes(plant.categorie))
        this.result = [...this.plantsToDisplay];
    }

    aLecouteDeLaRecherche(e : Event){
      const searchValueOk = e.target as HTMLInputElement;
      this.plantsToDisplay = this.allPlant.filter((plant) => {
        if(plant.nom.toLowerCase().includes(searchValueOk.value.toLowerCase())){
          return true;
        }return false;
      })
    }

    // doubleSearch(){
    //   if(this.result[categorie]){
    //       console.log('coco')
    //   }
    // }
}