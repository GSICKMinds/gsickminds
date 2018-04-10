import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { Member } from '@models/classes';

@Component({
  selector: 'gsic-member-dialog',
  templateUrl: './member-dialog.component.html',
  styleUrls: ['./member-dialog.component.scss']
})
export class MemberDialogComponent implements OnInit {
  memberForm;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) { }


  ngOnInit() {
    this.memberForm = this.fb.group(new Member({}));
  }

}
