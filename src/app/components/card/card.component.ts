import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plant } from 'src/app/models/plant';
import { AuthService } from 'src/app/services/auth.service';
import { PlantSelectionService } from 'src/app/services/plant-selection.service';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() maplante!: Plant;
  userId: number | undefined;
  image!:string;
  
  
  constructor(private plantSS: PlantSelectionService, private plantService : PlantService, private authService : AuthService ) {
    this.userId= this.authService.getCurrentUserId();
    if(this.maplante){
      this.image= this.maplante.image;
    }
   }

  onPlantSelected(maplante: Plant) {
    this.plantSS.setSelectedPlant(maplante);
    console.log(this.maplante)
  }
  

  addToFavorites(plantId: number) {
    console.log(this.userId)
    console.log(plantId)
    if (this.userId) {
      this.plantService.addFavorite(this.userId, plantId).subscribe(() => {
        console.log('Plante ajoutée aux favoris');
      });
    } else {
      console.log('Erreur: userId est manquant.');
    }
  }

  getImageUrl(): string | null {
    if (this.image) {
      // Remplacez 'http://localhost:3000' par l'URL réelle de votre backend
      return `http://localhost:3000/uploads/${this.image}`;
    }
    return null;
  }
  }

