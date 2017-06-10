import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div *ngIf="animal">
    <hr>
      <h1>Edit {{animal.name}}, the {{animal.species}}</h1>
      <div>
        <label>Edit Animal Name:</label>
        <input class="form-control" [(ngModel)]="animal.name"><br>
        <label>Edit Animal Age:</label>
        <input class="form-control" [(ngModel)]="animal.age"><br>
        <label>Edit Number of Caretakers:</label>
        <input class="form-control" [(ngModel)]="animal.caretakers">
        <br>

        <button class="btn btn-sm btn-default" (click)="submit()">Update</button>
      </div>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() animal: Animal;
  @Output() editSender = new EventEmitter();

  submit(){
    this.editSender.emit()
  }
}
