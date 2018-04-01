import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gsic-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  @Input() title: string;
}
