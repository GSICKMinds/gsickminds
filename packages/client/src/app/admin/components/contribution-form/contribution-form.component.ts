import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Contribution } from '@models/classes';
import { IContribution } from '@models/models';
import { InfoService } from '@services/info.service';
import { InfoFormComponent } from '../info-form/info-form.component';

@Component({
  selector: 'gsic-contribution-form',
  templateUrl: './contribution-form.component.html',
  styleUrls: ['./contribution-form.component.scss']
})
export class ContributionFormComponent implements OnInit {
  @Input() contribution: IContribution;
  contributionForm;

  constructor(private infoService: InfoService, private fb: FormBuilder) { }

  ngOnInit() {
    this.contributionForm = this.fb.group(new Contribution(this.contribution || {}));
  }

  async updateContribution() {
    await this.infoService.updateContribution(this.contributionForm.value);
  }

}
