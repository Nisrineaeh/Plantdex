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

    constructor(private plantService : PlantService){}

    ngOnInit(){
      this.plantService.getPlants().subscribe((data)=>{
        this.plantsToDisplay = data;
        console.log(data);
      });
    }
}
