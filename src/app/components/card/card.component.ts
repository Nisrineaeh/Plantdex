import { Component, Input } from '@angular/core';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() maplante!: Plant;

  getIcons(value:string): any{
    switch(value){
      case 'beaucoup':
        return ['soleil-plein','soleil-plein','soleil-plein'];
      case 'moyen':
        return ['soleil-plein', 'soleil-plein', 'soleil-vide'];
      case 'peu':
        return ['soleil-plein', 'soleil-vide', 'soleil-vide']
    }
      
  }
}
