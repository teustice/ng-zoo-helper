import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <h3>Current Animals</h3>
    <ul>
      <li *ngFor="let animal of childAnimalList">
        {{animal.species}} | {{animal.name}} | {{animal.age}} | {{animal.sex}}
      </li>
    </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal;
}
