import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  inscriptionForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,

  ) { }

  ngOnInit(): void {
    this.inscriptionForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required,],
      password: ['', [Validators.required,]],
      role: ['', [Validators.required,]]

    });
  }

  onSubmit() {
    if (this.inscriptionForm.valid) {
      const formData = this.inscriptionForm.value;
      this.userService.signUp(formData).subscribe({
        next: (newUtilisateur) => {
          console.log(' :', newUtilisateur);
          alert(`Utilisateur ${newUtilisateur.name} enregistré avec succès ! `)

        },
        error: (error) => {
          console.error('Erreur lors de l\'inscription :', error);
        }
      });
    } else {
      console.error('Formulaire invalide. Veuillez corriger les erreurs.');
    }
  }





}
