{{import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatalogoPage } from './catalogo';
import { ServicesViajesServiceProvider } from '../../providers/services-viajes-service/services-viajes-service';

@NgModule({
  declarations: [
    CatalogoPage,
  ],
  imports: [
    IonicPageModule.forChild(CatalogoPage),
  ],
})
export class CatalogoPageModule {
  viajes: any[] = [];

  constructor(
    public viajesServices: ServicesViajesServiceProvider
  ) {}

  loadInfo()
    this.viajesServices.getViajes()._subscribe(
      (data) => {
        this.viajes = data.viajes;
      },
      (error) => {
        console.error(error);
      }
    )
  }
}
}}
