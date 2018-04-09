import { Component, OnInit, Input } from '@angular/core';
import { IMember } from '@models/models';
import { FormBuilder } from '@angular/forms';
import { TeamService } from '@services/team.service';

@Component({
  selector: 'gsic-admin-team-form',
  templateUrl: './admin-team-form.component.html',
  styleUrls: ['./admin-team-form.component.scss']
})
export class AdminTeamFormComponent implements OnInit {
  @Input() member;
  @Input() buttonLabel = 'Actualizar';
  memberData;
  memberForm;

  constructor(private fb: FormBuilder, private teamService: TeamService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.memberData = new Member(this.member);
    this.memberForm = this.fb.group(this.memberData);
  }
  onSubmit() {
    this.teamService.save(this.member._id, this.memberForm.value);
  }
}

class Member implements IMember {
  name: string;
  position: string;
  photo: string;
  twitter: string;
  linkedin: string;
  github: string;

  constructor(member) {
    this.name = member.name || '';
    this.position = member.position || '';
    this.photo = member.photo || '';
    this.twitter = member.twitter || '';
    this.linkedin = member.linkedin || '';
    this.github = member.github || '';
  }
}
