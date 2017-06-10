import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h1>Register Animal</h1>
    <div>
      <label>Enter Animal Species:</label>
      <input type="text" class="form-control" #newSpecies><br>
      <label>Enter Animal Name:</label>
      <input type="text" class="form-control" #newName><br>
      <label>Enter Animal Age:</label>
      <input type="number" class="form-control" #newAge><br>
      <label>Enter Animal Diet:</label>
      <input type="text" class="form-control" #newDiet><br>
      <label>Enter Animal Location:</label>
      <input type="text" class="form-control" #newLocation>
      <label>Number of Caretakers:</label>
      <input type="number" class="form-control" #newCaretakers>
      <label>Gender:</label>
      <input type="text" class="form-control" #newGender>
      <label>Likes:</label>
      <input type="text" class="form-control" #newLikes>
      <label>Dislikes:</label>
      <input type="text" class="form-control" #newDislikes>
      <label>Image URL:</label>
      <input type="text" class="form-control" #newImage>
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
        newDislikes.value,
        newImage.value);
        newSpecies.value='';
        newName.value='';
        newAge.value='';
        newDiet.value='';
        newCaretakers.value='';
        newGender.value='';
        newLikes.value='';
        newDislikes.value='';
        newImage.value='';
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
    dislikes: string,
    image: string,
    timestamp = new Date()) {
      if (name === "" || species === ""){
        alert('Name and Species are required fields');
      } else {
        let newAnimal: Animal = new Animal(species, name, age, diet, location, caretakers, gender, likes, dislikes, image, timestamp);
        this.newAnimalSender.emit(newAnimal);
      }
  }

  newAnimalFormHide() {
    this.animalFormHide.emit();
  }
}
