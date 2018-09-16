import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Encuesta1PageModule } from '../pages/encuesta1/encuesta1.module';

import { InfousuarioPageModule } from '../pages/infousuario/infousuario.module'
import { MisPageModule } from '../pages/mis/mis.module'
import { NviajePageModule } from '../pages/nviaje/nviaje.module'
import { PromosPageModule} from '../pages/promos/promos.module'
import { TabsPage } from '../pages/tabs/tabs'
import { HttpClientModule } from '@angular/common/http';
import { ServicesViajesServiceProvider } from '../providers/services-viajes-service/services-viajes-service';
import { CatalogoPage } from "../pages/catalogo/catalogo";
import {CatalogoPageModule} from "../pages/catalogo/catalogo.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Encuesta1PageModule,
    InfousuarioPageModule,
    HttpClientModule,
    CatalogoPageModule,
    MisPageModule,
    NviajePageModule,
    PromosPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicesViajesServiceProvider
  ]
})
export class AppModule {}
