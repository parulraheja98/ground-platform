import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultipleChoiceOptionComponent } from './multiple-choice-option.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MultipleChoiceOptionComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports: [MultipleChoiceOptionComponent],
})
export class MultipleChoiceOptionModule {}
