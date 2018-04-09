import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { ISpeaker } from '@models/models';

@Component({
  selector: 'gsic-admin-speaker-dialog',
  templateUrl: './admin-speaker-dialog.component.html',
  styleUrls: ['./admin-speaker-dialog.component.scss']
})
export class AdminSpeakerDialogComponent implements OnInit {

  speakerData;
  speakerForm;
  buttonLabel = 'Añadir';
  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) { }

  ngOnInit() {
    this.speakerData = new Speaker({});
    this.speakerForm = this.fb.group(this.speakerData);
  }
}


class Speaker implements ISpeaker {
  name: string;
  position: string;
  photo: string;
  bio: string;
  talkId: string;
  twitter: string;
  linkedin: string;
  github: string;

  constructor(speaker) {
    this.name = speaker.name || '';
    this.position = speaker.position || '';
    this.photo = speaker.photo || '';
    this.bio = speaker.bio || '';
    this.talkId = speaker.talkId || '';
    this.twitter = speaker.twitter || '';
    this.linkedin = speaker.linkedin || '';
    this.github = speaker.github || '';
  }
}
