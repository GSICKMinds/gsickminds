import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gsic-talk-item',
  templateUrl: './talk-item.component.html',
  styleUrls: ['./talk-item.component.scss']
})
export class TalkItemComponent implements OnInit {
  @Input() talk;

  constructor() { }

  ngOnInit() {
  }

}
