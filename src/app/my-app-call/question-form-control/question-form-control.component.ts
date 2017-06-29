import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { ChoiceFillingComponent } from '../choice-filling/choice-filling.component';
import { QuestionService } from '../question.service';

@Component({
  selector: 'question-control',
  templateUrl: './question-form-control.component.html',
  styleUrls: ['./question-form-control.component.css']
})

export class QuestionFormControlComponent {

	@Input()
	public index: number;
  	
	@Input()
	previousIndex: number;

	@Input()
	public question: FormGroup;

 	@Input()
  	public questionsFormArray: FormArray;

	@Output()
	public removed: EventEmitter<number> = new EventEmitter<number>();  

  constructor(private questionService: QuestionService) {}

  onRemoveQuestion(arrIndex: number) {
    this.questionsFormArray.removeAt(arrIndex);
    this.removed.emit(arrIndex);
    //this.questionService.setDisableSubQuestionButton(false);
  }

  onAddChoice($event: number) {
    
    this.questionService.setIsSubQuestionVal(true);  

    let questions = this.questionsFormArray.value;
    let question = questions[$event];

    let frmGroup = this.questionsFormArray.controls[$event];
    let frmArray = (<FormGroup>frmGroup).controls.choicedesc;
    console.log(frmArray);
    if(question.choice) {

      // Below should be done through iterating over (<FormArray>frmArray).value 
      (<FormArray>frmArray).removeAt(4);
      (<FormArray>frmArray).removeAt(3);
      (<FormArray>frmArray).removeAt(2);
      (<FormArray>frmArray).removeAt(1);
      (<FormArray>frmArray).removeAt(0);
        
      switch(question.choice) {
        case 'single-choice': 
          // Add 3 text box with having sub-question in front of each
          for(let i = 0; i < 3; i++) {
            (<FormArray>frmArray).push(ChoiceFillingComponent.buildChoiceFilling());
          }
          break;
        case 'multi-choice' :
          for(let i = 0; i < 5; i++) {
            (<FormArray>frmArray).push(ChoiceFillingComponent.buildChoiceFilling());
          }
          break;
        case 'multi-line-text':
          // Add a textarea, no sub-question 
          this.questionService.setIsSubQuestionVal(false);  
          (<FormArray>frmArray).push(ChoiceFillingComponent.buildChoiceFilling());
          break;
      }
    }
  }

	static buildQuestion(val: string) {
		return new FormGroup({
		  txt_quest: new FormControl(val, Validators.required),
		  choice: new FormControl(),
		  choicedesc: new FormArray([])
		})
	}

}
