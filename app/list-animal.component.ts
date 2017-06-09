import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'list-animal',
  template: `
    <h3>Current Animals</h3>
    <ul>
      <li *ngFor="let animal of childAnimalList">
        {{animal.species}} | {{animal.name}} | {{animal.age}} | {{animal.sex}}
        <button (click)="editButton(animal)">Edit</button>
      </li>
    </ul>
  `
})

export class ListAnimalComponent {
  @Input() childAnimalList: Animal;
  @Output() selectedAnimal = new EventEmitter();

  editButton(animal: Animal){
    this.selectedAnimal.emit(animal);
  }
}
