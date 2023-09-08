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
  selectedFile!: File;

  constructor(private plantService: PlantService,
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

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    console.log(input.files![0])
    if (input.files && input.files.length) {
      this.selectedFile = input.files[0]
    }
  }


  addPlants() {
    // let plant: Plant = { ...this.addPlant.value };
    // if(!this.addPlant.valid){
    //    plant={ ...this.addPlant.value  };
    // }
    // console.log(plant);



    // this.plantService.addPlant(plant).subscribe({
    //   next: (response) => {
    //     console.log('Plant ajouté !', response);
    //     alert('Vous avez bien ajouté votre plante ! :D')
    //     this.addPlant.reset();
    //   },
    //   error: (error) => {
    //     console.error('Erreur lors de l\'ajout de la plant', error);
    //   }
    // });

    if (this.addPlant.valid) {
        
         const plantDetails: Plant = {
          ...this.addPlant.value,
          image:null,
        };

        const formData = new FormData();
        formData.append('image', this.selectedFile) //ajout de l'image au format FormData, this.selectedFile.name
        formData.append('nom', plantDetails.nom);
        formData.append('code_plant', plantDetails.code_plant.toString());
        formData.append('nom', plantDetails.nom);
        formData.append('soleil', plantDetails.soleil);
        formData.append('arrosage', plantDetails.arrosage.toString());
        formData.append('categorie', plantDetails.categorie);
        console.log('oooooooooooooooooooooooooooooooooooooooooooooooooooo', this.addPlant)


        this.plantService.uploadImage(formData).subscribe({
          next: (response)=>{
            const imagePath = response.path;
            plantDetails.image = imagePath; //maj de l'image avec l'image télécharger
            this.savePlantDetails(plantDetails);
          }, error:(error)=>{
            console.error(`Erreur lors du téléchargement de l'image`, error)
          }
        })
    //     formData.append('image', plantDetails.image);
    //   formData.append('nom', plantDetails.nom);
    //   formData.append('code_plant', plantDetails.code_plant.toString());
    //   formData.append('nom', plantDetails.nom);
    //   formData.append('soleil', plantDetails.soleil);
    //   formData.append('arrosage', plantDetails.arrosage.toString());
    //   formData.append('categorie', plantDetails.categorie);
    //   console.log('oooooooooooooooooooooooooooooooooooooooooooooooooooo', this.addPlant)
    //   if (this.selectedFile) {

        
    //     formData.append('image', this.selectedFile, this.selectedFile.name);
       
        
    //     console.log(this.selectedFile, formData)

    //     this.plantService.uploadImage(formData).subscribe({

    //       next: (response) => {
    //         const imagePath = response.path;
    //         console.log(response.path)
    //         this.savePlantDetails(imagePath);
    //       },
    //       error: (error) => {
    //         console.error(`Erreur lors du téléchargement de l'image`, error);
    //       }
    //     });
    //   } else {
    //     this.savePlantDetails(null);
    //   }


    // }
      }
  }

  savePlantDetails(plantDetails: Plant) {
    this.plantService.addPlant(plantDetails).subscribe({
      next: (response) => {
        console.log('Plant ajouté !', response);
        alert('Vous avez bien ajouté votre plante ! :D');
        this.addPlant.reset();
      },
      error: (error) => {
        console.error('Erreur lors de l\'ajout de la plante', error);
      },
    });
  }

}

