import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Talk } from '@models/classes';

@Component({
  selector: 'gsic-talk-dialog',
  templateUrl: './talk-dialog.component.html',
  styleUrls: ['./talk-dialog.component.scss']
})
export class TalkDialogComponent implements OnInit {
  talkForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) { }

  ngOnInit() {
    this.talkForm = this.fb.group(new Talk({}));
  }

}
