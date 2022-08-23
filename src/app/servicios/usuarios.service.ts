import { Injectable } from '@angular/core';
import { usuario } from '../models/user';

// Un servicio sí o sí requiere un decorador injectable
@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  private usuarios:usuario[];

  constructor() { 
    this.usuarios = [
      {
        name: "Diego",
        password: "tapi412"
      },
      {
        name: "Facundo",
        password: "cactus18noelia"
      },
      {
        name: "Manuel",
        password: "G4mer1"
      }
    ]
  }

  getUsers(){
    return this.usuarios;
  }
}
