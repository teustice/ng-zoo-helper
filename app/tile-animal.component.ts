import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'tile-animal',
  template: `
    <div class="tile-contents">
      <div class="row">
        <div class="col-md-9">
          <h3 class="tile-header">{{animal.name}} The {{animal.species}}</h3>
        </div>
        <div class="col-md-2 pencil-container">
          <button type="submit" class="editButton" (click)="editButtonClicked(animal)"><img src="./public/images/edit.png"/></button>
        </div>
      </div>
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
