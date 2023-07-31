import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {
  @Input() plants!: Plant;

  getSoleilClass() {
    const soleilValue = this.plants.soleil;
   // console.log(this.plants.soleil)
   
    if (soleilValue === "peu") {
      return "sun_plein sun_vide sun_vide";
    } else if (soleilValue === "moyen") {
      return "sun_plein sun_plein sun_vide";
    } else {
      return "sun_plein sun_plein sun_plein";
    }

    
  }


}
