import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gsic-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {
  title = 'Patrocinios';
  public sponsors = [{
    title: 'Basico',
    price: 100,
    features: [
      { description: 'Feature 1', status: true },
      { description: 'Feature 2', status: false },
      { description: 'Feature 3', status: false }]
  },
  {
    title: 'Basico',
    price: 100,
    features: [
      { description: 'Feature 1', status: true },
      { description: 'Feature 2', status: true },
      { description: 'Feature 3', status: false }]
  },
  {
    title: 'Basico',
    price: 100,
    features: [
      { description: 'Feature 1', status: true },
      { description: 'Feature 2', status: true },
      { description: 'Feature 3', status: true }]
  }];

  constructor() { }

  ngOnInit() {
  }

}
