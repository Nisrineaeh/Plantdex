import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-plant',
  templateUrl: './edit-plant.component.html',
  styleUrls: ['./edit-plant.component.css']
})
export class EditPlantComponent implements OnInit {
  editPlantForm!: FormGroup;
  upDatedPlant!: Plant;
  @Input() plant!: Plant;

  constructor(private plantService: PlantService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.editPlantForm = this.formBuilder.group({
      code_plant: ['', Validators.required],
      nom: ['', Validators.required],
      soleil: ['', Validators.required],
      arrosage: ['', [Validators.required]],
      categorie: ['', [Validators.required]],
      image: [''],

    })
  }


  onPlantUpdated() {
    const id = this.activatedRoute.snapshot.params['id'];
    if (this.editPlantForm.valid) {
      const plantUpdated: Plant = { ...this.editPlantForm.value }
      this.plantService.getPlantById(id).subscribe(plant => {
        this.plantService.modifyPlant(id, plantUpdated).subscribe({
          next: (response) => {
            console.log('id de la plante a modif', plantUpdated.id)
            console.log('Donné a envoyer', plantUpdated)
            alert(`Vous avez bien modifier votre plante `)
          }, error: (error) => {
            console.log('erreur lors de la modif', error)
          }
        }
        )
      })
    }
  }

}
