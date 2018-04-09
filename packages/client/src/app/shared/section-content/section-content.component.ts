import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gsic-section-content',
  templateUrl: './section-content.component.html',
  styleUrls: ['./section-content.component.scss']
})
export class SectionContentComponent implements OnInit {
  @Input() backgroundColor: boolean;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
