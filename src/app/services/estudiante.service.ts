import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { map } from 'rxjs/operators';
import { Estudiante } from '../models/estudiante.interface';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private estudianteCollection: AngularFirestoreCollection<Estudiante>;
  private estudiante: Observable<Estudiante[]>;
  
  constructor(db: AngularFirestore, private cookieService: CookieService) { 
    this.estudianteCollection = db.collection<Estudiante>('estudiante');
    this.estudiante = this.estudianteCollection.snapshotChanges().pipe(map(
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
    return this.estudiante;
  }

  addEstudiante(estudiante:Estudiante){
    return this.estudianteCollection.add(estudiante);
  }

  getEstudiante(id:string){
    return this.estudianteCollection.doc<Estudiante>(id).valueChanges();
  }

  updateEstudiante(todo: Estudiante, id:string){
    return this.estudianteCollection.doc(id).update(todo);
  }

  removeEstudiante(id:string){
    return this.estudianteCollection.doc(id).delete();
  }

}
