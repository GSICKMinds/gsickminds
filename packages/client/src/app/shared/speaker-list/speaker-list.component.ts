import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gsic-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.scss']
})
export class SpeakerListComponent implements OnInit {
  @Input() speakers;

  constructor() { }

  ngOnInit() {
  }

}
