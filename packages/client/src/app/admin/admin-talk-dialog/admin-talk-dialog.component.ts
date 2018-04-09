import { Component, OnInit, ComponentRef } from '@angular/core';
import { IModalDialog, IModalDialogOptions, IModalDialogButton } from 'ngx-modal-dialog';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { ITalk } from '@models';

@Component({
  selector: 'gsic-admin-talk-dialog',
  templateUrl: './admin-talk-dialog.component.html',
  styleUrls: ['./admin-talk-dialog.component.scss']
})
export class AdminTalkDialogComponent implements OnInit {
  talkData;
  talkForm;
  buttonLabel = 'Añadir';
  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) { }

  ngOnInit() {
    this.talkData = new Talk({});
    this.talkForm = this.fb.group(this.talkData);
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
