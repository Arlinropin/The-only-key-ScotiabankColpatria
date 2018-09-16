import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfousuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-infousuario',
  templateUrl: 'infousuario.html',
})
export class InfousuarioPage {

  slides = [
    {
      title: "Categoria",
      description: " showcases a number of useful components that are included out of the box with Ionic.",
      image: "../../assets/imgs/usuario.png",
    },
    {
      title: "Puntos y millas",
      description:  "H",
      image: "../../assets/imgs/avion.png",
    }
    // {
    //   title: "What is Ionic Cloud?",
    //   description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
    //   image: "assets/img/ica-slidebox-img-3.png",
    // }
];

}
