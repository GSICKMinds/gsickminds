import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gsic-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() showBackground: boolean;
}
