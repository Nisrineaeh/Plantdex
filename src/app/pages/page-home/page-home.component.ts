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
  filterCategorie!: string[];

    constructor(private plantService : PlantService){}

    ngOnInit(){
      this.plantService.getPlants().subscribe((data)=>{
        // console.log(data);
        this.plantsToDisplay = data;
        this.plantsCategorie = [...new Set(this.plantsToDisplay.map((plant)=> plant.categorie))]
        console.log(this.plantsCategorie);
      });
    }
      aLecouteDeLenfant(categoriesChecked: string[]) {
        
    }
}
