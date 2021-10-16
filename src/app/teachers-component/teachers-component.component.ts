import { Component, OnInit } from '@angular/core';
import {People} from "../models/people.model";
import {PageEvent} from "@angular/material/paginator";
import {TeacherRepository} from "../repository/teacherRepository";
import {calculateYearsOld} from "../utilities/dataPicker";
@Component({
  selector: 'app-teachers-component',
  templateUrl: './teachers-component.component.html',
  styleUrls: ['./teachers-component.component.css']
})
export class TeachersComponentComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Patronus', 'Age','Image'];
  dataSource: People[] = [];
  dataSize= 0;
  paginationSize=10;
  pageEvent: PageEvent = new PageEvent();
  constructor(private _teacherRepository:TeacherRepository) {
  }

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent(){
    this._teacherRepository.getTeacher().subscribe(p=> {
      this.dataSource = p.map(_=>{
        return new People(_.name,_.patronus,calculateYearsOld(_.dateOfBirth),_.image,_.dateOfBirth);
      });
      this.dataSize = this.dataSource.length;
      console.log(this.dataSource);
    });
  }



}
