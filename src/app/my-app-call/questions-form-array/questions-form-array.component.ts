import { Component, Input } from '@angular/core';
import { AbstractControl, FormArray } from '@angular/forms';

import { QuestionFormControlComponent } from '../question-form-control/question-form-control.component';
import { ChoiceFillingComponent } from '../choice-filling/choice-filling.component';

@Component({
  selector: 'questions-array',
  templateUrl: './questions-form-array.component.html',
  styleUrls: ['./questions-form-array.component.css']
})

export class QuestionsFormArrayComponent {
  
  @Input()
  public questionsFormArray: FormArray;

  addQuestion() {
    console.log("called from Parent Component");
    this.questionsFormArray.push(QuestionFormControlComponent.buildQuestion(''));    
    // FormArray>>controls ArrayOfFormGroups>> controls Object >> choicedesc FormArray
    return this.questionsFormArray;
  }    

  static buildQuestions() {
    return new FormArray([]);
  }

}