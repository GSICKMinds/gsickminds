import { Component, OnInit, Injectable } from '@angular/core';
import { EventService } from '../event.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminEventDialogComponent } from '../admin-event-dialog/admin-event-dialog.component';
import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'gsic-admin-events',
  templateUrl: './admin-events.component.html',
  styleUrls: ['./admin-events.component.scss'],

})
export class AdminEventsComponent implements OnInit {
  events;

  constructor(private eventService: EventService, private modalService: NgbModal) { }

  async ngOnInit() {
    this.events = await this.eventService.getEvents();
  }

  async addEvent() {
    const modalRef = this.modalService.open(AdminEventDialogComponent);
    try {
      const result = await modalRef.result;
      console.log(result);
      await this.eventService.create(result);
      this.events = await this.eventService.getEvents();
    } catch (e) { }

  }

}
