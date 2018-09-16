import { Component } from '@angular/core';

import { MisPage } from '../mis/mis'
import { HomePage } from '../home/home'
import { PromosPage} from '../promos/promos'
import { ServiciosPage } from '../servicios/servicios'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PromosPage;
  tab3Root = MisPage;
  tab4Root = ServiciosPage;

  constructor() {

  }
}
