import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoggoPage } from './doggo';

@NgModule({
  declarations: [
    DoggoPage,
  ],
  imports: [
    IonicPageModule.forChild(DoggoPage),
  ],
})
export class DoggoPageModule {}
