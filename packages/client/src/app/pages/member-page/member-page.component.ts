import { Component, OnInit } from '@angular/core';
import { TeamService } from '@services/team.service';

@Component({
  selector: 'gsic-member-page',
  templateUrl: './member-page.component.html',
  styleUrls: ['./member-page.component.scss']
})
export class MemberPageComponent implements OnInit {

  title = 'Nuestro Equipo';
  members;

  constructor(private teamService: TeamService) { }

  async ngOnInit() {
    this.members = await this.teamService.getMembers();
  }

}
