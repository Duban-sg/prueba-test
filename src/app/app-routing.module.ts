import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import { ConsultStudentComponentComponent } from './student-component/consult-student-component/consult-student-component.component';
import { RegisterStudentComponentComponent} from './student-component/register-student-component/register-student-component.component'
import {TeachersComponentComponent} from './teachers-component/teachers-component.component';
import  { CharacterComponentComponent } from './character-component/character-component.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'Estudiantes/Listar',
    component: ConsultStudentComponentComponent
  },
  {
    path: 'Estudiantes/Registrar',
    component: RegisterStudentComponentComponent
  },
  {
    path: 'Personajes/Listar/:house',
    component: CharacterComponentComponent
  },
  {
    path: 'Profesores/Listar',
    component: TeachersComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ]
})
export class AppRoutingModule { }
