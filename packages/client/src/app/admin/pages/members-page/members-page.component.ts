import { Component, OnInit } from '@angular/core';
import { Member } from '@models/classes';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TeamService } from '@services/team.service';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';
import { MemberDialogComponent } from '../../dialogs/member-dialog/member-dialog.component';

@Component({
  selector: 'gsic-members-page',
  templateUrl: './members-page.component.html',
  styleUrls: ['./members-page.component.scss']
})
export class MembersPageComponent implements OnInit {
  members;

  constructor(private teamService: TeamService, private modalService: NgbModal) { }

  async ngOnInit() {
    this.getMembers();
  }

  async getMembers() {
    const membersArray = await this.teamService.getMembers();
    this.members = membersArray.map(member => {
      delete member.social;
      return member;
    });
  }

  async addMember() {
    const modalRef = this.modalService.open(MemberDialogComponent);
    try {
      const result = await modalRef.result;
      await this.teamService.create(result);
      this.getMembers();
    } catch (e) { }
  }

  async deleteMember(memberId) {
    const modalRef = this.modalService.open(ConfirmDialogComponent);
    try {
      const result = await modalRef.result;

      if (result) {
        await this.teamService.delete(memberId);
        this.getMembers();
      }
    } catch (e) { }
  }

}
