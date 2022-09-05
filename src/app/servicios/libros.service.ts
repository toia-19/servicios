import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Libro } from '../models/libro';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  title = 'Libros';

  private libros:AngularFirestoreCollection<Libro>

  constructor(private db:AngularFirestore) {
    this.libros = db.collection("libros"); // referencia a la BD y traer la coleccion
  }

  obtenerLibros(){
    return this.libros.snapshotChanges().pipe(map(action=>action.map(a=>a.payload.doc.data())));
  }

  crearLibros(nuevoLibro:Libro){
    return new Promise(async(resolve,reject)=>{
      try{
        const ID = this.db.createId();
        nuevoLibro.ID = ID;
        const resultado = this.libros.doc(ID).set(nuevoLibro);
        resolve(resultado); // si el resultado es con exito se devuelve en resolve
      }
      catch(error){
        reject(error); // si el resultado tiene un error se devuelve en reject
      }
      // los datos de try se envian a la BD; si hay un error catch lo captura, verifica y notifica
    })
  }

  modificarLibro(ID:string, nuevaData:Libro){
    return this.db.collection("libros").doc(ID).update(nuevaData)
  }

  eliminarLibro(ID:string){
    return new Promise(async(resolve,reject)=>{
      try{
        const respuesta = this.libros.doc(ID).delete();
        resolve(respuesta);
      }
      catch(error){
        reject(error);
      }
    })
  }
}
