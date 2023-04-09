import { Injectable } from '@angular/core';
import { Producto } from '../producto';
import { PRODUCTO } from '../mock-producto';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of} from 'rxjs';
const httpotions={
  headers: new HttpHeaders({
  'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl='https://api-bataswhite.onrender.com/productos';
  constructor(private http: HttpClient) { }
  public lista(): Observable<Producto[]>{
 
    return this.http.get<Producto[]>(this.apiUrl);
    }
}
