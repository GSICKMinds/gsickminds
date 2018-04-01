import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TalksService } from '../talks.service';
import { ITalk } from '../../models';
import { ModalDialogService } from 'ngx-modal-dialog';
import { AdminTalkDialogComponent } from '../admin-talk-dialog/admin-talk-dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'gsic-admin-talk',
  templateUrl: './admin-talk.component.html',
  styleUrls: ['./admin-talk.component.scss']
})
export class AdminTalkComponent implements OnInit {
  talks;
  speakers;

  constructor(private route: ActivatedRoute, private talksService: TalksService,
    private modalService: NgbModal
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.talks = await this.talksService.getAll(id);
  }

  async addTalk() {
    const modalRef = this.modalService.open(AdminTalkDialogComponent);
    try {
      const result = await modalRef.result;
      const id = this.route.snapshot.paramMap.get('id');
      await this.talksService.create(id, result);
      this.talks = await this.talksService.getAll(id);
    } catch (e) { }
  }
}

