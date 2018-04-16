import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Info } from '@models/classes';
import { InfoService } from '@services/info.service';

@Component({
  selector: 'gsic-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.scss']
})
export class InfoFormComponent implements OnInit {
  @Input() info;
  infoForm;

  constructor(private fb: FormBuilder, private infoService: InfoService) { }

  ngOnInit() {
    this.infoForm = this.fb.group(new Info(this.info));
  }

  async updateInfo() {
    await this.infoService.updateInfo(this.infoForm.value);
  }
}
