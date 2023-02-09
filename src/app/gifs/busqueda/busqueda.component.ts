import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {
  //Ésta es otra forma de hacerlo. Se puede hacer con ngModel, o forms reactivos. 
  //Llamo al método en el busqueda.html
  @ViewChild ("txtBuscar") txtBuscar!:ElementRef<HTMLInputElement>;

  constructor (private gifsService: GifsService){}

  Buscar(){
    const valor = this.txtBuscar.nativeElement.value;

    if(valor.trim().length === 0){
      return;
    }

    this.gifsService.BuscarGifs(valor);
    //console.log(valor);

    this.txtBuscar.nativeElement.value = "";
  }

}


