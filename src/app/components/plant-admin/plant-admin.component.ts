import { Component, Input } from '@angular/core';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-plant-admin',
  templateUrl: './plant-admin.component.html',
  styleUrls: ['./plant-admin.component.css']
})
export class PlantAdminComponent {
  @Input() planteAdmin!: Plant[];


  constructor() {


  }
}