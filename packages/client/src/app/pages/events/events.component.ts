import { Component, OnInit, Input } from '@angular/core';
import { TalksService } from '../../talks.service';
import { EventService } from '../../event.service';

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
