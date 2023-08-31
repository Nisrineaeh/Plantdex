import { Injectable } from '@angular/core';
import { Plant } from '../models/plant';

@Injectable({
  providedIn: 'root'
})
export class PlantSelectionService {
  private selectedPlant: Plant[]=[];

  
  setSelectedPlant(plant:Plant){
    this.selectedPlant.push(plant);
  }

  getSelectedPlant(): Plant[]{
    return this.selectedPlant;
  }
}
