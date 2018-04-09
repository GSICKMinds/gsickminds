import { Component, OnInit } from '@angular/core';
import { InfoService } from '@services';

@Component({
  selector: 'gsic-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  title = 'Contacto';
  info;

  constructor(private infoService: InfoService) { }

  async ngOnInit() {
    this.info = await this.infoService.getInfo();
  }

}