import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SpeakersService } from '@services/speakers.service';
import { ITalk } from '@models/models';
import { Speaker } from '@models/classes';
import { TalksService } from '@services/talks.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SpeakerDialogComponent } from '../../dialogs/speaker-dialog/speaker-dialog.component';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'gsic-talk-form',
  templateUrl: './talk-form.component.html',
  styleUrls: ['./talk-form.component.scss']
})
export class TalkFormComponent implements OnInit {
  @Input() talk: ITalk;
  @Output() remove = new EventEmitter();
  talkForm;
  speakers;

  constructor(
    private fb: FormBuilder,
    private talksService: TalksService,
    private speakersService: SpeakersService,
    private modalService: NgbModal,
    private route: ActivatedRoute) { }


  ngOnInit() {
    this.talkForm = this.fb.group(this.talk);
    this.getSpeakers();
  }

  isTextArea(field) {
    const textareaArray = ['bio', 'description'];
    return !textareaArray.includes(field);
  }

  async getSpeakers() {
    let speakersArray = await this.speakersService.getAll(this.talk.eventId, this.talk._id);
    this.speakers = speakersArray.map(speaker => new Speaker(speaker));
  }

  updateTalk() {
    this.talksService.update(this.talk.eventId, this.talk._id, this.talkForm.value);
  }

  async addSpeaker() {
    const modalRef = this.modalService.open(SpeakerDialogComponent);
    try {
      const result = await modalRef.result;

      delete result._id;
      delete result.talkId;
      await this.speakersService.create(this.talk.eventId, this.talk._id, result);
      this.getSpeakers();

    } catch (e) { }
  }
}
