import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment.prod';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  _url_logo = environment.url_logo;
  constructor() { }

  ngOnInit(): void {
  }

}
