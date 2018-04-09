import { Component, OnInit } from '@angular/core';
import { InfoService } from '@services/info.service';
import { IInfo } from '@models/models';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'gsic-admin-info',
  templateUrl: './admin-info.component.html',
  styleUrls: ['./admin-info.component.scss']
})
export class AdminInfoComponent implements OnInit {
  infoData;
  infoForm;
  buttonLabel = 'Actualizar';
  infoId;

  constructor(private fb: FormBuilder, private infoService: InfoService) { }

  async ngOnInit() {
    const info = await this.infoService.getInfo();
    this.infoId = info['_id'];
    this.createForm(info);
  }

  createForm(info) {
    this.infoData = new Info(info);
    this.infoForm = this.fb.group(this.infoData);
  }

  onSubmit() {
    const info = this.infoForm.value;
    this.infoService.save(this.infoId, info);
  }
}

class Info implements IInfo {
  name: string;
  description: string;
  address: string;
  phone: string;
  twitter: string;
  telegram: string;
  mail: string;

  constructor(info) {
    this.name = info.name || '';
    this.description = info.description || '';
    this.address = info.address || '';
    this.phone = info.phone || '';
    this.twitter = info.twitter || '';
    this.telegram = info.telegram || '';
    this.mail = info.mail || '';
  }
}



