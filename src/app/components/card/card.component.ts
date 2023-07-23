import { Component, Input } from '@angular/core';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() maplante!: Plant;

  // getIcons(soleil:string, arrosage:number): any{
  //   const icons : string[] = [];
  //   switch(soleil){
  //     case 'beaucoup':
  //       return icons.push('soleil-plein', 'soleil-plein', 'soleil-plein');
  //     case 'moyen':
  //       return icons.push('soleil-plein', 'soleil-plein', 'soleil-vide');
  //     case 'peu':
  //       return icons.push('soleil-plein', 'soleil-vide', 'soleil-vide');
  //     break;
  // }

  //   switch (arrosage) {


  //     case 2:
  //       icons.

  //         push('goutte-eau-pleine', 'goutte-eau-pleine', 'goutte-eau-pleine');
  //       break;

  //     case 1:
  //       icons.push('goutte-eau-pleine', 'goutte-eau-pleine', 'goutte-eau-vide');
  //     break;

    
  //     case 0:
  //       icons.push('goutte-eau-pleine', 'goutte-eau-vide', 'goutte-eau-vide');
  //       break;

  //   }

  //   // Remplir avec des icônes vides pour compléter jusqu'à 3 icônes


  //   while (icons.length < 3) {
  //     icons.push('icone-vide');
  //   }
  //   return icons;

  // }

  // getIconSrc(iconName: string): string {


  //   // Remplacez le chemin ci-dessous par le chemin vers votre dossier d'icônes


  //   return `/src/assets/icons.svg`;
  // }


  }


