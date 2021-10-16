import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import { HomePageComponent } from './home-page/home-page.component';
import {RouterModule} from "@angular/router";
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PaginatorPipePipe } from './pipe/paginator-pipe.pipe';
import { CharacterComponentComponent } from './character-component/character-component.component';
import { TeachersComponentComponent } from './teachers-component/teachers-component.component';
import { ConsultStudentComponentComponent } from './student-component/consult-student-component/consult-student-component.component';
import { RegisterStudentComponentComponent } from './student-component/register-student-component/register-student-component.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatLuxonDateModule} from '@angular/material-luxon-adapter';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const MaterialImports = [    MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatSelectModule,
  MatDividerModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatLuxonDateModule,
  MatGridListModule,
  MatSnackBarModule
]


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    PaginatorPipePipe,
    CharacterComponentComponent,
    TeachersComponentComponent,
    ConsultStudentComponentComponent,
    RegisterStudentComponentComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImports,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent, pathMatch: 'full' }
    ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
