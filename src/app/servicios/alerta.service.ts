import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor() { }

  mostrar_alerta(mensaje:string){
    alert(mensaje);
  }
}
