import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultipleChoiceOptionsComponent } from './multiple-choice-options.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MultipleChoiceOptionModule } from '../multiple-choice-option/multiple-choice-option.module';

@NgModule({
  declarations: [MultipleChoiceOptionsComponent],
  imports: [CommonModule, FlexLayoutModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatInputModule, MultipleChoiceOptionModule],
  exports: [MultipleChoiceOptionsComponent],
})
export class MultipleChoiceOptionsModule {}
