import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ITalk } from '@models';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { AdminSpeakerDialogComponent } from '../admin-speaker-dialog/admin-speaker-dialog.component';
import { SpeakersService } from '@services/speakers.service';
import { TalksService } from '@services/talks.service';

@Component({
  selector: 'gsic-admin-talk-form',
  templateUrl: './admin-talk-form.component.html',
  styleUrls: ['./admin-talk-form.component.scss']
})
export class AdminTalkFormComponent implements OnInit {
  @Input() talk;

  talkData;
  talkForm;
  speakers;
  buttonLabel = 'Actualizar';
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private modalService: NgbModal,
    private talksService: TalksService, private speakersService: SpeakersService) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.talkData = new Talk(this.talk);
    this.talkForm = this.fb.group(this.talkData);
    this.speakers = await this.speakersService.getAll(id, this.talk._id);
  }

  onSubmit() {
    this.talksService.update(this.talk.eventId, this.talk._id, this.talkForm.value);
  }

  async addSpeaker() {
    const modalRef = this.modalService.open(AdminSpeakerDialogComponent);
    try {
      const result = await modalRef.result;
      const eventId = this.route.snapshot.paramMap.get('id');
      await this.speakersService.create(eventId, this.talk._id, result);
      this.speakers = await this.speakersService.getAll(eventId, this.talk._id);
    } catch (e) { }


  }

}

class Talk implements ITalk {
  title: string;
  duration: string;
  description: string;
  slides: string;
  eventId: string;

  constructor(talk?) {
    this.title = talk.title || '';
    this.duration = talk.duration || '';
    this.description = talk.description || '';
    this.slides = talk.slides || '';
    this.eventId = talk.eventId || '';
  }
}

