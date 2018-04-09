import { Component, OnInit, Input } from '@angular/core';
import { TalksService, EventService } from '@services';


@Component({
  selector: 'gsic-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  title = 'Eventos';
  events;
  constructor(private eventService: EventService) { }

  async ngOnInit() {
    this.events = await this.eventService.getLast();
  }
}
