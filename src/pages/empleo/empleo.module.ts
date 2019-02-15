import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmpleoPage } from './empleo';

@NgModule({
  declarations: [
    EmpleoPage,
  ],
  imports: [
    IonicPageModule.forChild(EmpleoPage),
  ],
})
export class EmpleoPageModule {}
