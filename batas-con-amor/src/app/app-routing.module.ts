import { NgModule } from '@angular/core';
import { IntroComponent } from './components/intro/intro.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'intro', component:IntroComponent},
  {path: 'productos', component:ProductosComponent},
  {path: 'contacto', component:ContactoComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
