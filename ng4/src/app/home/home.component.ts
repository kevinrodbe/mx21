import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public bannerTitle: String;

  constructor() {
    this.bannerTitle = 'Hacemos delivery con el CandeMovil !!';
   }

  ngOnInit() {}
}
