import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'list-animal',
  template: `
    <h3>Current Animals</h3>
      <select (change)="onChange($event.target.value)">
      <option value="allAnimals" selected="selected">All Animals</option>
      <option value="underTwo">Young Animals</option>
      <option value="overTwo" >Mature Animals</option>
    </select>
    <ul>
      <li *ngFor="let animal of childAnimalList | age:filterByAge">
        {{animal.species}} | {{animal.name}} | {{animal.age}} | {{animal.sex}}
        <button class="btn btn-default btn-sm" (click)="editButton(animal)">Edit</button>
      </li>
    </ul>
  `
})

export class ListAnimalComponent {
  @Input() childAnimalList: Animal;
  @Output() selectedAnimal = new EventEmitter();

  filterByAge: string = "allAnimals"

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  editButton(animal: Animal){
    this.selectedAnimal.emit(animal);
  }
}
