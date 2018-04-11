import { Component, OnInit } from '@angular/core';
import { MessageService } from '@services/message.service';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import { IAlert } from '@models/models';

@Component({
  selector: 'gsic-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  alert: IAlert;
  subscription: Subscription;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.subscription = this.messageService.getMessage()
      .do(alert => this.alert = alert)
      .debounceTime(5000)
      .subscribe(() => this.alert = null);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

