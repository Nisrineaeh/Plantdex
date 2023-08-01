import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plant } from 'src/app/models/plant';
import { PlantSelectionService } from 'src/app/services/plant-selection.service';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-page-my-plants',
  templateUrl: './page-my-plants.component.html',
  styleUrls: ['./page-my-plants.component.css']
})
export class PageMyPlantsComponent {
  selectedPlant: Plant | null = null;

  constructor(private plantSelectionService: PlantSelectionService) {
    this.selectedPlant = this.plantSelectionService.getSelectedPlant();
  }
}

