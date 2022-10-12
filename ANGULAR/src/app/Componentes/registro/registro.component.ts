import { Crearusuario } from './../../Modelos/Usuario';
import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../Servicios/Registro/registro.service';
import { Objetousuario } from '../../Modelos/Usuario';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

   formulario =new FormGroup({
    name: new FormControl('',Validators.required),
    last_name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  })
  usuarios: Objetousuario[]=[];

  constructor(private _RegistroService:RegistroService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this._RegistroService.getUsers().subscribe(Objetousuario=>{
      this.usuarios=Objetousuario;
    })
  }

  async Registrar(form:any){
    console.log("Esta entrando aca");
    const usuario: Crearusuario={
      name:form.name,
      last_name:form.last_name,
      email:form.email,
      password:form.password
    }
    console.log(usuario);
    const  response= await this._RegistroService.addUser(usuario);
    console.log(response)
  }
 async Eliminar(usuario:Objetousuario){
    const response= await this._RegistroService.deleteUser(usuario);
  }
}
