import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  @Input() name: string;
  @Input() placeholder: string;
  @Input() label: string;
  @Input() control;
  @Input() type;
  @Input() value = '';
  @Output('onChange') change: EventEmitter<any> = new EventEmitter<any>();

  isFocused = false;
  constructor() { }

  ngOnInit() {
  }

  onFocusIn() {
    this.isFocused = true;
  }

  onFocusOut() {
    this.isFocused = false;
  }

  onChange(value) {
    this.value = value;
    this.change.emit(value);
  }

}
