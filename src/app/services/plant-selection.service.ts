import { Injectable } from '@angular/core';
import { Plant } from '../models/plant';

@Injectable({
  providedIn: 'root'
})
export class PlantSelectionService {
  private selectedPlant: Plant | null = null;
  
  setSelectedPlant(plant:Plant){
    this.selectedPlant = plant;
  }

  getSelectedPlant(): Plant | null{
    return this.selectedPlant;
  }
}
