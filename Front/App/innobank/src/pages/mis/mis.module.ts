import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MisPage } from './mis';

@NgModule({
  declarations: [
    MisPage,
  ],
  imports: [
    IonicPageModule.forChild(MisPage),
  ],
})
export class MisPageModule {}
