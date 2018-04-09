import { Component, OnInit } from '@angular/core';
import { InfoService } from '@services/info.service';

@Component({
  selector: 'gsic-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  title = 'Sobre Nosotros';
  info;

  constructor(private infoService: InfoService) { }

  async ngOnInit() {
    this.info = await this.infoService.getInfo();
  }

}
