import { Component, OnInit } from '@angular/core';
import { EventService } from '@services/event.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventDialogComponent } from '../../dialogs/event-dialog/event-dialog.component';

@Component({
  selector: 'gsic-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {

  events;

  constructor(private eventService: EventService, private modalService: NgbModal) { }

  async ngOnInit() {
    this.events = await this.eventService.getEvents();
  }

  async addEvent() {
    const modalRef = this.modalService.open(EventDialogComponent);
    try {
      const result = await modalRef.result;
      delete result._id;
      await this.eventService.create(result);
      this.events = await this.eventService.getEvents();
    } catch (e) { }
  }
}
