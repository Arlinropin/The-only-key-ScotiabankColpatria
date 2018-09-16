import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiciosPage } from './servicios';

@NgModule({
  declarations: [
    ServiciosPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiciosPage),
  ],
})
export class ServiciosPageModule {}
