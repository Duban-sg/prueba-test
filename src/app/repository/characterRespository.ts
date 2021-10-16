import {environment} from "../../environments/environment.prod";
import { Inject, Injectable } from '@angular/core';
import { People } from '../models/people.model';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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
export class characterRespository{
  constructor(private http: HttpClient) {
  }
  getCharacter(house:string):Observable<People[]>{
    return this.http.get<People[]>("api/characters/house/"+house,httpOptions).pipe(
      tap()
    );
  }


}


