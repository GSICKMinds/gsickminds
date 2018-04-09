import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gsic-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('INit')
  }

}
