import { Injectable } from '@angular/core';
import { ICatalogo } from '../Interfaces/icatalogo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SCatalogoService {

  constructor( private http: HttpClient ) { }

  

  getAll():Observable<ICatalogo[]>{
    
    console.log("hollaaaa");    
    let url = `${environment.apiURL}/catalogo`;
    console.log
    console.log(url);
    
     return this.http.get<ICatalogo[]>(url);
  }
}
