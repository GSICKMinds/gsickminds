import { Component, OnInit } from '@angular/core';
import { EventService } from '@services/event.service';

@Component({
  selector: 'gsic-event-list-page',
  templateUrl: './event-list-page.component.html',
  styleUrls: ['./event-list-page.component.scss']
})
export class EventListPageComponent implements OnInit {
  events;

  constructor(private eventService: EventService) { }

  async ngOnInit() {
    this.events = await this.eventService.getEvents();
  }

}
