import { Component } from '@angular/core';

import { MisPage } from '../mis/mis';
import { HomePage } from '../home/home'
<<<<<<< HEAD
=======
import { CatalogoPage } from '../catalogo/catalogo'
//import { PromosPage} from '../promos/promos'
>>>>>>> 8a4f1efd98981ed9c2327a1e38b7c5dfdf565c36
import { ServiciosPage } from '../servicios/servicios'
import {CatalogoPage} from "../catalogo/catalogo";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CatalogoPage;
<<<<<<< HEAD
  tab3Root = MisPage;
  tab4Root = ServiciosPage;
=======
  tab3Root = ServiciosPage;
  tab4Root = MisPage;
>>>>>>> 8a4f1efd98981ed9c2327a1e38b7c5dfdf565c36

  constructor() {

  }
}
