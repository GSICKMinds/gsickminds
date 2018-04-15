import { Component, OnInit } from '@angular/core';
import { ISponsor } from '@models/models';
import { InfoService } from '@services/info.service';

@Component({
  selector: 'gsic-sponsorship-page',
  templateUrl: './sponsorship-page.component.html',
  styleUrls: ['./sponsorship-page.component.scss']
})
export class SponsorshipPageComponent implements OnInit {

  sponsors: ISponsor[];

  constructor(private infoService: InfoService) { }

  async ngOnInit() {
    this.sponsors = await this.infoService.getSponsors();
  }

}
