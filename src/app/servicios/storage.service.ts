import { Injectable } from '@angular/core';
import { getDownloadURL, getStorage, ref, UploadResult, uploadString } from 'firebase/storage'; // obtener referencia del storage de la BD

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private respuesta: UploadResult;
  private storage = getStorage();

  constructor() { }

  /*
    1) Obtener la refencia del storage
    En este caso lo obtenemos con línea getStorage().

    2) Dar la ruta dónde se vaya a guardar la imagen
    dentro del storage.

    3) Creamos la tarea que se encarga de subir la imagen
    En este caso estamos usando el método uploadString().

    4) Obtener la URL de la imagen subida.
  */

  // Método - Función asincrona para que suba la imagen
  async subirImagen(nombre: string, imagen: any){
    try{
      let referenciaImagen = ref (this.storage, 'libros/' + nombre); // de dónde viene la imagen
      this.respuesta = await uploadString (referenciaImagen, imagen, 'data_url')

      .then(resp =>{
        return resp
      })
      return this.respuesta
    }
    catch(error){
      console.log(error);
      return this.respuesta
    }
  }

  obtenerUrlImagen(respuesta:UploadResult){
    return getDownloadURL(respuesta.ref)
  }
}

// La promesa promete realizar una operación a futuro y devolverá
// una respuesta, aún si funcione mal o bien