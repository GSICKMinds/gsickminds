import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gsic-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  @Input() event;

}
