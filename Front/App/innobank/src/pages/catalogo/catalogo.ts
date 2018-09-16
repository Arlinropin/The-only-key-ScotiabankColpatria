import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController} from 'ionic-angular';
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
  providers: [ServicesViajesServiceProvider]
})
export class CatalogoPage {

  public viajesArray: any[] = [];
  public resp: any;

  constructor(
    public viajesServices: ServicesViajesServiceProvider,
    public navCtrl: NavController,
    private alertCtrl: AlertController
  ) { this.loadInfo() }

  loadInfo() {
    this.viajesServices.getViajes().subscribe(
      (viajesResp) => {
        this.viajesArray = viajesResp['viajes'];
        this.viajesArray.forEach(function (viaje, i) {
          viaje.show = false;
          viaje.icon = 'ios-arrow-dropright';
        })
      },
      (error) => {
        console.error(error);
      }
    )
  }

  openModal(v) {
    if (v.show) {
      v.show = false;
      v.icon = 'ios-arrow-dropright';
    } else {
      v.show = true;
      v.icon = 'ios-arrow-dropup';
      var str = JSON.stringify(v);
      window.localStorage.viaje = str;
    }
  }

  comprarViaje() {
    var viaje = JSON.parse(window.localStorage.viaje);
    this.viajesServices.postViaje(viaje).subscribe(
      (res) => {
        this.resp = res;
      },
      (error) => {
        let alert = this.alertCtrl.create({
          title: 'Exitoso!',
          subTitle: 'Vuelo reservado exitosamente!',
          buttons: ['Ok']
        });
        alert.present();
      }
    )
  }

}
