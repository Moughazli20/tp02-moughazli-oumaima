import { Component } from '@angular/core';

@Component({
  selector: 'app-compte-formulaire',
  templateUrl: './compte-formulaire.component.html',
  styleUrls: ['./compte-formulaire.component.css']
})
export class CompteFormulaireComponent {
  client: any = {
    nom: '',
    prenom: '',
    adresse: '',
    cp: '',
    ville: '',
    tel: '',
    email: '',
    civilite: 'Monsieur',
    password: '',
    login: '',
    pays: ''
  };

  onSubmit() {
    // Vous pouvez gérer la soumission des données ici
    // Par exemple, afficher les données dans la console
    console.log('Données du client soumises :', this.client);
  }
}


