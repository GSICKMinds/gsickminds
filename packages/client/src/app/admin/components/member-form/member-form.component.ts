import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TeamService } from '@services/team.service';
import { IMember } from '@models/models';

@Component({
  selector: 'gsic-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent implements OnInit {
  @Input() member;
  @Output() remove = new EventEmitter();

  memberForm;

  constructor(private fb: FormBuilder, private teamService: TeamService) { }

  ngOnInit() {
    this.memberForm = this.fb.group(this.member);
  }

  async updateMember() {
    await this.teamService.update(this.member._id, this.memberForm.value);
  }
}
