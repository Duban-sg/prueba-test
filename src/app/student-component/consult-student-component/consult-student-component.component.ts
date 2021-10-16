import { Component, OnInit } from '@angular/core';
import {studentRespository} from '../../repository/studentRespository';
import {People}from '../../models/people.model';
import {PageEvent} from '@angular/material/paginator';
import {calculateYearsOld} from "../../utilities/dataPicker";
import {Router} from "@angular/router";
@Component({
  selector: 'app-consult-student-component',
  templateUrl: './consult-student-component.component.html',
  styleUrls: ['./consult-student-component.component.css']
})
export class ConsultStudentComponentComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Patronus', 'Age','Image'];
  dataSource: People[] = [];
  dataSize= 0;
  paginationSize=10;
  pageEvent: PageEvent = new PageEvent();
  constructor(private _studentRespository:studentRespository,private router: Router) {
  }

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent(){
    this._studentRespository.getStudent().subscribe(p=> {
      this.dataSource = p.map(_=>{
        return new People(_.name,_.patronus,calculateYearsOld(_.dateOfBirth),_.image,_.dateOfBirth);
      });
      this.dataSize = this.dataSource.length;
    });
  }

  toRegisterStudent(){
    this.router.navigate(['/Estudiantes/Registrar']);
  }


}
