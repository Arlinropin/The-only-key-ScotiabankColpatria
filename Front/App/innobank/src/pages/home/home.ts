import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Encuesta1Page } from '../encuesta1/encuesta1';
import { InfousuarioPage} from '../infousuario/infousuario';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goEncuesta():void{
    this.navCtrl.push(Encuesta1Page);
  }
  goInfousuario():void{
    this.navCtrl.push(InfousuarioPage);
  }

}
