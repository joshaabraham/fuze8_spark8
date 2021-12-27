import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormQuestionComponent } from './questionControls/dynamic-form-question.component';
import { DynamicFormComponent } from './dynamic-form.component';

@NgModule({
  declarations: [DynamicFormComponent, DynamicFormQuestionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FormsModule { }
