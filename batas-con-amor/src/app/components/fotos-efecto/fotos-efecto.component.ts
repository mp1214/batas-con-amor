import { Component, OnInit, Renderer2, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-fotos-efecto',
  templateUrl: './fotos-efecto.component.html',
  styleUrls: ['./fotos-efecto.component.css']
})

export class FotosEfectoComponent implements OnInit {
  @ViewChild('option')op?:ElementRef;
  constructor(private renderer2:Renderer2) {
   
   }

  ngOnInit(): void {
   
  }
  setAttribute(){
  console.log("si llefa")
  this.renderer2.removeClass(this.op,"active")
  this.renderer2.addClass(this,"active")
 }
}
