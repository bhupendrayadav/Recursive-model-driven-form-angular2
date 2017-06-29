import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MyAppCallComponent } from './my-app-call.component';
import { QuestionsFormArrayComponent } from './questions-form-array/questions-form-array.component';
import { QuestionFormControlComponent } from './question-form-control/question-form-control.component';
import { ChoiceFillingComponent } from './choice-filling/choice-filling.component';
@NgModule({    
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MyAppCallComponent, 
    QuestionsFormArrayComponent, 
    QuestionFormControlComponent, 
    ChoiceFillingComponent
  ],   
  providers: [],
  exports: [
    MyAppCallComponent
  ]
})
export class MyAppCallModule { }
