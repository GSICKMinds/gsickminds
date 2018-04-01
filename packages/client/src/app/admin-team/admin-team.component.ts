import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { IMember } from '../../models';

@Component({
  selector: 'gsic-admin-team',
  templateUrl: './admin-team.component.html',
  styleUrls: ['./admin-team.component.scss']
})
export class AdminTeamComponent implements OnInit {

  members = [];

  constructor(private teamService: TeamService) { }

  async ngOnInit() {
    this.members = await this.teamService.getMembers();
  }


}

