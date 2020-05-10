import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { List } from 'immutable';
import { Option } from '../../shared/models/form/option.model';
import { StringMap } from '../../shared/models/string-map.model';
import { DataStoreService } from '../../services/data-store/data-store.service';

@Component({
  selector: 'app-multiple-choice-options',
  templateUrl: './multiple-choice-options.component.html',
  styleUrls: ['./multiple-choice-options.component.css'],
})
export class MultipleChoiceOptionsComponent implements OnInit {
  optionsGroup: FormGroup;
  options = List<Option>();

  @Output() update = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private dataStoreService: DataStoreService,) {
    this.optionsGroup = this.formBuilder.group({
      options: this.formBuilder.array([this.createOptionGroup()]),
    });
  }

  ngOnInit(): void {
    this.addOption();
    console.log(this.options);
    this.optionsGroup.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  onOptionUpdate(event: any) {
    debugger;
    console.log('checkng event val here', event);
    const optionId = this.options.get(event.index)?.id;
    if (optionId) {
      this.options.set(event.index, new Option(
        optionId,
        event.code,
        StringMap({
          en: event.label
        })
      ));
      this.update.emit(this.options);
    }
  }

  addOption() {
    const optionId = this.dataStoreService.generateId();
    debugger;
    this.options = this.options.push(
      new Option(
        optionId,
        '',
        StringMap({
          en: '',
        })
      )
    );
    
  }

  testing(event: any) {
    event.preventDefault();
    console.log(this.options);
  }


  createOptionGroup() {
    return this.formBuilder.group({
      label: [''],
      code: [''],
    });
  }
}
