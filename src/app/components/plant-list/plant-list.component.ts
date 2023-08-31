import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { Plant } from 'src/app/models/plant';
import { PlantSelectionService } from 'src/app/services/plant-selection.service';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent {
  @Input() plantsRecupDeLaHome!: Plant[];

  @Input() plant!: Plant;



}
