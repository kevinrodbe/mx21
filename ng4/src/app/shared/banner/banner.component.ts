import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input('title')  title: String;
  constructor() { }

  ngOnInit() {
  }

  sayPromo() {
    console.log(this.title);
  }
}
