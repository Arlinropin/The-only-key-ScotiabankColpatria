import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import { ServiciosPage } from '../servicios/servicios';

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
})
export class MisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisPage');
  }

  goHome():void{
    this.navCtrl.push(HomePage);
  }

  goServicios():void{
    this.navCtrl.push(ServiciosPage);
  }
}
