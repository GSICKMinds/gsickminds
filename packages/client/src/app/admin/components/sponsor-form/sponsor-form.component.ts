import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { Sponsor, SponsorType } from '@models/classes';
import { ISponsor } from '@models/models';
import { SponsorsService } from '@services/sponsors.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'gsic-sponsor-form',
  templateUrl: './sponsor-form.component.html',
  styleUrls: ['./sponsor-form.component.scss']
})
export class SponsorFormComponent implements OnInit {
  @Input() sponsor: ISponsor;
  @Output() delete = new EventEmitter();

  sponsorForm;

  constructor(private route: ActivatedRoute, private sponsorsService: SponsorsService, private fb: FormBuilder) { }

  ngOnInit() {
    this.sponsorForm = this.fb.group(new Sponsor(this.sponsor));
  }

  async updateSponsor() {
    const eventId = this.route.snapshot.paramMap.get('id');
    await this.sponsorsService.update(eventId, this.sponsor._id, this.sponsorForm.value);
  }

}
