import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gsic-social-list',
  templateUrl: './social-list.component.html',
  styleUrls: ['./social-list.component.scss']
})
export class SocialListComponent implements OnInit {
  @Input() socialObject;
  constructor() { }

  ngOnInit() {
  }

}
