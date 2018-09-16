import { Component } from '@angular/core';

import { MisPage } from '../mis/mis';
import { HomePage } from '../home/home'
import { ServiciosPage } from '../servicios/servicios'
import {CatalogoPage} from "../catalogo/catalogo";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CatalogoPage;
  tab3Root = MisPage;
  tab4Root = ServiciosPage;

  constructor() {

  }
}
