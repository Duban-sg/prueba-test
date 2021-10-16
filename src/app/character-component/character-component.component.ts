import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';
import {People} from "../models/people.model";
import {calculateYearsOld} from "../utilities/dataPicker";
import {PageEvent} from "@angular/material/paginator";
import {characterRespository} from "../repository/characterRespository";
import { environment} from "../../environments/environment.prod";

@Component({
  selector: 'app-character-component',
  templateUrl: './character-component.component.html',
  styleUrls: ['./character-component.component.css']
})
export class CharacterComponentComponent implements OnInit {
  _houses = environment.houses;
  _house:string="";
  displayedColumns: string[] = ['Name', 'Patronus', 'Age','Image'];
  dataSource: People[] = [];
  dataSize= 0;
  paginationSize=10;
  pageEvent: PageEvent = new PageEvent();
  constructor(private rutaActiva: ActivatedRoute,private _characterRespository:characterRespository,private router: Router) {

  }

  ngOnInit(): void {
    this._house = this.rutaActiva.snapshot.params.house;
    this.rutaActiva.params.subscribe(
      (params: Params) => {
       this._house = params.house;
       if(this.isHouseValid())this.getCharacter();
      }
    );
  }

  getCharacter(){
    this._characterRespository.getCharacter(this._house).subscribe(p=> {
      this.dataSource = p.map(_=>{
        return new People(_.name,_.patronus,calculateYearsOld(_.dateOfBirth),_.image,_.dateOfBirth);
      });
      this.dataSize = this.dataSource.length;
    });
  }
  isHouseValid(){
    switch (this._house) {
      case this._houses[0]:
        return true;
      case this._houses[1]:
        return true;
      case this._houses[2]:
        return true;
      case this._houses[3]:
        return true;
      default :
        return false;
    }
  }

  onChangeHouse(){
    this.router.navigate(['/Personajes/Listar/'+this._house]);
  }

}
