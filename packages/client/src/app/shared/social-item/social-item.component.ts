import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gsic-social-item',
  templateUrl: './social-item.component.html',
  styleUrls: ['./social-item.component.scss']
})
export class SocialItemComponent implements OnInit {
  @Input() icon;
  @Input() url;
  constructor() { }

  ngOnInit() {
  }

}
