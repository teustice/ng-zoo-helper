import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule }  from '@angular/forms';
import { NewAnimalComponent } from './new-animal.component';
import { ListAnimalComponent } from './list-animal.component';
import { EditAnimalComponent } from './edit-animal.component';
import { TileAnimalComponent } from './tile-animal.component';
import { DetailsAnimalComponent } from './details-animal.component';
import { AgePipe } from './age.pipe';

@NgModule({
  imports: [ BrowserModule,
             FormsModule ],
  declarations: [ AppComponent,
                  NewAnimalComponent,
                  ListAnimalComponent,
                  EditAnimalComponent,
                  TileAnimalComponent,
                  DetailsAnimalComponent,
                  AgePipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
