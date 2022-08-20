import { Component, OnInit } from '@angular/core';
import { AlertaService } from 'src/app/servicios/alerta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  primavera: string[] = [
    "https://p4.wallpaperbetter.com/wallpaper/76/356/985/flowers-birds-branches-tree-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/292/1002/385/flowers-nature-tree-spring-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/458/877/174/trees-pink-beauty-spring-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/147/826/393/pink-cherry-blossom-wallpaper-preview.jpg"
  ];

  constructor(private miServicio:AlertaService) { 
  }

  imprimirTexto(Item: string){
    alert(Item);
  }

  lanzar_dialogo(){
    this.miServicio.mostrar_alerta("Estoy siendo llamado desde home");
  }

  ngOnInit(): void {
  }
}
