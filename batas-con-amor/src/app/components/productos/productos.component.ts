import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/producto';
import { ProductoService } from 'src/app/service/producto.service';
import { ImagenService } from 'src/app/service/imagen.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[]=[];
  constructor(private productoservice: ProductoService,private imageService:ImagenService) { }
  id:number|any=null;
  ngOnInit(): void {
    this.cargarProducto();
       
    }
cargarProducto(){
  this.productoservice.lista().subscribe(produc =>{
  this.productos= produc;})
}
evento(ids?:number){
  this.id=ids;
  console.log(this.id) 
  }
  }


