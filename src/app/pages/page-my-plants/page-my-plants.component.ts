import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FavoritesResponse } from 'src/app/models/favorisrep';
import { Plant } from 'src/app/models/plant';
import { AuthService } from 'src/app/services/auth.service';
import { PlantSelectionService } from 'src/app/services/plant-selection.service';
import { PlantService } from 'src/app/services/plant.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-page-my-plants',
  templateUrl: './page-my-plants.component.html',
  styleUrls: ['./page-my-plants.component.css']
})
export class PageMyPlantsComponent {
  maplante: Plant[]=[];
  favorites: Plant[] = [];
  userId!: number;
  private favorisSouss!: Subscription;

  constructor(private plantSelectionService: PlantSelectionService, private plantService: PlantService, private userService: UserService, private authService: AuthService) {
    // this.maplante = this.plantSelectionService.getSelectedPlant();
    this.userId = this.authService.getCurrentUserId() ?? 0;
  }

  // const userId = this.authService.getCurrentUserId();

  ngOnInit(): void {
    // let coucou = this.userService.getUserById(this.userId); 
    // const coucou = this.authService.getCurrentUserId();
    console.log('user id -> ', this.userId)
    if (this.userId) { // Vérifiez si l'utilisateur est connecté
      this.favorisSouss = this.userService.getFavoritePlant(this.userId).subscribe({
        next: (response: Plant[]) => {
          this.favorites = response;
        }, error: error =>{
          console.log('Erreur lors de la recup des favroitePlantes -> ', error)
        }
      })
    //     (response: Plant[]) => {
    //       this.favorites = response; // La réponse est directement un tableau de plantes
    //     },
    //     error => {
    //       console.error('Erreur lors de la récupération des plantes favorites:', error);
    //     }
    //   );
    // }

  }
  // removeFavorite(plantId: number): void {
  //   if (this.userId) { // Vérifiez à nouveau si l'utilisateur est connecté avant d'exécuter des actions
  //     this.userService.removeFavorite(this.userId, plantId).subscribe(() => {
  //       this.favorites = this.favorites.filter(plant => plant.id !== plantId);
  //     });
  //   }
  // }
}

}