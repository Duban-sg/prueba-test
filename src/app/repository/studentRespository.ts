import {environment} from "../../environments/environment.prod";
import { Inject, Injectable } from '@angular/core';
import { People } from '../models/people.model';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};

@Injectable({
  providedIn: 'root'
})
export class studentRespository{
  constructor(private http: HttpClient) {
  }
  getStudent():Observable<People[]>{
    let local = this.getOfLocalStorage();
    console.log(local)
    return this.http.get<People[]>("/api/characters/students",httpOptions).pipe(
      tap(_=>Array.prototype.push.apply(_,local))
    );
  }

  postStudent(_people:People){
    let local = this.getOfLocalStorage();
    local = [...local,_people];
    localStorage.setItem("students",JSON.stringify(local));
  }

  getOfLocalStorage(){
    let local = JSON.parse(localStorage.getItem("students")||"[]");
    return local;
  }


}


