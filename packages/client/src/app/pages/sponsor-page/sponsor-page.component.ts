import { Component, Input, OnInit } from '@angular/core';
import { ISponsor, ISponsorType } from '@models/models';
import { EventService } from '@services/event.service';
import { InfoService } from '@services/info.service';
import { SponsorsService } from '@services/sponsors.service';

@Component({
  selector: 'gsic-sponsor-page',
  templateUrl: './sponsor-page.component.html',
  styleUrls: ['./sponsor-page.component.scss']
})
export class SponsorPageComponent implements OnInit {
  @Input() sponsors: ISponsor[];

  constructor(private eventService: EventService, private sponsorsService: SponsorsService) { }

  async ngOnInit() {
    if (!this.sponsors) {
      const event = await this.eventService.getLast();
      this.sponsors = await this.sponsorsService.getAll(event['_id']);
    }

  }

}
