import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Zoo Helper</h1>

      <animal-list [childAnimalList]="masterAnimalList"></animal-list>

      <button (click)="showNewAnimalForm()" class="btn btn-sm btn-default">Register Animal</button>
      <new-animal *ngIf="newAnimalForm" (newAnimalSender)="newAnimal($event)" (AnimalFormHide)="hideNewAnimalForm()"></new-animal>
    </div>
  `
})

export class AppComponent {
  newAnimalForm: boolean = false;

  newAnimal(animal) {
    this.newAnimalForm = false;
    this.masterAnimalList.push(animal);
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
