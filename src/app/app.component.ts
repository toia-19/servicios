import { Component, OnInit } from '@angular/core';
import { AlertaService } from './servicios/alerta.service';
import { UsuariosService } from './servicios/usuarios.service';
import { MenuItem } from 'primeng/api';
import { LibrosService } from './servicios/libros.service';
import { Libro } from './models/libro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'servicios';
  items: MenuItem[] = [];
  adminVisible = false;
  libros: Libro[];

  // se inyectaron y podemos acceder a las partes públicas del servicio
  constructor(
      private servicioAlerta:AlertaService, 
      private servicioUsuarios:UsuariosService,
      private servicioLibros:LibrosService
    ){
  }


  // Servicio Alerta
  mostrar(){
    this.servicioAlerta.mostrar_alerta("Estoy siendo llamado desde app");
    this.verificarUsuario();
  }

  // Servicio Usuario
  usuarios = this.servicioUsuarios.getUsers();

  verificarUsuario(){
    this.usuarios.forEach(usuario =>{
      if(usuario.name == "Diego"){
        if(usuario.password == "tapi412"){
          this.adminVisible = true;
          this.ngOnInit(); // necesario para refrescar
        }
      }
    })
  }

  ngOnInit(): void {
    console.log(this.usuarios);
    // Nav
    this.items = [
      {
        label: "Home",
        icon: "pi pi-home",
        routerLink: "/home"
      },
      {
        label: "Admin",
        icon: "pi pi-user",
        routerLink: "/admin",
        visible: this.adminVisible
      }
    ]
    // Servicio Libros
    console.log(this.servicioLibros.obtenerLibros().subscribe(libro=>this.libros=libro));
  }
}
