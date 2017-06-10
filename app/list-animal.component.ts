import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'list-animal',
  template: `
    <h3>Animals Present</h3>
      <select (change)="onChange($event.target.value)">
      <option value="allAnimals" selected="selected">All Animals</option>
      <option value="underTwo">Young Animals</option>
      <option value="overTwo" >Mature Animals</option>
    </select>
    <ul>
      <li (click)="editButton(animal)" class="animal-tiles" *ngFor="let animal of childAnimalList | age:filterByAge" [ngStyle]="{
        'background-image': 'url(' + animal.image + ')',
        'background-repeat': 'no-repeat',
        'background-size': 'cover' }">
        <tile-animal [animal]="animal" (animalToSend)="editButton($event)"></tile-animal>
      </li>
    </ul>
  `
})

export class ListAnimalComponent {
  @Input() childAnimalList: Animal;
  @Output() selectedAnimal = new EventEmitter();

  filterByAge: string = "allAnimals";

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  editButton(animal: Animal){
    this.selectedAnimal.emit(animal);
  }
}
