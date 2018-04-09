import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '@services/event.service';

@Component({
  selector: 'gsic-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() event;

  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit() {
    const eventId = this.route.snapshot.paramMap.get('id');
    console.log(eventId);
    this.event = this.eventService.getEvent(eventId);
  }

}
