import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Encuesta1PageModule } from '../pages/encuesta1/encuesta1.module';
<<<<<<< HEAD
import { InfousuarioPageModule } from '../pages/infousuario/infousuario.module'
import { MisPageModule } from '../pages/mis/mis.module'
import { NviajePageModule } from '../pages/nviaje/nviaje.module'
import { PromosPageModule} from '../pages/promos/promos.module'
import { TabsPage } from '../pages/tabs/tabs'
=======
import { InfousuarioPageModule } from '../pages/infousuario/infousuario.module';
import { HttpClientModule } from '@angular/common/http';
import { ServicesViajesServiceProvider } from '../providers/services-viajes-service/services-viajes-service';
>>>>>>> d22d721a935f7c26f395ffff442c8025833debdc

@NgModule({
  declarations: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    TabsPage
=======

>>>>>>> d22d721a935f7c26f395ffff442c8025833debdc
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Encuesta1PageModule,
    InfousuarioPageModule,
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
