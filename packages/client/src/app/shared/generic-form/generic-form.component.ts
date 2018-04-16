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

  switchField(field) {
    const textareaArray = ['bio', 'map', 'description', 'talk', 'info', 'sponsor', 'help'];
    const checkboxArray = ['active'];
    if (textareaArray.includes(field)) { return 'textarea'; }
    if (checkboxArray.includes(field)) { return 'checkbox'; }
  }

}
