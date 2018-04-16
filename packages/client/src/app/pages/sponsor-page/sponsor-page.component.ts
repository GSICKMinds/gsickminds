import { Component, OnInit } from '@angular/core';
import { ISponsorType, ISponsor } from '@models/models';
import { InfoService } from '@services/info.service';
import { SponsorsService } from '@services/sponsors.service';

@Component({
  selector: 'gsic-sponsor-page',
  templateUrl: './sponsor-page.component.html',
  styleUrls: ['./sponsor-page.component.scss']
})
export class SponsorPageComponent implements OnInit {
  sponsors: ISponsor[];

  constructor(private sponsorsService: SponsorsService) { }

  async ngOnInit() {
    this.sponsors = await this.sponsorsService.getAll();
  }

}
