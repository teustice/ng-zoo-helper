import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'tile-animal',
  template: `
    <div class="tile-contents">
      <h3>{{animal.name}} The {{animal.species}}</h3>
      <button class="btn btn-default btn-sm" (click)="editButtonClicked(animal)">Edit</button>
    </div>
  `
})

export class TileAnimalComponent {
  @Input() animal: Animal;
  @Output() animalToSend = new EventEmitter();

  editButtonClicked(animal: Animal){
    this.animalToSend.emit(animal);
  }
}
