import { Injectable } from '@angular/core';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private servicioUsuarios:UsuariosService) {
  }

  // Servicio USUARIOS
  usuarios = this.servicioUsuarios.getUsers();

  login(){
    let usuarios = this.usuarios;
    let resp = false;

    this.usuarios.forEach(usuario => {
      if (usuario.name == "Diego") {
        if (usuario.password == "tapi412") {
          alert("Inicio sesión correctamente.");
          resp = true;
        }
      }
    })
    return resp;
  }
}
