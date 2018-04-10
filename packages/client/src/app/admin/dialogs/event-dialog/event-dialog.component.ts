import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { Event } from '@models/classes';
import { DateAdapterService } from '@services/date-adapter.service';

@Component({
  selector: 'gsic-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.scss'],
  providers: [{ provide: NgbDateAdapter, useClass: DateAdapterService }]
})
export class EventDialogComponent implements OnInit {

  eventForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) { }

  ngOnInit() {
    this.eventForm = this.fb.group(new Event({}));
  }
}
