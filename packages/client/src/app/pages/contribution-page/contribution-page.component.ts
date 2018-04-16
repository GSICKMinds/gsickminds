import { Component, OnInit } from '@angular/core';
import { IContribution } from '@models/models';
import { InfoService } from '@services/info.service';

@Component({
  selector: 'gsic-contribution-page',
  templateUrl: './contribution-page.component.html',
  styleUrls: ['./contribution-page.component.scss']
})
export class ContributionPageComponent implements OnInit {
  contribution: IContribution;

  constructor(private infoService: InfoService) { }

  async ngOnInit() {
    this.contribution = await this.infoService.getContribution();
  }

}
