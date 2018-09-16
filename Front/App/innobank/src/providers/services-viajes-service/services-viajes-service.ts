import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServicesViajesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesViajesServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServicesViajesServiceProvider Provider');
  }

  getViajes(){
    return this.http.get('http://127.0.0.1:5000/viajes');
  }

  postViaje(viaje:any) {
    return this.http.post('http://127.0.0.1:5000/viajes', viaje);
  }

  // getViajesComprados() {
  //   return this.http.get()
  // }

}
