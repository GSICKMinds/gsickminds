import { Component, OnInit } from '@angular/core';
import { InfoService } from '@services';

@Component({
  selector: 'gsic-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title = 'Sobre Nosotros';
  info;

  constructor(private infoService: InfoService) { }

  async ngOnInit() {
    this.info = await this.infoService.getInfo();
  }
}
