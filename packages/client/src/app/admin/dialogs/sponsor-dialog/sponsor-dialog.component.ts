import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Sponsor } from '@models/classes';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'gsic-sponsor-dialog',
  templateUrl: './sponsor-dialog.component.html',
  styleUrls: ['./sponsor-dialog.component.scss']
})
export class SponsorDialogComponent implements OnInit {
  sponsorForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) { }

  ngOnInit() {
    this.sponsorForm = this.fb.group(new Sponsor({}));
  }
}
