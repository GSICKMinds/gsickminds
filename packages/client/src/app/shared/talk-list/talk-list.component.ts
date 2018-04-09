import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '@services';

@Component({
  selector: 'gsic-talk-list',
  templateUrl: './talk-list.component.html',
  styleUrls: ['./talk-list.component.scss']
})
export class TalkListComponent implements OnInit {
  @Input() talks;

  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  async ngOnInit() {
    const eventId = this.route.snapshot.paramMap.get('id');
    this.talks = await this.eventService.getEvent(eventId);


  }

}
