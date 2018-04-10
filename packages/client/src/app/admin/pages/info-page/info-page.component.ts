import { Component, OnInit } from '@angular/core';
import { InfoService } from '@services/info.service';
import { Info } from '@models/classes';

@Component({
  selector: 'gsic-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent implements OnInit {
  info;

  constructor(private infoService: InfoService) { }

  async ngOnInit() {
    this.info = await this.infoService.getInfo();
  }

}
