import { Component, OnInit } from '@angular/core';
import { TeamService } from '@services';

@Component({
  selector: 'gsic-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  title = 'Nuestro Equipo';
  team;

  constructor(private teamService: TeamService) { }

  async ngOnInit() {
    this.team = await this.teamService.getMembers();
  }

}
