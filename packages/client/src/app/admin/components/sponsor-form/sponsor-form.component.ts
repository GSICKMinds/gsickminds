import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { Sponsor, SponsorType } from '@models/classes';
import { ISponsor } from '@models/models';

@Component({
  selector: 'gsic-sponsor-form',
  templateUrl: './sponsor-form.component.html',
  styleUrls: ['./sponsor-form.component.scss']
})
export class SponsorFormComponent implements OnInit {
  @Input() sponsor: ISponsor;
  sponsorForm;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.sponsorForm = this.fb.group(new Sponsor(this.sponsor));
  }

  updateSponsor() { }

}
