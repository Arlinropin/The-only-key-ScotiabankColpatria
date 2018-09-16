import { Component } from '@angular/core';

import { MisPage } from '../mis/mis'
import { HomePage } from '../home/home'
import { CatalogoPage } from '../catalogo/catalogo'
//import { PromosPage} from '../promos/promos'
import { ServiciosPage } from '../servicios/servicios'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CatalogoPage;
  tab3Root = ServiciosPage;
  tab4Root = MisPage;

  constructor() {

  }
}
