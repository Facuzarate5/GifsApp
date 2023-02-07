import { query } from '@angular/animations';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];

  get historial() { 
    return [...this._historial];
  }

  BuscarGifs(query: string){

    this._historial.unshift(query);
    
    console.log(this._historial);
  }


}
