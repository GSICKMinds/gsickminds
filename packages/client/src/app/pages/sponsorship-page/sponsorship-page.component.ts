import { Component, OnInit } from '@angular/core';
import { ISponsorType } from '@models/models';
import { InfoService } from '@services/info.service';

@Component({
  selector: 'gsic-sponsorship-page',
  templateUrl: './sponsorship-page.component.html',
  styleUrls: ['./sponsorship-page.component.scss']
})
export class SponsorshipPageComponent implements OnInit {

  sponsors: ISponsorType[];

  constructor(private infoService: InfoService) { }

  async ngOnInit() {
    this.sponsors = await this.infoService.getSponsors();
  }

}
