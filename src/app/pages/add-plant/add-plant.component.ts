import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.css']
})
export class AddPlantComponent {
  addPlant!: FormGroup;
  plant!: Plant;


  constructor(private plantService : PlantService,
    private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.addPlant = this.formBuilder.group({
      code_plant: ['', Validators.required],
      nom: ['', Validators.required],
      soleil: ['', Validators.required],
      arrosage: ['', [Validators.required]],
      categorie: ['', [Validators.required]],
      image: ['', [Validators.required]],

    }
  )
}
    
    addPlants(){
      let plant: Plant = { ...this.addPlant.value };
      if(!this.addPlant.valid){
         plant={ ...this.addPlant.value  };
      }
      console.log(plant);
      
  
    
    this.plantService.addPlant(plant).subscribe({
      next: (response) => {
        console.log('Plant ajouté !', response);
        alert('Vous avez bien ajouté votre plante ! :D')
        this.addPlant.reset();
      },
      error: (error) => {
        console.error('Erreur lors de l\'ajout de la plant', error);
      }
    });
    }
 
 }

