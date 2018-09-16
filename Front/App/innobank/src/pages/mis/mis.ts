import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import { ServiciosPage } from '../servicios/servicios';
import { ServicesViajesServiceProvider } from '../../providers/services-viajes-service/services-viajes-service';

/**
 * Generated class for the MisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mis',
  templateUrl: 'mis.html',
  providers: [ServicesViajesServiceProvider]
})
export class MisPage {

  public viajesArray: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viajesServices: ServicesViajesServiceProvider,)
  {this.loadInfo()}

  loadInfo() {
    this.viajesArray = JSON.parse(window.localStorage.viaje);
  }

  openModal(v) {
    if (v.show) {
      v.show = false;
      v.icon = 'ios-arrow-dropright';
    } else {
      v.show = true;
      v.icon = 'ios-arrow-dropup';
    }
  }

  goHome():void{
    this.navCtrl.push(HomePage);
  }

  goServicios():void{
    this.navCtrl.push(ServiciosPage);
  }
}
