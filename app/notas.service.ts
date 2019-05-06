import { Injectable } from '@angular/core';
import{ AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import{ Observable} from 'rxjs';
@Injectable()
export class NotasService {

  constructor(private db: AngularFirestore) { }
  
  
  obtenerNotas(callback){
    this.db.collection('notas').valueChanges().subscribe( (notas) => {
    console.log('Reciviendo datos...');
    callback(notas);
    });
}
crearNotaConIdAutomatico( documento : any) {
  this.db.collection('notas').add(documento).then( (docGuardadoFirebase) => {
        let docId = docGuardadoFirebase.id;
        this.db.collection('notas').doc(`${docId}`).update({
            'id': docId
        });
    });
}
eliminarNota(nota : any){
    let id = nota.id;
    this.db.collection('notas').doc(`${id}`).delete();
  }
  editarNota(tittle: String, text: String,id: String){
 this.db.collection('notas').doc(`${id}`).update({
            'texto': text,
            'tittle' : tittle
        });
  }
}