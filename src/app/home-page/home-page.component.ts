import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor() { }
  _url_logo=environment.url_logo;
  ngOnInit(): void {
  }

}
