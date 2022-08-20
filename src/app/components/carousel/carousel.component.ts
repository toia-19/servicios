import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  constructor() { }

  // comunicación de padre a hijo, pasando información
  @Input() misImagenes:string[];

  // variable de prueba de comunicación de hijo a padre
  texto = "Hola soy un texto";
  @Output() datos = new EventEmitter<string>();

  agregarItem(value: string){
    this.datos.emit(value);
  }

  ngOnInit(): void {
  }

}
