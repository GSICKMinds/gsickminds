import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../info.service';

@Component({
  selector: 'gsic-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = 'Contacto';
  info;

  constructor(private infoService: InfoService) { }

  async ngOnInit() {
    this.info = await this.infoService.getInfo();
  }
}
