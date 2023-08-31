import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plant } from 'src/app/models/plant';
import { PlantSelectionService } from 'src/app/services/plant-selection.service';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() maplante!: Plant;
  
  
  constructor(private plantSS: PlantSelectionService) { }

  onPlantSelected(maplante: Plant) {
    this.plantSS.setSelectedPlant(maplante);
    console.log(this.maplante)
  }
  

}



