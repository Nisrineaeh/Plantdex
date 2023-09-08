import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-co',
  templateUrl: './co.component.html',
  styleUrls: ['./co.component.css']
})
export class CoComponent {

  // connexionForm!: FormGroup;
  email!: string;
  password!: string;


  constructor(
    private authServie: AuthService,
    private router: Router) { }

  // ngOnInit(): void {
  //   this.initialForm();
  // }

  // private initialForm(): void {
  //   this.connexionForm = this.formBuilder.group({
  //     email: ['', [Validators.required]],
  //     passwordCo: ['', [Validators.required]]
  //   });
  // }

  onSubmit() {
    console.log('Tentative de connexion');   
    console.log('Email:', this.email);
    console.log('MDP : ', this.password);

      this.authServie.login(this.email, this.password).subscribe({

        next: (response: any) => {
          console.log('Réponse complète du serveur :', response)
          console.log('Contenu de data', response.data);
          
          if (response && response.access_token && response.access_token.token) {
            const token = response.access_token.token
            // Stocker le token dans le localStorage
            localStorage.setItem('access_token', token);
          
            if (response.email) {
              localStorage.setItem('user_email', response.user_email);
              localStorage.setItem('user_id', response.user_id);
            }
            console.log('Connexion réussie et token stocké!');
            console.log(response);
            alert('Vous êtes maintenant connecté !')
            this.router.navigate(['/home'])
          } else {
            console.error('Token non reçu dans la réponse.');
          }
        },
        error: (error: any) => {
          console.error('Erreur lors de la connexion:', error);

        }
      });
    }
  }








