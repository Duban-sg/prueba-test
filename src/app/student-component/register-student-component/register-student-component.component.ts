import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {People} from "../../models/people.model";
import {environment} from "../../../environments/environment.prod";
import {imageToBase64} from "../../utilities/imageUpload";
import {studentRespository} from "../../repository/studentRespository"
import {dateFormat} from "../../utilities/dataPicker";
import {
  MatSnackBar
} from '@angular/material/snack-bar';
import {Router} from "@angular/router";



@Component({
  selector: 'app-register-student-component',
  templateUrl: './register-student-component.component.html',
  styleUrls: ['./register-student-component.component.css']
})
export class RegisterStudentComponentComponent implements OnInit {
  formGroup: FormGroup;
  _people: People;
  _nameFile:string;
  _houses = environment.houses;
  constructor(private formBuilder: FormBuilder,private  _studentRespository:studentRespository,private _snackBar: MatSnackBar,private router: Router) {
    this._nameFile="";
    this._people = new People();
    this.formGroup = this.formBuilder.group({
      name: [this._people.name, Validators.required],
      patronus: [this._people.patronus, Validators.required],
      house: [this._people.house, Validators.required],
      dateOfBirth: [this._people.dateOfBirth, Validators.required],
      image: [this._people.image, Validators.required]
    });
  }

  ngOnInit(): void {

  }

  private buildForm() {

  }

  openDialog(){
    console.log("a bueno");
    const element = document.getElementById("inputFile") as HTMLInputElement;
    const viewName = document.getElementById("viewNameFile") as HTMLInputElement;
    element?.click();
    element.onchange = ()=>{
      if(element?.files!=null){
        for(let i=0; i<element.files.length  ;i++){
          viewName.value = element.files[i].name;
          this.formGroup.value.fileName = element.files[i].name;
          imageToBase64(element.files[i],(e)=>{
            this.formGroup.value.image = e;
          });
        }
      }

    }

  }

  onSuminted(){
    if(this.formGroup.invalid) return;
    this.addStudent();
  }
  addStudent(){
    this._people =this.formGroup.value;
    this._people.dateOfBirth= dateFormat(this._people.dateOfBirth.toString());
    this._studentRespository.postStudent(this._people);
    this.openSnackBar();
    this.router.navigate(['/Estudiantes/Listar']);
  }

  openSnackBar() {
    this._snackBar.open('Registro exitoso', 'ok', {
      duration: 5 * 1000,
      horizontalPosition:  'center',
      verticalPosition: 'top',
    });
  }



}
