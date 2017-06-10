import { Component, Input} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'details-animal',
  template: `
    <div *ngIf="animal">
      <h3>{{animal.name}} The {{animal.species}}</h3>
      <p>Age: {{animal.age}}</p>
      <p>Diet: {{animal.diet}}</p>
      <p>Location: {{animal.location}}</p>
      <p>Number of Caretakers: {{animal.caretakers}}</p>
      <p>Gender: {{animal.sex}}</p>
      <p>Likes: {{animal.likes}}</p>
      <p>Dislikes: {{animal.dislikes}}</p>
      <p>Joined Zoo: {{animal.timestamp}}</p>
    </div>
  `
})

export class DetailsAnimalComponent {
  @Input() animal: Animal;
}
