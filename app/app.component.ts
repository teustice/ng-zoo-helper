import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Zoo Helper</h1>

      <h3>Current Animals</h3>
      <ul>
        <li *ngFor="let animal of masterAnimalList">
          {{animal.species}} | {{animal.name}} | {{animal.age}} | {{animal.sex}}
        </li>
      </ul>
    </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal('Northwest Squirrel', 'Juniper', 2, 'Tree Nuts', 'Forest Exhibit', 1, 'Female', 'Things to climb on', 'being pet'),
    new Animal('Giraffe', 'Hot Rod', 6, 'Leaves', 'Savanna', 4, 'Male', 'Enough room to stretch', 'Neck jokes')
  ];
}
