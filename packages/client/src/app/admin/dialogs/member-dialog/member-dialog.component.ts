import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Member } from '@models/classes';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
