import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { IEvent } from '@models';

@Component({
  selector: 'gsic-admin-event-dialog',
  templateUrl: './admin-event-dialog.component.html',
  styleUrls: ['./admin-event-dialog.component.scss']
})
export class AdminEventDialogComponent implements OnInit {
  eventData;
  eventForm;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) { }

  ngOnInit() {
    this.eventData = new Event();
    this.eventForm = this.fb.group(this.eventData);
  }
}

class Event implements IEvent {
  date: string;
  constructor() {
    this.date = '';
  }
}
