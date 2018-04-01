import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gsic-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  @Input() event;
}
