import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() maplante!: Plant;
  selectedPlant!: Plant;

    constructor(private plantService: PlantService, private router: Router){}
  
  onSelectPlant(e:Event){
    console.log(e);
    const target = e.target as HTMLButtonElement;
    console.log("valeur de la card du button: ", this.maplante);
     this.plantService.getPlants().subscribe(plants => {
      const dataToSend = plants.length > 0 ? plants[0]:null;
      this.router.navigate(['/my-plants'], {state:{data: dataToSend}});
    })
  }

  }


