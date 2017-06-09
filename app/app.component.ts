import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron">
    <div class="container">
      <h1>Zoo Helper</h1>
    </div>
  </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <list-animal [childAnimalList]="masterAnimalList" (selectedAnimal)="animalToEdit($event)"></list-animal>
        </div>
        <div class="col-md-4 detail-container">
          <button (click)="showNewAnimalForm()" class="btn btn-sm btn-default">Register Animal</button>
          <new-animal *ngIf="newAnimalForm" (newAnimalSender)="newAnimal($event)" (animalFormHide)="hideNewAnimalForm()"></new-animal>

          <edit-animal [animal]="selectedAnimal" (editSender)="finishedEditing()"></edit-animal>
        </div>
      </div>

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
    console.log('hiding the form');
    this.newAnimalForm = false;
  }

  masterAnimalList: Animal[] = [
    new Animal('Northwest Squirrel', 'Juniper', 2, 'Tree Nuts', 'Forest Exhibit', 1, 'Female', 'Things to climb on', 'being pet', "Fri Jun 01 2015 14:35:50 GMT-0700 (PDT)"),
    new Animal('Giraffe', 'Hot Rod', 6, 'Leaves', 'Savanna', 4, 'Male', 'Enough room to stretch', 'Neck jokes', "Fri Jun 09 2013 09:35:50 GMT-0700 (PDT)")
  ];
}
