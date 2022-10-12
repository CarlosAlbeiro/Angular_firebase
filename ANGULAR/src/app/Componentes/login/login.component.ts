import { Validarusuario, Objetousuario } from './../../Modelos/Usuario';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { RegistroService } from '../../Servicios/Registro/registro.service';

import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario =new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  })
  usuarios: Objetousuario[]=[];

  /* this._usuarioservicio.getTodo().subscribe(
    (resp:any)=>(this.lista_usuarios=resp),//Responde la peticion
    err => console.log("Error en el servidor"),//Mensaje de error
    ()=>console.log("Peticion finalizada")//Respuesta por defecto
    ); */
  constructor(private _RegistroService:RegistroService, private formBuilder:FormBuilder,private ruta:Router) { }

  ngOnInit(): void {

  }

  Ingresar(form:any):void{
    let controlador;
    const usuario: Validarusuario={
      email:form.email,
      password:form.password
    }
    console.log(this.usuarios);
    for (let i = 0; i < this.usuarios.length; i++) {

      if (this.usuarios[i].email==usuario.email && this.usuarios[i].password==usuario.password) {
        controlador=true;
        console.log(this.usuarios[i]);
        break;
      }else{
        controlador=false;
      }
    }
    if(controlador){
      console.log("usuario encontrado");
      this.ruta.navigate(['/registro']);
    }else{
      console.log("Datos incorrectos");
    }
   /*  this.usuarios.forEach(usu => {
      if (controlador==1) {
        break;
      }else{
        if (usu.email==usuario.email && usu.password==usuario.password) {
          controlador=1;

        }else{
          controlador=0;
        }
      }
    }); */

  }

}
