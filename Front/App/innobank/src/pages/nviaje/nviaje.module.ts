import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NviajePage } from './nviaje';

@NgModule({
  declarations: [
    NviajePage,
  ],
  imports: [
    IonicPageModule.forChild(NviajePage),
  ],
})
export class NviajePageModule {}
