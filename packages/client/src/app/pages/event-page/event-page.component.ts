import { Component, OnInit } from '@angular/core';
import { EventService } from '@services';

@Component({
  selector: 'gsic-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit {
  title = 'Eventos';
  events;
  constructor(private eventService: EventService) { }

  async ngOnInit() {
    this.events = await this.eventService.getLast();
  }

}
