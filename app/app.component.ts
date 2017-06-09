import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Zoo Helper</h1>

      <list-animal [childAnimalList]="masterAnimalList" (selectedAnimal)="animalToEdit($event)"></list-animal>


      <button (click)="showNewAnimalForm()" class="btn btn-sm btn-default">Register Animal</button>
      <new-animal *ngIf="newAnimalForm" (newAnimalSender)="newAnimal($event)" (AnimalFormHide)="hideNewAnimalForm()"></new-animal>
      
      <edit-animal [animal]="selectedAnimal" (editSender)="finishedEditing()"></edit-animal>
    </div>
  `
})

export class AppComponent {
  newAnimalForm: boolean = false;
  selectedAnimal = null;

  newAnimal(animal) {
    this.newAnimalForm = false;
    this.masterAnimalList.push(animal);
  }

  animalToEdit(animal) {
    this.selectedAnimal = animal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  showNewAnimalForm() {
    this.newAnimalForm = true;
  }

  hideNewAnimalForm() {
    this.newAnimalForm = false;
  }

  masterAnimalList: Animal[] = [
    new Animal('Northwest Squirrel', 'Juniper', 2, 'Tree Nuts', 'Forest Exhibit', 1, 'Female', 'Things to climb on', 'being pet'),
    new Animal('Giraffe', 'Hot Rod', 6, 'Leaves', 'Savanna', 4, 'Male', 'Enough room to stretch', 'Neck jokes')
  ];
}
