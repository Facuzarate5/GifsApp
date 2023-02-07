import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {
  //Ésta es otra forma de hacerlo. Se puede hacer con ngModel, o forms reactivos. 
  //Llamo al método en el busqueda.html
  @ViewChild ("txtBuscar") txtBuscar!:ElementRef<HTMLInputElement>;

  Buscar(){
    const valor = this.txtBuscar.nativeElement.value;

    console.log(valor);

    this.txtBuscar.nativeElement.value = "";
  }

}
