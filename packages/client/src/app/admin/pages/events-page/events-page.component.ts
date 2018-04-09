import { Component, OnInit } from '@angular/core';
import { EventService } from '@services/event.service';

@Component({
  selector: 'gsic-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {

  events;

  constructor(private eventService: EventService) { }

  async ngOnInit() {
    this.events = await this.eventService.getEvents();
  }
}
