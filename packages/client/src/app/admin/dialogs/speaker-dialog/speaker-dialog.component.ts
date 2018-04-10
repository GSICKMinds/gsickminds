import { Component, OnInit } from '@angular/core';
import { Speaker } from '@models/classes';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'gsic-speaker-dialog',
  templateUrl: './speaker-dialog.component.html',
  styleUrls: ['./speaker-dialog.component.scss']
})
export class SpeakerDialogComponent implements OnInit {
  speakerForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) { }

  ngOnInit() {
    this.speakerForm = this.fb.group(new Speaker({}));
  }

}
