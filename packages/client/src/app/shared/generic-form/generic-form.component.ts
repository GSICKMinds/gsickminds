import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'gsic-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss']
})
export class GenericFormComponent implements OnInit {
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  isTextArea(field) {
    const textareaArray = ['bio', 'map', 'description', 'talk', 'info', 'sponsor', 'help'];
    return !textareaArray.includes(field);
  }
}
