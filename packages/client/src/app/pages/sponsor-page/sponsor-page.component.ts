import { Component, OnInit } from '@angular/core';
import { ISponsor } from '@models/models';
import { InfoService } from '@services/info.service';

@Component({
  selector: 'gsic-sponsor-page',
  templateUrl: './sponsor-page.component.html',
  styleUrls: ['./sponsor-page.component.scss']
})
export class SponsorPageComponent implements OnInit {
  sponsors: ISponsor[];

  constructor(private infoService: InfoService) { }

  async ngOnInit() {
    this.sponsors = await this.infoService.getSponsors();
  }

}
