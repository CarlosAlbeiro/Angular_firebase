import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Crearusuario, Objetousuario} from '../../Modelos/Usuario';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})

export class RegistroService {

  constructor(private firestore:Firestore) { }

  addUser(crear: Crearusuario){
    console.log(crear);
    const placeRef=collection(this.firestore,'usuario');
    return addDoc(placeRef, crear);
  }
  getUsers():Observable<Objetousuario[]>{
    const placeRef=collection(this.firestore,'usuario');
    return collectionData(placeRef,{idField:'id'}) as Observable<Objetousuario[]>;
  }
  deleteUser(usuario:Objetousuario){
    const placeDocRef=doc(this.firestore,`usuario/${usuario.id}`);
    return deleteDoc(placeDocRef);
  }

}
