import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '@services/event.service';

@Component({
  selector: 'gsic-talk-list-page',
  templateUrl: './talk-list-page.component.html',
  styleUrls: ['./talk-list-page.component.scss']
})
export class TalkListPageComponent implements OnInit {
  talks;
  event;

  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  async ngOnInit() {
    const eventId = this.route.snapshot.paramMap.get('id');
    this.talks = await this.eventService.getEvent(eventId);
    this.event = await this.eventService.getEventById(eventId);
  }

}
