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
    this.libros = db.collection("libros");
  }

  obtenerLibros(){
    return this.libros.snapshotChanges().pipe(map(action=>action.map(a=>a.payload.doc.data())));
  }
}
