import { Component, OnInit } from '@angular/core';
import { InfoService } from '@services/info.service';
import { IVenue } from '@models/models';

@Component({
  selector: 'gsic-venue-page',
  templateUrl: './venue-page.component.html',
  styleUrls: ['./venue-page.component.scss']
})
export class VenuePageComponent implements OnInit {
  venue: IVenue;

  constructor(private infoService: InfoService) { }

  async ngOnInit() {
    this.venue = await this.infoService.getVenue();
    console.log(this.venue)
  }

}
