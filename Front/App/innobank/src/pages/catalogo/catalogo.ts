import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { ServicesViajesServiceProvider } from '../../providers/services-viajes-service/services-viajes-service';

/**
 * Generated class for the CatalogoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-catalogo',
  templateUrl: 'catalogo.html',
})
export class CatalogoPage {

  viajes: any[] = [];

  constructor(
    public viajesServices: ServicesViajesServiceProvider,
    public navCtrl: NavController
  ) { this.loadInfo()}

  loadInfo() {
    this.viajesServices.getViajes().subscribe(
      (data) => {
        this.viajes = data['viajes'];
      },
      (error) => {
        console.error(error);
      }
    )
  }

}
