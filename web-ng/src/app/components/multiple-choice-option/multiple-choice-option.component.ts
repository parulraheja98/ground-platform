import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-multiple-choice-option',
  templateUrl: './multiple-choice-option.component.html',
  styleUrls: ['./multiple-choice-option.component.css'],
})
export class MultipleChoiceOptionComponent implements OnInit {
  @Input() label: string = '';
  @Input() code: string = '';
  @Input() index: string = '';
  @Output() update = new EventEmitter();

  optionGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.optionGroup = this.formBuilder.group({
      label: [''],
      code: [''],
      index: ['', Validators.pattern('/^-?(0|[1-9]\d*)?$/')]
    });
  }

  ngOnInit(): void {
    this.optionGroup.setValue({
      label: this.label,
      code: this.code,
      index: this.index
    });
    this.optionGroup.valueChanges.subscribe(value => {
      console.log('testing val here', value);
      this.update.emit(value);
    });
  }
}
