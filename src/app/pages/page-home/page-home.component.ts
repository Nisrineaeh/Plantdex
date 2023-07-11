import { Component, OnInit } from '@angular/core';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

    constructor(private plantService : PlantService){}

    ngOnInit(){
      this.plantService.getPlants().subscribe((data)=>{
        console.log(data);
      });
    }
}
