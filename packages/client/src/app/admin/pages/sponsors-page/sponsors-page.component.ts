import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SponsorType } from '@models/classes';
import { ISponsorType } from '@models/models';
import { InfoService } from '@services/info.service';

@Component({
  selector: 'gsic-sponsors-page',
  templateUrl: './sponsors-page.component.html',
  styleUrls: ['./sponsors-page.component.scss']
})
export class SponsorsPageComponent implements OnInit {
  sponsorsForm;
  sponsorsArray = [];
  constructor(private fb: FormBuilder, private infoService: InfoService) { }

  async ngOnInit() {
    this.sponsorsArray = await this.infoService.getSponsors();
    this.sponsorsForm = this.fb.group({
      sponsors: this.fb.array(this.createItems(this.sponsorsArray))
    });
  }


  createItems(sponsors) {
    return sponsors.map(sponsor => this.fb.group(new SponsorType(sponsor)));
  }

  createItem(sponsor = {}) {
    return this.fb.group(new SponsorType(sponsor));
  }

  addItem() {
    const items = this.sponsorsForm.get('sponsors');
    this.sponsorsArray.push(new SponsorType({}));
    items.push(this.createItem());
  }

  deleteItem(index: number) {
    const control = this.sponsorsForm.get('sponsors');
    control.removeAt(index);
    this.sponsorsArray.splice(index, 1);
  }

  isTextArea(field) {
    const textareaArray = ['features'];
    return !textareaArray.includes(field);
  }

  async updateSponsors() {
    await this.infoService.updateSponsors(this.sponsorsForm.get('sponsors').value);
  }

}
