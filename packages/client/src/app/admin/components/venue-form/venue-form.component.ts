import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Venue } from '@models/classes';
import { IVenue } from '@models/models';
import { InfoService } from '@services/info.service';

@Component({
  selector: 'gsic-venue-form',
  templateUrl: './venue-form.component.html',
  styleUrls: ['./venue-form.component.scss']
})
export class VenueFormComponent implements OnInit {
  @Input() venue: IVenue;
  venueForm;

  constructor(private infoService: InfoService, private fb: FormBuilder) { }

  ngOnInit() {
    this.venueForm = this.fb.group(new Venue(this.venue || {}));
  }

  async updateVenue() {
    await this.infoService.updateVenue(this.venueForm.value);
  }

}
