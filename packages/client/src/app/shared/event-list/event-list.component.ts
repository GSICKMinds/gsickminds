import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '@services';

@Component({
  selector: 'gsic-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events;

  constructor(private eventService: EventService) { }

  async ngOnInit() {
    this.events = await this.eventService.getEvents();
  }
}
