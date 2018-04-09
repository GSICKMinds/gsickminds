import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gsic-speaker-item',
  templateUrl: './speaker-item.component.html',
  styleUrls: ['./speaker-item.component.scss']
})
export class SpeakerItemComponent implements OnInit {
  @Input() speaker;

  constructor() { }

  ngOnInit() {
  }

}
