import { Component, OnInit } from '@angular/core';
import { TalksService } from '@services/talks.service';
import { ActivatedRoute } from '@angular/router';
import { Talk } from '@models/classes';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TalkDialogComponent } from '../../dialogs/talk-dialog/talk-dialog.component';

@Component({
  selector: 'gsic-talks-page',
  templateUrl: './talks-page.component.html',
  styleUrls: ['./talks-page.component.scss']
})
export class TalksPageComponent implements OnInit {
  talks;

  constructor(private route: ActivatedRoute, private talksService: TalksService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getTalks();
  }

  async getTalks() {
    const id = this.route.snapshot.paramMap.get('id');
    let talksArray = await this.talksService.getAll(id);
    this.talks = talksArray.map(talk => new Talk(talk));
  }

  async addTalk() {
    const modalRef = this.modalService.open(TalkDialogComponent);
    try {
      const result = await modalRef.result;
      delete result._id;
      delete result.eventId;
      const id = this.route.snapshot.paramMap.get('id');
      await this.talksService.create(id, result);
      this.getTalks();
    } catch (e) { }
  }
}
