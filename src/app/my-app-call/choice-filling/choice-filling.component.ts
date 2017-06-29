import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core'
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionFormControlComponent } from '../question-form-control/question-form-control.component';
import { QuestionService } from '../question.service';

@Component({
  selector: 'choice-filling',
  templateUrl: './choice-filling.component.html',
  styleUrls: ['./choice-filling.component.css']
})
export class ChoiceFillingComponent implements OnInit {
	buttonDisable = false;
	subquestion: boolean;
	choiceFormArr : FormArray;

	@Input()
	public index: number;

	@Input()
	public choices: FormGroup;

	@Input()
	public previousIndex: number;

	constructor(private questionService: QuestionService) {}

	ngOnInit(){
	    this.subquestion = this.questionService.getIsSubQuestionVal();
	    this.buttonDisable = this.questionService.getDisableSubQuestionButton();
	    // choiceFormArr Represent the questionFormArray in choicefilling component.	    
		this.choiceFormArr = (<FormArray>(<FormGroup>this.choices).controls.questions);
	}

	get isSubQuestion() {
		return this.subquestion;
	}

	onRemoved($event: number){
		this.buttonDisable = false;
	}	

	addSubQuestion($event: object) {
      //console.log($event, "  addSubQuestion  Triggered", this.choices);
      let questionArr = (<FormGroup>this.choices).controls.questions;
      (<FormArray>questionArr).push(QuestionFormControlComponent.buildQuestion(''));
      this.buttonDisable = true;
    }

	static buildChoiceFilling() {
		return new FormGroup({
		  choice_reason: new FormControl(),
		  questions: new FormArray([])
		})
	}
}
