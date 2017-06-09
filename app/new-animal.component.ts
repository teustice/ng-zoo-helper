import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h1>Register Animal</h1>
    <div>
      <label>Enter Animal Species:</label>
      <input class="form-control" #newSpecies><br>
      <label>Enter Animal Name:</label>
      <input class="form-control" #newName><br>
      <label>Enter Animal Age:</label>
      <input class="form-control" #newAge><br>
      <label>Enter Animal Diet:</label>
      <input class="form-control" #newDiet><br>
      <label>Enter Animal Location:</label>
      <input class="form-control" #newLocation>
      <label>Number of Caretakers:</label>
      <input class="form-control" #newCaretakers>
      <label>Gender:</label>
      <input class="form-control" #newGender>
      <label>Likes:</label>
      <input class="form-control" #newLikes>
      <label>Dislikes:</label>
      <input class="form-control" #newDislikes>
      <br>
      <button class="btn btn-sm btn-default" (click)="submitForm(
        newSpecies.value,
        newName.value,
        newAge.value,
        newDiet.value,
        newLocation.value,
        newCaretakers.value,
        newGender.value,
        newLikes.value,
        newDislikes.value);
        newSpecies.value='';
        newName.value='';
        newAge.value='';
        newDiet.value='';
        newCaretakers.value='';
        newGender.value='';
        newLikes.value='';
        newDislikes.value='';
        newLocation.value='';">Submit</button>
        <button class="btn btn-sm btn-default" (click)="newAnimalFormHide()">Hide</button>
    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();
  @Output() animalFormHide = new EventEmitter();

  submitForm(
    species: string,
    name: string,
    age: number,
    diet: string,
    location: string,
    caretakers: number,
    gender: string,
    likes: string,
    dislikes: string) {
      var newAnimal: Animal = new Animal(species, name, age, diet, location, caretakers, gender, likes, dislikes);
      this.newAnimalSender.emit(newAnimal);
  }

  newAnimalFormHide() {
    this.animalFormHide.emit();
  }
}