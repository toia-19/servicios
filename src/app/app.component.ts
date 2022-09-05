import { Component, OnInit } from '@angular/core';
import { AlertaService } from './servicios/alerta.service';
import { UsuariosService } from './servicios/usuarios.service';
import { MenuItem } from 'primeng/api';
import { LibrosService } from './servicios/libros.service';
import { Libro } from './models/libro';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'servicios';
  // Varibles
  items: MenuItem[] = [];
  adminVisible = false;
  libros: Libro[]; // Colección
  modalVisible: boolean = false;
  textoBoton: string;
  libroSeleccionado: Libro;
  eliminarVisible: boolean = false;
  imagen: string;

  // Formulario de Libro (creamos un grupo, desde html se guarda en ts y viceversa)
  libro = new FormGroup({
    nombre: new FormControl("", Validators.required),
    autor: new FormControl("", Validators.required),
    editorial: new FormControl("", Validators.required),
    ISBN: new FormControl(0, Validators.required)
  })

  // Se inyectaron y podemos acceder a las partes públicas del servicio
  constructor(
    private servicioAlerta: AlertaService,
    private servicioUsuarios: UsuariosService,
    private servicioLibros: LibrosService
  ) {
  }

  // Servicio Alerta
  mostrar() {
    this.servicioAlerta.mostrar_alerta("Estoy siendo llamado desde app");
    this.verificarUsuario();
  }

  // Mostrar Dialogo
  mostrarDialogo() {
    this.textoBoton = "Agregar Libro";
    this.modalVisible = true;
  }

  // Servicio USUARIOS
  usuarios = this.servicioUsuarios.getUsers();

  verificarUsuario() {
    this.usuarios.forEach(usuario => {
      if (usuario.name == "Diego") {
        if (usuario.password == "tapi412") {
          this.adminVisible = true;
          this.ngOnInit(); // Necesario para refrescar
        }
      }
    })
  }

  // Nav
  ngOnInit(): void {
    console.log(this.usuarios);
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
    console.log(this.servicioLibros.obtenerLibros().subscribe(libro => this.libros = libro));
  }

  // Servicio LIBROS
  // AGREGAR nuevo libro
  agregarLibro() {
    if (this.libro.valid) {
      let nuevoLibro: Libro = {
        nombre: this.libro.value.nombre!,
        autor: this.libro.value.autor!,
        editorial: this.libro.value.editorial!,
        ISBN: this.libro.value.ISBN!,
        ID: ""
      }
      this.servicioLibros.crearLibros(nuevoLibro).then((libro) => {
        alert("Ha agregado un nuevo libro con éxito :)");
      })
        .catch((error) => {
          alert("Hubo un error al cargar un nuevo libro :( \n" + error);
        })
    } else {
      alert("El formulario no está cargado");
    }
  }

  // EDITAR un libro
  editarLibro() {
    let datos: Libro = {
      nombre: this.libro.value.nombre!,
      autor: this.libro.value.autor!,
      editorial: this.libro.value.editorial!,
      ISBN: this.libro.value.ISBN!,
      ID: this.libroSeleccionado.ID
    }

    this.servicioLibros.modificarLibro(this.libroSeleccionado.ID,datos).then((libro) => {
      alert("El libro fue modificado con éxito :)");
    })
      .catch((error) => {
        alert("No se pudo modificar el libro :( \n" + error);
      })
  }

  mostrarEditar(libroSeleccionado: Libro) {
    this.textoBoton = "Editar Libro";
    this.modalVisible = true;
    this.libroSeleccionado = libroSeleccionado;

    this.libro.setValue({
      nombre: libroSeleccionado.nombre,
      autor: libroSeleccionado.autor,
      editorial: libroSeleccionado.editorial,
      ISBN: libroSeleccionado.ISBN
    })
  }

  // DATOS en botones
  cargarDatos() {
    if (this.textoBoton == "Agregar Libro") {
      this.agregarLibro();
    } else if (this.textoBoton == "Editar Libro") {
      this.editarLibro();
    }
    this.modalVisible = false;
    this.libro.reset();
  }

  // ELIMINAR un libro
  mostrarEliminar(libroSeleccionado: Libro){
    this.eliminarVisible = true;
    this.libroSeleccionado = libroSeleccionado;
  }

  borrarLibro(){
    this.servicioLibros.eliminarLibro(this.libroSeleccionado.ID).then((respuesta) => {
      alert("El libro ha sido eliminado con éxito :)");
    })
    .catch((error) => {
      alert("El libro no se ha podido eliminar :( \n"+error);
    })
    this.eliminarVisible = false;
  }

  // CARGAR IMAGEN
  cargarImagen(event:any){
    let archivo = event.target.files[0];
    let reader = new FileReader(); // permite que apps web lean los ficheros
    if(archivo != undefined){
      reader.readAsDataURL(archivo)
      reader.onloadend = () => {
        let url = reader.result;
        if(url != null){
          this.imagen = url.toString(); // pasamos la URL a tipo imagen
        }
      }
    }
  }

  // Comentamos el agregar libros de forma local

  // let nuevoLibro:Libro = {
  //   nombre: "El Gato con Botas",
  //   autor: "Charles Perrault",
  //   editorial: "Nordica Libros",
  //   ISBN: 8492683678,
  //   ID: ""
  // }

  // this.servicioLibros.crearLibros(nuevoLibro).then((libro)=>{
  //   alert("Ha agregado un nuevo libro con éxito :)");
  // })

  // .catch((error)=>{
  //   alert("Hubo un error al cargar un nuevo libro :( \n"+error)
  // })
}