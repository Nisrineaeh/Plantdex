import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.css']
})
export class PlantDetailComponent implements OnInit{
  plant!: Plant;


  constructor(
    private route: ActivatedRoute,
    private plantService: PlantService
  ) { }

  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap;
    const plantIdFromRoute = Number(routeParam.get('id'));

    this.plantService.getPlantById(plantIdFromRoute).subscribe((plant) => {
      console.log(plant);
      
      this.plant = plant.data;
      console.log(this.plant);
   
    });
  }
};

