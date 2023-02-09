import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private api: string = "PUewUQ4Cu9R62k4pUUx8YWTuLOETjNsl";

  private _historial: string[] = [];

  public resultados: any[] = [];

  get historial() { 
    return [...this._historial];
  }

  constructor (private http: HttpClient){} //Constructor de http, y lo importo arriba.

  BuscarGifs(query: string = ""){

    query = query.trim().toLocaleLowerCase(); //Trim te saca el espacio adelante y atrás.

    //Validaciones
    if (!this._historial.includes ( query )){ //Pregunto si no existe ya esa query.
      this._historial.unshift( query ); //Agregar en el sidebar.
      this._historial = this._historial.splice(0,10); //Muestro sólo 10.

    }

    //Consumo de API:
    //Ésta forma la trae incorporada Angular (módulo http), es como usar un fetch. Retorna un Observable.
    this.http.get(`http://api.giphy.com/v1/gifs/search?api_key=PUewUQ4Cu9R62k4pUUx8YWTuLOETjNsl&q=${{ query }}&limit=10`)
    .subscribe((resp: any) =>{ //el suscribe es como el then en las promesas.
      console.log(resp.data);
      this.resultados = resp.data;
    });
    // console.log(this._historial);
  }


}
