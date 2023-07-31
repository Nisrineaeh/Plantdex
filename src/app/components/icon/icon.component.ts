import { Component, Input } from '@angular/core';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {
  @Input() plants!: Plant;

  getSoleilClass(){
    const soleilValue = this.plants.soleil;

    if (soleilValue === "peu" || soleilValue === "moyen" || soleilValue === "beaucoup") {
      return "soleil-jaune";
    }
    return "soleil-noir";
  }
}
