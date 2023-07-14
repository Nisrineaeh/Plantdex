import { Component, Input } from '@angular/core';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent {
  @Input() plantsRecupDeLaHome!: Plant[];
  
  onChangePlants(e: Event) {
    console.log(e);
    const target = e.target as HTMLInputElement;
    console.log("valeur de la checkbox: ", target.value);
    console.log("est t'elle coché ?: ", target.checked);
  }
}
