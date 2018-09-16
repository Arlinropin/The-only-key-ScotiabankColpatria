import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Encuesta1PageModule } from '../pages/encuesta1/encuesta1.module';
import { InfousuarioPageModule } from '../pages/infousuario/infousuario.module';
import { HttpClientModule } from '@angular/common/http';
import { ServicesViajesServiceProvider } from '../providers/services-viajes-service/services-viajes-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Encuesta1PageModule,
    InfousuarioPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicesViajesServiceProvider
  ]
})
export class AppModule {}
