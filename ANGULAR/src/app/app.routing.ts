import { NgModule, Component, ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { LoginComponent } from './Componentes/login/login.component';


const appRoutes:Routes=[
  {path:'',pathMatch:'full',redirectTo:''},//Ruta principal
  {path:'registro',component:RegistroComponent},//ruta subastas
  {path:'login',component:LoginComponent},//ruta clientes
  //{path:'**',component:AppComponent}//ruta en caso de error
];
export const appRoutingProvider:any[]=[];

export const routing:ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AppRoutingModule { }
