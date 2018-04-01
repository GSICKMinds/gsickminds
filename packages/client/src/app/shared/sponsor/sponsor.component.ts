import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gsic-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent {
  @Input() sponsor;
}
