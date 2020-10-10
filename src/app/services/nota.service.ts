import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { map } from 'rxjs/operators';
import { NotaI } from '../models/nota.interface';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class NotaService {
  private notaCollection: AngularFirestoreCollection<NotaI>;
  private nota: Observable<NotaI[]>;

  constructor(db: AngularFirestore, private cookieService: CookieService) { 
    this.notaCollection = db.collection<NotaI>('notas');
    this.nota = this.notaCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      }
    ));
  }

  getEstudiantes(){
    return this.nota;
  }

  addEstudiante(nota:NotaI){
    return this.notaCollection.add(nota);
  }

  getEstudiante(id:string){
    return this.notaCollection.doc<NotaI>(id).valueChanges();
  }

  updateEstudiante(nota: NotaI, id:string){
    return this.notaCollection.doc(id).update(nota);
  }

  removeEstudiante(id:string){
    return this.notaCollection.doc(id).delete();
  }


}
